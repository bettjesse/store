import { Menu } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import Link from "next/link"


const UserMobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu/>
        </SheetTrigger>
        <SheetContent>
            <SheetTitle>
                <span>Welcome to Petsmart</span>
                </SheetTitle>
                <Separator/>
                <SheetDescription className="flex">
                  <div className=" flex flex-col gap-3 mt-3">
                    <Link href = "/">
                    <h1>Home</h1>
                    </Link>
                
                <Link href = "/products">
                <h1>Products</h1>
                </Link>
                    
                  </div>
                   

                </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default UserMobileNav