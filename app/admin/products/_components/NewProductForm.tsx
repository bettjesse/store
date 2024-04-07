import { useForm } from "react-hook-form";
import * as z from "zod";
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

const formSchema = z.object({
  name: z.string().min(1, {
    message: "name is required",
  }),
  price: z.coerce.number(),
  image: z.string().optional(),
  file: z.string().optional(),
});

const NewProductForm = () => {

    const form = useForm <z.infer <typeof formSchema>>({
        defaultValues:{
            name: "",
            price :  0,
            image : "",
            file : ""

        }
    })
  return <div>NewProductForm</div>;
};

export default NewProductForm;
