import NavLink from "@/components/NavLink";
import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      

    
      <Navbar>
        <NavLink href= "/"> Home</NavLink>
        <NavLink href= "/products"> Products</NavLink>
        <NavLink href= "/orders"> Orders</NavLink>
      
      </Navbar>
     <div className=" h-full ">

  
      <div className=" h-screen flex  justify-center p-4 "> {children}</div>
      <div className=" w-full mt-3 h-[80px]  bg-blue-400 flex flex-col items-center justify-center">
         <h1 className=" text-center font-bold text-3xl">Pet training</h1>
         <p>2024</p>
      </div>
      </div>
      </>
    );
  }
  