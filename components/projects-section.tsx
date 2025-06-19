"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Lightbulb, Target, Zap } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Master Thesis: Sustainable workforce management and food waste reduction",
    period: "May 2022 – Nov 2022",
    description:
      "Conducted a dual case study using Python (Jira API, Pandas) and Power BI to optimize food waste handling and assess workforce KPIs. Delivered insights that improved training efficiency and identified bottlenecks in resource allocation.",
    tags: ["Python", "Jira API", "Pandas", "Power BI", "Data Analysis"],
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
    icon: Target,
    impact: "Improved training efficiency by 30%",
    category: "Data Analysis",
  },
  {
    title: "NoSQL DB for COVID-19 vaccination statistics",
    period: "Mar 2022 – May 2022",
    description:
      "Designed and implemented a NoSQL database using Neo4j to manage and analyze complex relationships in global COVID-19 vaccination data. Built Cypher queries to visualize and explore trends such as vaccination gaps, effectiveness based on region, and temporal progress.",
    tags: ["Neo4j", "NoSQL", "Cypher", "Data Analysis", "COVID-19"],
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    icon: Zap,
    impact: "Analyzed global vaccination trends",
    category: "Database Design",
  },
  {
    title: "Identification of serious games for kids",
    period: "Sep 2021 – Jan 2022",
    description:
      "Developed a recommendation system to classify and suggest educational (serious) games for children based on cognitive and developmental attributes. Used Python for data preprocessing, of game metadata, and rule-based classification.",
    tags: ["Python", "Recommendation System", "Classification", "Educational Games"],
    color: "from-violet-500 to-purple-600",
    bgColor: "from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20",
    icon: Lightbulb,
    impact: "Enhanced educational game discovery",
    category: "Machine Learning",
  },
]

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-violet-50/50 to-purple-50/50 dark:from-slate-900/10 dark:via-violet-900/10 dark:to-purple-900/10"></div>

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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and impactful projects that demonstrate my technical expertise
          </p>
        </div>

        {/* Vertical Layout */}
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.01,
                }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={`bg-gradient-to-r ${project.bgColor} border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative group`}
                >
                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div className="flex flex-col md:flex-row">
                    {/* Left side - Icon and Category */}
                    <div className="md:w-1/4 p-6 flex flex-col items-center justify-center bg-white/50 dark:bg-slate-800/50">
                      <motion.div
                        className={`p-4 rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg mb-4`}
                        animate={{
                          rotate: hoveredProject === index ? 360 : 0,
                          scale: hoveredProject === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <project.icon className="h-8 w-8" />
                      </motion.div>
                      <Badge
                        variant="outline"
                        className={`bg-gradient-to-r ${project.color} text-white border-0 shadow-sm`}
                      >
                        {project.category}
                      </Badge>
                    </div>

                    {/* Right side - Content */}
                    <div className="md:w-3/4 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl leading-tight text-slate-800 dark:text-slate-200">
                            {project.title}
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1 text-slate-600 dark:text-slate-400"
                          >
                            <Calendar className="h-3 w-3" />
                            <span>{project.period}</span>
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="p-0">
                        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                        {/* Impact highlight */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`bg-gradient-to-r ${project.color} bg-opacity-10 rounded-lg p-3 mb-4 border-l-4`}
                          style={{
                            borderLeftColor: `rgb(${project.color.includes("emerald") ? "16 185 129" : project.color.includes("blue") ? "59 130 246" : "139 92 246"})`,
                          }}
                        >
                          <p
                            className={`text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                          >
                            🎯 {project.impact}
                          </p>
                        </motion.div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.div
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge
                                variant="secondary"
                                className="hover:shadow-md transition-shadow duration-200 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                              >
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
