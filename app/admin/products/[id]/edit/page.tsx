import PageHeader from "@/app/admin/_components/PageHeader"
import { NewProductForm } from "../../_components/NewProductForm"
import { db } from "@/lib/db"

export default async function EditProductPage({
    params: { id },
  }: {
    params: { id: string }
  }) {
    const product = await db.product.findUnique({ where: { id } })
  
    return (
      <>
        <PageHeader>Edit Product</PageHeader>
        <NewProductForm product={product} />
      </>
    )
  }