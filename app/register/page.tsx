"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)
    console.log("Registration attempt:", {
      email: formData.email,
      name: `${formData.firstName} ${formData.lastName}`,
    })

    // Store in localStorage for demo
    localStorage.setItem(
      "fitnest_user",
      JSON.stringify({
        email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
      }),
    )

    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/"
    }, 500)
  }

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen flex items-center justify-center py-12">
        <div className="w-full max-w-md">
          <Card className="p-8">
            <h1 className="text-4xl font-bold text-foreground mb-2 serif text-center">Join Fitnest</h1>
            <p className="text-center text-muted-foreground mb-8">Create your account to get started</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
                <Input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Confirm Password</label>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && <p className="text-destructive text-sm font-semibold">{error}</p>}

              <div className="flex items-center gap-2 text-sm">
                <input type="checkbox" required className="rounded" />
                <span className="text-muted-foreground">I agree to the Terms of Service and Privacy Policy</span>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-muted-foreground mb-4">Already have an account?</p>
              <Link href="/login">
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Log In
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
