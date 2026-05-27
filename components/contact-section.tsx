"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { Instagram, Twitter, Youtube, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Music, href: "#", label: "Spotify" },
]

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/10 via-background to-background" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-neon-cyan uppercase tracking-[0.3em] text-sm mb-4">Stay Connected</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
          Join the <span className="text-neon-pink">Movement</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
          Get exclusive updates, early ticket access, and behind-the-scenes content delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-16">
          {!submitted ? (
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary/50 border-border focus-visible:ring-neon-pink/40 focus-visible:border-neon-pink"
                required
              />
              <Button
                type="submit"
                className="bg-neon-pink hover:bg-neon-pink/80 text-foreground uppercase tracking-wider px-6 shadow-[0_0_20px_rgba(255,0,150,0.3)] hover:shadow-[0_0_30px_rgba(255,0,150,0.5)] shrink-0"
              >
                Subscribe
              </Button>
            </div>
          ) : (
            <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-4">
              <p className="text-neon-cyan font-medium">
                You&apos;re in! Welcome to the Shattered Colors family.
              </p>
            </div>
          )}
        </form>

        <div className="mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6">Follow Us</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-2">Booking Inquiries</h3>
            <a
              href="mailto:booking@shatteredcolors.com"
              className="text-neon-pink hover:text-neon-pink/80 transition-colors"
            >
              booking@shatteredcolors.com
            </a>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-2">Press &amp; Media</h3>
            <a
              href="mailto:press@shatteredcolors.com"
              className="text-neon-cyan hover:text-neon-cyan/80 transition-colors"
            >
              press@shatteredcolors.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
