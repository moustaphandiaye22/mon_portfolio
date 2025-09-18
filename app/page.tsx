import { HybridPortfolio } from "@/components/hybrid-portfolio"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HybridPortfolio />
      <Footer />
    </main>
  )
}
