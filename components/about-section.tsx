import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* All decoration in one feathered layer — otherwise `overflow-hidden`
          slices the soft glows flat at the section edges. */}
      <div className="absolute inset-0 fade-edges-y pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-pink/10" />
        <div className="absolute top-10 -right-16 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-16 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/cachedImage.jpg"
                alt="Shattered Colors band"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan rounded-lg blur opacity-30 -z-10" />
          </div>

          <div>
            <p className="text-neon-cyan uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4">The Story</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
              About the <span className="text-neon-pink">Band</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in the crappy basement of bassist and vocalist, Stephen and Adam Snyder, father &amp; son respectively,
                Shattered Colors was born out of a love of modern rock/metal music from bands like Breaking Benjamin, Red, Staind, and Three Days Grace.
                They were joined by lead guitarist Anthony Yanez, and drummer Taylor Giles.
                While they began as a cover / tribute band, they have recently produced 2 original songs, with more in the works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
