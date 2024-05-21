import NavLink from "@/components/NavLink";
import Navbar from "@/components/Navbar";
import UserMobileNav from "@/components/UserMobileNav";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      

    

   <div className="">
      <Navbar >
      <div className=" hidden md:flex">
        <NavLink href= "/"> Home</NavLink>
        <NavLink href= "/products"> Products</NavLink>
        {/* <NavLink href= "/orders"> Orders</NavLink> */}
        </div>
        <div className=" md:hidden">
          <UserMobileNav/>

        </div>
      </Navbar>
      </div>
      
     <div className=" h-full ">

  
      <div className=" h-screen  "> {children}</div>
      {/* <div className=" w-full mt-3 h-[80px]  bg-blue-400 flex flex-col items-center justify-center">
         <h1 className=" text-center font-bold text-3xl">Pet training</h1>
         <p>2024</p>
      </div> */}
      </div>
      </>
    );
  }
  