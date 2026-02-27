"use client"

import { useState, useMemo, useEffect } from "react"
import ModernHeader from "@/components/modern-header"
import ModernHero from "@/components/modern-hero"
import CategoryGrid from "@/components/category-grid"
import ModernProductCard from "@/components/modern-product-card"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import ModernFooter from "@/components/modern-footer"
import { products } from "@/lib/products"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Featured/Best-selling products (first 6)
  const featuredProducts = useMemo(() => products.slice(0, 6), [])

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <ModernHeader onSearch={setSearchQuery} />

      <main>
        <ModernHero />
        <CategoryGrid />

        {/* Featured Products Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Best Sellers</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our most popular furniture pieces loved by thousands of customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ModernProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/shop"
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                View All Products
              </a>
            </div>
          </div>
        </section>

        <TestimonialsCarousel />
      </main>

      <ModernFooter />
    </div>
  )
}
