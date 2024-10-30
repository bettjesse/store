
import { formatCurrency } from "@/lib/formatter";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/lib/db";
import { CheckCircle2, MoreVertical, XCircle } from "lucide-react";
import Link from "next/link";
import { ActiveToggleDropdownItem, DeleteDropdownItem } from "./ProductAction";


const ProductsTable = async () => {
  const products = await db.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      isAvailable: true,
      _count: { select: { order: true } },
    },
    orderBy: { name: "asc" },
  });
  if (products.length === 0) return <p>No products Found</p>;
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
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              {product.isAvailable ? (
                <>
                  <span className=" sr-only"> Available</span>
                  <CheckCircle2 />
                </>
              ) : (
                <>
                  <span className=" sr-only"> Unavailable</span>
                  <XCircle className="stroke-destructive" />
                </>
              )}
            </TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{formatCurrency(product.price) }</TableCell>
            <TableCell>{product._count.order}</TableCell>
            <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                    <MoreVertical/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <a download href= {`/admin/products/${product.id}/download`}>Download</a>
                        </DropdownMenuItem>
                       
                        <DropdownMenuItem asChild>
                        <Link href={`/admin/products/${product.id}/edit`}>
                      Edit
                    </Link>
                        </DropdownMenuItem>
                         <ActiveToggleDropdownItem id ={product.id} isAvailable={product.isAvailable}/>
                         <DropdownMenuSeparator/>
                         <DeleteDropdownItem id={product.id} disabled ={product._count.order > 0}/>
                    </DropdownMenuContent>
                    
                </DropdownMenu>
                
                </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
