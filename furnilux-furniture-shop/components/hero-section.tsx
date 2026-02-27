"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.2,    // start when 20% visible
  })

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white"
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transform Your Space with
              <span className="text-yellow-400">Premium Furniture</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Discover our curated collection of modern, comfortable, and stylish furniture designed to make your house
              feel like home.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button size="lg" variant="default">
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats with CountUp */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-yellow-400">
                  {inView && <CountUp end={10000} duration={2.5} separator="," />}+
                </div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">
                  {inView && <CountUp end={500} duration={2.5} separator="," />}+
                </div>
                <div className="text-gray-300">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">
                  {inView && <CountUp end={14} duration={2.5} />}
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Modern living room furniture"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
