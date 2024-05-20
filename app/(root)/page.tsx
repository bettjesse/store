import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { db } from "@/lib/db"
import { cache } from "@/lib/cache"
import { Product } from "@prisma/client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import Image from "next/image"

const getMostPopularProducts = cache(
  () => {
    return db.product.findMany({
      where: { isAvailable: true },
      orderBy: { order: { _count: "desc" } },
      take: 6,
    })
  },
  ["/", "getMostPopularProducts"],
  { revalidate: 60 * 60 * 24 }
)

const getNewestProducts = cache(() => {
  return db.product.findMany({
    where: { isAvailable: true },
    orderBy: { createdAt: "desc" },
    take: 6,
  })
}, ["/", "getNewestProducts"])

export default function HomePage() {
  return (
<main className=" space-y-8">
 
    {/* <div className="">
    <Image
  src="/images/hero.jpg"
  alt="hero"
  layout="fill" // Set layout to "fill" to replicate the behavior of object-cover
  className="object-cover"
  style={{ objectFit: 'cover' }} // Ensure object-fit: cover behavior
/>

    </div> */}
        <div>
        <img src="/images/hero2.jpg" className="w-full max-h-[600px] object-cover "/>
    </div>


<div className="md:m-3 m-2 flex flex-col gap-4">
  
<ProductGridSection
    title="High selling products"
    productsFetcher={getMostPopularProducts}
  />

  <ProductGridSection title="Latest" productsFetcher={getNewestProducts} />
</div>
 
</main>

  )
}

type ProductGridSectionProps = {
  title: string
  productsFetcher: () => Promise<Product[]>
}

function ProductGridSection({
  productsFetcher,
  title,
}: ProductGridSectionProps) {
  return (
    <div className="space-y-4">
       
      <div className="flex gap-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Button variant="outline" asChild>
          <Link href="/products" className="space-x-2">
            <span>View All</span>
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense
          fallback={
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          }
        >
          <ProductSuspense productsFetcher={productsFetcher} />
        </Suspense>
      </div>
    </div>
  )
}

async function ProductSuspense({
  productsFetcher,
}: {
  productsFetcher: () => Promise<Product[]>
}) {
  return (await productsFetcher()).map(product => (
    <ProductCard key={product.id} {...product} />
  ))
}