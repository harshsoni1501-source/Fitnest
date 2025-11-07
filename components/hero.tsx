import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-background py-24 md:py-40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance serif">
              Fitnest
            </h1>
            <p className="text-xl text-muted-foreground mb-4 font-light">Where Fashion Meets Fitness</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Premium fitness apparel designed for the modern athlete. Engineered for performance, crafted for style.
            </p>
            <div className="flex gap-4">
              <Link href="/products?filter=men">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Shop Men
                </Button>
              </Link>
              <Link href="/products?filter=women">
                <Button size="lg" variant="outline">
                  Shop Women
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center overflow-hidden">
            <img src="/fitness-apparel-hero-model.jpg" alt="Fitnest collection" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
