import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MusicSection } from "@/components/music-section"
import { AboutSection } from "@/components/about-section"
import { TourSection } from "@/components/tour-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MusicSection />
      <AboutSection />
      <TourSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
