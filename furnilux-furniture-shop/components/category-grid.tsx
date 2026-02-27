import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Sofas",
    image: "/images/category-sofas.jpg",
    href: "/shop?category=Sofas",
    description: "Comfortable seating for every space",
  },
  {
    name: "Beds",
    image: "/images/category-beds.jpg",
    href: "/shop?category=Bedroom",
    description: "Rest in style and comfort",
  },
  {
    name: "Chairs",
    image: "/images/category-chairs.jpg",
    href: "/shop?category=Chairs",
    description: "Elegant seating solutions",
  },
  {
    name: "Decor",
    image: "/images/category-decor.jpg",
    href: "/shop?category=Tables",
    description: "Perfect finishing touches",
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Shop by Category</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every room in your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link key={category.name} href={category.href}>
              <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
