export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  category: 'starter' | 'main' | 'dessert' | 'drink' | 'kids' | 'wine';
  subcategory?: string;
  image?: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

export interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: 'food' | 'interior' | 'exterior';
}