"use client"

import { Button } from "@/components/ui/button"
import { Play, Disc3 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 via-transparent to-neon-cyan/10" />
      
      {/* Animated neon lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent animate-pulse" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent animate-pulse delay-700" />
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-neon-purple/30 to-transparent animate-pulse delay-300" />
        <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-neon-pink/30 to-transparent animate-pulse delay-500" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-neon-cyan uppercase tracking-[0.4em] text-sm md:text-base mb-6 font-medium">
          Heavy Rock Since 2019
        </p>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight mb-6">
          <span className="block text-foreground drop-shadow-[0_0_30px_rgba(255,0,150,0.3)]">
            Shattered
          </span>
          <span className="block bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,255,255,0.4)]">
            Colors
          </span>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Raw power. Neon fury. Sound that shatters expectations and leaves nothing but pure energy in its wake.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-neon-pink hover:bg-neon-pink/80 text-foreground font-semibold uppercase tracking-wider px-8 py-6 text-base shadow-[0_0_30px_rgba(255,0,150,0.4)] hover:shadow-[0_0_40px_rgba(255,0,150,0.6)] transition-all"
          >
            <Play className="mr-2 h-5 w-5" />
            Listen Now
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-semibold uppercase tracking-wider px-8 py-6 text-base shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all"
          >
            <Disc3 className="mr-2 h-5 w-5" />
            New Album Out
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-neon-pink to-transparent animate-pulse" />
      </div>
    </section>
  )
}
