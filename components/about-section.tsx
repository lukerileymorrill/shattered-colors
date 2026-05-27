import Image from "next/image"

const stats = [
  { value: "500K+", label: "Monthly Listeners" },
  { value: "3", label: "Studio Albums" },
  { value: "150+", label: "Live Shows" },
  { value: "12", label: "Countries Toured" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-background to-neon-pink/5" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/cachedImage.jpg"
                alt="Shattered Colors band"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan rounded-lg blur opacity-30 -z-10" />
          </div>

          <div>
            <p className="text-neon-cyan uppercase tracking-[0.3em] text-sm mb-4">The Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              About the <span className="text-neon-pink">Band</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Born in the underground rock scene of 2019, Shattered Colors emerged with a sound that defies
                convention. Four musicians united by their passion for heavy riffs, thundering drums, and
                lyrics that speak to the chaos of modern existence.
              </p>
              <p>
                Our music is a collision of classic heavy rock with modern electronic elements &mdash; think
                crushing guitars meeting neon-soaked synthesizers. We don&apos;t just play songs; we create
                experiences that leave audiences breathless and wanting more.
              </p>
              <p>
                From small clubs to festival main stages, we&apos;ve built our following one earth-shaking
                performance at a time. Every show is a journey through sound and light, a celebration
                of everything that makes rock music timeless.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-display text-3xl font-bold text-neon-pink mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
