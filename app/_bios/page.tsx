import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { members } from "@/lib/members"

export const metadata: Metadata = {
  title: "The Band | Shattered Colors",
  description: "Meet the members of Shattered Colors.",
}

export default function BiosPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <section className="relative flex-1 pt-28 pb-16 sm:pt-32 sm:py-24 lg:py-32 lg:pt-40 overflow-hidden">
        <div className="absolute inset-0 fade-edges-y pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-pink/10" />
          <div className="absolute top-20 -right-16 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -left-16 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-neon-cyan uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4">Who We Are</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight">
              The <span className="text-neon-pink">Band</span>
            </h1>
          </div>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
            {members.map((member) => (
              <article
                key={member.name}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-neon-cyan/40 transition-colors duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>

                <div className="p-5 sm:p-6 -mt-16 relative">
                  <p className="text-neon-cyan uppercase tracking-[0.2em] text-xs mb-1.5">{member.role}</p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide mb-3">
                    {member.name}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors uppercase tracking-wider text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to the band&apos;s story
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
