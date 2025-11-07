"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-foreground mb-4 serif">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">We'd love to hear from you. Reach out to our team.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Message subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 border border-border rounded-lg bg-background text-foreground"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
                {submitted && (
                  <p className="text-center text-primary font-semibold">
                    Thanks for reaching out! We'll get back to you soon.
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <Card className="p-8 border-border">
                <div className="flex gap-4 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">hello@fitnest.com</p>
                    <p className="text-muted-foreground text-sm">We typically reply within 24 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border">
                <div className="flex gap-4 mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground text-sm">Available Mon-Fri, 9AM-5PM EST</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border">
                <div className="flex gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground">123 Fitness Avenue</p>
                    <p className="text-muted-foreground">New York, NY 10001</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-muted border-0">
                <h3 className="font-semibold text-foreground mb-3">Follow Us</h3>
                <p className="text-muted-foreground mb-4">
                  Stay connected on social media for the latest updates and exclusive offers.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:underline">
                    Instagram
                  </a>
                  <a href="#" className="text-primary hover:underline">
                    Facebook
                  </a>
                  <a href="#" className="text-primary hover:underline">
                    Twitter
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
