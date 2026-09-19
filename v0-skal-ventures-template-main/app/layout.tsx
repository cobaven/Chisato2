import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import "./globals.css"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Heaven's Order — Light Novel Archive | Gaurav Kumar Patra",
  description:
    "A cinematic archive for Heaven's Order, where narrative, interface, and atmosphere share the same visual language. Explore the manuscript, persona, and transmission.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}