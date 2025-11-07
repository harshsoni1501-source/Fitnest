"use client"

import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    console.log("Order placed:", formData)

    setTimeout(() => {
      alert("Order placed successfully! Thank you for shopping at Fitnest.")
      window.location.href = "/"
    }, 1000)
  }

  return (
    <>
      <Header />
      <main className="bg-background py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-foreground mb-8 serif">Checkout</h1>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <Card className="p-6 border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Shipping Address</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-4"
                  />
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-4"
                  />
                  <Input
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="mt-4"
                  />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Input name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
                    <Input name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
                  </div>
                  <Input
                    name="zip"
                    placeholder="ZIP Code"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    className="mt-4"
                  />
                </Card>

                <Card className="p-6 border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Payment Method</h2>
                  <Input
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                  />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Input
                      name="cardExpiry"
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      required
                    />
                    <Input name="cardCVC" placeholder="CVC" value={formData.cardCVC} onChange={handleChange} required />
                  </div>
                </Card>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </Button>
              </form>
            </div>

            <div>
              <Card className="p-6 sticky top-24 border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="text-foreground">Subtotal</span>
                    <span className="text-foreground">$329.98</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="text-foreground">Shipping</span>
                    <span className="text-primary font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="text-foreground">Tax</span>
                    <span className="text-foreground">$33.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl text-foreground">
                    <span>Total</span>
                    <span>$362.98</span>
                  </div>
                </div>
                <Link href="/products" className="block">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Continue Shopping
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
