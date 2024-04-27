"use client"
import { useForm } from "react-hook-form";
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addProduct, updateProduct } from "../../_actions/product";
import { useFormState, useFormStatus } from "react-dom";
import { TriangleAlertIcon } from "lucide-react";
import Image from "next/image";

import { useTransition , useState   } from "react"
import FormError from "./FormError";
import FormSucess from "./FormSucess";
import { Product } from "@prisma/client";
const NewProductForm = ( { product }: { product?: Product | null }) => {

  const { pending } = useFormStatus()
// const [error, setError ]= useState<string  | undefined>("")
const [success, setSuccess ]= useState<string  | undefined>("")

   const [error, action] = useFormState (product == null ? addProduct : updateProduct.bind(null, product.id), {})

    // const form = useForm <z.infer <typeof addSchema>>({
    //     defaultValues:{
    //         name: "",
    //         description: "",
    //         price :  0,
    //         image : undefined,
    //         file : undefined

    //     }
    const form = useForm()
    // })
 
    // const onSubmit = async (values:any) => {
    //   setError("");
    //   setSuccess("");
    
    //   try {
    //      startTransition(async () => {
    //       const data = await addProduct(values);
    //       setError(data.error);
          
    //       setSuccess(data.success);
    //       console.log("ERROR"  ,data.)
    //       console.log("SUCCESS"  ,data.error)
    //     });
    //   } catch (error) {
    //     // Handle errors here
    //     console.error("An error occurred:", error);
    //   }
    // };
    const { isSubmitting, isValid } = form.formState;

  
  return <div>
  
  <Form {...form}>
  <form action={action}>
  <div className="max-w-lg mx-auto">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <FormField
    control={form.control}
    name="name"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input
            {...field}
            placeholder="Name"
            defaultValue={product?.name || ""}
            disabled={isSubmitting}
  
          />
        </FormControl>
        <FormMessage>
          {error.name && (
            <div className="bg-red-100 text-red-500 p-2 rounded-md flex items-center gap-x-2">
              <TriangleAlertIcon className="w-4 h-4" />
              <p>{error.name}</p>
            </div>
          )}
        </FormMessage>
      </FormItem>
    )}
  />
    <FormField
    control={form.control}
    name="category"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Category</FormLabel>
        <FormControl>
          <Input
            {...field}
            placeholder="Category"
            defaultValue={product?.category || ""}
            disabled={isSubmitting}
       
          />
        </FormControl>
        <FormMessage>
          {error.category && (
            <div className="bg-red-100 text-red-500 p-2 rounded-md flex items-center gap-x-2">
              <TriangleAlertIcon className="w-4 h-4" />
              <p>{error.category}</p>
            </div>
          )}
        </FormMessage>
      </FormItem>
    )}
  />
             <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                    <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      disabled={isSubmitting}
                      placeholder="Price"
                      defaultValue={product?.price || ""}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                  {error.price && (
                  
                  <div className=" bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive ">
                      <TriangleAlertIcon className="w-4 h-4"/>
                      <p>{error.price}</p>
                  
                  </div>
              )}
                  </FormMessage>
                </FormItem>
              )}
              />
             <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                    <FormLabel>description</FormLabel>
                  <FormControl>
                    <Textarea
                 
                     
                      disabled={isSubmitting}
                      placeholder="description"
                      defaultValue={product?.description || ""}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                  {error.description && (
                  
                  <div className=" bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive ">
                      <TriangleAlertIcon className="w-4 h-4"/>
                      <p>{error.description}</p>
                  
                  </div>
              )}
                  </FormMessage>
                </FormItem>
              )}
              />
             <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                    <FormLabel> File</FormLabel>
                  <FormControl>
                    <div>

                 
                    <Input
                       type="file"
                     
                      disabled={isSubmitting}
                      required= {product == null}
                   
                      {...field}
                    />
                    {product != null && (
          <div className="text-muted-foreground">{product.filePath}</div>
        )}
                     </div>
           
                  </FormControl>
                  <FormMessage>
                  {error.file && (
                  
                  <div className=" bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive ">
                      <TriangleAlertIcon className="w-4 h-4"/>
                      <p>{error.file}</p>
                  
                  </div>
              )}
                  </FormMessage>
                 

                </FormItem>
                       
              )}
              />
             <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                    <FormLabel> Image</FormLabel>
                  <FormControl>
                    <div>

                    
                    <Input
                       type="file"
                     
                      disabled={isSubmitting}
                     
                      required= {product == null}
                      {...field}
                    />
                     {product != null && (
          <Image
            src={product.imagePath}
            height="400"
            width="400"
            alt="Product Image"
          />
        )}
        </div>
                  </FormControl>
                  <FormMessage>
                  {error.image && (
                  
                  <div className=" bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive ">
                      <TriangleAlertIcon className="w-4 h-4"/>
                      <p>{error.image}</p>
                  
                  </div>
              )}
                  </FormMessage>
                </FormItem>
              )}
              />
              <div className=" mt-2 w-full">

          
              <Button
className=""
type="submit"

>
{pending ? "Saving..." : "Save"}
  </Button>
  </div>
      </div>
      
      </div>
       {/* <FormError error= {error}/> */}
          {/* <FormSucess message= {success}/>  */}


    </form>
  </Form>
  </div>;
};

export default NewProductForm;
