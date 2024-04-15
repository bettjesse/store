import { formatPrice } from "@/app/utils/format";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
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

const ProductsTable = async () => {
  const products = await db.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      isAvailable: true,
      _count: { select: { orders: true } },
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
                  <XCircle />
                </>
              )}
            </TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{formatPrice(product.price) }</TableCell>
            <TableCell>{product._count.orders}</TableCell>
            <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                    <MoreVertical/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <a download href= {`/admin/products/${product.id}/download`}>Download</a>
                        </DropdownMenuItem>
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
