import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-8">
      {/* Hairline that fades out at both ends instead of ruling straight across */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="" width={512} height={467} className="h-8 w-auto shrink-0" />
            <span className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Shattered Colors
            </span>
          </Link>

          <p className="text-muted-foreground text-sm text-center">
            &copy; {new Date().getFullYear()} Shattered Colors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
