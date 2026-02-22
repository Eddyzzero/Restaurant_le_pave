# 🍽️ Le Pavé Restaurant

Bienvenue sur le dépôt du projet pour **Le Pavé Restaurant**. Il s'agit d'une application web moderne développée pour présenter le restaurant, son menu, sa galerie photo et ses informations pratiques.

## ✨ Fonctionnalités

L'application est composée de plusieurs pages pour offrir une expérience complète :
- **Accueil** : Présentation du restaurant, section des partenaires abordés et ambiance générale.
- **Menu** : Affichage dynamique de la carte, des vins, des plats et des menus (y compris le menu enfant).
- **Galerie** : Une collection de photos mettant en valeur les plats, le terroir et le cadre du restaurant.
- **Notre Identité** (About) : L'histoire de l'établissement, l'empreinte du terroir et l'identité culinaire.
- **Contact** : Informations pratiques, horaires d'ouverture, formulaire de réservation et coordonnées.

## 🛠️ Stack Technique

- **Bibliothèque Web** : [React](https://reactjs.org/) (v19)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Build Tool** : [Vite](https://vitejs.dev/)
- **Routage** : [React Router DOM](https://reactrouter.com/) (v7)
- **Animations** : [GSAP](https://gsap.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)

## 🚀 Démarrer le Projet en Local

### Prérequis

Assurez-vous d'avoir installé les outils suivants sur votre machine :
- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- npm (généralement inclus avec Node.js)

### Installation

1. Clonez ce dépôt sur votre machine locale.
2. Ouvrez un terminal dans le dossier du projet et installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
4. Ouvrez votre navigateur et accédez à l'URL indiquée dans le terminal (généralement `http://localhost:5173/`).

## 📁 Structure du Projet

L'architecture principale du projet s'organise ainsi :

- **`/` (Racine)** : Contient les fichiers de configuration (`package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, etc.).
- **`App.tsx`** : Composant racine gérant le routage principal de l'application.
- **`index.tsx`** : Point d'entrée de l'application React.
- **`components/`** : Composants d'interface (UI) réutilisables (Navbar, Footer, StickyInfo, etc.).
- **`pages/`** : Les composants représentant les pages de l'application (Home, Menu, Gallery, About, Contact).
- **`constants.ts`** : Fichier centralisant les données statiques (listes des plats, des membres de l'équipe, des partenaires, etc.).
- **`index.css`** : Fichier principal gérant les styles globaux de l'application.
- **`public/`** : Ressources statiques telles que les images et l'icône du site.

## 📝 Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

- `npm run dev` : Lance l'application en mode développement. La page se rechargera lors des modifications.
- `npm run build` : Compile et optimise l'application pour la production (sortie dans le dossier `dist/`).
- `npm run preview` : Lance un serveur local pour tester la version de production compilée.
