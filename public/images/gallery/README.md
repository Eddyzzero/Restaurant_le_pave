# Dossier Galerie - Images

Ce dossier contient les images de la galerie du restaurant Le Pavé.

## Structure recommandée

Vous pouvez organiser vos images par catégorie :
- **food/** - Photos des plats et de la nourriture
- **interior/** - Photos de l'intérieur du restaurant
- **ambiance/** - Photos de l'ambiance générale

## Formats recommandés

- **Format** : JPG ou WebP (pour une meilleure performance)
- **Taille recommandée** : 1200x900px ou 800x600px
- **Poids** : Optimisez vos images (< 500KB par image)

## Utilisation dans le code

Une fois vos images placées ici, vous pouvez les référencer dans le fichier `constants.ts` comme suit :

```typescript
export const GALLERY_IMAGES: GalleryImage[] = [
  { 
    id: 1, 
    url: "/images/gallery/food/plat1.jpg", 
    alt: "Description du plat", 
    category: "food" 
  },
  // ...
];
```

## Exemple de structure

```
public/images/gallery/
├── food/
│   ├── pave-grille.jpg
│   ├── cote-a-los.jpg
│   └── carpaccio.jpg
├── interior/
│   ├── salle-principale.jpg
│   ├── cave-maturation.jpg
│   └── bar.jpg
└── README.md (ce fichier)
```

## Notes

- Les images dans le dossier `public/` sont accessibles directement via l'URL `/images/...`
- Vite copiera automatiquement ces fichiers lors du build
- Pensez à optimiser vos images avant de les ajouter (avec TinyPNG, Squoosh, etc.)
