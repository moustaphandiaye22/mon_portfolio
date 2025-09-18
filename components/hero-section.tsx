"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
  <section id="home" className="flex items-center justify-center relative overflow-hidden py-20 min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/coding-workspace-dark-theme.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-lg sm:text-xl text-white/80 mb-4">Bienvenue</h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Je suis <span className="text-primary font-playfair">Moustapha</span> NDIAYE
            </h1>
            <div className="inline-block px-6 py-3 bg-primary/20 backdrop-blur-sm text-primary border border-primary/30 rounded-full text-lg font-medium mb-8">
              Développeur Full Stack
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionné par la création de solutions web innovantes et efficaces. Basé à Dakar, Sénégal, je transforme
              vos idées en réalité numérique.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" className="text-lg px-8 py-3 bg-primary hover:bg-primary/90" asChild>
              <a href="#projects">Voir mes projets</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
              asChild
            >
              <a href="/moustaphandiayecv.pdf" download>
                <Download className="h-5 w-5 mr-2" />
                Télécharger CV
              </a>
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 backdrop-blur-sm" asChild>
                <a href="mailto:moustaphand20@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 backdrop-blur-sm" asChild>
                <a href="https://github.com/moustaphandiaye22" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 backdrop-blur-sm" asChild>
                <a href="https://www.linkedin.com/in/moustapha-ndiaye-7b9264305/" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
