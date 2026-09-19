export function Color() {
  const swatches = [
    { name: "Illuminated Sand", hex: "#e8c46b", role: "primary / highlight" },
    { name: "Deep Shadow", hex: "#0a0806", role: "background" },
    { name: "Warm Paper", hex: "#f3ead7", role: "foreground" },
    { name: "Film Grain", hex: "#a89880", role: "muted" },
    { name: "Ink", hex: "#3a332a", role: "border" },
    { name: "Accent Gold", hex: "#f0d88a", role: "glow" },
  ]

  return (
    <section id="color" className="relative py-28 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[11px] tracking-[0.3em] text-primary/70">COLOR</span>
          <h2 className="text-4xl md:text-5xl font-sentient text-foreground mt-6 mb-6">
            Illuminated sand, deep shadows, restrained geometry.
          </h2>
          <div className="w-16 h-px bg-primary/60 mb-8" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {swatches.map((swatch) => (
            <div key={swatch.hex} className="flex flex-col gap-3">
              <div
                className="aspect-square border border-foreground/10"
                style={{ background: swatch.hex }}
              />
              <div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-foreground/80">
                  {swatch.hex.toUpperCase()}
                </div>
                <div className="text-xs text-foreground/50 mt-1">{swatch.name}</div>
                <div className="text-[10px] text-foreground/40 mt-1">{swatch.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}