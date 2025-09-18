"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { MapPin, Calendar, User, Briefcase } from "lucide-react"

export function AboutSection() {
  const personalInfo = [
    { icon: MapPin, label: "Localisation", value: "Dakar, Sénégal" },
    { icon: Calendar, label: "Âge", value: "25 ans" },
    { icon: User, label: "Genre", value: "Homme" },
    { icon: Briefcase, label: "Statut", value: "Disponible" },
  ]

  return (
    <section id="about" className="py-12 bg-secondary/30 min-h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-96 mx-auto relative">
                <img
                  src="/isco.jpeg"
                  alt="Moustapha NDIAYE"
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-full h-full border-4 border-primary rounded-lg -z-10"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold font-playfair mb-4">Moustapha NDIAYE</h3>
              <p className="text-primary font-medium text-lg mb-6">Développeur Full Stack</p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Je suis un développeur passionné avec une solide expérience dans la création d'applications web
                modernes. Fort de mes compétences techniques et de ma capacité à résoudre des problèmes complexes, je
                m'efforce de créer des solutions efficaces et innovantes. Mon parcours professionnel est marqué par des
                projets variés qui m'ont permis de maîtriser plusieurs technologies et d'acquérir une vision globale du
                cycle de vie du développement logiciel.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
