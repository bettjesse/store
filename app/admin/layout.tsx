import NavLink from "@/components/NavLink";
import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <Navbar >
        <NavLink href= "/admin"> Dahboard</NavLink>
        <NavLink href= "admin/products"> Products</NavLink>
        {/* <NavLink href= "admin/customers"> Customers</NavLink>
        <NavLink href= "admin/products"> Sales</NavLink> */}
      </Navbar>
      <div className="flex flex-col h-screen">
    <div className="flex-grow">{children}</div>
  </div>
      </>
    );
  }
  