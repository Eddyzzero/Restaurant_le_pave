import React, { useRef, useLayoutEffect } from 'react';
import { MapPin, Phone, Clock, CreditCard, ExternalLink, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';
import gsap from 'gsap';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Animation du Titre Géant à gauche
      tl.fromTo(".contact-huge-title span", 
        { y: 200, rotateX: -30, opacity: 0 },
        { y: 0, rotateX: 0, opacity: 1, duration: 1.8, stagger: 0.1 }
      );

      // 2. Animation des lignes séparatrices
      tl.fromTo(".contact-divider",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 1.5 },
        "-=1"
      );

      // 3. Apparition du contenu de droite (Cascade douce)
      tl.fromTo(".contact-section-right", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2 },
        "-=1.2"
      );

      // 4. Map Reveal
      tl.fromTo(".contact-map-wrapper",
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" },
        "-=1"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-pave-cream pt-24 lg:pt-0 overflow-hidden flex flex-col lg:flex-row">
      
      {/* SECTION GAUCHE : TITRE MONUMENTAL (Fixe sur desktop) */}
      <div className="lg:w-[45%] lg:h-screen lg:sticky lg:top-0 bg-pave-dark p-8 md:p-16 lg:p-20 flex flex-col justify-end relative overflow-hidden">
        {/* Texture de fond subtile */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="/images/Photos/_1021385.jpg" 
            alt="texture" 
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="relative z-10">
          <div className="contact-huge-title">
            <h1 className="flex flex-col text-5xl sm:text-6xl md:text-8xl lg:text-[10vw] font-serif font-light leading-[0.8] tracking-tighter text-pave-gold">
              <span className="block italic">Contact</span>
              <span className="block ml-[0.2em]">&</span>
              <span className="block text-pave-cream font-normal uppercase text-2xl sm:text-4xl md:text-6xl lg:text-[4vw] tracking-[0.15em] sm:tracking-[0.2em] mt-4">
                Réservations
              </span>
            </h1>
          </div>
          
          <div className="contact-divider w-24 h-[1px] bg-pave-gold my-12"></div>
          
          <p className="contact-section-right text-gray-400 font-light text-lg max-w-sm">
            Une table au Pavé est une promesse de convivialité. Nous avons hâte de vous recevoir.
          </p>
        </div>

        {/* Décoration */}
        <div className="absolute top-20 right-[-10%] text-[20vw] font-serif italic text-white/[0.03] select-none pointer-events-none">
          Pave
        </div>
      </div>

      {/* SECTION DROITE : INFORMATIONS PRATIQUES (Scrollable) */}
      <div className="lg:w-[55%] p-8 md:p-16 lg:p-24 space-y-24">
        
        {/* Téléphone & Réservation */}
        <section className="contact-section-right">
          <span className="text-pave-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Prendre rendez-vous</span>
          <div className="group">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-pave-dark mb-6 md:mb-8 group-hover:italic transition-all duration-500">
              Par téléphone uniquement
            </h2>
            <a 
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-pave-charcoal hover:text-pave-gold transition-colors duration-500 flex items-center gap-4 break-all sm:break-normal"
            >
              {RESTAURANT_INFO.phone}
              <ArrowRight size={40} className="hidden md:block opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-500" />
            </a>
            <p className="text-gray-400 mt-6 max-w-md">
              Nous privilégions le contact direct pour mieux répondre à vos demandes spécifiques (allergies, événements, grandes tablées).
            </p>
          </div>
        </section>

        {/* Localisation */}
        <section className="contact-section-right grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <span className="text-pave-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Nous trouver</span>
            <h3 className="text-2xl font-serif text-pave-dark mb-4">{RESTAURANT_INFO.address}</h3>
            <p className="text-gray-500 mb-6">Situé sur la place principale, parking aisé juste devant l'établissement.</p>
            <a 
              href="https://www.google.com/maps/dir//Place+de+Chablis+3,+4190+Ferrières" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-pave-dark pb-1 text-sm uppercase tracking-widest font-bold hover:text-pave-gold hover:border-pave-gold transition-colors"
            >
              Calculer l'itinéraire <ExternalLink size={14} />
            </a>
          </div>

          <div>
            <span className="text-pave-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Heures d'ouverture</span>
            <ul className="space-y-3 text-pave-charcoal text-sm sm:text-base">
              <li className="flex justify-between border-b border-gray-100 pb-2 gap-2">
                <span className="font-bold shrink-0">Jeudi - Vendredi</span>
                <span className="text-right">12:00-14:30, 18:30-22:00</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2 gap-2">
                <span className="font-bold shrink-0">Samedi</span>
                <span className="text-right">18:30 - 22:00</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2 gap-2">
                <span className="font-bold shrink-0">Dimanche</span>
                <span className="text-right">12:00-14:30, 18:30-21:30</span>
              </li>
              <li className="flex justify-between text-gray-400 italic gap-2">
                <span>Lundi - Mercredi</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Paiement & Extras */}
        <section className="contact-section-right">
          <div className="bg-pave-dark p-6 sm:p-8 md:p-12 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div>
              <h3 className="text-2xl font-serif text-pave-gold mb-2 text-center md:text-left">Paiements acceptés</h3>
              <p className="text-gray-400 text-center md:text-left">Espèces et Bancontact disponibles sur place.</p>
            </div>
            <div className="flex gap-4">
               <div className="w-16 h-10 bg-white/10 rounded border border-white/20 flex items-center justify-center">
                 <CreditCard size={20} className="text-pave-gold" />
               </div>
               <div className="w-16 h-10 bg-white/10 rounded border border-white/20 flex items-center justify-center text-[10px] font-bold">CASH</div>
            </div>
          </div>
        </section>

        {/* Map Full Width in Column */}
        <section className="contact-section-right pb-24">
          <div className="contact-map-wrapper rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-[280px] sm:h-[350px] md:h-[500px] border border-pave-dark/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.1448839077977!2d5.6784!3d50.4005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0590000000001%3A0x0!2zUGxhY2UgZGUgQ2hhYmxpcyAzLCA0MTkwIEZlcnJpw6hyZXMsIEJlbGdpcXVl!5e0!3m2!1sfr!2sbe!4v1620000000000!5m2!1sfr!2sbe" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy"
              title="Carte Google Maps - Le Pavé"
              className="grayscale hover:grayscale-0 transition-all duration-1000"
            ></iframe>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contact;