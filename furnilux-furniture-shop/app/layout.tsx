import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Furnilux - Premium Furniture Store",
  description:
    "Discover premium, modern furniture for your home and office. Furnilux offers elegant, high-quality designs that bring comfort and style to every space.",
  keywords: [
    "furniture store",
    "premium furniture",
    "modern furniture",
    "luxury furniture",
    "home decor",
    "office furniture",
    "Furnilux",
  ],
  icons: {
    icon: "/favicon.ico", // 16x16, 32x32, 48x48 .ico
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png", // 180x180 for iOS
  },
  openGraph: {
    title: "Furnilux - Premium Furniture Store",
    description:
      "Elevate your home and office with premium furniture from Furnilux. Modern, timeless, and built for comfort.",
    url: "https://www.furnilux.com", // update with real domain
    siteName: "Furnilux",
    images: [
      {
        url: "/og-image.jpg", // Recommended: 1200x630
        width: 1200,
        height: 630,
        alt: "Furnilux Furniture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furnilux - Premium Furniture Store",
    description:
      "Shop premium modern furniture for your home and office with Furnilux. Designed for style and comfort.",
    images: ["/og-image.jpg"],
    creator: "@furnilux", // replace with brand handle
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Head elements like favicon and apple-touch-icon should be placed in app/head.tsx for Next.js app directory. */}
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}

