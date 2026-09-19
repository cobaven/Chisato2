import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/motion/Reveal"

const chapters = [
  { number: "01", title: "Chapter 1: Rebirth", excerpt: "The first breath of a world that had forgotten its own name.", pages: "12 pages" },
  { number: "02", title: "Chapter 2: Mysterious Approach", excerpt: "Something arrives from beyond the edge of the map, without a name.", pages: "14 pages" },
  { number: "03", title: "Chapter 3: Pretty Acquaintance Around Here", excerpt: "A stranger walks into the tavern and the rules begin to change.", pages: "11 pages" },
  { number: "04", title: "Chapter 4: School Days", excerpt: "The bell rings. The ink is still wet. The lesson begins.", pages: "13 pages" },
]

export function Manuscript() {
  return (
    <section id="manuscript" className="relative py-28 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <Reveal delay={0}>
          <span className="font-mono text-[11px] tracking-[0.3em] text-primary/70">02 // MANUSCRIPT</span>
          <h2 className="text-4xl md:text-5xl font-sentient text-foreground mt-6 mb-6">
            Four fragments currently exist <i className="font-light text-primary">inside the archive.</i>
          </h2>
          <div className="w-16 h-px bg-primary/60 mb-8" />
          <p className="text-foreground/60 text-lg max-w-2xl">Select a chapter to open the reader.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chapters.map((chapter, i) => (
            <Reveal key={chapter.number} delay={i * 100}>
              <Link
                href={`/chapter/${chapter.number}`}
                className="group relative block p-8 border border-foreground/10 bg-card hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(232,196,107,0.12)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-[0.3em] text-primary/70">CHAPTER {chapter.number}</span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/40">{chapter.pages}</span>
                  </div>

                  <h3 className="text-2xl font-sentient text-foreground group-hover:text-primary transition-colors duration-300">
                    {chapter.title.replace(/^Chapter \d+:\s/, "")}
                  </h3>

                  <p className="text-foreground/60 text-sm leading-relaxed">{chapter.excerpt}</p>

                  <div className="flex items-center gap-2 text-primary font-mono text-[11px] tracking-[0.2em] uppercase">
                    <span>Open Chapter</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
