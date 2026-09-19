import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "MANUSCRIPT", href: "#manuscript" },
  { name: "SOMETHING", href: "#something" },
  { name: "CONTACT", href: "#contact" },
  { name: "PORTFOLIO", href: "#portfolio" },
  { name: "COLOR", href: "#color" },
  { name: "MOTION", href: "#motion" },
  { name: "STORY", href: "#story" },
]

export const Header = () => {
  return (
    <div className="fixed z-50 pt-6 md:pt-8 top-0 left-0 w-full backdrop-blur-md border-b border-foreground/5 bg-background/60">
      <header className="flex items-center justify-between container">
        <Link href="/">
          <Logo className="w-[120px] md:w-[140px] text-primary" />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-6">
          {navItems.map((item) => (
            <Link
              className="text-[11px] font-mono uppercase tracking-[0.18em] text-foreground/60 hover:text-primary duration-150 transition-colors ease-out"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}