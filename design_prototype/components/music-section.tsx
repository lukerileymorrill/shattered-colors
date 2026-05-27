import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"

const albums = [
  {
    title: "Neon Oblivion",
    year: "2024",
    image: "/images/album-neon.jpg",
    tracks: 12,
    featured: true,
  },
  {
    title: "Echoes in the Void",
    year: "2022",
    image: "/images/album-echoes.jpg",
    tracks: 10,
    featured: false,
  },
  {
    title: "Fractured Light",
    year: "2020",
    image: "/images/album-fractured.jpg",
    tracks: 11,
    featured: false,
  },
]

export function MusicSection() {
  return (
    <section id="music" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-neon-cyan/30 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-neon-cyan uppercase tracking-[0.3em] text-sm mb-4">Discography</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Our <span className="text-neon-pink">Music</span>
          </h2>
        </div>

        {/* Albums Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <div 
              key={album.title}
              className={`group relative ${album.featured ? 'md:-mt-8' : ''}`}
            >
              {/* Album Card */}
              <div className="relative bg-card rounded-lg overflow-hidden border border-border/50 hover:border-neon-pink/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,0,150,0.15)]">
                {/* Featured Badge */}
                {album.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-neon-pink text-foreground text-xs uppercase tracking-wider px-3 py-1 rounded font-semibold">
                    New Release
                  </div>
                )}
                
                {/* Album Cover */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="lg" 
                      className="rounded-full w-16 h-16 bg-neon-pink hover:bg-neon-pink/80 shadow-[0_0_30px_rgba(255,0,150,0.5)]"
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </Button>
                  </div>
                </div>

                {/* Album Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-neon-cyan text-sm">{album.year}</span>
                    <span className="text-muted-foreground text-sm">{album.tracks} tracks</span>
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-4">
                    {album.title}
                  </h3>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-border hover:border-neon-cyan hover:text-neon-cyan"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Play
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-border hover:border-neon-pink hover:text-neon-pink"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Streaming Platforms */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Available on all major platforms</p>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground/50">
            {['Spotify', 'Apple Music', 'YouTube Music', 'Amazon Music', 'Tidal'].map((platform) => (
              <span key={platform} className="text-sm uppercase tracking-wider hover:text-neon-cyan transition-colors cursor-pointer">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
