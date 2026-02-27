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
  { id: 'e2', name: "Carpaccio de bœuf Black Angus", description: "Roquette, noisettes torrifiées, mayonnaise truffe maison, poudre d'olive noire, balsamique", price: "18,50€", category: 'starter', isGlutenFree: true },
  { id: 'e3', name: "Saumon Gravlax", description: "Chantilly aux agrumes, mayonnaise aux herbes, oignons rouges pickles", price: "19,00€", category: 'starter' },
  { id: 'e4', name: "Tartare de bœuf au couteau Black Angus", description: "Jaune d'œuf, cèpres, échalotes, cornichons", price: "17,50€", category: 'starter', isGlutenFree: true },
  { id: 'e5', name: "Gratin végétarien", description: "Courgettes, feta, tomates", price: "15,50€", category: 'starter', isVegetarian: true },
  { id: 'e6', name: "Croquettes fromage & jambon d'Ardenne", description: "2 pièces", price: "15,00€", category: 'starter' },
  { id: 'e7', name: "Croquettes de homard", description: "2 pièces", price: "18,50€", category: 'starter' },

  // ============================================================
  // PLATS
  // ============================================================
  { id: 'p1', name: "Tagliata de bœuf Black Angus", description: "Roquette, tomates sèches, pignons de pin, parmesan, huile de truffe, balsamique", price: "32,50€", category: 'main', subcategory: 'Plats' },
  { id: 'p2', name: "Ribs caramélisés", price: "26,50€", category: 'main', subcategory: 'Plats' },
  { id: 'p3', name: "Burger « Le pave » Black Angus", description: "Viande 200 gr, raclette, bacon, laitue, oignons rouges, tomates, sauce maison", price: "24,00€", category: 'main', subcategory: 'Plats' },
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
  { id: 'vr1', name: "Cuvée C – Domaine des Romarins", description: "Côtes du Rhône – Nez marqué par des arômes de fruits noirs légèrement confits, vin souple idéal avec une pièce de bœuf. – 75 cl", price: "39 €", category: 'wine', subcategory: 'Vins Rouges (Moment)' },
  { id: 'vr2', name: "Suivi des Fées – Domaine du Boiron", description: "Vin de France Biologique – Assemblage Tannat / Merlot, structure tannique et souplesse, parfait pour viande d'exception ou gibier. – 75 cl", price: "42 €", category: 'wine', subcategory: 'Vins Rouges (Moment)' },
  { id: 'vr3', name: "Les Planchots 2023 – Domaine Piguet-Chouet", description: "Bourgogne – Savigny-Lès-Beaune – Vin équilibré et puissant évoquant la griotte, typique du Pinot avec notes torrifiées. – 75 cl", price: "66 €", category: 'wine', subcategory: 'Vins Rouges (Moment)' },
  { id: 'vr4', name: "Vespro 2021 – Abbaye Ste-Marie de Pierredon", description: "Vin Bio des Alpilles – Arômes de cerise ou mûre, puis notes d'olive et de garrigue (Cabernet-Sauvignon / Syrah), accord côte de bœuf. – 75 cl", price: "65 €", category: 'wine', subcategory: 'Vins Rouges (Moment)' },
  { id: 'vr5', name: "Domaine Melody 2023", description: "Crozes-Hermitage – Syrah sur terroir argilo-sableux à galets roulés : fruits des bois, encens, bouche gourmande, finale réglissée. – 75 cl", price: "46 €", category: 'wine', subcategory: 'Vins Rouges (Moment)' },

  // VINS BLANCS
  { id: 'vb1', name: "Beaujolais-Villages – Domaine Grange Masson", description: "Robe pâle brillante, fleurs blanches et pêche blanche, belle persistance aromatique. – 75 cl", price: "32 €", category: 'wine', subcategory: 'Vins Blancs (Moment)' },
  { id: 'vb2', name: "Ultima Laude 2023 - Abbaye Ste-Marie de Pierredon", description: "Vin Bio des Alpilles – Robe légèrement dorée, nez complexe (viennoiserie, fleur de genêt), attaque acidulée Rolle + 5 % Sauvignon, notes de fruits secs grillés. – 75 cl", price: "45 €", category: 'wine', subcategory: 'Vins Blancs (Moment)' },
  { id: 'vb3', name: "Chablis 2023 – Domaine Raoul Gautherin", description: "Chablis vinifié en cuve, élevé 10-11 mois sur lies fines, minéralité argilo-calcaire, fraîcheur et note citronnée. – 75 cl", price: "45 €", category: 'wine', subcategory: 'Vins Blancs (Moment)' },

  // ============================================================
  // CARTE DES VINS
  // ============================================================
  // VIN MAISON
  { id: 'vm1', name: "Rouge – Vin Maison", description: "Rocca Maura \"Les Vigerons de Roquemaure\" – IGP Gard. Syrah, Merlot, Marselan. Robe rouge grenat, reflets violets. Nez de fruits rouges frais, notes épicées. En bouche, richesse, équilibre parfait, tanins soyeux, vin riche et gourmand. Notes de réglisse.", price: "Verre 5€ / 1/4L 8,50€ / 1/2L 15€ / Bt 22€", category: 'wine', subcategory: 'Vin Maison' },
  { id: 'vm2', name: "Blanc – Vin Maison", description: "Rocca Maura \"Les Vigerons de Roquemaure\" – IGP Gard. Chardonnay, Viognier, Sauvignon. Robe limpidité cristalline, couleur or pâle. Nez très expressif floral et fruité : fleurs blanches, notes citronnées, poire, pamplemousse. Attaque sur la rondeur et le gras, l'équilibre est harmonieux. Les agrumes décelés au nez sont bien présents.", price: "Verre 5€ / 1/4L 8,50€ / 1/2L 15€ / Bt 22€", category: 'wine', subcategory: 'Vin Maison' },
  { id: 'vm3', name: "Rosé – Vin Maison", description: "Rocca Maura \"Les Vigerons de Roquemaure\" – IGP Gard. Grenache, Merlot, Cinsault. Robe pâle, brillante, légèrement saumonée. Nez élégant, fin, notes florales puis fruitées, framboise, pamplemousse. Bouche équilibrée et fine. Notes de fruits frais (fraise, cassis).", price: "Verre 5€ / 1/4L 8,50€ / 1/2L 15€ / Bt 22€", category: 'wine', subcategory: 'Vin Maison' },

  // BULLES
  { id: 'vbll1', name: "Cava Tempus III", description: "Macabeo – Cava Brut DO. Jaune pâle avec des reflets vert, de belles bulles. Des arômes de fleurs et de fruits secs. Un vin mousseux, crèmeux, fait selon la \"méthode traditionnelle\" avec des notes d'agrumes et une longue finale.", price: "Coupe 7€ / 75cl 35€", category: 'wine', subcategory: 'Bulles' },
  { id: 'vbll2', name: "Champagne Guilleminot Brut", description: "Pinot Noir – Champagne AOC – Domaine Michel Guilleminot. Paré d'une belle robe limpide et brillante avec des reflets or, doté d'un nez expressif de fruits rouges, de cire, légèrement brioché, ce superbe champagne a vieilli en cave deux ans après la mise en bouteille.", price: "37,5cl 32€ / 75cl 60€", category: 'wine', subcategory: 'Bulles' },

  // VINS BLANCS
  { id: 'vbl1', name: "Sauvignon Chardonnay – Clémentine", description: "Languedoc Roussillon – Sauvignon, Chardonnay – IGP Pays d'Oc – Domaine Clémentine (Luc Pirlet). Sa robe limpide ou léger, son nez floral et un peu exotique et sa bouche fraîche avec une finale qui ne manque pas de finesse en font un vin très réussi.", price: "75cl 25€", category: 'wine', subcategory: 'Vins Blancs' },
  { id: 'vbl2', name: "Viognier – Cave de Richemer", description: "Languedoc Roussillon – Viognier – Côte de Thau IGP – Cave de Richemer. Jaune brillant aux reflets verts intenses. Complexe et riche en arômes de fruits à gros noyaux comme la pêche blanche et l'abricot. Attaque franche, bouche grasse et rondeur agréée.", price: "75cl 24€", category: 'wine', subcategory: 'Vins Blancs' },
  { id: 'vbl3', name: "Chablis – Beauvais", description: "Bourgogne – Chardonnay – Chablis AOC – Domaine Gérard Tremblay. Sous sa robe assez claire, or pâle ou or vert, ce blanc exprime un nez trèf frais, vif et minéral dans lequel on retrouve le silex, la pomme verte et le citron. Des notes de tilleul, de menthe et d'accacia sont fréquentes, de même que des arômes de réglisse, de foin coupé.", price: "37,5cl 28€ / 75cl 45€", category: 'wine', subcategory: 'Vins Blancs' },
  { id: 'vbl4', name: "Pinot Gris \"Collection\"", description: "Alsace – Pinot Gris – Alsace AOC – Cave de Ribeauville. C'est un vin aux arômes fumés et aux notes de fruits secs. Généreux et structuré en bouche, il offre une belle complexité, avec une finale épicée persistante.", price: "37,5cl 20€ / 75cl 32€", category: 'wine', subcategory: 'Vins Blancs' },
  { id: 'vbl5', name: "Sancerre \"Beau Roy\"", description: "Val de Loire – Sauvignon – Sancerre AOC – Domaine Reverdy Ducroux. Ce vin, remarquable par son bouquet et sa souplesse, par sa belle couleur jaune argentée, par son expression aromatique de fruits mûrs, est à déguster dès maintenant, mais l'expression du terroir s'intensifiera avec le temps.", price: "37,5cl 32€ / 75cl 52€", category: 'wine', subcategory: 'Vins Blancs' },

  // VINS ROSÉS
  { id: 'vro1', name: "Pinot Noir \"Collection\"", description: "Alsace – Pinot Noir – Alsace AOC – Cave de Ribeauville. Vin à la robe rubis qui dégage des arômes de fruits rouges. Palais délicat et structuré qui s'épanouit sur des tanins fins.", price: "37,5cl 20€ / 75cl 32€", category: 'wine', subcategory: 'Vins Rosés' },
  { id: 'vro2', name: "Gris-Gris", description: "Languedoc Roussillon – Grenache, Syrah – Côte du Roussillon AOC – Jonquères d'Oriola. Robe rose pâle. Nez de fruits rouges acidulés (fraise, groseille) et épices. Frais, avec un croquant persistant. Belle structure. Vin gastronomique festif.", price: "75cl 27€", category: 'wine', subcategory: 'Vins Rosés' },

  // VINS ROUGES
  { id: 'vrou1', name: "Cuvée du Vieux Moulin", description: "Bordeaux – Merlot, Malbec, Cabernet Sauvignon – Blaye Côte de Bordeaux AOC – Vignoble Denis Lafon. Un joli nez de fruits rouges. En bouche, un très bel équilibre, des beaux tanins bien serrés, élégant, belle longueur.", price: "75cl 28€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou2', name: "Château de Roque", description: "Bordeaux – Merlot, Cabernet Franc – Pomerol AOC – Château de Roques. Robe rouge cerise avec reflets rubis et une teinte cristalline. Sa bouche est élégante, fine et harmonieuse avec une longue persistance aromatique.", price: "37,5cl 18€ / 75cl 32€ / Magnum 59€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou3', name: "Domaine de Compostelle", description: "Bordeaux – Merlot, Cabernet Franc – Pomerol AOC – Château la Cabane. Magnifique nez puissant et complexe, aux arômes de fruits noirs bien mûrs, au boisé harmonieux, aux notes d'épices et de fleurs suaves, bouche superbe d'énergie, dense, ample, bien tramée avec une grande pureté, de la fraîcheur et de l'allonge. Un Pomerol vibrant, au superbe potentiel.", price: "75cl 63€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou4', name: "Château Saint Louis", description: "Bordeaux – Merlot, Cabernet Sauvignon, Cabernet Franc – Saint-Estèphe AOC – Château Saint Louis. Vin avec une robe grenat et des arômes se rapprochant des fruits rouges comme le cassis ou la cerise. C'est un vin bouqueté, tannique sans excès, plein et délicat.", price: "75cl 57€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou5', name: "Côtes-du-Rhône Sélection Vieilles Vignes", description: "Côtes du Rhône – Grenache, Syrah – Côte du Rhône AOC – La Vinsobraise. Le tout pour vous offrir un vin couleur rouge cerise, intense et brillante, à l'attaque franche, souple, légèrement épicé et très fin. Bref, un bon équilibre.", price: "75cl 26€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou6', name: "Vacqueyras – Beaumirail", description: "Côtes du Rhône – Grenache, Syrah, Mourvèdre, Cinsault – Vacqueyras AOC – Gigondas la Cave. Son attaque franche nous séduit par sa mâche friande et soyeuse. Les tanins, délicats, se fondent dans la richesse de la matière. La finale aromatique se compose d'abord de notes dans un style épicé de muscade et de girofle, puis développe un parfum subtil de violette et de zan venant clore la dégustation. Profitez dès maintenant de sa jeunesse et sa fraîcheur sur une cuisine simple et ensoleillée.", price: "37,5cl 28€ / 75cl 44€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou7', name: "Volcae", description: "Côtes du Rhône – Carignan, Grenache, Syrah – Duché d'Uzès AOC – Mas des Volques. Robe profonde et soutenue. Nez riche avec des arômes de prune, de censes noirs et des notes de garrigue. En bouche, une texture dense et soyeuse, des tanins raffinés et une longue finale.", price: "75cl 37€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou8', name: "Saint Nicolas de Bourgueil", description: "Val de Loire – Cabernet Franc – Saint Nicolas de Bourgueil AOC – Vini Be Good. Les expressions du terroir se manifestent dans leur splendeur : fruits rouges, arômes floraux, tendresse des tanins, longueur en bouche, tout est réuni pour flatter les palais les plus délicats.", price: "75cl 35€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou9', name: "Sancerre \"Beauregard\"", description: "Val de Loire – Pinot Noir – Sancerre AOC – Domaine Reverdy Ducroux. Une belle couleur rouge griotte et un bouquet complexe de fruits rouges bien mûrs, le tout bien équilibré en bouche. Un vin fort réussi.", price: "37,5cl 32€ / 75cl 52€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou10', name: "Julienas \"Cœur de Granit\"", description: "Beaujolais – Gamay – Jullienas AOC – Cave du Château de Chénas. Le Juliénas est un vin puissant et généreux qui s'apprécie aussi bien jeune, alors que ses arômes de pêche et de fruits rouges étonnent, qu'après quelques années de bouteille.", price: "75cl 32€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou11', name: "Haute Côte de Beaune", description: "Bourgogne – Pinot Noir – Côte de Beaune AOC – Nuiton-Beaunoy. Robe pourpre aux reflets violines. Au nez, le vin offre une large palette aromatique de petits fruits rouges et noirs (fraises, groseilles, cassis) et révèle également de fines notes toastées. Souple et délicate, la bouche offre des tanins soyeux et une longueur remarquable.", price: "75cl 45€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou12', name: "Gevrey Chambertin la Justice", description: "Bourgogne – Pinot Noir – AOC Gevrey Chambertin – Charlopin. Le vin arbore une robe rubis pourpre profonde, aux reflets violets brillants. En bouche, la matière suave et concentrée est présente dès l'attaque, des saveurs cassis, mûre, groseille, d'épices douces et de touches légèrement boisées.", price: "75cl 99€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou13', name: "Syrah Mourvèdre Fût de Chêne", description: "Languedoc Roussillon – Syrah, Mourvèdre – IGP Pays d'Oc – Domaine Clémentine (Luc Pirlet). Un vin à la robe profonde, presque noire, au nez puissant s'exprimant sur la violette, les petits fruits rouges et les épices, le tout mâtiné par des notes de vanille, un vin à la bouche opulent. Bref, une très belle réussite.", price: "75cl 26€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou14', name: "Néro d'Avola \"Usuela\"", description: "Italie (Sicile) – Néro d'Avola – Rosso Sicilia DOC. Rouge intense avec des reflets violet, typique de la variété. Nez captivant, avec de l'arôme de cerise noire, prune.", price: "75cl 26€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou15', name: "Costalago", description: "Italie (Vénétie) – Corvina, Corvinone, Cabernet, Merlot – Costalago Rosso Veronese IGT – Zeni. Couleur rouge rubis profond. Au nez, arômes floraux avec des notes de fruits mûrs. Un vin vineux, doux et persistant.", price: "75cl 37€", category: 'wine', subcategory: 'Vins Rouges' },
  { id: 'vrou16', name: "Primitivo di Manduria – Luccarelli", description: "Italie (Pouilles) – Primitivo – Primitivo di Manduria DOCG – Luccarelli. Rouge intense avec des reflets violet, typique de la variété. Nez captivant, avec de l'arôme de cerise noire, prune.", price: "75cl 39€", category: 'wine', subcategory: 'Vins Rouges' },


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
  { id: 1, url: "/images/Photos/_1021370.jpg", alt: "Detail culinaire", category: "food" },
  { id: 2, url: "/images/Photos/_1021385.jpg", alt: "Savoir-faire boucher", category: "interior" },
  { id: 3, url: "/images/Photos/_1021389.jpg", alt: "L'art de la table", category: "food" },
  { id: 4, url: "/images/Photos/_1021397.jpg", alt: "Atmosphère chaleureuse", category: "interior" },
  { id: 5, url: "/images/Photos/_1021424.jpg", alt: "La flamme", category: "interior" },
  { id: 6, url: "/images/Photos/_1021431.jpg", alt: "Sélection d'exception", category: "food" },
  { id: 7, url: "/images/Photos/_1021436.jpg", alt: "Cadre élégant", category: "interior" },
  { id: 8, url: "/images/Photos/_1021547.jpg", alt: "L'intemporel", category: "interior" },
  { id: 9, url: "/images/Photos/_1021552.jpg", alt: "Gourmandise", category: "food" },
  { id: 10, url: "/images/Photos/_1021563.jpg", alt: "Détails raffinés", category: "interior" },
  { id: 11, url: "/images/Photos/_1021569.jpg", alt: "Service attentionné", category: "food" },
  { id: 12, url: "/images/Photos/_1021571.jpg", alt: "Authenticité", category: "interior" },
  { id: 13, url: "/images/Photos/_1021573.jpg", alt: "Passion du goût", category: "food" },
  { id: 14, url: "/images/Photos/_1021588.jpg", alt: "Élégance", category: "interior" },
  { id: 15, url: "/images/Photos/_1021594.jpg", alt: "Saveurs uniques", category: "food" },
  { id: 16, url: "/images/Photos/_1021604.jpg", alt: "Lumière et matière", category: "interior" },
  { id: 17, url: "/images/Photos/_1021617.jpg", alt: "Excellence", category: "food" },
  { id: 18, url: "/images/Photos/_1021627.jpg", alt: "Convivialité", category: "interior" },
  { id: 19, url: "/images/Photos/_1021631.jpg", alt: "Tradition", category: "food" },
  { id: 20, url: "/images/Photos/_1021632.jpg", alt: "Modernité", category: "interior" },
  { id: 21, url: "/images/Photos/_1021640.jpg", alt: "Créativité", category: "food" },
  { id: 22, url: "/images/Photos/_1021646.jpg", alt: "Inspiration", category: "interior" },
  { id: 23, url: "/images/Photos/_1021651.jpg", alt: "Qualité supérieure", category: "food" },
  { id: 24, url: "/images/Photos/_1021653.jpg", alt: "Signature Le Pave", category: "interior" },
];

export const REVIEWS: Review[] = [
  { id: 1, author: "Céline Bollen", rating: 5, text: "Très belle découverte ! Le cadre est super chaleureux, on s’y sent bien dès qu’on arrive. Le personnel est vraiment au top, souriant et attentionné. La nourriture était excellente, on s’est régalés du début à la fin. Franchement, je recommande sans hésiter et j’y retournerai très vite !" },
  { id: 2, author: "Charlotte Habotte", rating: 5, text: "Tout était parfait , le service , le cadre et surtout la viande d une qualité exceptionnelle ! Je recommande fortement" },
  { id: 3, author: "Dorine", rating: 5, text: "Tout était excellent ! L’accueil, le service, la cuisine ! Le pavé de filet pur de bœuf était tendre, de plus, ils travaillent avec des producteurs locaux. Nous l’avons découvert par hasard mais comptons bien y retourner !" },
  { id: 4, author: "Evens Pascal", rating: 5, text: "Le resto sans fausse note. Service impeccable, le magret de canard était délicieux, la carte des vins est bien dans des prix raisonnables et la carte des digestifs également. Je recommande !" },
];

