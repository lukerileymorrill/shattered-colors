"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#music", label: "Music" },
  { href: "#about", label: "About" },
  { href: "#tour", label: "Tour" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-neon-pink to-neon-cyan flex items-center justify-center">
              <span className="font-display font-bold text-background text-lg">SC</span>
            </div>
            <span className="font-display text-xl font-bold uppercase tracking-wider hidden sm:block">
              Shattered Colors
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-neon-cyan transition-colors uppercase tracking-wider text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button 
              size="sm"
              className="bg-neon-pink hover:bg-neon-pink/80 text-foreground uppercase tracking-wider shadow-[0_0_15px_rgba(255,0,150,0.3)]"
            >
              Get Tickets
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-muted-foreground hover:text-neon-cyan transition-colors uppercase tracking-wider text-sm font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button 
              className="w-full bg-neon-pink hover:bg-neon-pink/80 text-foreground uppercase tracking-wider mt-4"
            >
              Get Tickets
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
