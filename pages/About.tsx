import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-pave-cream pt-28 md:pt-32 pb-12 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Intro */}
        <SectionWrapper>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-pave-dark mb-4">Notre Identité</h1>
            <div className="w-24 h-1 bg-pave-gold mx-auto"></div>
          </div>
        </SectionWrapper>

        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12 lg:mb-24">
          <div className="lg:w-1/2">
            <SectionWrapper>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-pave-gold rounded-lg hidden md:block"></div>
                <img 
                  src="/images/Photos/_1021385.jpg" 
                  alt="L'art du boucher au Pavé" 
                  className="rounded-lg shadow-xl relative z-10 w-full object-cover"
                />
              </div>
            </SectionWrapper>
          </div>
          <div className="lg:w-1/2">
            <SectionWrapper delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-pave-dark mb-4 md:mb-6">Une quête insatiable de qualité</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                Situé Place de Chablis, <strong>Le Pavé</strong> n'est pas qu'un restaurant, c'est un hommage à l'artisanat boucher. 
                Notre passion se forge dans le choix de la bête, le respect des temps de repos et la précision de la découpe.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                Nous travaillons main dans la main avec des éleveurs passionnés de notre région. Pour nous, une bonne viande 
                doit avoir une histoire, un terroir et surtout, le temps de se révéler. C'est pourquoi nous disposons de nos propres 
                chambres de maturation au cœur de l'établissement.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Le Chef Johan et son équipe subliment ces coupes nobles sur une grille ardente, là où le feu rencontre la chair 
                pour créer des saveurs inoubliables.
              </p>
            </SectionWrapper>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16">
          <SectionWrapper delay={0.1}>
            <div className="bg-pave-dark text-white p-6 md:p-10 rounded-xl shadow-xl h-full flex flex-col justify-center text-center">
              <h3 className="text-2xl font-serif font-bold text-pave-gold mb-4">La Braise & Le Grain</h3>
              <p className="opacity-90 leading-relaxed">
                "Sublimer sans dénaturer." C'est notre credo. Nous n'utilisons aucun artifice. 
                Le goût authentique provient d'un assaisonnement juste, d'un bois de qualité pour la cuisson 
                et d'une connaissance intime des différents muscles et de leur potentiel.
              </p>
            </div>
          </SectionWrapper>
          <SectionWrapper delay={0.2}>
             <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-xl">
               <img src="/images/Photos/_1021431.jpg" alt="Viande maturée d'exception" className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8 text-center">
                  <h3 className="text-3xl font-serif font-bold text-white">L'empreinte du terroir</h3>
               </div>
             </div>
          </SectionWrapper>
        </div>

      </div>
    </div>
  );
};

export default About;