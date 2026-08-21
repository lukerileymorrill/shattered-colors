import Image from "next/image"
import Link from "next/link"
import { Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FESTIVAL_URL } from "@/lib/site"

const POSTER = "/images/festival-poster.png"

export function ShowsSection() {
  return (
    <section id="shows" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Poster blurred out to a gradient — the section takes its color from the
          artwork. Dimming lives in the layer's own opacity (not a full-bleed
          overlay) and the edges are feathered, so there's no seam either side. */}
      <div className="absolute inset-0 overflow-hidden fade-edges-y pointer-events-none" aria-hidden="true">
        <Image
          src={POSTER}
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover scale-125 blur-[80px] opacity-45"
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04] fade-edges-y pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-[88rem] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-neon-cyan uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4">Rock For Life</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Shattered <span className="text-neon-cyan">Rock Festival</span>
          </h2>
        </div>

        {/* Poster — frame matches the artwork's native ratio so nothing crops */}
        <div className="max-w-2xl mx-auto flex flex-col gap-5 sm:gap-6">
          <Link href={FESTIVAL_URL} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative w-full aspect-[1080/1875] rounded-lg overflow-hidden border border-border/50 group-hover:border-neon-cyan/50 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,255,0.12)] group-hover:shadow-[0_0_35px_rgba(0,255,255,0.3)]">
              <Image
                src={POSTER}
                alt="Shattered Rock Festival — September 12, 2026, 3pm–10pm, State Fare Bar & Restaurant, 748 Frederick Rd, Catonsville, MD. $15 at the door, all ages, 12 and under free."
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 42rem"
                priority
              />
            </div>
          </Link>

          <Button
            asChild
            size="lg"
            className="w-full bg-neon-pink hover:bg-neon-pink/80 text-foreground uppercase tracking-wider shadow-[0_0_15px_rgba(255,0,150,0.3)] hover:shadow-[0_0_25px_rgba(255,0,150,0.5)]"
          >
            <Link href={FESTIVAL_URL} target="_blank" rel="noopener noreferrer">
              <Ticket className="h-4 w-4 mr-2" />
              Get Festival Tickets
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
