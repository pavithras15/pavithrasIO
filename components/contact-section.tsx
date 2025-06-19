"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-500/10 to-purple-500/10",
      action: () => window.open("mailto:sara.pavithra15@gmail.com", "_blank"),
    },
    {
      icon: Github,
      title: "GitHub",
      color: "from-slate-500 to-gray-600",
      bgColor: "from-slate-500/10 to-gray-600/10",
      action: () => window.open("https://github.com/pavithras15", "_blank"),
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-500/10 to-indigo-500/10",
      action: () => window.open("https://www.linkedin.com/in/pavithra--s/", "_blank"),
    },
  ]

  return (
    <section id="contact" className="py-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-orange-50/50 to-yellow-50/50 dark:from-rose-900/10 dark:via-orange-900/10 dark:to-yellow-900/10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project or just say hello! 👋
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card
                className={`bg-gradient-to-br ${info.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover h-full cursor-pointer`}
                onClick={info.action}
              >
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`p-4 rounded-full bg-gradient-to-r ${info.color} text-white shadow-lg mx-auto mb-4 w-fit`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <info.icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">{info.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
