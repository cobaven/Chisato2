"use client"

import { Hero } from "@/components/hero"
import { Persona } from "@/components/persona"
import { Manuscript } from "@/components/manuscript"
import { Something } from "@/components/something"
import { Transmission } from "@/components/transmission"
import { Portfolio } from "@/components/portfolio"
import { Color } from "@/components/color"
import { Motion } from "@/components/motion"
import { Story } from "@/components/story"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Hero />
      <Persona />
      <Manuscript />
      <Something />
      <Transmission />
      <Portfolio />
      <Color />
      <Motion />
      <Story />
      <Footer />
    </>
  )
}