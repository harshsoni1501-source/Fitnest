import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-2xl mb-4 serif">Fitnest</h3>
            <p className="text-background/80">Premium fitness apparel designed for the modern athlete.</p>
            <div className="flex gap-4 mt-6">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-accent" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-accent" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-accent" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?filter=men" className="text-background/80 hover:text-background transition">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/products?filter=women" className="text-background/80 hover:text-background transition">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-background/80 hover:text-background transition">
                  All Products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-background/80">
          <p>&copy; 2025 Fitnest. All rights reserved. Where Fashion Meets Fitness.</p>
        </div>
      </div>
    </footer>
  )
}
