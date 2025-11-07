"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (data.status === "ok") {
        // Store user data in localStorage
        const userData = {
          id: data.id,
          email: data.email,
          name: data.name,
        }
        localStorage.setItem("fitnest_user", JSON.stringify(userData))
        
        toast({
          title: "Welcome back!",
          description: `Logged in as ${data.name || data.email}`,
        })

        // Redirect to home page
        window.location.href = "/"
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: data.message || "Invalid email or password",
        })
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Login error:", error)
      toast({
        variant: "destructive",
        title: "Connection error",
        description: "Failed to connect. Make sure backend is running on http://localhost:8080",
      })
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen flex items-center justify-center py-12">
        <div className="w-full max-w-md">
          <Card className="p-8">
            <h1 className="text-4xl font-bold text-foreground mb-2 serif text-center">Welcome Back</h1>
            <p className="text-center text-muted-foreground mb-8">Log in to your Fitnest account</p>

            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <a href="#" className="text-primary hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Log In"}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-muted-foreground mb-4">Don't have an account?</p>
              <Link href="/register">
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Create Account
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
