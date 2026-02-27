import React, { useState, useRef, useEffect, useMemo } from 'react';
import { MENU_ITEMS } from '../constants';
import SectionWrapper from '../components/SectionWrapper';
import gsap from 'gsap';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'starter' | 'main' | 'dessert' | 'drink' | 'kids'>('main');
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'starter', title: 'Entrées', icon: 'restaurant' },
    { id: 'main', title: 'Plats', icon: 'restaurant' },
    { id: 'dessert', title: 'Desserts', icon: 'icecream' },
    { id: 'wine', title: 'Vins', icon: 'wine_bar' },
    { id: 'drink', title: 'Boissons', icon: 'local_bar' },
    { id: 'kids', title: 'Enfants', icon: 'child_care' },
  ];

  const currentItems = MENU_ITEMS.filter(item => item.category === activeTab);

  // Group items by subcategory (preserving order)
  const groupedItems = useMemo(() => {
    const groups: { subcategory: string | null; items: typeof currentItems }[] = [];
    let lastSub: string | null | undefined = undefined;

    currentItems.forEach((item) => {
      const sub = item.subcategory || null;
      if (sub !== lastSub) {
        groups.push({ subcategory: sub, items: [item] });
        lastSub = sub;
      } else {
        groups[groups.length - 1].items.push(item);
      }
    });

    return groups;
  }, [activeTab, currentItems]);

  const hasSubcategories = groupedItems.some(g => g.subcategory !== null);

  useEffect(() => {
    if (itemsContainerRef.current) {
      gsap.fromTo(itemsContainerRef.current.children, 
        { 
          opacity: 0, 
          y: 20, 
          filter: 'blur(10px)' 
        },
        { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)', 
          duration: 0.8, 
          stagger: 0.06, 
          ease: "power3.out",
          overwrite: true
        }
      );
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-pave-cream pt-28 md:pt-40 pb-16 md:pb-32">
      <SectionWrapper>
        <div className="w-full max-w-4xl mx-auto text-center mb-16 px-5 sm:px-10">
          <span className="text-[10px] uppercase tracking-[0.5em] text-pave-gold font-bold mb-6 block animate-fade-in">Maison de Viandes</span>
          <h1 className="text-5xl sm:text-7xl md:text-[8vw] font-serif font-light text-pave-dark mb-6 md:mb-10 tracking-tighter">La Carte</h1>
          <div className="max-w-2xl mx-auto mt-10 p-8 border border-pave-gold/20 bg-white/50 backdrop-blur-sm rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pave-gold/40 to-transparent"></div>
            <span className="text-[9px] uppercase tracking-[0.4em] text-pave-gold font-bold mb-6 block">Suggestions du moment</span>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-pave-dark/5 pb-4">
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Entrée</span>
                  <h3 className="font-serif text-lg text-pave-charcoal italic">Sashimi de bœuf</h3>
                </div>
                <span className="font-serif text-pave-gold text-lg md:text-xl">18€</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-pave-dark/5 pb-4">
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Plat</span>
                  <h3 className="font-serif text-lg text-pave-charcoal italic leading-tight">Jambonneau sauce moutarde à l'ancienne et Jack Daniel's miel</h3>
                </div>
                <span className="font-serif text-pave-gold text-lg md:text-xl">26€</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Dessert</span>
                  <h3 className="font-serif text-lg text-pave-charcoal italic">Pain perdu caramel beurre salé et sa boule de glace à la vanille</h3>
                </div>
                <span className="font-serif text-pave-gold text-lg md:text-xl">12€</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pave-gold/40 to-transparent"></div>
          </div>
        </div>
      </SectionWrapper>

      {/* Navigation par Catégories */}
      <div className="w-full max-w-4xl mx-auto px-5 sm:px-10 mb-12 md:mb-20 sticky top-20 md:top-24 z-30">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-500 text-[9px] sm:text-[10px] uppercase tracking-wide sm:tracking-widest font-bold whitespace-nowrap shadow-sm border ${
                activeTab === cat.id 
                  ? 'bg-pave-dark text-white shadow-lg border-pave-dark/20' 
                  : 'bg-white text-gray-500 hover:text-pave-dark border-pave-dark/5 hover:shadow-md'
              }`}
            >
              <span className="material-symbols-rounded text-xs sm:text-sm">
                {cat.icon}
              </span>
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-5 sm:px-10 min-h-[400px]">
        {/* En-tête de catégorie dynamique */}
        <div className="flex items-center gap-4 sm:gap-8 mb-8 md:mb-16 overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-light italic text-pave-dark shrink-0">
            {categories.find(c => c.id === activeTab)?.title}
          </h2>
          <div className="h-[1px] w-full bg-pave-dark/10"></div>
        </div>

        {/* Info menu enfants */}
        {activeTab === 'kids' && (
          <div className="mb-8 md:mb-12 p-4 sm:p-6 bg-pave-dark/5 rounded-xl text-center">
            <p className="text-pave-gold font-serif italic text-lg sm:text-xl">Menu complet — 18,50€</p>
            <p className="text-gray-500 text-sm mt-1">Plat au choix + dessert glace inclus</p>
          </div>
        )}

        {/* Note accompagnement plats */}
        {activeTab === 'main' && (
          <div className="mb-8 md:mb-12 text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">
              Accompagnement : frites ou pommes de terre grenaille
            </p>
          </div>
        )}

        <div ref={itemsContainerRef} className="grid gap-y-2">
          {groupedItems.length > 0 ? (
            groupedItems.map((group, groupIdx) => (
              <React.Fragment key={group.subcategory || `group-${groupIdx}`}>
                {/* Subcategory header */}
                {group.subcategory && (
                  <div className={`flex items-center gap-4 sm:gap-6 ${groupIdx > 0 ? 'mt-8 md:mt-12' : ''} mb-4 md:mb-6`}>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif italic text-pave-gold shrink-0">
                      {group.subcategory}
                    </h3>
                    <div className="h-[1px] w-full bg-pave-gold/20"></div>
                  </div>
                )}

                {/* Items in this group */}
                {group.items.map((item) => (
                  <div key={item.id} className="group relative flex flex-col py-3 sm:py-4">
                    <div className="flex justify-between items-baseline border-b border-pave-dark/5 pb-3 sm:pb-4 gap-3">
                       <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-xl font-serif font-light text-pave-charcoal group-hover:text-pave-gold transition-all duration-500 truncate">
                            {item.name}
                          </h3>
                          <div className="flex gap-1 shrink-0">
                             {item.isVegetarian && <span className="material-symbols-rounded text-pave-gold text-sm" title="Végétarien">eco</span>}
                             {item.isGlutenFree && <span className="material-symbols-rounded text-pave-gold text-sm" title="Sans Gluten">spa</span>}
                          </div>
                       </div>
                       <span className="text-base sm:text-lg font-serif italic text-pave-gold shrink-0">{item.price}</span>
                    </div>
                    
                    {item.description && (
                      <p className="text-gray-400 font-light text-sm md:text-base italic leading-relaxed mt-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </React.Fragment>
            ))
          ) : (
            <div className="text-center py-20 text-gray-400 font-serif italic text-2xl font-light">
              Notre sélection se renouvelle pour cette catégorie...
            </div>
          )}
        </div>
        

        <SectionWrapper className="mt-16 md:mt-32 pt-8 md:pt-16 border-t border-pave-dark/5 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold">
            Produits d'Origine • La maitrise de la cuisson
          </p>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Menu;