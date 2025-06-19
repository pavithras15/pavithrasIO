"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, BarChart, Briefcase, Wrench, MessageSquare } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "SAP ABAP", level: 90, color: "from-blue-500 to-blue-600" },
      { name: "Python", level: 85, color: "from-green-500 to-green-600" },
      { name: "Advanced SQL", level: 88, color: "from-purple-500 to-purple-600" }
    ],
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500"
  },
  {
    title: "Data Platforms",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85, color: "from-indigo-500 to-indigo-600" },
      { name: "MongoDB", level: 80, color: "from-green-500 to-green-600" },
      { name: "Neo4j", level: 75, color: "from-orange-500 to-orange-600" },
      { name: "SAP S/4 HANA", level: 90, color: "from-blue-500 to-blue-600" }
    ],
    bgGradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-500"
  },
  {
    title: "Data Visualization",
    icon: BarChart,
    skills: [
      { name: "Power BI", level: 88, color: "from-yellow-500 to-yellow-600" },
      { name: "Python Dashboards", level: 82, color: "from-red-500 to-red-600" }
    ],
    bgGradient: "from-yellow-500/10 to-orange-500/10",
    iconColor: "text-yellow-500"
  },
  {
    title: "Project Management",
    icon: Briefcase,
    skills: [
      { name: "Agile", level: 85, color: "from-purple-500 to-purple-600" },
      { name: "Scrum", level: 80, color: "from-pink-500 to-pink-600" },
      { name: "Jira", level: 90, color: "from-blue-500 to-blue-600" }
    ],
    bgGradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-500"
  },
  {
    title: "Tools & Tech",
    icon: Wrench,
    skills: [
      { name: "Git", level: 88, color: "from-orange-500 to-orange-600" },
      { name: "SAP Debugger", level: 92, color: "from-blue-500 to-blue-600" },
      { name: "Confluence", level: 85, color: "from-green-500 to-green-600" }
    ],
    bgGradient: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-500"
  },
  {
    title: "Soft Skills",
    icon: MessageSquare,
    skills: [
      { name: "Leadership", level: 88, color: "from-teal-500 to-teal-600" },
      { name: "Communication", level: 92, color: "from-cyan-500 to-cyan-600" },
      { name: "Problem Solving", level: 90, color: "from-indigo-500 to-indigo-600" }
    ],
    bgGradient: "from-teal-500/10 to-cyan-500/10",
    iconColor: "text-teal-500"
  },
]

export function SkillsSection() {
  const [animatedValues, setAnimatedValues] = useState<{[key: string]: number}>({})

  useEffect(() => {
    const timer = setTimeout(() => {
      const values: {[key: string]: number} = {}
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          values[skill.name] = skill.level
        })
      })
      setAnimatedValues(values)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-blue-50/50 dark:from-purple-900/10 dark:via-pink-900/10 dark:to-blue-900/10"></div>
      
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
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className={`h-full card-hover bg-gradient-to-br ${category.bgGradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-800/60 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                    </motion.div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <Badge variant="secondary" className="bg-white/70 dark:bg-gray-800/70">
                            {animatedValues[skill.name] || 0}%
                          </Badge>
                        </div>
                        <div className="relative">
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full skill-bar`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: (index * 0.1) + (skillIndex * 0.2), ease: "easeOut" }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
