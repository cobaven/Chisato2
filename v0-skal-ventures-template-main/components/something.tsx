"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"
import { Reveal } from "@/components/motion/Reveal"

const ACCESS_CODE = "1234567890"

export function Something() {
  const [code, setCode] = useState("")
  const [error, setError] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  const handleUnlock = () => {
    if (code.trim() === ACCESS_CODE) {
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <section id="something" className="relative py-28 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <Reveal delay={0}>
          <span className="font-mono text-[11px] tracking-[0.3em] text-primary/70">03 // SOMETHING</span>
          <h2 className="text-4xl md:text-5xl font-sentient text-foreground mt-6 mb-6">
            A locked page. <i className="font-light text-primary">Enter the code to proceed.</i>
          </h2>
          <div className="w-16 h-px bg-primary/60 mb-8" />
        </Reveal>

        <Reveal delay={200}>
          <div className="relative border border-foreground/10 bg-card p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />

            <div className="relative z-10">
              {unlocked ? (
                <div className="text-center">
                  <div className="font-sentient text-5xl md:text-6xl text-primary mb-6">UNLOCKED</div>
                  <p className="text-foreground/70 text-lg max-w-xl mx-auto">Access granted. The restricted manuscript is now open.</p>
                  <div className="mt-8">
                    <Link href="/chapter/1">
                      <Button>ENTER ARCHIVE →</Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[11px] tracking-[0.3em] text-foreground/50">ACCESS CODE</span>
                    <span className="font-mono text-[11px] tracking-[0.3em] text-foreground/30">ACCESS RESTRICTED // {ACCESS_CODE.length} DIGITS</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={ACCESS_CODE.length}
                      value={code}
                      onChange={(e) => { setCode(e.target.value.replace(/\D/g, "")); setError(false) }}
                      placeholder="Enter 10-digit code"
                      className="flex-1 bg-background/60 border border-foreground/20 text-foreground font-mono text-lg px-4 py-3 tracking-[0.3em] focus:outline-none focus:border-primary/60 transition-colors"
                    />
                    <Button onClick={handleUnlock} className="glow-pulse-btn">UNLOCK</Button>
                  </div>

                  {error && <p className="mt-4 font-mono text-[11px] tracking-[0.2em] text-red-500/80">ACCESS DENIED — INVALID CODE</p>}
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
