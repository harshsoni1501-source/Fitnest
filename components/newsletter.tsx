"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="bg-muted py-16 border-t border-border">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4 serif">Join the Fitnest Community</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Get exclusive access to new collections, fitness tips, and special member-only offers.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {submitted ? "Subscribed!" : "Subscribe"}
          </Button>
        </form>
        {submitted && <p className="text-sm text-primary mt-4">Thanks for joining Fitnest!</p>}
      </div>
    </section>
  )
}
