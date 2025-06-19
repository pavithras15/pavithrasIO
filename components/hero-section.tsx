"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Code, Database, BarChart } from "lucide-react"
import { useEffect, useState } from "react"

const FloatingIcon = ({ icon: Icon, delay, color }: { icon: any; delay: number; color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={`absolute ${color} p-3 rounded-full shadow-lg floating`}
    style={{ animationDelay: `${delay}s` }}
  >
    <Icon className="h-6 w-6 text-white" />
  </motion.div>
)

export function HeroSection() {
  const [particles, setParticles] = useState<
    Array<{ id: number; left: number; size: number; color: string; delay: number }>
  >([])
  const [binaryText, setBinaryText] = useState("")

  useEffect(() => {
    const colors = ["bg-violet-500", "bg-purple-500", "bg-indigo-500", "bg-blue-500", "bg-emerald-500", "bg-slate-500"]
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 20,
    }))
    setParticles(newParticles)

    // Generate binary for avatar
    const generateBinary = () => {
      const lines = 12
      const charsPerLine = 16
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
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-5"></div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.color}`}
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="h-6 w-6 text-amber-500" />
            <span className="text-lg font-medium bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to my portfolio
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="gradient-text">Pavithra</span>
          </h1>

          <motion.h2
            className="text-2xl md:text-4xl font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Developer & Data Analyst
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Transforming data into insights and code into solutions. With expertise in SAP ABAP, Python, and data
            analysis. Let's build something amazing together! 🚀
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 pulse-glow"
              asChild
            >
              <a href="#contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Main Avatar Circle */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-black dark:bg-gray-900 flex items-center justify-center overflow-hidden floating">
                <pre className="binary-text text-center leading-none text-xs">{binaryText}</pre>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <FloatingIcon
              icon={Code}
              delay={1}
              color="bg-gradient-to-r from-violet-500 to-purple-500 absolute -top-4 -right-4"
            />
            <FloatingIcon
              icon={Database}
              delay={1.5}
              color="bg-gradient-to-r from-emerald-500 to-teal-500 absolute -bottom-4 -left-4"
            />
            <FloatingIcon
              icon={BarChart}
              delay={2}
              color="bg-gradient-to-r from-amber-500 to-orange-500 absolute top-1/2 -left-8"
            />

            {/* Orbiting Elements */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full -translate-x-1/2 -translate-y-8"></div>
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full -translate-x-1/2 translate-y-8"></div>
              <div className="absolute left-0 top-1/2 w-5 h-5 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full -translate-x-8 -translate-y-1/2"></div>
              <div className="absolute right-0 top-1/2 w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full translate-x-8 -translate-y-1/2"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
