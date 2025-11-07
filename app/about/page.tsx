import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-16">
            <h1 className="text-6xl font-bold text-foreground mb-4 serif">About Fitnest</h1>
            <p className="text-xl text-muted-foreground">Where Fashion Meets Fitness</p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-4xl font-bold text-foreground mb-6 serif">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Fitnest was founded on a simple belief: that athletic wear should be as beautiful as it is functional.
                We recognized a gap in the market where fitness enthusiasts deserved premium apparel that didn't
                compromise on style or performance. Born from a passion for both fashion and fitness, Fitnest combines
                elegant minimalist design with cutting-edge performance technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey began in 2022 with a single vision: to create a collection of essentials that empower
                athletes to feel confident both in the gym and on the street. Every piece in our collection is carefully
                designed, tested, and refined to meet the highest standards of quality and style.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-foreground mb-6 serif">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We believe that fitness is a lifestyle, not just a hobby. Our mission is to provide premium, sustainable
                apparel that inspires confidence and supports performance. Whether you're training for a marathon,
                hitting the gym for a quick session, or simply want to look good while staying active, Fitnest has you
                covered.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every product is designed with the modern athlete in mind—someone who values both quality and
                aesthetics, and refuses to settle for less. We're committed to sustainability, ethical manufacturing,
                and timeless design.
              </p>
            </section>

            <section>
              <h2 className="text-4xl font-bold text-foreground mb-6 serif">Why Choose Fitnest</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Premium Quality</h3>
                  <p className="text-muted-foreground">
                    Every item is crafted from the finest materials with attention to detail that shows.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Performance Driven</h3>
                  <p className="text-muted-foreground">
                    Engineered for movement with moisture-wicking, breathable, and durable fabrics.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Timeless Design</h3>
                  <p className="text-muted-foreground">
                    Minimalist aesthetic that transcends trends and works with any lifestyle.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-muted rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Join Fitnest?</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Explore our complete collection of premium fitness apparel and elevate your activewear game.
              </p>
              <Link href="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Shop Now
                </Button>
              </Link>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
