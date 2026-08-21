"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FESTIVAL_URL } from "@/lib/site"

// Absolute hrefs so the anchors still work from /bios
const navLinks = [
  { href: "/#shows", label: "Festival" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* alt="" — the adjacent text already names the link */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt=""
              width={512}
              height={467}
              priority
              className="h-10 w-auto shrink-0"
            />
            <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider">
              Shattered Colors
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll
                className="text-muted-foreground hover:text-neon-cyan transition-colors uppercase tracking-wider text-sm font-medium whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-neon-pink hover:bg-neon-pink/80 text-foreground uppercase tracking-wider shadow-[0_0_15px_rgba(255,0,150,0.3)]"
            >
              <Link href={FESTIVAL_URL} target="_blank" rel="noopener noreferrer">
                Get Tickets
              </Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-secondary shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll
                onClick={() => setIsOpen(false)}
                className="block text-muted-foreground hover:text-neon-cyan transition-colors uppercase tracking-wider text-sm font-medium py-2.5"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-neon-pink hover:bg-neon-pink/80 text-foreground uppercase tracking-wider mt-4"
            >
              <Link
                href={FESTIVAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Get Tickets
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
