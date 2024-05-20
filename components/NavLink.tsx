"use client"
import Link from "next/link"
import { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"



const NavLink = (props: Omit <ComponentProps<typeof Link>, "className">) => {

    const Pathname= usePathname()
  return (
    <div className=" flex justify-between">

{/* <h1>PetSmart</h1> */}
   <Link{... props} className= {cn("p-3  hover:text-blue-300", Pathname=== props.href && "bg-white text-blue-600 underline ")}/>
   </div>
  )
}

export default NavLink