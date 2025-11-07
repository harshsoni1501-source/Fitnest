"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-foreground serif tracking-tight">
            Fitnest
          </Link>

          <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
            <Link
              href="/products?filter=men"
              className="text-foreground hover:text-primary transition text-sm uppercase tracking-wide"
            >
              Men
            </Link>
            <Link
              href="/products?filter=women"
              className="text-foreground hover:text-primary transition text-sm uppercase tracking-wide"
            >
              Women
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition text-sm uppercase tracking-wide"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition text-sm uppercase tracking-wide"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="text-foreground hover:text-primary transition text-sm uppercase tracking-wide"
            >
              Login
            </Link>
          </nav>
          

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 hover:bg-muted rounded-lg transition">
              <ShoppingCart size={20} />
                <span id="cartCount" aria-live="polite" className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
            </Link>
            <a href="/login" className="login-link hidden md:inline-flex">Login</a>
            <div className="profile-menu hidden">
              <button id="profileButton" className="profile-button">
                <img src="/profile-avatar.svg" alt="" className="profile-avatar" id="profileAvatar" />
              </button>
              <div className="profile-dropdown" id="profileDropdown">
                <a href="/profile">My Profile</a>
                <a href="/orders">My Orders</a>
                <button id="logoutButton">Logout</button>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <Link
              href="/products?filter=men"
              className="text-foreground hover:text-primary transition text-sm uppercase"
            >
              Men
            </Link>
            <Link
              href="/products?filter=women"
              className="text-foreground hover:text-primary transition text-sm uppercase"
            >
              Women
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition text-sm uppercase">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition text-sm uppercase">
              Contact
            </Link>
            <Link href="/login" className="text-foreground hover:text-primary transition text-sm uppercase">
              Login
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
