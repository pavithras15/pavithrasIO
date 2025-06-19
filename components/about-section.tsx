"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg mb-6">
              Enthusiastic Computer Science Graduate with a strong thirst to dive in and transform process and tech
              advancements with the help of the latest technologies. I worked in multiple roles such as a Developer,
              Abap programmer, and Data analyst for the past 4 years.
            </p>
            <p className="text-lg mb-6">
              A hardworking and passionate job seeker with strong organizational skills eager to use my knowledge for
              the benefit of society.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>sara.pavithra15@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+39 3487443782</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Milan, Italy</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <a
                  href="https://www.linkedin.com/in/pavithra--s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/pavithra--s
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">English</span>
                    <span className="text-sm text-muted-foreground">Fluent</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tamil</span>
                    <span className="text-sm text-muted-foreground">Native/Bilingual</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Hindi</span>
                    <span className="text-sm text-muted-foreground">Fluent</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Italian</span>
                    <span className="text-sm text-muted-foreground">Basic</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
