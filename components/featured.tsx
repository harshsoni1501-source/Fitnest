import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const featuredProducts = [
  { id: 1, name: "Performance Running Jacket", price: "$129.99", image: "men's running jacket fitnest" },
  { id: 2, name: "High-Rise Leggings", price: "$99.99", image: "women's high rise leggings" },
  { id: 3, name: "Pro Training Shorts", price: "$79.99", image: "men's training shorts" },
  { id: 4, name: "Sports Bra Lite", price: "$89.99", image: "women's sports bra" },
]

export default function Featured() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4 serif">Featured Styles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our latest collection of performance-driven fitness apparel, handpicked for quality and style.
          </p>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="hover:shadow-lg transition cursor-pointer h-full border-border/50">
                <CardContent className="p-0">
                  <div className="bg-muted rounded-t-lg h-56 mb-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={`/.jpg?height=250&width=250&query=${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-lg font-bold text-primary">{product.price}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
