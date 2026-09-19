import { Reveal } from "@/components/motion/Reveal"

export function Motion() {
  const motions = [
    { name: "Reveal Animation", description: "Particles emerge from the center outward in a eased cinematic sweep on load." },
    { name: "Periodic Noise Flow", description: "A continuous sine-cosine displacement field drives organic, looping movement." },
    { name: "Depth of Field", description: "Aperture and focus blur particles by distance from the camera plane." },
    { name: "Hover Introspection", description: "Cursor proximity pulls the field into a focused, introspective state." },
    { name: "Scroll Entry", description: "A typographic scroll cue guides the reader from the hero into the archive." },
    { name: "Transition Easing", description: "Every state change eases through a restrained, cinematic curve — never abrupt." },
  ]

  return (
    <section id="motion" className="relative py-28 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <Reveal delay={0}>
          <span className="font-mono text-[11px] tracking-[0.3em] text-primary/70">MOTION</span>
          <h2 className="text-4xl md:text-5xl font-sentient text-foreground mt-6 mb-6">Atmosphere in motion, always restrained.</h2>
          <div className="w-16 h-px bg-primary/60 mb-8" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {motions.map((motion, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group relative p-6 rounded-lg border border-foreground/10 bg-card hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(232,196,107,0.12)] transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-primary/70">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-sentient text-foreground mt-3 mb-2 group-hover:text-primary transition-colors duration-300">{motion.name}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{motion.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
