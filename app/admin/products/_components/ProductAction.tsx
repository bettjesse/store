"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useTransition } from "react"
import { AvailabilityToggle, deleteProduct } from "../../_actions/product"
import { useRouter } from "next/navigation"

// interface   ActiveToggleDropdownItemProps {
//     isAvailable : boolean,
//     id : string
// }
// interface DeleteDropdownItemProps {
// id: string,
// disabled?: boolean,
// }



export function ActiveToggleDropdownItem({
    id,
    isAvailable,
  }: {
    id: string
    isAvailable: boolean
  }) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    
 
    return (
      <DropdownMenuItem
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            await AvailabilityToggle(id, !isAvailable)
            router.refresh()
         
          })
        }}
      >
        {isAvailable ? "Deactivate" : "Activate"}
      </DropdownMenuItem>
    )
  }
  
  export function DeleteDropdownItem({
    id,
    disabled,
  }: {
    id: string
    disabled ?: boolean
  }) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
   
    return (
      <DropdownMenuItem
      className="bg-red-300 hover:bg-red-600"
        // variant="destructive"
        disabled={disabled || isPending}
        onClick={() => {
          startTransition(async () => {
            await deleteProduct(id)
            router.refresh()
          
          })
        }}
      >
        <p className= "">Delete</p>
      </DropdownMenuItem>
    )
  }