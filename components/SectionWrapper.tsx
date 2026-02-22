import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', id, delay = 0 }) => {
  const comp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = comp.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { 
        opacity: 0, 
        y: 60,
        filter: 'blur(5px)' // Ajout d'un flou subtil au départ
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.4, // Plus lent
        delay: delay,
        ease: 'power4.out', // Courbe très douce
        scrollTrigger: {
          trigger: element,
          start: 'top 90%', 
        },
      }
    );
  }, [delay]);

  return (
    <div ref={comp} className={className} id={id}>
      {children}
    </div>
  );
};

export default SectionWrapper;