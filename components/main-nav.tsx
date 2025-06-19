"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

const navItems = [
  { href: "#about", label: "About", color: "hover:text-blue-500" },
  { href: "#skills", label: "Skills", color: "hover:text-green-500" },
  { href: "#experience", label: "Experience", color: "hover:text-purple-500" },
  { href: "#projects", label: "Projects", color: "hover:text-orange-500" },
  { href: "#education", label: "Education", color: "hover:text-pink-500" },
]

export function MainNav() {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="flex items-center gap-6">
      <Link href="/" className="font-bold text-2xl gradient-text">
        Pavithra S.M.
      </Link>

      <nav className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <motion.div
            key={item.href}
            onHoverStart={() => setHoveredItem(item.href)}
            onHoverEnd={() => setHoveredItem(null)}
            className="relative"
          >
            <Link
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative z-10",
                item.color,
                pathname === item.href ? "text-foreground" : "text-foreground/70",
              )}
            >
              {item.label}
            </Link>
            {hoveredItem === item.href && (
              <motion.div
                layoutId="navbar-hover"
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </nav>

      {/* Social Links */}
      <div className="hidden sm:flex items-center gap-2 ml-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-gray-600/10"
            asChild
          >
            <a href="https://github.com/pavithras15" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10"
            asChild
          >
            <a href="https://www.linkedin.com/in/pavithra--s/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </motion.div>
      </div>
      <MobileNav />
    </div>
  )
}
