import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="relative bg-sidebar-primary border-t border-foreground/10">
      <div className="px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Logo className="w-[120px] mb-4 text-primary" />
              <p className="text-foreground/70 text-sm leading-relaxed">
                A cinematic archive for Heaven's Order.
              </p>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-4">Archive</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300">
                    Persona
                  </Link>
                </li>
                <li>
                  <Link href="#manuscript" className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300">
                    Manuscript
                  </Link>
                </li>
                <li>
                  <Link href="#something" className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300">
                    Something
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-4">Languages</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#color" className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300">
                    Color
                  </Link>
                </li>
                <li>
                  <Link href="#motion" className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300">
                    Motion
                  </Link>
                </li>
                <li>
                  <Link href="#story" className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300">
                    Story
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-4">Transmission</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:hello@heavensorder.archive" className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300">
                    Email ↗
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300">
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary text-sm transition-colors duration-300">
                    LinkedIn ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-foreground/50 text-sm">
                © 2026 GAURAV KUMAR PATRA. LIGHT NOVEL ARCHIVE
              </p>
              <div className="flex gap-6">
                <Link href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors duration-300">
                  Privacidade
                </Link>
                <Link href="#" className="text-foreground/50 hover:text-primary text-sm transition-colors duration-300">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}