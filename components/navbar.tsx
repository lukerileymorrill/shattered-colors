"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#shows", label: "Festival" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-neon-pink to-neon-cyan flex items-center justify-center">
              <span className="font-display font-bold text-background text-lg">SC</span>
            </div>
            <span className="font-display text-xl font-bold uppercase tracking-wider hidden sm:block">
              Shattered Colors
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll
                className="text-muted-foreground hover:text-neon-cyan transition-colors uppercase tracking-wider text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-neon-pink hover:bg-neon-pink/80 text-foreground uppercase tracking-wider shadow-[0_0_15px_rgba(255,0,150,0.3)]"
            >
              <Link href="#shows" scroll>
                Get Tickets
              </Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-secondary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll
                onClick={() => setIsOpen(false)}
                className="block text-muted-foreground hover:text-neon-cyan transition-colors uppercase tracking-wider text-sm font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-neon-pink hover:bg-neon-pink/80 text-foreground uppercase tracking-wider mt-4"
            >
              <Link href="#shows" scroll onClick={() => setIsOpen(false)}>
                Get Tickets
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
