import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Partners from '../components/Partners';
import { REVIEWS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const introImageRef = useRef<HTMLImageElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTween = useRef<gsap.core.Tween | null>(null);

  const marqueeReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroBgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(heroTextRef.current?.querySelectorAll(".hero-line"), 
        { y: 100, opacity: 0, rotateX: 10 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.5, stagger: 0.2, delay: 0.2 }
      );
      
      tl.fromTo(".hero-btn", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      );

      if (introImageRef.current) {
        gsap.fromTo(introImageRef.current, 
          { y: -50, scale: 1.1 },
          {
            y: 50,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current, 
              start: "top top",
              end: "bottom top+=1500", 
              scrub: 1.5 
            }
          }
        );
      }

      if (marqueeRef.current) {
         marqueeTween.current = gsap.to(marqueeRef.current, {
          xPercent: -33.333, 
          repeat: -1,
          duration: 35,
          ease: "linear",
        });
      }

    }, heroRef);

    return () => {
      ctx.revert();
      marqueeTween.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    marqueeTween.current?.pause();
    gsap.to(marqueeRef.current, { opacity: 0.8, duration: 0.5 });
  };

  const handleMouseLeave = () => {
    marqueeTween.current?.play();
    gsap.to(marqueeRef.current, { opacity: 1, duration: 0.5 });
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div 
          ref={heroBgRef}
          className="absolute inset-0 bg-cover bg-center z-0 scale-110"
          style={{ 
            backgroundImage: 'url("/images/Photos/_1021424.jpg")',
            filter: 'brightness(0.35) saturate(0.7)'
          }}
        />
        
        <div ref={heroTextRef} className="relative z-10 text-center text-white px-4 w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className="overflow-hidden mb-4">
            <h2 className="hero-line text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase text-pave-gold mb-2 font-bold font-sans">
              Maison de Viandes • Ferrières
            </h2>
          </div>
          <div className="overflow-hidden mb-2">
             <img 
               src="/images/gallery/Logo - Le_pave_Blanc.png" 
               alt="Le Pavé Restaurant" 
               className="hero-line w-[280px] sm:w-[400px] md:w-[600px] lg:w-[700px] h-auto object-contain mx-auto mb-6"
             />
          </div>
          <div className="overflow-hidden mb-12">
            <p className="hero-line text-base sm:text-lg md:text-2xl font-light italic font-serif text-white/70 max-w-2xl mx-auto mt-6 sm:mt-8 px-2">
              L'excellence des viandes d'exception, sublimées par la flamme.
            </p>
          </div>
          <div className="hero-btn">
            <Link 
              to="/menu" 
              className="group relative px-10 py-5 bg-transparent border border-white/20 hover:border-pave-gold transition-colors duration-700 overflow-hidden inline-block"
            >
              <span className="absolute inset-0 bg-pave-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.22,1,0.36,1]"></span>
              <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold text-white group-hover:text-pave-dark transition-colors duration-500">
                Découvrir la carte
              </span>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white">L'immersion</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>

      {/* Editorial Intro */}
      <section className="py-20 sm:py-32 md:py-40 lg:py-60 bg-pave-cream relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 z-10">
              <SectionWrapper>
                <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-serif font-light text-pave-charcoal leading-[1.1] mb-6 md:mb-12 tracking-tighter">
                  Le respect du boucher,<br/>
                  <span className="italic text-pave-gold font-light">l'art de la sélection.</span>
                </h2>
                <div className="w-20 h-[1px] bg-pave-gold mb-6 md:mb-12"></div>
                <p className="text-gray-500 leading-relaxed text-base sm:text-lg md:text-xl mb-6 md:mb-10 font-light max-w-xl">
                  <strong>Le Pavé</strong> est avant tout une aventure familiale portée par <strong>Johan Bastin</strong>. 
                  Entouré de Sylvia, Patrice et Noah, ils ont bâti un lieu sincère et chaleureux où la convivialité est une réalité quotidienne et le partage, une seconde nature.
                </p>
                <Link to="/about" className="inline-flex items-center text-pave-dark border-b border-pave-dark/20 pb-2 hover:text-pave-gold hover:border-pave-gold transition-all uppercase tracking-[0.25em] text-[10px] font-bold mt-4">
                  Notre Savoir-Faire <ArrowRight size={14} className="ml-3" />
                </Link>
              </SectionWrapper>
            </div>
            <div className="lg:col-span-5 relative mt-20 lg:mt-0">
              <SectionWrapper delay={0.3}>
                <div className="relative z-10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-sm aspect-[4/5] bg-pave-dark">
                  <img 
                    ref={introImageRef}
                    src="/images/Photos/_1021617.jpg" 
                    alt="Sélection bouchère" 
                    className="w-full h-[110%] object-cover grayscale hover:grayscale-0 transition-all duration-[1s] ease-out"
                  />
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white/20 font-serif italic text-3xl md:text-6xl select-none pointer-events-none">
                    Sélection
                  </div>
                </div>
              </SectionWrapper>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-pave-gold/20 hidden lg:block -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className="relative py-24 sm:py-32 md:py-40 lg:py-52 overflow-hidden bg-pave-dark text-white">
        <div className="absolute inset-0 opacity-30">
           <img 
            src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070&auto=format&fit=crop" 
            alt="Sélection bouchère" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <SectionWrapper>
            <div className="max-w-2xl">
              <span className="text-pave-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">Plat Signature</span>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light mb-6 md:mb-12 leading-[0.9] tracking-tighter">
                Filet Pur<br/>
                <span className="italic text-white/30 font-light">Black Angus</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-6 md:mb-12 max-w-lg">
                Notre pièce maîtresse en provenance directe de la <span className="text-pave-gold font-medium">Ferme Misse</span>. 
                Un bœuf Black Angus d'une qualité exceptionnelle, sélectionné pour son persillage unique et sa tendreté incomparable.
              </p>
              <Link to="/menu" className="btn btn-outline border-white/20 text-white hover:bg-white hover:text-pave-dark rounded-none px-12 py-4 h-auto text-[10px] uppercase tracking-[0.3em] font-bold">
                Découvrir nos coupes
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>
      {/* Gift Voucher Section */}
      <section className="py-20 sm:py-32 bg-pave-cream">
        <div className="container mx-auto px-6 md:px-12">
          <SectionWrapper>
            <div className="relative overflow-hidden bg-pave-dark p-8 md:p-16 lg:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 border border-pave-gold/20 shadow-2xl">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none translate-x-1/4">
                <img 
                  src="/images/Photos/_1021389.jpg" 
                  alt="Détail table" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pave-gold/50 to-transparent"></div>

              <div className="relative z-10 max-w-xl">
                <span className="text-pave-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">Le cadeau idéal</span>
                <h2 className="text-4xl md:text-6xl font-serif font-light text-white mb-6 leading-[1.1] tracking-tighter">
                  Offrez l’émotion <br/>
                  <span className="italic text-pave-gold">du Pavé</span>
                </h2>
                <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed mb-4">
                  Pour un anniversaire, une fête ou simplement pour le plaisir d’offrir, nos bons cadeaux permettent de découvrir l’excellence de notre maison de viandes.
                </p>
                <div className="flex items-center gap-6 justify-center md:justify-start">
                  <div className="h-[1px] w-8 bg-pave-gold/40"></div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Valable 1 an sur toute la carte</span>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-4">
                <Link 
                  to="/contact" 
                  className="group relative px-10 py-5 bg-pave-gold text-pave-dark transition-all duration-700 overflow-hidden inline-block shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)]"
                >
                  <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.22,1,0.36,1]"></span>
                  <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-pave-dark transition-colors duration-500">
                    Commander un bon
                  </span>
                </Link>
                <p className="text-[9px] text-gray-500 uppercase tracking-[0.3em] font-bold">Disponible sur place ou par mail</p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 md:py-40 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12 text-center mb-12 md:mb-24">
          <SectionWrapper>
            <div>
              <Star size={20} className="text-pave-gold/40 mx-auto mb-6" />
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold italic">La voix de nos hôtes</h3>
            </div>
          </SectionWrapper>
        </div>
        
        <div 
          className="w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={marqueeRef}
            className="flex gap-16 w-max px-16 items-stretch"
          >
            {marqueeReviews.map((review, idx) => (
              <div 
                key={`${review.id}-${idx}`} 
                className="w-[280px] sm:w-[350px] md:w-[500px] p-6 sm:p-8 md:p-12 flex flex-col justify-between shrink-0 border-l border-gray-100"
              >
                <div>
                   <div className="flex justify-center gap-1 mb-6">
                     {[...Array(5)].map((_, i) => (
                       <Star 
                         key={i} 
                         size={12} 
                         className={i < review.rating ? "fill-pave-gold text-pave-gold" : "text-gray-200"} 
                         strokeWidth={i < review.rating ? 0 : 2}
                       />
                     ))}
                   </div>
                  <p className="font-serif text-lg sm:text-2xl md:text-3xl text-pave-charcoal font-light italic leading-relaxed text-center mb-6 md:mb-10">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="text-center">
                   <div className="w-10 h-[1px] bg-pave-gold/30 mx-auto mb-6"></div>
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pave-gold">{review.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners />
    </main>
  );
};

export default Home;