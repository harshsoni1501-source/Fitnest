export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  category: "men" | "women"
  type: string
  description: string
  image: string
  features: string[]
  inStock: boolean
  rating: number
  reviews: number
  colors: string[]
  sizes: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "Performance Running Jacket",
    price: 129.99,
    originalPrice: 149.99,
    category: "men",
    type: "jackets",
    description:
      "Lightweight, breathable running jacket with reflective details for visibility. Perfect for early morning or evening runs.",
    image: "men's running jacket fitnest",
    features: ["Moisture-wicking fabric", "Reflective details", "Zippered pockets", "Lightweight design"],
    inStock: true,
    rating: 4.8,
    reviews: 142,
    colors: ["Black", "Navy", "Grey"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "High-Rise Leggings",
    price: 99.99,
    category: "women",
    type: "leggings",
    description:
      "Flattering high-rise design with compressive fit. Features hidden pocket for phone and seamless construction for comfort.",
    image: "women's high rise leggings",
    features: ["High-rise waist", "Hidden pockets", "Seamless design", "4-way stretch"],
    inStock: true,
    rating: 4.9,
    reviews: 287,
    colors: ["Black", "Charcoal", "Deep Plum", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Pro Training Shorts",
    price: 79.99,
    category: "men",
    type: "shorts",
    description:
      "Lightweight training shorts with built-in compression shorts for support. Quick-dry technology for intense workouts.",
    image: "men's training shorts",
    features: ["Built-in compression", "Quick-dry tech", "Reflective trim", "Inner pocket"],
    inStock: true,
    rating: 4.7,
    reviews: 165,
    colors: ["Black", "Navy", "Heather Grey"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 4,
    name: "Sports Bra Lite",
    price: 89.99,
    originalPrice: 109.99,
    category: "women",
    type: "sports-bra",
    description:
      "Medium-impact sports bra with adjustable straps and supportive band. Perfect for daily workouts and activities.",
    image: "women's sports bra",
    features: ["Adjustable straps", "Medium support", "Breathable fabric", "Seamless design"],
    inStock: true,
    rating: 4.8,
    reviews: 203,
    colors: ["Black", "White", "Blush", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Essential Training Tee",
    price: 44.99,
    category: "men",
    type: "tees",
    description:
      "Classic crew neck training tee made from premium cotton blend. Breathable and durable for everyday wear.",
    image: "men's training tee",
    features: ["Cotton blend", "Moisture-wicking", "Durable seams", "Classic fit"],
    inStock: true,
    rating: 4.6,
    reviews: 421,
    colors: ["Black", "White", "Grey", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 6,
    name: "Racerback Tank",
    price: 59.99,
    category: "women",
    type: "tanks",
    description: "Supportive racerback tank with built-in shelf bra. Ideal for weightlifting and cross-training.",
    image: "women's racerback tank",
    features: ["Built-in shelf bra", "Racerback design", "Sweat-resistant", "Wide straps"],
    inStock: true,
    rating: 4.7,
    reviews: 298,
    colors: ["Black", "White", "Deep Purple", "Mint"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "Flex Joggers",
    price: 119.99,
    category: "men",
    type: "bottoms",
    description: "Comfortable joggers with tapered fit and adjustable cuffs. Perfect for training or casual wear.",
    image: "men's flex joggers",
    features: ["Tapered fit", "Adjustable cuffs", "Side pockets", "Breathable fabric"],
    inStock: true,
    rating: 4.8,
    reviews: 189,
    colors: ["Black", "Charcoal", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 8,
    name: "Performance Crop Top",
    price: 69.99,
    category: "women",
    type: "tops",
    description: "Sleek crop top with minimal seams and maximum support. UV protection for outdoor activities.",
    image: "women's performance crop top",
    features: ["UV protection", "Minimal seams", "High support", "Moisture-wicking"],
    inStock: true,
    rating: 4.9,
    reviews: 334,
    colors: ["Black", "White", "Ocean Blue", "Sunset Orange"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((p) => p.category === category)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.type.toLowerCase().includes(lowerQuery),
  )
}
