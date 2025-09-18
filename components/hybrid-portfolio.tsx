"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import { SkillsSection } from "./skills-section"
import { ProjectsSection } from "./projects-section"
import { ContactSection } from "./contact-section"
import { Home, User, Code, Briefcase, Mail } from "lucide-react"

const sections = [
  { id: "home", label: "Accueil", icon: Home, component: HeroSection },
  { id: "about", label: "À propos", icon: User, component: AboutSection },
  { id: "skills", label: "Compétences", icon: Code, component: SkillsSection },
  { id: "projects", label: "Projets", icon: Briefcase, component: ProjectsSection },
  { id: "contact", label: "Contact", icon: Mail, component: ContactSection },
]

export function HybridPortfolio() {
  const [activeSection, setActiveSection] = useState("home")

  // Fonction pour scroller vers une section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  // Observer pour détecter la section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation par onglets flottante */}
      <nav className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md border border-border rounded-full shadow-lg">
        <div className="flex space-x-1 p-2">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeSection === section.id
                      ? "text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }
                `}
              >
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10 hidden sm:inline">{section.label}</span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Toutes les sections en scroll */}
      <div className="space-y-0">
        {sections.map((section) => {
          const Component = section.component
          return (
            <section key={section.id} id={section.id} className="min-h-screen">
              <Component />
            </section>
          )
        })}
      </div>

      {/* Indicateur de progression */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-background/80 backdrop-blur-md rounded-full p-3 border border-border shadow-lg">
          <div className="flex flex-col gap-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  activeSection === section.id ? "bg-primary" : "bg-muted hover:bg-muted-foreground"
                }`}
                title={section.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bouton scroll to top */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-4 left-4 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        title="Retour en haut"
      >
        <Home className="w-5 h-5" />
      </button>
    </div>
  )
}
