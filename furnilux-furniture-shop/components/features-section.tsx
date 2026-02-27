import { Truck, Shield, Headphones, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders over $500. Fast and reliable shipping nationwide.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "All our furniture comes with a comprehensive warranty and quality assurance.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our customer service team is here to help you with any questions or concerns.",
  },
  {
    icon: Award,
    title: "Premium Materials",
    description: "We use only the finest materials and craftsmanship in all our products.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Furnilux?</h2>
          <p className="text-gray-600 text-lg">
            We're committed to providing you with the best furniture shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
