"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import CountUp from "react-countup"

export default function ModernHero() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                Transform Your
                <span className="block text-primary">Living Space</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg">
                Discover premium furniture that combines timeless design with modern comfort for your perfect home.
              </p>
            </div>

            {/* Buttons (anchor-as-button for perfect click/hover) */}
{/* Buttons */}
<div className="relative z-20 flex flex-col sm:flex-row gap-4">
  <Link href="/shop" passHref legacyBehavior>
    <a>
      <Button
        size="lg"
        className="group bg-primary text-white px-8 py-4 text-lg 
                   hover:bg-primary/90 transition-colors duration-300"
      >
        Shop Now
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </a>
  </Link>

  <Link href="/about" passHref legacyBehavior>
    <a>
      <Button
        size="lg"
        variant="outline"
        className="border-2 border-primary text-primary bg-transparent px-8 py-4 text-lg 
                   hover:bg-primary hover:text-white transition-colors duration-300"
      >
        Our Story
      </Button>
    </a>
  </Link>
</div>



            {/* Stats (CountUp starts on mount, never blocks pointer events) */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary pointer-events-none">
                  <CountUp end={10000} duration={3} separator="," />+
                </div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary pointer-events-none">
                  <CountUp end={500} duration={3} />+
                </div>
                <div className="text-gray-600">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary pointer-events-none">
                  <CountUp end={14} duration={3} />
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <Image
                src="/images/hero-living-room.jpg"
                alt="Modern living room with premium furniture"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/50 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
