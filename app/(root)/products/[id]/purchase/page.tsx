import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Stripe from "stripe";
import { CheckoutForm } from "../../_components/CheckoutForm";
import DisclaimerBanner from "../../_components/DisclaimerBanner";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function PurchasePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({ where: { id } });
  if (product == null) return notFound();

  const amountInCents = Math.round(product.price * 100);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountInCents,
    currency: "KES", // Set currency to KES 
    metadata: { productId: product.id },
  });

  if (paymentIntent.client_secret == null) {
    throw Error("Stripe failed to create payment intent");
  }

  return (
    <div className="space-y-8 px-4">

  
    <DisclaimerBanner/>
    <CheckoutForm
      product={product}
      clientSecret={paymentIntent.client_secret}
    />
      </div>
  );
}

