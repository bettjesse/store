import { Button } from "@/components/ui/button"
import PageHeader from "../_components/PageHeader"
import Link from "next/link"
import ProductsTable from "./_components/ProductsTable"

const AdminProductsPage= () => {
  return (
    <>
    <div className=" flex justify-between gap-4">
 <PageHeader>Products</PageHeader>
 <Link href = "admin/products/new">
 <Button>
Add product
 </Button>
 </Link>
    </div>
<ProductsTable/>
    </>
  )
}

export default AdminProductsPage