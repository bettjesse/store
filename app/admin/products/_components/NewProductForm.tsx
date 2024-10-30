

"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Textarea } from "@/components/ui/textarea"
import { formatCurrency } from "@/lib/formatter"
import { useState } from "react"
import { addProduct, updateProduct } from "../../_actions/product"
import { useFormState, useFormStatus } from "react-dom"
import { Product } from "@prisma/client"
import Image from "next/image"

export function NewProductForm({ product }: { product?: Product | null }) {
  const [error, action] = useFormState(
    product == null ? addProduct : updateProduct.bind(null, product.id),
    {}
  )
  const [price, setPrice] = useState<number | undefined>(
    product?.price
  )

  return (
    <form action={action} className="space-y-8 p-6 max-w-lg mx-auto bg-gray-50 rounded-lg">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={product?.name || ""}
          className="w-full"
        />
          {error.name && <div className="text-destructive">{error.name}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Price </Label>
        <Input
          type="number"
          id="price"
          name="price"
          required
          value={price}
          onChange={e => setPrice(Number(e.target.value) || undefined)}
          className="w-full"
        />
       {error.price && (
          <div className="text-destructive">{error.price}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Textarea
          id="category"
          name="category"
          required
          defaultValue={product?.category}
          className="w-full"
        />
        {error.category && (
          <div className="text-destructive">{error.category}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          required
          defaultValue={product?.description}
          className="w-full"
        />
        {error.description && (
          <div className="text-destructive">{error.description}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input
          type="file"
          id="file"
          name="file"
          required={product == null}
          className="w-full"
        />
        {product != null && (
          <div className="text-muted-foreground">{product.filePath}</div>
        )}
         {error.file && <div className="text-destructive">{error.file}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input
          type="file"
          id="image"
          name="image"
          required={product == null}
          className="w-full"
        />
        {product != null && (
          <div className="flex justify-center">
            <Image
              src={product.imagePath}
              height={400}
              width={400}
              alt="Product Image"
              className="max-w-full h-auto"
            />
          </div>
        )}
              {error.image && <div className="text-destructive">{error.image}</div>}
      </div>
      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Saving..." : "Save"}
    </Button>
  )
}
