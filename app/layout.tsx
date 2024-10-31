import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
const inter = Inter({ subsets: ["latin"],   variable: "--font-sans", });

export const metadata: Metadata = {
  title: "Pet Training Manuals",
  description: "Explore science-based dog training resources to enhance your pet's behavior and strengthen the bond with your furry friend.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/dog.jpg" type="image/jpeg" /> {/* Pointing to the JPG image */}
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}  >
          {children}
           </body>
    </html>
  );
}
