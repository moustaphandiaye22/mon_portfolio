# Portfolio de Moustapha NDIAYE

Un portfolio moderne et interactif développé avec Next.js, présentant mes compétences en développement full-stack et mes projets personnels.

## 🚀 Aperçu

Ce portfolio est une application web responsive qui présente mes compétences, projets et expériences professionnelles. Il utilise des technologies modernes pour offrir une expérience utilisateur fluide et attrayante.

## ✨ Fonctionnalités

- **Navigation fluide** : Navigation par onglets flottante avec défilement automatique
- **Thème sombre/clair** : Basculement entre les thèmes avec persistance
- **Design responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Animations modernes** : Animations Framer Motion pour une expérience interactive
- **Formulaire de contact** : Formulaire fonctionnel pour les demandes de contact
- **Section projets** : Présentation de mes réalisations avec liens GitHub
- **CV téléchargeable** : Lien direct vers mon CV en PDF

## 🛠️ Technologies utilisées

### Frontend
- **Next.js 15** - Framework React avec App Router
- **React 19** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript** - JavaScript typé pour un code plus robuste
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations

### UI/UX
- **Radix UI** - Composants d'interface accessibles
- **Lucide React** - Icônes modernes et cohérentes
- **Geist Font** - Typographie élégante
- **Playfair Display** - Police serif pour les titres

### Outils de développement
- **ESLint** - Linting du code JavaScript/TypeScript
- **PostCSS** - Outil de transformation CSS
- **Vercel Analytics** - Suivi des performances

## 📁 Structure du projet

```
moustapha-portfolio/
├── app/                          # Pages Next.js (App Router)
│   ├── globals.css              # Styles globaux
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Page d'accueil
├── components/                   # Composants React
│   ├── ui/                      # Composants UI réutilisables
│   ├── hero-section.tsx         # Section d'accueil
│   ├── about-section.tsx        # Section à propos
│   ├── skills-section.tsx       # Section compétences
│   ├── projects-section.tsx     # Section projets
│   ├── contact-section.tsx      # Section contact
│   ├── navigation.tsx           # Navigation principale
│   ├── footer.tsx               # Pied de page
│   ├── hybrid-portfolio.tsx     # Portfolio hybride
│   ├── theme-provider.tsx       # Fournisseur de thème
│   └── tabbed-portfolio.tsx     # Portfolio par onglets
├── hooks/                       # Hooks personnalisés
├── lib/                         # Utilitaires
├── public/                      # Assets statiques
│   ├── images/                  # Images du portfolio
│   └── moustaphandiayecv.pdf    # CV téléchargeable
├── styles/                      # Styles supplémentaires
└── types/                       # Types TypeScript (si nécessaire)
```

## 🚀 Installation et exécution

### Prérequis

- Node.js 18+
- npm, yarn ou pnpm

### Installation

1. Clonez le repository :
```bash
git clone https://github.com/moustaphandiaye22/mon_portfolio.git
cd moustapha-portfolio
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build pour la production

```bash
npm run build
npm start
```

## 📱 Sections du portfolio

### 🏠 Accueil (Hero Section)
- Présentation personnelle avec photo
- Liens vers réseaux sociaux (GitHub, LinkedIn, Email)
- Bouton de téléchargement du CV
- Fond avec image de workspace de développement

### 👤 À propos
- Informations personnelles (âge, localisation, statut)
- Photo de profil
- Description professionnelle détaillée

### 💻 Compétences
- Compétences techniques organisées par catégories :
  - Frontend (React, Angular, JavaScript, HTML/CSS)
  - Backend (Node.js, Express, PHP, Laravel, Python, Java)
  - Base de données (MySQL, MongoDB, PostgreSQL, SQL Server, Prisma, Supabase)
  - Design (Web Design, UI/UX)
  - DevOps & Outils (Git, Docker, Linux)
  - CMS & Frameworks (WordPress, Next.js, Vue.js)
- Formation académique et professionnelle
- Expérience professionnelle

### 🚀 Projets
- Présentation de 6 projets personnels :
  - Application de Voyage Mobile
  - Dashboard de Gaming
  - Application de Livraison
  - Plateforme de Streaming Musical
  - Site E-commerce
  - Application de Gestion
- Technologies utilisées pour chaque projet
- Liens vers les dépôts GitHub
- Catégorisation par type (Mobile, Web App, E-commerce, etc.)

### 📞 Contact
- Informations de contact (email, téléphone, localisation)
- Formulaire de contact interactif
- Carte Google Maps intégrée
- Lien WhatsApp direct

## 🎨 Personnalisation

### Thèmes
Le portfolio supporte les thèmes sombre et clair. Le thème est automatiquement détecté selon les préférences système et peut être basculé manuellement.

### Couleurs
- **Primaire** : Bleu (#3b82f6)
- **Arrière-plan** : Adaptatif selon le thème
- **Texte** : Gris foncé/clair selon le thème

### Polices
- **Corps** : Geist Sans
- **Titres** : Playfair Display (serif)

## 📊 Performance

- **Next.js 15** avec App Router pour des performances optimales
- **Images optimisées** avec Next.js Image component
- **Lazy loading** des composants
- **Code splitting** automatique
- **Analytics Vercel** pour le suivi des performances

## 🌐 Déploiement

Le portfolio est optimisé pour le déploiement sur Vercel, mais peut être déployé sur n'importe quelle plateforme supportant Next.js :

- Vercel (recommandé)
- Netlify
- Railway
- Heroku

### Déploiement sur Vercel

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement la configuration Next.js
3. Déployez avec une commande simple

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

**Moustapha NDIAYE**
- Email : moustaphand20@gmail.com
- LinkedIn : [Moustapha NDIAYE](https://www.linkedin.com/in/moustapha-ndiaye-7b9264305/)
- GitHub : [@moustaphandiaye22](https://github.com/moustaphandiaye22)
- Téléphone : +221 77 141 12 51
- Localisation : Sangalkam, Dakar, Sénégal

---

⭐ Si ce portfolio vous plaît, n'hésitez pas à laisser une étoile sur GitHub !
