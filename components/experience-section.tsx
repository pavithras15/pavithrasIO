"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react'

const experiences = [
  {
    title: "Data Analyst/ Cyber Security Documentalist",
    company: "Alfa laval",
    period: "Feb 2023 – May 2024",
    location: "Monza, Italy",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    achievements: [
      { text: "Authored and standardized 40+ cybersecurity technical documents", metric: "40+", icon: "📄" },
      { text: "Improved internal audit readiness by 30%", metric: "30%", icon: "📊" },
      { text: "Reduced pump failures by 15% through predictive maintenance", metric: "15%", icon: "🔧" },
      { text: "Cut manual data entry time by 40%", metric: "40%", icon: "⚡" },
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Kitro",
    period: "May 2022 – Nov 2022",
    location: "Zurich, Switzerland",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
    achievements: [
      { text: "Improved sprint tracking and delivery forecasting by 25%", metric: "25%", icon: "🎯" },
      { text: "Built and deployed 10+ Power BI dashboards", metric: "10+", icon: "📈" },
      { text: "Reduced ramp-up time for new agents by 30%", metric: "30%", icon: "🚀" },
    ],
  },
  {
    title: "Software Developer (SAP ABAP Associate)",
    company: "Sapteck Technologies & Savic Technology",
    period: "Oct 2018 – Sep 2020",
    location: "Chennai, India",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    achievements: [
      { text: "Maintained 90% customer satisfaction rate", metric: "90%", icon: "😊" },
      { text: "Implemented 2 full life-cycle projects", metric: "2", icon: "🏗️" },
      { text: "Enhanced report generation speed by 20%", metric: "20%", icon: "⚡" },
      { text: "Crafted 80+ test cases", metric: "80+", icon: "🧪" },
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50 dark:from-indigo-900/10 dark:via-purple-900/10 dark:to-pink-900/10"></div>
      
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
            Professional <span className="gradient-text">Journey</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career progression and key achievements in data analysis and software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r ${experience.color} rounded-full transform md:-translate-x-1/2 z-10 shadow-lg`}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} rounded-full animate-ping opacity-75`}></div>
                </motion.div>

                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className={`bg-gradient-to-br ${experience.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover`}>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4">
                          <div>
                            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                              {experience.title}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground mb-2">
                              <Briefcase className="h-4 w-4" />
                              <span className="font-medium">{experience.company}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                              <Badge variant="outline" className={`flex items-center gap-1 bg-gradient-to-r ${experience.color} text-white border-0`}>
                                <Calendar className="h-3 w-3" />
                                <span>{experience.period}</span>
                              </Badge>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {experience.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: (index * 0.2) + (i * 0.1) }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-200"
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-lg">{achievement.icon}</span>
                                  <span className={`font-bold text-lg bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                                    {achievement.metric}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                                  {achievement.text}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
