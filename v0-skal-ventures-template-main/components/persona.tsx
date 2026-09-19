export function Persona() {
  return (
    <section id="about" className="relative py-28 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-3">
          <div className="sticky top-32">
            <span className="font-mono text-[11px] tracking-[0.3em] text-primary/70">01 // PERSONA</span>
          </div>
        </div>

        <div className="lg:col-span-9">
          <h2 className="text-4xl md:text-5xl font-sentient text-foreground mb-8">
            A developing storyteller building expansive worlds <i className="font-light text-primary">through prose, atmosphere, and systems.</i>
          </h2>

          <div className="w-16 h-px bg-primary/60 mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                GAURAV KUMAR PATRA is a developing storyteller building expansive worlds through prose, atmosphere, and systems.
              </p>
              <p className="text-base text-foreground/60">
                The visual language now follows a cinematic light-novel cover: illuminated sand, deep shadows, restrained geometry, and typography designed for reading.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] border border-foreground/10 bg-card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-sentient text-6xl text-foreground/10">HO</div>
                    <span className="font-mono text-[10px] tracking-[0.4em] text-primary/60">ARCHIVE</span>
                  </div>
                </div>
              </div>
              <span className="absolute -bottom-3 -right-3 font-mono text-[10px] tracking-[0.3em] text-foreground/30">
                ID-001
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}