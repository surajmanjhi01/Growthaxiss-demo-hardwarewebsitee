import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
            {!product.inStock && (
              <Badge variant="secondary" className="absolute top-2 left-2">
                Out of Stock
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge variant="destructive" className="absolute top-2 right-2">
                {discountPercentage}% OFF
              </Badge>
            )}
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.shortDescription}</p>

            <div className="flex items-center gap-1 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviews.length})</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            <div className="flex gap-2 mt-2">
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {product.material}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
