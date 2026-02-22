
import React, { useState, useRef, useLayoutEffect, useCallback } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import gsap from 'gsap';

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Refs pour le support du swipe/drag
  const touchStartPos = useRef<number | null>(null);
  const isDragging = useRef(false);

  const moveGallery = useCallback((direction: 'next' | 'prev') => {
    setActiveIndex((prev) => {
      let nextIndex = direction === 'next' ? prev + 1 : prev - 1;
      if (nextIndex < 0) nextIndex = GALLERY_IMAGES.length - 1;
      if (nextIndex >= GALLERY_IMAGES.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  // Gestion du Drag/Swipe
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    touchStartPos.current = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current || touchStartPos.current === null) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const diff = touchStartPos.current - currentX;

    // Seuil de déclenchement du swipe (50px)
    if (Math.abs(diff) > 70) {
      moveGallery(diff > 0 ? 'next' : 'prev');
      touchStartPos.current = null;
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    touchStartPos.current = null;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      GALLERY_IMAGES.forEach((_, i) => {
        const item = itemsRef.current[i];
        if (!item) return;

        const offset = i - activeIndex;
        const absOffset = Math.abs(offset);
        
        // Configuration de la sortie de page 3D "Soft & Elegant"
        const z = offset === 0 ? 300 : -250 * absOffset;
        const x = offset * 120; 
        const rotationY = offset * -30; 
        const opacity = offset === 0 ? 1 : Math.max(0, 0.3 - absOffset * 0.1);
        const blur = offset === 0 ? 0 : absOffset * 6;
        const scale = offset === 0 ? 1.05 : 0.8;

        gsap.to(item, {
          xPercent: x,
          z: z,
          rotateY: rotationY,
          opacity: opacity,
          scale: scale,
          filter: `blur(${blur}px)`,
          duration: 1.8,
          ease: "expo.out",
          pointerEvents: offset === 0 ? 'auto' : 'none',
          overwrite: true
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeIndex]);

  // Parallaxe au curseur
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) return;
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 30;
    const yPos = (clientY / window.innerHeight - 0.5) * 30;

    const activeItem = itemsRef.current[activeIndex];
    if (activeItem) {
      gsap.to(activeItem, {
        rotateY: xPos,
        rotateX: -yPos,
        duration: 1,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    const activeItem = itemsRef.current[activeIndex];
    if (activeItem) {
      gsap.to(activeItem, {
        rotateY: 0,
        rotateX: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      });
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen bg-[#030303] text-white pt-24 pb-12 overflow-hidden flex flex-col justify-center select-none"
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleTouchStart}
      // Fixed duplicate onMouseMove by combining both handlers
      onMouseMove={(e) => {
        handleMouseMove(e);
        handleTouchMove(e);
      }}
      onMouseUp={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Decoratif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[radial-gradient(circle,#C5A065_0%,transparent_60%)] opacity-[0.04]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Titre Minimaliste */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.8em] text-pave-gold font-bold mb-4 opacity-60">Galerie Immersive</h2>
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-serif italic font-light tracking-tighter">
            Le Regard <span className="text-pave-gold">du Pavé</span>
          </h1>
        </div>

        {/* 3D Stage (Scroll Zone) */}
        <div className="relative h-[350px] sm:h-[450px] md:h-[650px] w-full flex items-center justify-center perspective-[2500px] cursor-grab active:cursor-grabbing">
          {GALLERY_IMAGES.map((img, i) => (
            <div 
              key={img.id}
              ref={el => { itemsRef.current[i] = el; }}
              className="absolute w-[220px] sm:w-[280px] md:w-[450px] aspect-[3/4] preserve-3d group"
              onClick={() => i === activeIndex && setSelectedImage(img.url)}
            >
              {/* Cadre de l'image avec Border Radius 12px (rounded-xl) */}
              <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                  draggable={false}
                />
                
                {/* Overlay Infos */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-4 sm:p-8 md:p-12">
                  <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <p className="text-pave-gold text-[10px] uppercase tracking-widest mb-3 font-bold">{img.category}</p>
                    <h3 className="text-xl sm:text-3xl font-serif italic mb-4 sm:mb-6 leading-none">{img.alt}</h3>
                    <div className="flex items-center gap-3 text-white/40 text-[9px] uppercase tracking-[0.4em]">
                      <Maximize2 size={12} /> Agrandir
                    </div>
                  </div>
                </div>
              </div>

              {/* Reflet au sol adaptatif */}
              <div className="absolute -bottom-[25%] left-1/2 -translate-x-1/2 w-[90%] h-[30%] bg-pave-gold/20 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Contrôles de Navigation Interactifs */}
        <div className="flex flex-col items-center mt-8 sm:mt-12 md:mt-16 gap-6 sm:gap-10">
          <div className="flex items-center gap-8 sm:gap-12 md:gap-24">
            <button 
              onClick={() => moveGallery('prev')}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/10 flex items-center justify-center group hover:bg-pave-gold hover:border-pave-gold transition-all duration-500"
            >
              <ChevronLeft size={20} className="text-white/40 group-hover:text-pave-dark transition-colors sm:w-6 sm:h-6" strokeWidth={1.5} />
            </button>

            {/* Counter stylisé */}
            <div className="flex flex-col items-center">
              <div className="font-serif italic text-3xl sm:text-4xl md:text-6xl flex items-baseline gap-2 sm:gap-3">
                <span className="text-pave-gold">{activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1}</span>
                <span className="text-white/10 text-xl md:text-2xl">/</span>
                <span className="text-white/20 text-xl md:text-2xl">{GALLERY_IMAGES.length < 10 ? `0${GALLERY_IMAGES.length}` : GALLERY_IMAGES.length}</span>
              </div>
              <div className="text-[8px] uppercase tracking-[0.6em] text-white/20 mt-2 font-bold">Détails de l'image</div>
            </div>

            <button 
              onClick={() => moveGallery('next')}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/10 flex items-center justify-center group hover:bg-pave-gold hover:border-pave-gold transition-all duration-500"
            >
              <ChevronRight size={20} className="text-white/40 group-hover:text-pave-dark transition-colors sm:w-6 sm:h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Barre de Progression (Indicateur de scroll horizontal) */}
          <div className="relative w-64 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-pave-gold transition-all duration-1000 ease-out"
              style={{ width: `${((activeIndex + 1) / GALLERY_IMAGES.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Lightbox Cinema Fullscreen avec bordures également */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/98 flex items-center justify-center p-2 sm:p-4 md:p-12 animate-fade-in cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-10 md:right-10 text-white/30 hover:text-white transition-colors bg-white/5 p-3 sm:p-4 rounded-full backdrop-blur-md">
            <X size={32} strokeWidth={1} />
          </button>
          
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain shadow-[0_0_120px_rgba(197,160,101,0.15)] animate-scale-up rounded-xl border border-white/10"
            alt="Plein écran"
          />
        </div>
      )}

      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        .perspective-2500 { perspective: 2500px; }
        
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9) translateY(40px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scale-up {
          animation: scaleUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .gallery-3d-item {
          will-change: transform, opacity, filter;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
