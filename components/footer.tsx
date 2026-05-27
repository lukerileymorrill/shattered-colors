import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="#home" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-neon-pink to-neon-cyan flex items-center justify-center">
              <span className="font-display font-bold text-background text-xs">SC</span>
            </div>
            <span className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Shattered Colors
            </span>
          </Link>

          <p className="text-muted-foreground text-sm text-center">
            &copy; {new Date().getFullYear()} Shattered Colors. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-neon-cyan transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-neon-cyan transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
