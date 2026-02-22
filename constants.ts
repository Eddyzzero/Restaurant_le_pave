import { MenuItem, GalleryImage, Review } from './types';

export const RESTAURANT_INFO = {
  name: "Le Pavé",
  address: "Place de Chablis 3, 4190 Ferrières, Belgique",
  phone: "0495/47.40.43",
  email: "info@lepaverestaurant.com",
  hours: "Ouvert du jeudi au lundi",
  paymentMethods: ["Espèces", "Bancontact"]
};

export const MENU_ITEMS: MenuItem[] = [
  // ============================================================
  // ENTRÉES
  // ============================================================
  { id: 'e1', name: "Planche à partager", description: "Charcuteries et fromages locaux, 2 ou 4 pers", price: "19,50€ / 36,50€", category: 'starter' },
  { id: 'e2', name: "Carpaccio de bœuf Black Angus", description: "Roquette, noisettes torréfiées, mayonnaise truffe maison, poudre d'olive noire, balsamique", price: "18,50€", category: 'starter', isGlutenFree: true },
  { id: 'e3', name: "Saumon Gravlax", description: "Chantilly aux agrumes, mayonnaise aux herbes, oignons rouges pickles", price: "19,00€", category: 'starter' },
  { id: 'e4', name: "Tartare de bœuf au couteau Black Angus", description: "Jaune d'œuf, câpres, échalotes, cornichons", price: "17,50€", category: 'starter', isGlutenFree: true },
  { id: 'e5', name: "Gratin végétarien", description: "Courgettes, feta, tomates", price: "15,50€", category: 'starter', isVegetarian: true },
  { id: 'e6', name: "Croquettes fromage & jambon d'Ardenne", description: "2 pièces", price: "15,00€", category: 'starter' },
  { id: 'e7', name: "Croquettes de homard", description: "2 pièces", price: "18,50€", category: 'starter' },

  // ============================================================
  // PLATS
  // ============================================================
  { id: 'p1', name: "Tagliata de bœuf Black Angus", description: "Roquette, tomates séchées, pignons de pin, parmesan, huile de truffe, balsamique", price: "32,50€", category: 'main', subcategory: 'Plats' },
  { id: 'p2', name: "Ribs caramélisés", price: "26,50€", category: 'main', subcategory: 'Plats' },
  { id: 'p3', name: "Burger « Le pavé » Black Angus", description: "Viande 200 gr, raclette, bacon, laitue, oignons rouges, tomates, sauce maison", price: "24,00€", category: 'main', subcategory: 'Plats' },
  { id: 'p4', name: "Magret de canard sauce Teriyaki", price: "28,50€", category: 'main', subcategory: 'Plats' },
  { id: 'p5', name: "Côte à l'os ±1,2 kg Black Angus", description: "Pour 2 personnes", price: "70,00€", category: 'main', subcategory: 'Plats' },
  { id: 'p6', name: "Côte à l'os ±1,2 kg Aubrac", description: "Pour 2 personnes", price: "64,00€", category: 'main', subcategory: 'Plats' },
  { id: 'p7', name: "Entrecôte ±350 gr Black Angus", price: "36,00€", category: 'main', subcategory: 'Plats' },
  { id: 'p8', name: "Entrecôte ±350 gr Aubrac", price: "32,00€", category: 'main', subcategory: 'Plats' },
  { id: 'p9', name: "Pavé de saumon grillé", description: "Purée de patate douce", price: "26,50€", category: 'main', subcategory: 'Plats' },
  { id: 'p10', name: "Lasagne végétarienne", description: "Légumes variés", price: "19,50€", category: 'main', subcategory: 'Plats', isVegetarian: true },
  { id: 'p11', name: "Suprême de dinde", description: "Sauce whisky Jack Daniel's miel et moutarde à l'ancienne", price: "25,00€", category: 'main', subcategory: 'Plats' },

  // Cuisson sur pierre
  { id: 'cp1', name: "Filet pur bœuf ±300 gr Black Angus", description: "À cuire soi-même sur pierre chaude", price: "38,00€", category: 'main', subcategory: 'Cuisson sur pierre' },
  { id: 'cp2', name: "Entrecôte ±350 gr Black Angus", description: "À cuire soi-même sur pierre chaude", price: "36,00€", category: 'main', subcategory: 'Cuisson sur pierre' },
  { id: 'cp3', name: "Entrecôte ±350 gr Aubrac", description: "À cuire soi-même sur pierre chaude", price: "32,00€", category: 'main', subcategory: 'Cuisson sur pierre' },
  { id: 'cp4', name: "Brochette de gambas", description: "6 pièces, à cuire soi-même sur pierre chaude", price: "28,00€", category: 'main', subcategory: 'Cuisson sur pierre' },

  // Suppléments
  { id: 'sp1', name: "Gratin dauphinois", price: "4,50€", category: 'main', subcategory: 'Suppléments' },
  { id: 'sp2', name: "Frites truffe parmesan", price: "3,50€", category: 'main', subcategory: 'Suppléments' },
  { id: 'sp3', name: "Sauces froides maison", description: "Mayonnaise, tartare, cocktail, mayonnaise truffe", price: "2,00€", category: 'main', subcategory: 'Suppléments' },
  { id: 'sp4', name: "Sauces chaudes maison", description: "Roquefort, poivre, champignons, béarnaise", price: "4,00€", category: 'main', subcategory: 'Suppléments' },
  { id: 'sp5', name: "Camembert au four", price: "7,50€", category: 'main', subcategory: 'Suppléments' },

  // ============================================================
  // VINS DU MOMENT
  // ============================================================
  // VINS ROUGES
  { id: 'vr1', name: "Cuvée C – Domaine des Romarins", description: "Côtes du Rhône — Nez marqué par des arômes de fruits noirs légèrement confits, vin souple idéal avec une pièce de bœuf. — 75 cl", price: "39 €", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vr2', name: "Suivi des Fées – Domaine du Boiron", description: "Vin de France Biologique — Assemblage Tannat / Merlot, structure tannique et souplesse, parfait pour viande maturée ou gibier. — 75 cl", price: "42 €", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vr3', name: "Les Planchots 2023 – Domaine Piguet-Chouet", description: "Bourgogne – Savigny-Lès-Beaune — Vin équilibré et puissant évoquant la griotte, typique du Pinot avec notes torréfiées. — 75 cl", price: "66 €", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vr4', name: "Vespro 2021 – Abbaye Ste-Marie de Pierredon", description: "Vin Bio des Alpilles — Arômes de cerise ou mûre, puis notes d’olive et de garrigue (Cabernet-Sauvignon / Syrah), accord côte de bœuf. — 75 cl", price: "65 €", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vr5', name: "Domaine Melody 2023", description: "Crozes-Hermitage — Syrah sur terroir argilo-sableux à galets roulés : fruits des bois, encens, bouche gourmande, finale réglissée. — 75 cl", price: "46 €", category: 'wine', subcategory: 'Vins Rouges' },

  // VINS BLANCS
  { id: 'vb1', name: "Beaujolais-Villages – Domaine Grange Masson", description: "Robe pâle brillante, fleurs blanches et pêche blanche, belle persistance aromatique. — 75 cl", price: "32 €", category: 'wine', subcategory: 'Vins Blancs' },
  { id: 'vb2', name: "Ultima Laude 2023 - Abbaye Ste-Marie de Pierredon", description: "Vin Bio des Alpilles — Robe légèrement dorée, nez complexe (viennoiserie, fleur de genêt), attaque acidulée Rolle + 5 % Sauvignon, notes de fruits secs grillés. — 75 cl", price: "45 €", category: 'wine', subcategory: 'Vins Blancs' },
  { id: 'vb3', name: "Chablis 2023 – Domaine Raoul Gautherin", description: "Chablis vinifié en cuve, élevé 10-11 mois sur lies fines, minéralité argilo-calcaire, fraîcheur et note citronnée. — 75 cl", price: "45 €", category: 'wine', subcategory: 'Vins Blancs' },


  // ============================================================
  // DESSERTS
  // ============================================================
  { id: 'd1', name: "Colonel", description: "Sorbet citron 2 boules, vodka", price: "10,00€", category: 'dessert' },
  { id: 'd2', name: "Assiette de fromages Bioferme", price: "14,50€", category: 'dessert' },
  { id: 'd3', name: "Crème brûlée spéculoos", price: "9,00€", category: 'dessert' },
  { id: 'd4', name: "Mousse au chocolat", price: "8,50€", category: 'dessert', isVegetarian: true },
  { id: 'd5', name: "Dame blanche", description: "Glace artisanale", price: "10,50€", category: 'dessert' },
  { id: 'd6', name: "Brésilienne", description: "Glace artisanale", price: "10,50€", category: 'dessert' },

  // ============================================================
  // BOISSONS — Apéritifs
  // ============================================================
  { id: 'ba1', name: "Apéritif maison", price: "9,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba2', name: "Apérol Spritz", price: "9,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba3', name: "Apéritivo 694", price: "9,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba4', name: "Martini rouge / blanc", price: "7,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba5', name: "Pineau des Charentes", price: "7,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba6', name: "Kir", price: "7,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba7', name: "Campari", price: "6,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba8', name: "Porto rouge / blanc", price: "7,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba9', name: "Ricard", price: "7,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba10', name: "Picon vin blanc", price: "8,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba11', name: "Pisang", price: "7,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba12', name: "Batida coco", price: "7,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba13', name: "Passoa", price: "7,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba14', name: "Cava", price: "8,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba15', name: "Blanc Peterman", price: "6,50€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba16', name: "J&B", price: "7,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba17', name: "Absolut vodka", price: "7,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba18', name: "Pisang sans alcool", price: "6,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba19', name: "Supplément jus d'orange", price: "1,00€", category: 'drink', subcategory: 'Apéritifs' },
  { id: 'ba20', name: "Supplément grenadine", price: "0,50€", category: 'drink', subcategory: 'Apéritifs' },

  // BOISSONS — Cocktails
  { id: 'bc1', name: "Mojito Bacardi Gold", price: "10,00€", category: 'drink', subcategory: 'Cocktails' },
  { id: 'bc2', name: "Mojito sans alcool", price: "7,50€", category: 'drink', subcategory: 'Cocktails' },
  { id: 'bc3', name: "Cuba Libre", price: "10,00€", category: 'drink', subcategory: 'Cocktails' },
  { id: 'bc4', name: "Hugo", price: "10,00€", category: 'drink', subcategory: 'Cocktails' },
  { id: 'bc5', name: "Negroni", price: "11,00€", category: 'drink', subcategory: 'Cocktails' },
  { id: 'bc6', name: "Espresso Martini", price: "10,00€", category: 'drink', subcategory: 'Cocktails' },
  { id: 'bc7', name: "Moscow Mule", price: "10,00€", category: 'drink', subcategory: 'Cocktails' },

  // BOISSONS — Bières
  { id: 'bb1', name: "Jupiler 5,2°", price: "2,90€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb2', name: "Jupiler 0°", price: "2,90€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb3', name: "Carlsberg 5°", price: "3,50€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb4', name: "Leffe blonde 6,6°", price: "5,00€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb5', name: "Leffe brune 6,5°", price: "5,00€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb6', name: "Durbuy Z 6,8°", price: "6,00€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb7', name: "Westmalle Triple 9,5°", price: "5,50€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb8', name: "Triple Karmeliet 8,4°", price: "5,50€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb9', name: "Paix Dieu Triple 10°", price: "6,50€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb10', name: "Orval 6,2°", price: "6,50€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb11', name: "Scotch Gordon 8°", price: "6,00€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb12', name: "La Ferrusienne 7°", price: "6,00€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb13', name: "La Redoutable 9°", price: "6,00€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb14', name: "Curtius 7°", price: "5,50€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb15', name: "La Chouffe Blonde 8°", price: "5,50€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb16', name: "La Chouffe sans alcool 0,4°", price: "5,00€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb17', name: "Lupulus Hopera 6°", price: "5,00€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb18', name: "Lupulus Fructus 4,5°", price: "5,00€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb19', name: "Liefmans Fruitesse 3,8°", price: "4,00€", category: 'drink', subcategory: 'Bières' },
  { id: 'bb20', name: "Pêcheresse 1,1°", price: "3,80€", category: 'drink', subcategory: 'Bières' },

  // BOISSONS — Whiskys
  { id: 'bw1', name: "J&B", price: "7,00€", category: 'drink', subcategory: 'Whiskys' },
  { id: 'bw2', name: "Jack Daniel's", price: "7,50€", category: 'drink', subcategory: 'Whiskys' },
  { id: 'bw3', name: "Jameson", price: "7,00€", category: 'drink', subcategory: 'Whiskys' },
  { id: 'bw4', name: "Chivas 18 ans", price: "9,00€", category: 'drink', subcategory: 'Whiskys' },
  { id: 'bw5', name: "Glenfiddich 14 ans", price: "8,50€", category: 'drink', subcategory: 'Whiskys' },

  // BOISSONS — Rhums
  { id: 'br1', name: "Bacardi blanc", price: "7,00€", category: 'drink', subcategory: 'Rhums' },
  { id: 'br2', name: "Bacardi gold", price: "7,00€", category: 'drink', subcategory: 'Rhums' },
  { id: 'br3', name: "Diplomatico", price: "8,50€", category: 'drink', subcategory: 'Rhums' },
  { id: 'br4', name: "Dictador 12 ans", price: "9,00€", category: 'drink', subcategory: 'Rhums' },
  { id: 'br5', name: "Plantation Barbados XO", price: "9,50€", category: 'drink', subcategory: 'Rhums' },

  // BOISSONS — Gins
  { id: 'bg1', name: "Bombay Dry", price: "9,50€", category: 'drink', subcategory: 'Gins' },
  { id: 'bg2', name: "Bulldog", price: "9,50€", category: 'drink', subcategory: 'Gins' },
  { id: 'bg3', name: "Hendricks", price: "9,50€", category: 'drink', subcategory: 'Gins' },
  { id: 'bg4', name: "Gin Mare", price: "9,50€", category: 'drink', subcategory: 'Gins' },
  { id: 'bg5', name: "Nordes", price: "9,50€", category: 'drink', subcategory: 'Gins' },
  { id: 'bg6', name: "Ardenna Organic", price: "10,00€", category: 'drink', subcategory: 'Gins' },
  { id: 'bg7', name: "Ardenna sans alcool", price: "8,50€", category: 'drink', subcategory: 'Gins' },

  // BOISSONS — Suppléments tonics
  { id: 'bt1', name: "Schweppes Tonic", price: "3,00€", category: 'drink', subcategory: 'Tonics' },
  { id: 'bt2', name: "Fever Tree Mediterranean", price: "3,00€", category: 'drink', subcategory: 'Tonics' },
  { id: 'bt3', name: "Fever Tree Clementine", price: "3,00€", category: 'drink', subcategory: 'Tonics' },

  // BOISSONS — Softs
  { id: 'bs1', name: "Eau plate / pétillante 1/2 L", price: "4,50€", category: 'drink', subcategory: 'Softs' },
  { id: 'bs2', name: "Eau plate / pétillante 1 L", price: "6,50€", category: 'drink', subcategory: 'Softs' },
  { id: 'bs3', name: "Coca / Coca zéro", price: "2,90€", category: 'drink', subcategory: 'Softs' },
  { id: 'bs4', name: "Fanta orange", price: "2,90€", category: 'drink', subcategory: 'Softs' },
  { id: 'bs5', name: "Sprite", price: "2,90€", category: 'drink', subcategory: 'Softs' },
  { id: 'bs6', name: "Fuze Tea lemon (pétillant)", price: "2,90€", category: 'drink', subcategory: 'Softs' },
  { id: 'bs7', name: "Fuze Tea mangue-camomille", price: "2,90€", category: 'drink', subcategory: 'Softs' },
  { id: 'bs8', name: "Fuze Tea pêche-hibiscus", price: "2,90€", category: 'drink', subcategory: 'Softs' },
  { id: 'bs9', name: "Looza orange", price: "2,90€", category: 'drink', subcategory: 'Softs' },
  { id: 'bs10', name: "Looza pomme", price: "2,90€", category: 'drink', subcategory: 'Softs' },
  { id: 'bs11', name: "Schweppes Tonic", price: "3,00€", category: 'drink', subcategory: 'Softs' },
  { id: 'bs12', name: "Schweppes Agrum", price: "3,00€", category: 'drink', subcategory: 'Softs' },
  { id: 'bs13', name: "Fever Tree Mediterranean", price: "3,00€", category: 'drink', subcategory: 'Softs' },
  { id: 'bs14', name: "Fever Tree Clementine", price: "3,00€", category: 'drink', subcategory: 'Softs' },

  // BOISSONS — Digestifs
  { id: 'bd1', name: "Limoncello", price: "7,00€", category: 'drink', subcategory: 'Digestifs' },
  { id: 'bd2', name: "Amaretto", price: "7,00€", category: 'drink', subcategory: 'Digestifs' },
  { id: 'bd3', name: "Amaretto sans alcool", price: "5,50€", category: 'drink', subcategory: 'Digestifs' },
  { id: 'bd4', name: "Baileys", price: "7,00€", category: 'drink', subcategory: 'Digestifs' },
  { id: 'bd5', name: "Grappa", price: "7,00€", category: 'drink', subcategory: 'Digestifs' },
  { id: 'bd6', name: "Grappa miel", price: "7,00€", category: 'drink', subcategory: 'Digestifs' },
  { id: 'bd7', name: "Cointreau", price: "7,00€", category: 'drink', subcategory: 'Digestifs' },
  { id: 'bd8', name: "Poire Cognac", price: "7,00€", category: 'drink', subcategory: 'Digestifs' },
  { id: 'bd9', name: "Cognac Courvoisier", price: "7,50€", category: 'drink', subcategory: 'Digestifs' },
  { id: 'bd10', name: "Armagnac Saint-Vivant", price: "7,50€", category: 'drink', subcategory: 'Digestifs' },
  { id: 'bd11', name: "Calvados Père Magloire", price: "7,00€", category: 'drink', subcategory: 'Digestifs' },
  { id: 'bd12', name: "Sambuca", price: "7,00€", category: 'drink', subcategory: 'Digestifs' },
  { id: 'bd13', name: "Marc de Gewurztraminer", price: "7,00€", category: 'drink', subcategory: 'Digestifs' },

  // BOISSONS — Boissons chaudes
  { id: 'bh1', name: "Café", price: "2,90€", category: 'drink', subcategory: 'Boissons chaudes' },
  { id: 'bh2', name: "Déca", price: "2,90€", category: 'drink', subcategory: 'Boissons chaudes' },
  { id: 'bh3', name: "Expresso", price: "2,90€", category: 'drink', subcategory: 'Boissons chaudes' },
  { id: 'bh4', name: "Cappuccino", price: "3,70€", category: 'drink', subcategory: 'Boissons chaudes' },
  { id: 'bh5', name: "Thé", description: "Tea Tower : 8 variétés", price: "2,90€", category: 'drink', subcategory: 'Boissons chaudes' },
  { id: 'bh6', name: "Irish coffee", description: "Whisky Jameson", price: "9,50€", category: 'drink', subcategory: 'Boissons chaudes' },
  { id: 'bh7', name: "Italian coffee", description: "Amaretto", price: "9,50€", category: 'drink', subcategory: 'Boissons chaudes' },
  { id: 'bh8', name: "Spanish coffee", description: "Licor 43", price: "9,50€", category: 'drink', subcategory: 'Boissons chaudes' },
  { id: 'bh9', name: "Baileys coffee", price: "9,50€", category: 'drink', subcategory: 'Boissons chaudes' },
  { id: 'bh10', name: "Café Ardennais", price: "8,00€", category: 'drink', subcategory: 'Boissons chaudes' },
  { id: 'bh11', name: "Italian Coffee sans alcool", price: "8,00€", category: 'drink', subcategory: 'Boissons chaudes' },

  // ============================================================
  // MENU ENFANTS — 18,50€
  // ============================================================
  { id: 'k1', name: "Filet pur bœuf Black Angus ±150 gr", description: "Accompagné de frites ou pommes de terre grenaille", price: "18,50€", category: 'kids', subcategory: 'Plat au choix' },
  { id: 'k2', name: "Hamburger Black Angus cheddar", description: "Accompagné de frites ou pommes de terre grenaille", price: "18,50€", category: 'kids', subcategory: 'Plat au choix' },
  { id: 'k3', name: "Coupe de glace 2 boules", description: "Vanille, chocolat ou fruits de saison (glace artisanale)", price: "Inclus", category: 'kids', subcategory: 'Dessert inclus' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: "/images/Photos/_1021367.jpg", alt: "Ambiance Le Pavé", category: "interior" },
  { id: 2, url: "/images/Photos/_1021370.jpg", alt: "Détail culinaire", category: "food" },
  { id: 3, url: "/images/Photos/_1021385.jpg", alt: "Savoir-faire boucher", category: "interior" },
  { id: 4, url: "/images/Photos/_1021389.jpg", alt: "L'art de la table", category: "food" },
  { id: 5, url: "/images/Photos/_1021397.jpg", alt: "Atmosphère chaleureuse", category: "interior" },
  { id: 6, url: "/images/Photos/_1021404.jpg", alt: "Nos sélections", category: "food" },
  { id: 7, url: "/images/Photos/_1021424.jpg", alt: "La flamme", category: "interior" },
  { id: 8, url: "/images/Photos/_1021431.jpg", alt: "Maturation d'exception", category: "food" },
  { id: 9, url: "/images/Photos/_1021436.jpg", alt: "Cadre élégant", category: "interior" },
  { id: 10, url: "/images/Photos/_1021467.jpg", alt: "Plaisir des sens", category: "food" },
  { id: 11, url: "/images/Photos/_1021496.jpg", alt: "Moment de partage", category: "interior" },
  { id: 12, url: "/images/Photos/_1021533.jpg", alt: "Gastronomie locale", category: "food" },
  { id: 13, url: "/images/Photos/_1021547.jpg", alt: "L'intemporel", category: "interior" },
  { id: 14, url: "/images/Photos/_1021552.jpg", alt: "Gourmandise", category: "food" },
  { id: 15, url: "/images/Photos/_1021563.jpg", alt: "Détails raffinés", category: "interior" },
  { id: 16, url: "/images/Photos/_1021569.jpg", alt: "Service attentionné", category: "food" },
  { id: 17, url: "/images/Photos/_1021571.jpg", alt: "Authenticité", category: "interior" },
  { id: 18, url: "/images/Photos/_1021573.jpg", alt: "Passion du goût", category: "food" },
  { id: 19, url: "/images/Photos/_1021588.jpg", alt: "Élégance", category: "interior" },
  { id: 20, url: "/images/Photos/_1021594.jpg", alt: "Saveurs uniques", category: "food" },
  { id: 21, url: "/images/Photos/_1021604.jpg", alt: "Lumière et matière", category: "interior" },
  { id: 22, url: "/images/Photos/_1021617.jpg", alt: "Excellence", category: "food" },
  { id: 23, url: "/images/Photos/_1021627.jpg", alt: "Convivialité", category: "interior" },
  { id: 24, url: "/images/Photos/_1021631.jpg", alt: "Tradition", category: "food" },
  { id: 25, url: "/images/Photos/_1021632.jpg", alt: "Modernité", category: "interior" },
  { id: 26, url: "/images/Photos/_1021640.jpg", alt: "Créativité", category: "food" },
  { id: 27, url: "/images/Photos/_1021646.jpg", alt: "Inspiration", category: "interior" },
  { id: 28, url: "/images/Photos/_1021651.jpg", alt: "Qualité supérieure", category: "food" },
  { id: 29, url: "/images/Photos/_1021653.jpg", alt: "Signature Le Pavé", category: "interior" },
];

export const REVIEWS: Review[] = [
  { id: 1, author: "Marc Vanders", rating: 5, text: "Incontestablement la meilleure adresse pour les amateurs de viande de la région. La côte à l'os était fondante, maturée à la perfection. Un service qui connaît ses produits sur le bout des doigts." },
  { id: 2, author: "Sandrine L.", rating: 5, text: "Une révélation culinaire. On sent le respect du produit dès la première bouchée. Le bœuf Blanc Bleu Belge est sublimé. L'os à moelle en entrée est un passage obligé !" },
  { id: 3, author: "Julien Dubuisson", rating: 5, text: "Magnifique cadre et viande de qualité exceptionnelle. Le chef Johan maîtrise la cuisson à la braise comme personne. Une adresse qui porte bien son nom, on y revient pour le Pavé !" },
];