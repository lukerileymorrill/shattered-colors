import Image from "next/image"
import Link from "next/link"
import { Disc3, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { socialLinks } from "@/lib/site"

/**
 * The band's two originals.
 * TODO: drop the cover art in `public/images/songs/` and set `cover` — the cards
 * fall back to a gradient tile until then. Set `href` to the streaming link.
 */
const songs: { title: string; cover: string | null; href: string | null }[] = [
  { title: "Dark Minds", cover: null, href: null },
  { title: "War Within", cover: null, href: null },
]

const platforms = socialLinks.filter((link) =>
  ["Spotify", "Apple Music", "YouTube"].includes(link.label),
)

export function MusicSection() {
  return (
    <section id="music" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-neon-cyan/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-neon-cyan uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4">Originals</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Our <span className="text-neon-pink">Music</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
          {songs.map((song) => (
            <div key={song.title} className="group relative">
              <div className="relative bg-card rounded-lg overflow-hidden border border-border/50 hover:border-neon-pink/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,0,150,0.15)]">
                <div className="relative aspect-square overflow-hidden">
                  {song.cover ? (
                    <Image
                      src={song.cover}
                      alt={`${song.title} cover art`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-neon-purple/25 via-secondary to-neon-cyan/15">
                      <Disc3 className="h-10 w-10 text-neon-cyan/60" />
                      <span className="font-display uppercase tracking-[0.2em] text-xs text-muted-foreground">
                        Artwork coming soon
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide mb-4">
                    {song.title}
                  </h3>
                  {song.href ? (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-border bg-transparent hover:border-neon-cyan hover:text-neon-cyan hover:bg-transparent"
                    >
                      <Link href={song.href} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4 mr-2" />
                        Listen
                      </Link>
                    </Button>
                  ) : (
                    <p className="text-sm text-muted-foreground">Out now on all major platforms.</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {platforms.some((platform) => platform.href !== "#") && (
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-muted-foreground mb-5 sm:mb-6">Available on all major platforms</p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {platforms.map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors text-sm uppercase tracking-wider"
                >
                  <platform.icon className="h-4 w-4" />
                  {platform.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
