"use client"
import Link from "next/link"
import { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"



const NavLink = (props: Omit <ComponentProps<typeof Link>, "className">) => {

    const Pathname= usePathname()
  return (
   <Link{... props} className= {cn("p-4 hover:bg-blue-400 hover:text-blue-100", Pathname=== props.href && "bg-white text-gray-100")}/>
  )
}

export default NavLink