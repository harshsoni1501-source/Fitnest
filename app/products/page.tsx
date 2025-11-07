"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { products } from "@/lib/products"
import { Star } from "lucide-react"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["all", "men", "women"]

  let filteredProducts = selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name)
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "rating") return b.rating - a.rating
    return 0
  })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-foreground mb-2 serif">Shop Fitnest</h1>
          <p className="text-muted-foreground mb-8">Premium fitness apparel for every athlete</p>

          <div className="grid md:grid-cols-4 gap-8">
            <aside className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-4 uppercase text-sm tracking-wide">Search</h3>
                <input
                  type="text"
                  placeholder="Search apparel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-2 border border-border rounded bg-background text-foreground"
                />
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4 uppercase text-sm tracking-wide">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2"
                      />
                      <span className="capitalize text-foreground">{cat === "all" ? "All Products" : cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4 uppercase text-sm tracking-wide">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-border rounded bg-background text-foreground"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <div className="text-sm text-muted-foreground">
                Showing {sortedProducts.length} of {products.length} products
              </div>
            </aside>

            <div className="md:col-span-3">
              {sortedProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No products found</p>
                  <Button
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("all")
                    }}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                      <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition h-full flex flex-col">
                        <div className="bg-muted h-56 flex items-center justify-center relative">
                          <img
                            src={`/.jpg?key=lu2oa&height=250&width=250&query=${product.image}`}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          {product.originalPrice && (
                            <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-sm font-semibold">
                              Sale
                            </div>
                          )}
                          {!product.inStock && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <p className="text-white font-bold">Out of Stock</p>
                            </div>
                          )}
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={14}
                                  className={
                                    i < Math.floor(product.rating)
                                      ? "fill-primary text-primary"
                                      : "text-muted-foreground"
                                  }
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">({product.reviews})</span>
                          </div>
                          <div className="mt-auto">
                            <div className="flex items-center gap-2 mb-4">
                              <p className="text-lg font-bold text-primary">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.price)}</p>
                              {product.originalPrice && (
                                <p className="text-sm text-muted-foreground line-through">
                                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.originalPrice)}
                                </p>
                              )}
                            </div>
                            <Button
                              size="sm"
                              className="w-full bg-primary hover:bg-primary/90"
                              disabled={!product.inStock}
                            >
                              {product.inStock ? "Add to Cart" : "Out of Stock"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
