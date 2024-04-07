import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";




const ProductsTable = () => {
  return (
   <Table>
    <TableHeader>
        <TableRow>
            <TableHead className="w-0">
                <span className=" sr-only"> Available for purchase</span>
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Orders</TableHead>
            <TableHead className="w-0">
                <span className=" sr-only"> Actions</span>
            </TableHead>
        </TableRow>
    </TableHeader>
   </Table>
  )
}

export default ProductsTable