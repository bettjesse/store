import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { formatCurrency } from "@/lib/formatter";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { payment_intent: string };
}) {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent
  );
  if (paymentIntent.metadata.productId == null) return notFound();

  const product = await db.product.findUnique({
    where: { id: paymentIntent.metadata.productId },
  });
  if (product == null) return notFound();

  const isSuccess = paymentIntent.status === "succeeded";

  return (
    <div className="max-w-5xl w-full mx-auto p-6 mt-8">
      <div className={`text-center mb-6`}>
        <h1 className={`text-4xl font-bold ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
          {isSuccess ? "Success!" : "Error!"}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.imagePath}
            alt={product.name}
            width={500} // Adjust width and height based on your image aspect ratio
            height={300}
            className="object-cover h-full w-full"
          />
        </div>
        
        <div className="flex-1 md:w-1/2">
          <div className="text-lg font-semibold text-gray-800 mb-2">
            {formatCurrency(product.price)}
          </div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="line-clamp-3 text-gray-700 mt-2">
            {product.description}
          </p>

          <Button className="mt-4 w-full" size="lg" asChild>
            {isSuccess ? (
              <a
                href={`/products/download/${await createDownloadVerification(product.id)}`}
                className="text-white"
              >
                Download
              </a>
            ) : (
              <Link href={`/products/${product.id}/purchase`} className="text-white">
                Try Again
              </Link>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

async function createDownloadVerification(productId: string) {
  return (
    await db.downloadVerification.create({
      data: {
        productId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    })
  ).id;
}
