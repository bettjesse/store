"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useTransition } from "react"
import { deleteProduct ,toggleProductAvailability} from "../../_actions/product"
import { useRouter } from "next/navigation"





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
            await toggleProductAvailability(id, !isAvailable)
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
    disabled?: boolean
  }) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
  
    return (
      <DropdownMenuItem
        className="bg-red-500 text-white hover:bg-red-700" // always red with hover effect
        disabled={disabled || isPending}
        onClick={() => {
          startTransition(async () => {
            await deleteProduct(id)
            router.refresh()
          })
        }}
      >
        <p>Delete</p>
      </DropdownMenuItem>
    )
  }
  