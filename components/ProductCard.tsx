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
  category: string
}

export function ProductCard({
  id,
  name,
  price,
  description,
  category,
  imagePath,
}: ProductCardProps) {
  return (
    <div className="w-full p-4 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md">
    <div className="rounded overflow-hidden aspect-w-16 aspect-h-9">
      <img src={imagePath} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="mt-4">
      <h3 className="text-gray-600 text-sm uppercase font-semibold tracking-widest mb-1">{category}</h3>
      <p className="text-gray-900 text-lg font-medium line-clamp-2">{name}</p>
      {/* <p className="mt-2 text-gray-700 line-clamp-3">{description}</p> */}
      <div className="flex justify-between items-center mt-3">
        <p className="text-gray-800 font-bold">{formatPrice(price)}</p>
        <Button asChild size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
          <Link href={`/products/${id}/purchase`}>Purchase</Link>
        </Button>
      </div>
    </div>
  </div>
  
  );
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