"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col h-svh justify-between pt-24 relative">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative z-10 px-4">
        <div className="reveal inline-block" style={{ animationDelay: "0ms" }}>
          <Pill className="mb-6">HEAVEN'S ORDER</Pill>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient text-foreground reveal" style={{ animationDelay: "120ms" }}>
          BEYOND <i className="font-light text-primary">REALITY</i>
        </h1>
        <p className="font-sans text-sm sm:text-base text-balance mt-8 max-w-[640px] mx-auto text-[rgba(243,234,215,0.72)] reveal" style={{ animationDelay: "240ms" }}>
          A cinematic archive for Heaven's Order, where narrative, interface, and atmosphere share the same visual language.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <div className="reveal" style={{ animationDelay: "360ms" }}>
            <Link href="#manuscript">
              <Button
                className="w-full sm:w-auto"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                ENTER MANUSCRIPT →
              </Button>
            </Link>
          </div>
          <div className="reveal" style={{ animationDelay: "480ms" }}>
            <Link href="#portfolio">
              <Button
                variant="default"
                className="w-full sm:w-auto bg-transparent border-primary text-primary hover:bg-primary/10"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                EXPLORE ARCHIVE
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 pb-8 flex flex-col items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/40">
        <span>SCROLL TO ENTER</span>
        <span className="inline-block animate-bounce">↓</span>
      </div>
    </div>
  )
}
