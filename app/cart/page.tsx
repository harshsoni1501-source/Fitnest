"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Premium Product", price: 79.99, quantity: 2 },
    { id: 2, name: "Deluxe Edition", price: 89.99, quantity: 1 },
  ])

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen flex items-center justify-center py-12">
        <div className="max-w-7xl mx-auto px-4">
          {cartItems.length === 0 ? (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">Add some products to get started</p>
              <Link href="/products">
                <Button className="bg-primary hover:bg-primary/90">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 border border-border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          <p className="text-primary font-bold">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 bg-muted rounded hover:bg-muted/80"
                          >
                            -
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 bg-muted rounded hover:bg-muted/80"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:bg-destructive/10 px-4 py-2 rounded"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div>
                  <Card className="p-6 sticky top-24">
                    <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>
                    <div className="flex justify-between items-center text-xl font-bold mb-6">
                      <span>Total:</span>
                      <span className="text-primary">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(total)}</span>
                    </div>
                    <Link href="/checkout" className="block">
                      <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                        Checkout
                      </Button>
                    </Link>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
