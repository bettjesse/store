// "use server"
// import * as z from "zod";
// import { db } from "@/lib/db";
// import fs from "fs/promises"
// import { redirect } from "next/navigation";

// const fileSchema = z.instanceof( File, {message: "required"})
// const imageSchema = fileSchema.refine(file => file.size === 0 || file.type.startsWith("image/"))
// const formSchema = z.object({
//   name: z.string().min(1, {
//     message: "name is required",
//   }),
//   description: z.string().min(4, {
//     message: "Descriptionis required",
//   }),
//   price: z.coerce.number().min(1),
//   image: imageSchema.refine( file => file.size > 0 , "required"),
//   file:  fileSchema.refine( file => file.size > 0 , "required"),
// });

// export const addProduct = async(formData : FormData)=> {
//    const response = formSchema.safeParse(Object.fromEntries(formData.entries()))

//    if (response.success === false) {
//     return response.error.formErrors.fieldErrors
//    }
   
//    const data = response.data
//    await fs.mkdir("products", {recursive: true})
//    const filePath= ` products/${crypto.randomUUID()}-${data.file.name}`
//    await fs.writeFile( filePath, Buffer.from( await data.file.arrayBuffer()))

//    await fs.mkdir("products", {recursive: true})
//    const imagePath= ` /public/products/${crypto.randomUUID()}-${data.image.name}`
//    await fs.writeFile( `public${imagePath}`, Buffer.from( await data.image.arrayBuffer()))


//    await db.product.create({
//     data :{
//         name: data.name,
//         description: data.description,
//         price: data.price,
//         imagePath,
//         filePath
//     }
//    }
//    )
//    redirect("/admin/products")
   

// }

"use server"

import { db } from "@/lib/db"
import { z } from "zod"
import fs from "fs/promises"
import { notFound, redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

  const fileSchema = z.instanceof(File, { message: "Required" })
 const imageSchema = fileSchema.refine(
  file => file.size === 0 || file.type.startsWith("image/")
)

  const addSchema = z.object({
  name: z.string().min(1 , {
    message: "Name is required",
  }),
  description: z.string().min(1 , {
    message: "Description is required",
  }),
  price: z.coerce.number().min(1),
  file: fileSchema.refine((file) => file.size > 0, "Required"),
  image: imageSchema.refine((file) => file.size > 0, "Required"),
})

export async function addProduct( prevState:unknown, formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
  if(result.success ===  false) {
    return result.error.formErrors.fieldErrors
  }
console.log(formData)
  const data = result.data

  await fs.mkdir("products", { recursive: true })
  const filePath = `products/${crypto.randomUUID()}-${data.file.name}`
  await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()))

  await fs.mkdir("public/products", { recursive: true })
  const imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await data.image.arrayBuffer())
  )

  await db.product.create({
    data: {
    
      name: data.name,
      description: data.description,
      price: data.price,
      filePath,
      imagePath,
      isAvailable: false
    },
  })
  // return {success : "Product created"}

  // revalidatePath("/")
  // revalidatePath("/products")

  redirect("/admin/products")
}