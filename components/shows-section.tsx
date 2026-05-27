import { MapPin, Calendar, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"

type ShowStatus = "on-sale" | "low-tickets" | "sold-out"

const shows: { date: string; city: string; venue: string; status: ShowStatus }[] = [
  { date: "MAY 15, 2026", city: "Los Angeles, CA", venue: "The Wiltern", status: "on-sale" },
  { date: "MAY 18, 2026", city: "San Francisco, CA", venue: "The Fillmore", status: "low-tickets" },
  { date: "MAY 22, 2026", city: "Seattle, WA", venue: "Showbox SoDo", status: "on-sale" },
  { date: "MAY 25, 2026", city: "Denver, CO", venue: "Ogden Theatre", status: "on-sale" },
  { date: "MAY 28, 2026", city: "Chicago, IL", venue: "House of Blues", status: "sold-out" },
  { date: "JUN 1, 2026", city: "New York, NY", venue: "Terminal 5", status: "on-sale" },
]

export function ShowsSection() {
  return (
    <section id="shows" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-neon-cyan uppercase tracking-[0.3em] text-sm mb-4">On the Road</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
            Upcoming <span className="text-neon-pink">Shows</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Catch us live on the Neon Oblivion World Tour 2026
          </p>
        </div>

        <div className="space-y-4">
          {shows.map((show, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 sm:p-6 hover:border-neon-pink/50 transition-all duration-300 hover:bg-card/80"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-3 sm:w-40">
                  <Calendar className="h-4 w-4 text-neon-cyan shrink-0" />
                  <span className="font-display text-sm font-semibold uppercase tracking-wider">
                    {show.date}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-4 w-4 text-neon-pink shrink-0" />
                    <span className="font-display text-lg font-bold uppercase tracking-wide">
                      {show.city}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm pl-6">{show.venue}</span>
                </div>

                <div className="flex items-center gap-4 sm:ml-auto">
                  {show.status === "sold-out" ? (
                    <span className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
                      Sold Out
                    </span>
                  ) : (
                    <>
                      {show.status === "low-tickets" && (
                        <span className="text-neon-pink text-xs uppercase tracking-wider font-medium animate-pulse">
                          Low Tickets
                        </span>
                      )}
                      <Button
                        size="sm"
                        className="bg-neon-pink hover:bg-neon-pink/80 text-foreground uppercase tracking-wider shadow-[0_0_15px_rgba(255,0,150,0.3)] hover:shadow-[0_0_25px_rgba(255,0,150,0.5)]"
                      >
                        <Ticket className="h-4 w-4 mr-2" />
                        Tickets
                      </Button>
                    </>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-pink/0 via-neon-pink/5 to-neon-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-neon-cyan text-neon-cyan bg-transparent hover:bg-neon-cyan/10 hover:text-neon-cyan uppercase tracking-wider"
          >
            View All Shows
          </Button>
        </div>
      </div>
    </section>
  )
}
