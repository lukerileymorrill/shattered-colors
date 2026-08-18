"use client"

import { useEffect, useRef } from "react"

type TicketTailorWidgetProps = {
  /** Public Ticket Tailor event URL, e.g. https://www.tickettailor.com/events/shatteredrockfest/2345793 */
  eventUrl: string
  className?: string
}

export function TicketTailorWidget({ eventUrl, className }: TicketTailorWidgetProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // widget.js only adopts a script whose parent className is exactly
    // "tt-widget", and it inserts its iframe where the script sits — so it has
    // to be injected, not rendered by React. (Its other opt-in, type="inline",
    // is unusable: a non-JS type stops the browser executing the script.)
    const script = document.createElement("script")
    script.src = "https://www.tickettailor.com/js/widgets/min/widget.js"
    script.setAttribute("data-url", `${eventUrl.replace(/\/$/, "")}/book`)
    script.setAttribute("data-type", "inline")
    script.setAttribute("data-inline-minimal", "false")
    script.setAttribute("data-inline-show-logo", "false")
    // Must be true: with no background fill the widget is transparent, and its
    // dark text lands on the page's dark background — unreadable.
    script.setAttribute("data-inline-bg-fill", "true")
    script.setAttribute("data-inline-ref", "website_widget")
    mount.appendChild(script)

    return () => {
      mount.innerHTML = ""
    }
  }, [eventUrl])

  return (
    <div className={className}>
      {/* className must stay exactly "tt-widget" — widget.js compares it with === */}
      <div ref={mountRef} className="tt-widget" />
    </div>
  )
}
