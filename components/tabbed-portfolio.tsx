"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import { SkillsSection } from "./skills-section"
import { ProjectsSection } from "./projects-section"
import { ContactSection } from "./contact-section"
import { Home, User, Code, Briefcase, Mail } from "lucide-react"

const tabs = [
  { id: "home", label: "Accueil", icon: Home, component: HeroSection },
  { id: "about", label: "À propos", icon: User, component: AboutSection },
  { id: "skills", label: "Compétences", icon: Code, component: SkillsSection },
  { id: "projects", label: "Projets", icon: Briefcase, component: ProjectsSection },
  { id: "contact", label: "Contact", icon: Mail, component: ContactSection },
]

export function TabbedPortfolio() {
  const [activeTab, setActiveTab] = useState("home")

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component || HeroSection

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation par onglets */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex space-x-1 p-2 bg-muted/50 rounded-full my-4">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${
                        activeTab === tab.id
                          ? "text-primary-foreground shadow-lg"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }
                    `}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <Icon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10 hidden sm:inline">{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Contenu des onglets */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[calc(100vh-80px)]"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicateur de progression */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-background/80 backdrop-blur-md rounded-full p-2 border border-border shadow-lg">
          <div className="flex flex-col gap-1">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
