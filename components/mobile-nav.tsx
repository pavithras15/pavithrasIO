"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin } from "lucide-react"

const navItems = [
  { href: "#about", label: "About", color: "text-blue-500" },
  { href: "#skills", label: "Skills", color: "text-green-500" },
  { href: "#experience", label: "Experience", color: "text-purple-500" },
  { href: "#projects", label: "Projects", color: "text-orange-500" },
  { href: "#education", label: "Education", color: "text-pink-500" },
  { href: "#contact", label: "Contact", color: "text-red-500" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="relative z-50">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 mx-4 bg-background/95 backdrop-blur-lg border rounded-lg shadow-xl z-50"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 ${item.color}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center gap-4 pt-4 border-t"
                >
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com/pavithras15" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/pavithra--s/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
