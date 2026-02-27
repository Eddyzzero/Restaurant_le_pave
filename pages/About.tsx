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
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-pave-dark mb-4 md:mb-6">Une aventure familiale</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                <strong>Le Pavé</strong> est avant tout une aventure familiale. Fondé et porté par <strong>Johan Bastin</strong>, chef cuisinier et propriétaire, le restaurant est né d’une passion profonde pour la cuisine et du désir de créer un lieu où l’on se sent chez soi.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                Autour de lui, Sylvia, Patrice et Noah participent à faire vivre cette maison avec engagement et authenticité. Ensemble, ils ont construit un établissement à leur image : sincère, chaleureux et centré sur le partage.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Chaque détail reflète leur volonté de proposer une expérience simple, humaine et généreuse, où la convivialité n’est pas un concept marketing, mais une réalité quotidienne.
              </p>
            </SectionWrapper>
          </div>
        </div>

        {/* Notre philosophie */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 mb-12 lg:mb-24">
          <div className="lg:w-1/2">
            <SectionWrapper delay={0.1}>
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-pave-gold/30 rounded-lg hidden md:block"></div>
                <img 
                  src="/images/Photos/_1021424.jpg" 
                  alt="La passion culinaire" 
                  className="rounded-lg shadow-xl relative z-10 w-full aspect-[4/3] object-cover"
                />
              </div>
            </SectionWrapper>
          </div>
          <div className="lg:w-1/2">
            <SectionWrapper delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-pave-dark mb-4 md:mb-6">Notre philosophie</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                Au Pavé, la cuisine repose sur une conviction claire : travailler des produits locaux et de qualité est la base d’une table authentique. <strong>Johan Bastin</strong> met un point d’honneur à valoriser les producteurs de la région et à respecter le rythme des saisons.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                La passion de la cuisine guide chaque assiette. Il ne s’agit pas seulement de servir un repas, mais de transmettre une émotion, une attention, un savoir-faire. Le restaurant défend une approche familiale où le client est accueilli avec simplicité, dans un esprit de proximité et de respect.
              </p>
            </SectionWrapper>
          </div>
        </div>

        {/* L’expérience au Pavé */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12 lg:mb-20">
          <div className="lg:w-1/2">
            <SectionWrapper delay={0.1}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-pave-gold/30 rounded-lg hidden md:block"></div>
                <img 
                  src="/images/Photos/_1021617.jpg" 
                  alt="L'ambiance au Pavé" 
                  className="rounded-lg shadow-xl relative z-10 w-full aspect-[4/3] object-cover"
                />
              </div>
            </SectionWrapper>
          </div>
          <div className="lg:w-1/2">
            <SectionWrapper delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-pave-dark mb-4 md:mb-6">L’expérience au Pavé</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                Entrer au Pavé, c’est découvrir un cadre agréable et une ambiance chaleureuse où l’on peut partager un moment en famille ou entre amis. L’atmosphère se veut détendue, conviviale et accessible à tous.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                L’équipe met un soin particulier à l’accueil et au service, afin que chacun se sente attendu et considéré. Le restaurant n’est pas simplement un lieu où l’on mange, mais un espace de rencontre, de partage et de plaisir autour d’une cuisine sincère.
              </p>
            </SectionWrapper>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;