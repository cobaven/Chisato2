"use client"

import { cn } from "@/lib/utils"
import * as Dialog from "@radix-ui/react-dialog"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface MobileMenuProps {
  className?: string
}

const menuItems = [
  { name: "ABOUT", href: "#about" },
  { name: "MANUSCRIPT", href: "#manuscript" },
  { name: "SOMETHING", href: "#something" },
  { name: "CONTACT", href: "#contact" },
  { name: "PORTFOLIO", href: "#portfolio" },
  { name: "COLOR", href: "#color" },
  { name: "MOTION", href: "#motion" },
  { name: "STORY", href: "#story" },
]

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn("group lg:hidden p-2 text-foreground transition-colors", className)}
          aria-label="Open menu"
        >
          <Menu className="group-[[data-state=open]]:hidden" size={24} />
          <X className="hidden group-[[data-state=open]]:block" size={24} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div data-overlay="true" className="fixed z-30 inset-0 bg-black/60 backdrop-blur-sm" />

        <Dialog.Content
          onInteractOutside={(e) => {
            if (e.target instanceof HTMLElement && e.target.dataset.overlay !== "true") {
              e.preventDefault()
            }
          }}
          className="fixed top-0 left-0 w-full z-40 py-28 md:py-40"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          <nav className="flex flex-col space-y-6 container mx-auto">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="text-xl font-mono uppercase text-foreground/60 transition-colors ease-out duration-150 hover:text-primary py-2 tracking-[0.2em]"
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}