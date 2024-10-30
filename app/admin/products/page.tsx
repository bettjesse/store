import { Button } from "@/components/ui/button";
import PageHeader from "../_components/PageHeader";
import ProductsTable from "./_components/ProductsTable";
import { formatPrice } from "@/app/utils/format";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { db } from "@/lib/db";
import { CheckCircle2, MoreVertical, XCircle } from "lucide-react";
import Link from "next/link";
import { ActiveToggleDropdownItem, DeleteDropdownItem } from "./_components/ProductAction";

const AdminProductsPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-4 justify-between items-start md:items-center gap-4">
        <PageHeader>Products</PageHeader>
        <Link href="/admin/products/new">
          <Button className="mt-2 md:mt-0">Add Product</Button>
        </Link>
      </div>
      <ProductsTable />
    </>
  );
};

export default AdminProductsPage;
