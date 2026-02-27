import Link from "next/link"
import { CheckCircle, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ThankYouPage() {
  const orderNumber = `FX${Date.now().toString().slice(-6)}`
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-green-600 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">Thank you for your purchase from Furnilux</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-semibold">#{orderNumber}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-semibold">{estimatedDelivery}</span>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-blue-700 mb-2">
                  <Truck className="h-5 w-5" />
                  <span className="font-semibold">What happens next?</span>
                </div>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• We'll send you a confirmation email shortly</li>
                  <li>• Your order will be processed within 1-2 business days</li>
                  <li>• You'll receive tracking information once shipped</li>
                  <li>• Delivery typically takes 5-7 business days</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                Continue Shopping
              </Button>
            </Link>

            <div className="text-sm text-gray-600">
              <p>Need help? Contact our customer service team</p>
              <p>Email: support@furnilux.com | Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
