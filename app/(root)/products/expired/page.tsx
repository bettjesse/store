import { Button } from "@/components/ui/button"
import Link from "next/link"

const Expired = ()=> {


  return (
    <div className=" h-full bg-blue-400">
      <h1 className="text-4xl mb-4">link expired</h1>
      <Button asChild size="lg">
        <Link href="/orders">Get New Link</Link>
      </Button>
    </div>
  )
}
export default Expired