"use client"

import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Home, User, Code, Briefcase, FolderKanban, GraduationCap, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const menuItems = [
  { href: "#hero", icon: Home, label: "Home", color: "from-violet-500 to-purple-600" },
  { href: "#about", icon: User, label: "About", color: "from-blue-500 to-indigo-600" },
  { href: "#skills", icon: Code, label: "Skills", color: "from-emerald-500 to-teal-600" },
  { href: "#experience", icon: Briefcase, label: "Experience", color: "from-amber-500 to-orange-600" },
  { href: "#projects", icon: FolderKanban, label: "Projects", color: "from-rose-500 to-pink-600" },
  { href: "#education", icon: GraduationCap, label: "Education", color: "from-cyan-500 to-blue-600" },
  { href: "#contact", icon: Mail, label: "Connect", color: "from-violet-500 to-purple-600" },
]

export function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [binaryText, setBinaryText] = useState("")

  useEffect(() => {
    // Generate random binary pattern
    const generateBinary = () => {
      const lines = 8
      const charsPerLine = 12
      let binary = ""
      for (let i = 0; i < lines; i++) {
        for (let j = 0; j < charsPerLine; j++) {
          binary += Math.random() > 0.5 ? "1" : "0"
        }
        if (i < lines - 1) binary += "\n"
      }
      return binary
    }

    setBinaryText(generateBinary())
    const interval = setInterval(() => {
      setBinaryText(generateBinary())
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <SidebarComponent className="border-r-0 shadow-xl">
      <SidebarHeader className="flex flex-col items-center justify-center py-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20">
        <motion.div className="relative mb-4" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-black dark:bg-gray-900 flex items-center justify-center overflow-hidden">
              <pre className="binary-text text-center leading-none">{binaryText}</pre>
            </div>
          </div>
          <motion.div
            className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div>
        </motion.div>
        <h2 className="font-bold text-lg bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
          Pavithra
        </h2>
        <p className="text-sm text-muted-foreground">Developer & Data Analyst</p>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarMenu className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                    hoveredItem === item.href ? "shadow-md" : ""
                  }`}
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a href={item.href} className="flex items-center gap-3 p-3 rounded-lg">
                    {/* Animated background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      initial={false}
                      animate={{ opacity: hoveredItem === item.href ? 0.1 : 0 }}
                    />

                    {/* Icon with color animation */}
                    <motion.div
                      className={`relative z-10 p-2 rounded-lg bg-gradient-to-r ${item.color} text-white shadow-sm group-hover:shadow-md transition-all duration-300`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="h-4 w-4" />
                    </motion.div>

                    {/* Label */}
                    <span className="relative z-10 font-medium group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>

                    {/* Hover indicator */}
                    <motion.div
                      className={`absolute right-2 w-2 h-2 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      animate={{
                        scale: hoveredItem === item.href ? [1, 1.5, 1] : 1,
                      }}
                      transition={{ duration: 0.5, repeat: hoveredItem === item.href ? Number.POSITIVE_INFINITY : 0 }}
                    />
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </motion.div>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="flex flex-col items-center gap-4 py-6 bg-gradient-to-br from-slate-50 to-violet-50 dark:from-slate-900/50 dark:to-violet-900/20">
        {/* Social Links */}
        <div className="flex justify-center gap-2">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gradient-to-r hover:from-slate-500/10 hover:to-gray-500/10 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/pavithras15" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 hover:text-slate-600 transition-colors duration-300" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/pavithra--s/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 hover:text-blue-600 transition-colors duration-300" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  )
}
