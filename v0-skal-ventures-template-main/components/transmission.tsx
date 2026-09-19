"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Mail, Github, ExternalLink } from "lucide-react"

export function Transmission() {
  return (
    <section id="contact" className="relative py-28 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[11px] tracking-[0.3em] text-primary/70">04 // TRANSMISSION</span>
          <h2 className="text-4xl md:text-5xl font-sentient text-foreground mt-6 mb-6">
            Ideas become worlds <i className="font-light text-primary">when the system is built to carry them.</i>
          </h2>
          <div className="w-16 h-px bg-primary/60 mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:hello@heavensorder.archive"
            className="group relative flex flex-col gap-4 p-8 border border-foreground/10 bg-card hover:border-primary/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center gap-3">
              <Mail className="size-5 text-primary" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-foreground/60">EMAIL ↗</span>
            </div>
            <div className="relative z-10">
              <span className="font-sentient text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                hello@heavensorder.archive
              </span>
            </div>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col gap-4 p-8 border border-foreground/10 bg-card hover:border-primary/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center gap-3">
              <Github className="size-5 text-primary" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-foreground/60">GITHUB ↗</span>
            </div>
            <div className="relative z-10">
              <span className="font-sentient text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                @gauravkumarpatra
              </span>
            </div>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col gap-4 p-8 border border-foreground/10 bg-card hover:border-primary/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex items-center gap-3">
              <ExternalLink className="size-5 text-primary" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-foreground/60">LINKEDIN ↗</span>
            </div>
            <div className="relative z-10">
              <span className="font-sentient text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                Gaurav Kumar Patra
              </span>
            </div>
          </a>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="#manuscript">
            <Button>ENTER MANUSCRIPT →</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}