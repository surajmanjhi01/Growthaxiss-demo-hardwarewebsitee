import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, CreditCard } from "lucide-react"
import { NewsletterSignup } from "./newsletter-signup"

export default function ModernFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <NewsletterSignup />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Furnilux</h3>
            <p className="text-gray-300 leading-relaxed">
              Premium furniture for modern living. Transform your space with our curated collection of stylish and
              comfortable pieces.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop?category=Sofas" className="text-gray-300 hover:text-white transition-colors">
                  Sofas
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Dining" className="text-gray-300 hover:text-white transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Bedroom" className="text-gray-300 hover:text-white transition-colors">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Office" className="text-gray-300 hover:text-white transition-colors">
                  Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">info@furnilux.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-gray-300">123 Furniture St, Design City, DC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Furnilux. All rights reserved. Built with ❤️ by <a href="#">Opitien.dev</a> | Privacy Policy | Terms of Service
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">We Accept:</span>
              <div className="flex space-x-2">
                <CreditCard className="h-6 w-6 text-gray-400" />
                <div className="text-gray-400 text-sm">Visa</div>
                <div className="text-gray-400 text-sm">PayPal</div>
                <div className="text-gray-400 text-sm">Mastercard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
