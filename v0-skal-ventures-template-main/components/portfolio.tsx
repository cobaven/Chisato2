import { Reveal } from "@/components/motion/Reveal"

export function Portfolio() {
  const projects = [
    { name: "Heaven's Order — Light Novel Archive", category: "Design System", description: "A cinematic archive where narrative, interface, and atmosphere share the same visual language." },
    { name: "Illuminated Sand Palette", category: "Color", description: "A restrained palette of sand, deep shadow, and amber gold built for long-form reading." },
    { name: "Particle Atmosphere System", category: "Motion", description: "A WebGL particle field driven by periodic noise, depth-of-field, and reveal animation." },
    { name: "Manuscript Reader", category: "Interface", description: "A chapter-based reader with locked fragments, access codes, and a cinematic scroll." },
    { name: "Transmission Network", category: "Systems", description: "Contact routing through email, GitHub, and LinkedIn with a restrained, typographic surface." },
    { name: "Archive Branding", category: "Identity", description: "Typography designed for reading — illuminated sand, deep shadows, restrained geometry." },
  ]

  return (
    <section id="portfolio" className="relative py-28 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <Reveal delay={0}>
          <span className="font-mono text-[11px] tracking-[0.3em] text-primary/70">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-sentient text-foreground mt-6 mb-6">
            Works from the archive <i className="font-light text-primary">Ideas × Design × Story.</i>
          </h2>
          <div className="w-16 h-px bg-primary/60 mb-8" />
          <p className="text-foreground/60 text-lg max-w-2xl">Selected systems where narrative, interface, and atmosphere share the same visual language.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="group relative p-6 rounded-lg border border-foreground/10 bg-card hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(232,196,107,0.12)] transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary/70 bg-primary/10 px-3 py-1 rounded-full">{project.category}</span>
                  </div>
                  <h3 className="text-lg font-sentient text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{project.name}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
