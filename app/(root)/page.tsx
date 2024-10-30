import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { cache } from "@/lib/cache";
import { Product } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";

const getMostPopularProducts = cache(
  () => {
    return db.product.findMany({
      where: { isAvailable: true },
      orderBy: { order: { _count: "desc" } },
      take: 6,
    });
  },
  ["/", "getMostPopularProducts"],
  { revalidate: 60 * 60 * 24 }
);

const getNewestProducts = cache(() => {
  return db.product.findMany({
    where: { isAvailable: true },
    orderBy: { createdAt: "desc" },
    take: 6,
  });
}, ["/", "getNewestProducts"]);

export default function HomePage() {
  return (
    <main className="space-y-8">
      <div className="relative">
        <img
          src="/images/dog.jpg"
          className="w-full max-h-[600px] object-cover"
          alt="Dog"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Transform Your Pet with Expert Training Manuals
          </h1>
          <Link href="/products">
            <Button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700">
              Explore Our Manuals
            </Button>
          </Link>
        </div>
      </div>

      <div className="md:m-3 m-2 flex flex-col gap-4">
        <ProductGridSection
          title="High Selling Products"
          productsFetcher={getMostPopularProducts}
        />
        <ProductGridSection title="Latest" productsFetcher={getNewestProducts} />
      </div>
    </main>
  );
}

type ProductGridSectionProps = {
  title: string;
  productsFetcher: () => Promise<Product[]>;
};

function ProductGridSection({
  productsFetcher,
  title,
}: ProductGridSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Button className="border border-gray-300 rounded-md py-2 px-4">
          <Link href="/products" className="flex items-center space-x-2">
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
  );
}

async function ProductSuspense({
  productsFetcher,
}: {
  productsFetcher: () => Promise<Product[]>;
}) {
  return (await productsFetcher()).map(product => (
    <ProductCard key={product.id} {...product} />
  ));
}
