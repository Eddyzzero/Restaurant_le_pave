import React from 'react';
import SectionWrapper from './SectionWrapper';

const PARTNERS = [
  { name: 'Bioferme', src: '/images/gallery/Partenaire - Bioferme_Logo.png' },
  { name: 'Bronfort', src: '/images/gallery/Partenaire - Bronfort_Logo.jpg' },
  { name: 'Ferme Misse', src: '/images/gallery/Partenaire - Ferme_misse_Logo.jpg' },
  { name: 'Charcuteries Saint-Martin', src: '/images/gallery/Partenaire - Les_charcuteries_saint_martin_Logo.png' },
  { name: 'TeaTower', src: '/images/gallery/Partenaire - Teatower_Logo.webp' },
  { name: 'Maison Massart', src: '/images/gallery/Partenaire -maison_massart_Logo.png' },
  { name: 'Le Parfum Glacé', src: null },
];

const Partners: React.FC = () => {
  const renderPartner = (partner: typeof PARTNERS[0], index: number, prefix: string) => (
    <div 
      key={`${prefix}-${index}`} 
      className="w-32 md:w-48 h-20 md:h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 transform hover:scale-105"
    >
      {partner.src ? (
        <img 
          src={partner.src} 
          alt={`${partner.name} logo`} 
          className="max-w-full max-h-full object-contain"
        />
      ) : (
        <span className="text-pave-cream font-serif text-lg md:text-xl text-center whitespace-normal px-2">
          {partner.name}
        </span>
      )}
    </div>
  );

  return (
    <section className="bg-pave-dark py-16 md:py-24 border-t border-pave-dark/5 overflow-hidden">
      <SectionWrapper>
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-pave-gold font-bold mb-4 block animate-fade-in">
            Nos Partenaires
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-pave-cream italic">
            Ils nous font confiance
          </h2>
        </div>
      </SectionWrapper>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap items-center hover:pause">
          {/* First set of logos */}
          <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
            {PARTNERS.map((partner, index) => renderPartner(partner, index, 'p1'))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
            {PARTNERS.map((partner, index) => renderPartner(partner, index, 'p2'))}
          </div>
          
           <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
            {PARTNERS.map((partner, index) => renderPartner(partner, index, 'p3'))}
          </div>
        </div>
        
        {/* Gradient fades on sides for smooth effect */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-pave-dark/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-pave-dark/50 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Partners;
