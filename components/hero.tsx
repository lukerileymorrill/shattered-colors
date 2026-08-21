"use client"

import Link from "next/link"
import { Play, Disc3 } from "lucide-react"
import { Button } from "@/components/ui/button"

// Position + size + rotation for each fragment scattered around the wordmark.
const SHARDS = [
  "left-[3%] top-[6%] h-3 w-2 rotate-[18deg]",
  "left-[11%] top-[34%] h-2 w-2 rotate-[-24deg]",
  "left-[7%] bottom-[14%] h-4 w-3 rotate-[52deg]",
  "left-[26%] top-[-4%] h-2 w-2 rotate-[8deg]",
  "left-[44%] bottom-[-3%] h-3 w-2 rotate-[-38deg]",
  "right-[28%] top-[-5%] h-2 w-2 rotate-[64deg]",
  "right-[9%] top-[22%] h-4 w-3 rotate-[-14deg]",
  "right-[3%] bottom-[26%] h-2 w-2 rotate-[30deg]",
  "right-[15%] bottom-[6%] h-3 w-2 rotate-[-56deg]",
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* The whole backdrop is masked so the photo dissolves into the page
          instead of stopping dead where the section ends. */}
      <div className="absolute inset-0 fade-edge-b pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cachedImage.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
      </div>

      <div className="relative z-10 text-center px-5 max-w-5xl mx-auto">
        <h1 className="relative font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight mb-8 sm:mb-10">
          <span className="glass glass--ice drop-shadow-[0_0_30px_rgba(0,255,255,0.25)]">
            Shattered
          </span>
          <span className="color-drift drop-shadow-[0_0_40px_rgba(0,255,255,0.35)]">
            Colors
          </span>

          {/* Fragments thrown off the wordmark */}
          <span aria-hidden="true">
            {SHARDS.map((shard, i) => (
              <span key={i} className={`shard ${shard}`} />
            ))}
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-neon-pink hover:bg-neon-pink/80 text-foreground font-semibold uppercase tracking-wider px-8 py-6 text-base shadow-[0_0_30px_rgba(255,0,150,0.4)] hover:shadow-[0_0_40px_rgba(255,0,150,0.6)] transition-all"
          >
            <Link href="#shows" scroll>
              <Play className="mr-2 h-5 w-5" />
              Festival Tickets
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-neon-cyan text-neon-cyan bg-transparent hover:bg-neon-cyan/10 hover:text-neon-cyan font-semibold uppercase tracking-wider px-8 py-6 text-base shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all"
          >
            <Link href="#about" scroll>
              <Disc3 className="mr-2 h-5 w-5" />
              About the Band
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-neon-pink to-transparent animate-pulse" />
      </div>
    </section>
  )
}
