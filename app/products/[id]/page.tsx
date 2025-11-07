"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Share2, Star } from "lucide-react"
import Link from "next/link"
import { getProductById } from "@/lib/products"
import { notFound } from "next/navigation"

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = getProductById(Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color")
      return
    }
    console.log(`Added ${quantity} ${product.name} (${selectedColor}, ${selectedSize}) to cart`)
  }

  const savingsPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <>
      <Header />
      <main className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/products" className="text-primary hover:underline mb-6 inline-block">
            ← Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-muted rounded-lg h-full min-h-96 md:h-full flex items-center justify-center overflow-hidden sticky top-24">
                <img
                  src={`/.jpg?key=a1b2c&height=500&width=500&query=${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <p className="text-primary font-semibold mb-2 uppercase text-sm tracking-wide">{product.type}</p>
                <h1 className="text-5xl font-bold text-foreground mb-4 serif">{product.name}</h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <div className="mb-6 flex items-center gap-4">
                  <p className="text-4xl font-bold text-primary">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}</p>
                  {product.originalPrice && (
                    <>
                      <p className="text-xl text-muted-foreground line-through">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.originalPrice)}</p>
                      <p className="text-lg font-bold text-destructive">Save {savingsPercent}%</p>
                    </>
                  )}
                </div>

                <p className="text-muted-foreground mb-8 text-lg">{product.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">Color</h3>
                <div className="flex gap-3 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border-2 rounded-lg transition ${
                        selectedColor === color
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">Size</h3>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border-2 rounded-lg font-semibold transition ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2 text-foreground">
                      <span className="text-primary">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <p className={`font-semibold text-lg ${product.inStock ? "text-primary" : "text-destructive"}`}>
                  {product.inStock ? "✓ In Stock" : "Out of Stock"}
                </p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="font-semibold text-foreground">Quantity:</span>
                <div className="flex items-center gap-2 border border-border rounded-lg p-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 hover:bg-muted rounded"
                  >
                    −
                  </button>
                  <span className="px-4 min-w-[3rem] text-center font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 hover:bg-muted rounded">
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <Link href="/cart" className="flex-1">
                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={!product.inStock}
                  >
                    Add to Cart ({quantity})
                  </Button>
                </Link>
                <Button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  size="lg"
                  variant="outline"
                  className={isWishlisted ? "text-destructive" : ""}
                >
                  <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 size={20} />
                </Button>
              </div>

              <Card className="p-4 bg-muted border-0 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold">SKU:</span>
                  <span>FITNEST-{product.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Category:</span>
                  <span className="capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Shipping:</span>
                  <span>Free worldwide</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Returns:</span>
                  <span>30-day money back</span>
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
