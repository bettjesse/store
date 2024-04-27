import { formatPrice } from "@/app/utils/format"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"

type ProductCardProps = {
  id: string
  name: string
  price: number
  description: string
  imagePath: string
}

export function ProductCard({
  id,
  name,
  price,
  description,
  imagePath,
}: ProductCardProps) {
  return (
    // <Card className="flex overflow-hidden flex-col">
    //   <div className="relative w-full h-auto aspect-video">
    //     <Image src={imagePath} fill alt={name} />
    //   </div>
    //   <CardHeader>
    //     <CardTitle>{name}</CardTitle>
    //     <CardDescription>{ formatPrice (price)}</CardDescription>
    //   </CardHeader>
    //   <CardContent className="flex-grow">
    //     <p className="line-clamp-4">{description}</p>
    //   </CardContent>
    //   <CardFooter>
    //     <Button asChild size="lg" className="w-full bg-[#81f0f0] hover:bg-slate-400">
    //       <Link href={`/products/${id}/purchase`}>Purchase</Link>
    //     </Button>
    //   </CardFooter>
    // </Card>

    <div className="w-full p-3 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <div className="block relative h-48 rounded overflow-hidden">
    <Image src={imagePath} fill alt={name} />
    </div>
    <div className="mt-4">
      <h3 className="text-indigo-500 text-xs tracking-widest title-font mb-1">
        {/* {product.category} */}
      </h3>
      <div className="flex justify-between align-middle">
        <p className=" line-clamp-4 w-44">{name}</p>
        <p className="truncate">{formatPrice(price)}</p>
      </div>
      <p className="mt-5 line-clamp-2">{description}</p>
    </div>
    <Button asChild size="lg" className="w-full bg-[#81f0f0] hover:bg-slate-400">
          <Link href={`/products/${id}/purchase`}>Purchase</Link>
       </Button>
  </div>
  )
}

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden flex flex-col animate-pulse">
      <div className="w-full aspect-video bg-gray-300" />
      <CardHeader>
        <CardTitle>
          <div className="w-3/4 h-6 rounded-full bg-gray-300" />
        </CardTitle>
        <CardDescription>
          <div className="w-1/2 h-4 rounded-full bg-gray-300" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-3/4 h-4 rounded-full bg-gray-300" />
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled size="lg"></Button>
      </CardFooter>
    </Card>
  )
}