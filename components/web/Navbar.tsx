"use client"

import type React from "react"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-in-view"
import { motion } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()

  const navLinks = [
    { href: "hero", label: "Home" },
    // { href: "experience", label: "About" },
    // { href: "skills", label: "Lab" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    if (isMobile && isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-[#1A0B2E] backdrop-blur-md border-b border-purple-500/10 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-0 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
        >
          G T
        </motion.div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                whileHover={{ color: "#c084fc" }}
                className="text-[#FFFFFF] text-xl hover:text-purple-300 font-semibold transition-colors cursor-pointer"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu className="w-6 h-6 text-neutral-300" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-neutral-900 border-neutral-800">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={`#${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="text-neutral-300 text-lg hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </motion.nav>
  )
}
