import { contacts, socialLinks } from "@/lib/site"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Feathered at the top so it blends out of About; the glows sit high
          enough not to get clipped where the footer starts. */}
      <div className="absolute inset-0 fade-edge-t pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/15 via-neon-purple/5 to-transparent" />
        <div className="absolute bottom-10 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-neon-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-neon-cyan/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <p className="text-neon-cyan uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4">Stay Connected</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
          Follow <span className="text-neon-pink">Us</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10 sm:mb-12">
          Follow along for new music, show announcements, and behind-the-scenes.
        </p>

        <div className="mb-12 sm:mb-16">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-center">
          {contacts.map((contact) => (
            <div key={contact.email}>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider mb-2">{contact.label}</h3>
              <a
                href={`mailto:${contact.email}`}
                className={
                  contact.accent === "pink"
                    ? "text-neon-pink hover:text-neon-pink/80 transition-colors break-words"
                    : "text-neon-cyan hover:text-neon-cyan/80 transition-colors break-words"
                }
              >
                {contact.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
