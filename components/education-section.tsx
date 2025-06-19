"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Master of Science in Computer Science and Engineering",
    institution: "Politecnico Di Milano",
    period: "Sep 2020 – Apr 2024",
    location: "Milan, Italy",
  },
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Anna University",
    period: "Sep 2014 – Apr 2018",
    location: "Chennai, India",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2">Education</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="outline" className="flex items-center gap-1 w-fit">
                      <Calendar className="h-3 w-3" />
                      <span>{edu.period}</span>
                    </Badge>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{edu.location}</span>
                    </div>
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
