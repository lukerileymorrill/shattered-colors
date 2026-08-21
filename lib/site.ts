import type { ComponentType, SVGProps } from "react"

import { AppleMusicIcon, FacebookIcon, InstagramIcon, SpotifyIcon, TikTokIcon, YouTubeIcon } from "@/components/social-icons"

export const FESTIVAL_URL = "https://www.tickettailor.com/events/shatteredrockfest/2345793"

/**
 * Single place to edit the band's contact details.
 * TODO: swap these for the real addresses before the next deploy.
 */
export const contacts = [
  { label: "Booking", email: "booking@shatteredcolors.com", accent: "pink" as const },
  { label: "General", email: "info@shatteredcolors.com", accent: "cyan" as const },
]

/**
 * Order matters — this is the order they render in.
 * TODO: fill in the real profile URLs; anything left as "#" is hidden on the site.
 */
export const socialLinks: {
  label: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}[] = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Spotify", href: "#", icon: SpotifyIcon },
  { label: "Apple Music", href: "#", icon: AppleMusicIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "TikTok", href: "#", icon: TikTokIcon },
]
