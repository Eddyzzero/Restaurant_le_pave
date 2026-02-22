import React from 'react';
import { useLocation } from 'react-router-dom';
import { Star, Beef } from 'lucide-react';

const StickyInfo: React.FC = () => {
  const location = useLocation();
  
  const allowedRoutes = ['/', '/menu'];
  const shouldShow = allowedRoutes.includes(location.pathname);

  if (!shouldShow) return null;

  return (
    <div className="fixed bottom-3 right-3 md:bottom-6 md:right-6 z-40 animate-fade-in origin-bottom-right scale-[0.65] sm:scale-75 md:scale-100">
      <div className="flex flex-col gap-3">
        {/* Note Google */}
        <div className="bg-pave-dark/95 backdrop-blur-md border border-pave-gold/30 p-3 md:p-4 rounded-xl shadow-2xl flex items-center gap-3 md:gap-4 transition-transform hover:scale-105 duration-300">
          <div className="flex flex-col">
            <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400">Expérience</span>
            <div className="flex items-center gap-1">
              <span className="font-serif text-lg md:text-xl text-white font-bold">5.0</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={10} className="fill-pave-gold text-pave-gold md:w-3 md:h-3" />
                ))}
              </div>
            </div>
          </div>
          <div className="h-6 md:h-8 w-[1px] bg-white/10"></div>
          
          {/* Prix Moyen */}
          <div className="flex flex-col">
            <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400">Prix Moyen</span>
            <div className="flex items-center gap-1">
              <span className="font-serif text-lg md:text-xl text-white font-bold">~33€</span>
              <span className="text-[8px] md:text-[10px] text-gray-500">/pp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyInfo;