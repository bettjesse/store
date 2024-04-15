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
import { addProduct } from "../../_actions/product";
import { useFormState, useFormStatus } from "react-dom";
import { TriangleAlertIcon } from "lucide-react";


import { useTransition , useState   } from "react"
import FormError from "./FormError";
import FormSucess from "./FormSucess";
const NewProductForm = () => {

  const { pending } = useFormStatus()
// const [error, setError ]= useState<string  | undefined>("")
const [success, setSuccess ]= useState<string  | undefined>("")

   const [error, action] = useFormState (addProduct, {})

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
    <div className=" space-y-4">
    <FormField
            control={form.control}
            name ="name"
            render= {({field})=> (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder="Name"
                  
                  // disabled= {isSubmitting}
                  
                  />
                </FormControl>
                <FormMessage>
                  {error.name && (
                  
                      <div className=" bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive ">
                          <TriangleAlertIcon className="w-4 h-4"/>
                          <p>{error.name}</p>
                      
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
                      placeholder="Set a price for your course"
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
                    <Input
                       type="file"
                     
                      disabled={isSubmitting}
                   
                      {...field}
                    />
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
                    <Input
                       type="file"
                     
                      disabled={isSubmitting}
                      placeholder="description"
                      {...field}
                    />
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
      </div>
       {/* <FormError error= {error}/> */}
          {/* <FormSucess message= {success}/>  */}
<Button
className=""
type="submit"

>
{pending ? "Saving..." : "Save"}
  </Button>

    </form>
  </Form>
  </div>;
};

export default NewProductForm;
