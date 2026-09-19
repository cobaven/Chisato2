import { Reveal } from "@/components/motion/Reveal"

export function Story() {
  return (
    <section id="story" className="relative py-28 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <Reveal delay={0}>
          <span className="font-mono text-[11px] tracking-[0.3em] text-primary/70">STORY</span>
          <h2 className="text-4xl md:text-5xl font-sentient text-foreground mt-6 mb-6">Ideas become worlds when the system is built to carry them.</h2>
          <div className="w-16 h-px bg-primary/60 mb-8" />
        </Reveal>

        <Reveal delay={200}>
          <div className="space-y-8 text-foreground/80 leading-relaxed text-lg">
            <Reveal delay={200}>
              <p>This archive is the system that carries the story. Every fragment — persona, manuscript, color, motion, and transmission — is a chapter in a larger system designed to hold narrative, interface, and atmosphere in one visual language.</p>
            </Reveal>
            <Reveal delay={320}>
              <p>The visual language follows a cinematic light-novel cover: illuminated sand, deep shadows, restrained geometry, and typography designed for reading. The archive is built to be explored, not consumed.</p>
            </Reveal>
            <Reveal delay={440}>
              <p>Four fragments currently exist inside the archive. Each one is a doorway. Enter the manuscript, unlock the something, and follow the transmission to where the story continues.</p>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
