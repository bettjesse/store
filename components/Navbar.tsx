import Link from "next/link"


interface NavbarProps {
    children : React.ReactNode
}

const Navbar = ({children}:NavbarProps) => {
  return (
    <div className="   flex justify-between items-center shadow-md px-4">
      <Link href= "/">
      <h1 className=" text-xl text-blue-400">PetSmart</h1>
      </Link>
      

     
     <div className=" flex justify-between items-center">
     {children}
     </div>
      
 
      </div>

  )
}

export default Navbar