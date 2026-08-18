import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Ticket, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TicketTailorWidget } from "@/components/tickettailor-widget"

const FESTIVAL_URL = "https://www.tickettailor.com/events/shatteredrockfest/2345793"

const details: { icon: typeof Calendar; label: string; lines: string[] }[] = [
  {
    icon: Calendar,
    label: "Date",
    lines: ["Saturday", "September 12, 2026"],
  },
  {
    icon: Clock,
    label: "Time",
    lines: ["Music 3pm – 10pm", "Bar closes 2am"],
  },
  {
    icon: MapPin,
    label: "Location",
    lines: ["State Fare Bar & Restaurant", "748 Frederick Rd", "Catonsville, MD 21228"],
  },
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

      <div className="relative z-10 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-neon-cyan uppercase tracking-[0.3em] text-sm mb-4">Rock For Life</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
            Shattered <span className="text-neon-pink">Rock Festival</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Come rock out for a cause in Catonsville, MD and support us in bringing awareness to mental health and
            suicide prevention. All day music, food, and drinks.
          </p>
        </div>

        {/* Detail strip — full width so it anchors the top of the section */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="flex items-start gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-5 hover:border-neon-cyan/40 transition-colors duration-300"
            >
              <detail.icon className="h-5 w-5 text-neon-cyan shrink-0 mt-0.5" />
              <div>
                <span className="block font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                  {detail.label}
                </span>
                {detail.lines.map((line) => (
                  <p key={line} className="text-sm text-foreground leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-start">
          {/* Poster — frame matches the artwork's native 9:16 so nothing crops */}
          <div className="flex flex-col gap-6">
            <Link href={FESTIVAL_URL} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-border/50 group-hover:border-neon-pink/50 transition-all duration-300 shadow-[0_0_25px_rgba(255,0,150,0.15)] group-hover:shadow-[0_0_35px_rgba(255,0,150,0.35)]">
                <Image
                  src="/images/shattered-rock-festival.jpg"
                  alt="Shattered Rock Festival — September 12, 2026, Catonsville, MD"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
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

          {/* Booking widget — light card, since the embed paints its own light background */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 sm:p-6">
            <p className="font-display text-lg font-bold uppercase tracking-wide mb-4">Grab Your Tickets</p>
            <div className="bg-white rounded-md overflow-hidden">
              <TicketTailorWidget eventUrl={FESTIVAL_URL} className="min-h-[30rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
