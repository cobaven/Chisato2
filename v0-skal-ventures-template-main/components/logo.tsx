import type React from "react"

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div className="flex items-center gap-2" {...(props as any)}>
      <div className="relative size-9 shrink-0">
        <div className="absolute inset-0 border border-primary/60 rotate-45" />
        <div className="absolute inset-1 border border-primary/30 -rotate-45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-sentient text-[10px] tracking-[0.3em] text-primary">HO</span>
        </div>
      </div>
      <span className="font-sentient text-lg tracking-[0.2em] text-foreground leading-none">
        ARCHIVE
      </span>
    </div>
  )
}