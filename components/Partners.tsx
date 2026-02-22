import React from 'react';
import SectionWrapper from './SectionWrapper';

const PARTNERS = [
  { name: 'Bioferme', src: '/images/gallery/Partenaire - Bioferme_Logo.png' },
  { name: 'Bronfort', src: '/images/gallery/Partenaire - Bronfort_Logo.jpg' },
  { name: 'Ferme Misse', src: '/images/gallery/Partenaire - Ferme_misse_Logo.jpg' },
  { name: 'Charcuteries Saint-Martin', src: '/images/gallery/Partenaire - Les_charcuteries_saint_martin_Logo.png' },
  { name: 'TeaTower', src: '/images/gallery/Partenaire - Teatower_Logo.webp' },
  { name: 'Maison Massart', src: '/images/gallery/Partenaire -maison_massart_Logo.png' },
];

const Partners: React.FC = () => {
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
            {PARTNERS.map((partner, index) => (
              <div 
                key={`p1-${index}`} 
                className="w-32 md:w-48 h-20 md:h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 transform hover:scale-105"
              >
                <img 
                  src={partner.src} 
                  alt={`${partner.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
            {PARTNERS.map((partner, index) => (
              <div 
                key={`p2-${index}`} 
                className="w-32 md:w-48 h-20 md:h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 transform hover:scale-105"
              >
                <img 
                  src={partner.src} 
                  alt={`${partner.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
          
           {/* Third set just to be safe on ultra-wide screens if needed, 
               but 2 sets usually enough if container width < 2 * content width.
               Let's add a third to be safe for 4k screens given 6 logos x ~200px + gaps is ~1500px, 
               so 3000px total for 2 sets vs 3840px screen width. */}
           <div className="flex item-center gap-12 md:gap-24 px-6 md:px-12">
            {PARTNERS.map((partner, index) => (
              <div 
                key={`p3-${index}`} 
                className="w-32 md:w-48 h-20 md:h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 transform hover:scale-105"
              >
                <img 
                  src={partner.src} 
                  alt={`${partner.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
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
