"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-playfair mb-4">Où me trouver</h3>
            <div className="w-16 h-1 bg-primary mb-4"></div>
            <p className="text-muted-foreground">
              Sangalkam, Dakar
              <br />
              Sénégal
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold font-playfair mb-4">Suivez-moi</h3>
            <div className="w-16 h-1 bg-primary mb-4"></div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/moustapha-ndiaye-7b9264305/" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/moustaphandiaye22" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold font-playfair mb-4">Newsletter</h3>
            <div className="w-16 h-1 bg-primary mb-4"></div>
            <p className="text-muted-foreground mb-4">Restez informé de mes derniers projets et articles.</p>
            <div className="flex gap-2">
              <Input placeholder="Votre email" className="flex-1" />
              <Button>S'abonner</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2025 Moustapha NDIAYE. Tous droits réservés</p>
        </div>
      </div>
    </footer>
  )
}
