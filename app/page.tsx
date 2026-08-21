import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ShowsSection } from "@/components/shows-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <ShowsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
