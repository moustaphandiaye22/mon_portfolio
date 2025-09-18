"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Application de Voyage Mobile",
      description:
        "Une application mobile moderne pour la découverte et la planification de voyages avec une interface utilisateur intuitive.",
      image: "/mobile-travel-app-interface.jpg",
      technologies: ["React Native", "Node.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Mobile",
    },
    {
      title: "Dashboard de Gaming",
      description:
        "Tableau de bord interactif pour les streamers et gamers avec statistiques en temps réel et gestion de contenu.",
      image: "/gaming-dashboard-interface.jpg",
      technologies: ["React", "Express", "Socket.io"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Web App",
    },
    {
      title: "Application de Livraison",
      description: "Plateforme de livraison complète avec suivi en temps réel et système de paiement intégré.",
      image: "/delivery-app-interface.png",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      demoUrl: "#",
      githubUrl: "#",
      category: "E-commerce",
    },
    {
      title: "Plateforme de Streaming Musical",
      description: "Application de streaming musical avec découverte personnalisée et playlists collaboratives.",
      image: "/music-streaming-app.png",
      technologies: ["Angular", "Python", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Entertainment",
    },
    {
      title: "Site E-commerce",
      description:
        "Boutique en ligne complète avec gestion des stocks, paiements sécurisés et interface d'administration.",
      image: "/ecommerce-website-interface.png",
      technologies: ["Next.js", "Stripe", "Prisma"],
      demoUrl: "#",
      githubUrl: "#",
      category: "E-commerce",
    },
    {
      title: "Application de Gestion",
      description: "Système de gestion d'entreprise avec CRM intégré et tableaux de bord analytiques.",
      image: "/business-management-app-interface.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Business",
    },
  ]

  return (
    <section id="projects" className="py-12 bg-secondary/30 min-h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair mb-4">Mes Projets</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes, allant des applications web aux solutions mobiles
            innovantes.
          </p>
        </motion.div>

        <div className="max-h-96 overflow-y-auto pr-2">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="font-playfair text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-pretty text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button size="lg" variant="outline">
            Voir plus de projets
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
