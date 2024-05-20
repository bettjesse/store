import { Menu } from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"


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
                    <h1>Home</h1>
                    <h1>Home</h1>

                </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default UserMobileNav