"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Code, Database, Palette, Server, Globe, Settings } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-5 h-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      skills: [
        { name: "React", level: 100 },
        { name: "Angular", level: 80 },
        { name: "JavaScript", level: 86 },
        { name: "HTML/CSS", level: 100 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      skills: [
        { name: "Node.js", level: 100 },
        { name: "Express", level: 100 },
        { name: "PHP", level: 80 },
        { name: "Laravel", level: 80 },
        { name: "Python", level: 80 },
        { name: "Java", level: 80 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5" />,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "SQL Server", level: 70 },
        { name: "Prisma", level: 80 },
        { name: "Supabase", level: 85 },
      ],
    },
    {
      title: "Design",
      icon: <Palette className="w-5 h-5" />,
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      skills: [
        { name: "Web Design", level: 99 },
        { name: "Logo Design", level: 60 },
        { name: "UI/UX Design", level: 40 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="w-5 h-5" />,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Linux", level: 75 },
      ],
    },
    {
      title: "CMS & Frameworks",
      icon: <Code className="w-5 h-5" />,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
      skills: [
        { name: "WordPress", level: 80 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 70 },
      ],
    },
  ]

  const education = [
    {
      date: "Décembre 2025",
      title: "Attestation de Formation en Développement Web et Mobile",
      institution: "Orange Digital Center (Sonatel Académie) (en cours)",
    },
    {
      date: "Mai 2024",
      title: "Attestation de formation au Compétences numériques fondamentales",
      institution: "Simplon Sénégal",
    },
    {
      date: "2023",
      title: "Licence en Communication Digitale",
      institution: "Université Numérique Cheikh Hamidou Kane (UNCHK)",
    },
    {
      date: "2023",
      title: "Licence en informatique appliquée à la gestion des entreprises",
      institution: "Institut Supérieur d'informatique (ISI Keur Massar)",
    },
    {
      date: "2020",
      title: "Baccalauréat Série L2",
      institution: "Lycée Sangalkam",
    },
  ]

  const experience = [
    {
      date: "2024",
      title: "Stage en informatique",
      company: "Pôle Emploi et Entrepreneuriat de Rufisque (3FTP)",
    },
    {
      date: "2021",
      title: "Stage en informatique",
      company: "Cabinet d'Orientation Scolaire (COS Sénégal)",
    },
  ]

  return (
    <section id="skills" className="py-12 bg-muted/30 min-h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair mb-4">Mes Compétences</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`p-6 h-full hover:shadow-lg transition-shadow duration-300 ${category.bgColor} border-l-4 border-l-current ${category.color}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${category.color}`}>{category.icon}</div>
                  <h3 className={`text-lg font-bold font-playfair ${category.color}`}>{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-semibold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-bold font-playfair mb-6 text-primary">Formation</h3>
              <div className="space-y-4 max-h-64 overflow-y-auto">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-2 border-primary/20"
                  >
                    <div className="absolute -left-1.5 top-2 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-xs text-primary font-semibold mb-1">{edu.date}</p>
                      <h4 className="font-semibold text-sm mb-1">{edu.title}</h4>
                      <p className="text-xs text-muted-foreground">{edu.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-bold font-playfair mb-6 text-primary">Expérience</h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-2 border-primary/20"
                  >
                    <div className="absolute -left-1.5 top-2 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-xs text-primary font-semibold mb-1">{exp.date}</p>
                      <h4 className="font-semibold text-sm mb-1">{exp.title}</h4>
                      <p className="text-xs text-muted-foreground">{exp.company}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
