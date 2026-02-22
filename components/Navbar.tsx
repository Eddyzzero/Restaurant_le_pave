import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  const shouldUseDarkText = scrolled || !isHome || isOpen;

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Le Restaurant', path: '/about' },
    { name: 'Galerie', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-700 ease-[0.22,1,0.36,1] font-sans ${
        scrolled 
          ? 'bg-pave-cream/95 backdrop-blur-xl py-4 border-b border-black/5' 
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-[110]">
          <span className={`font-serif text-2xl md:text-3xl font-bold tracking-widest uppercase transition-colors duration-500 ${shouldUseDarkText ? 'text-pave-dark' : 'text-white'}`}>
            Le Pavé
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] uppercase tracking-lux font-bold transition-all duration-300 relative group overflow-hidden ${
                shouldUseDarkText ? 'text-pave-charcoal' : 'text-white/90'
              }`}
            >
              <span className="block transform group-hover:-translate-y-full transition-transform duration-300">{link.name}</span>
              <span className={`absolute top-0 left-0 block transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${shouldUseDarkText ? 'text-pave-gold' : 'text-white'}`}>
                {link.name}
              </span>
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`btn btn-sm border rounded-none px-8 text-[10px] uppercase tracking-widest transition-all duration-500 bg-transparent ${
                shouldUseDarkText 
                ? 'border-pave-gold text-pave-gold hover:bg-pave-gold hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-pave-dark'
            }`}
          >
            Réserver
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-[110] p-2"
          onClick={toggleMenu}
        >
          {isOpen ? 
            <X size={28} className="text-pave-dark" /> : 
            <MenuIcon size={28} className={shouldUseDarkText ? 'text-pave-dark' : 'text-white'} />
          }
        </button>
      </div>

      {/* Mobile Menu Overlay - Version Centrée Revisitée */}
      <div className={`fixed inset-0 bg-pave-cream z-[105] flex flex-col justify-center items-center gap-8 transition-all duration-700 ease-[0.76, 0, 0.24, 1] md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link, idx) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-4xl font-serif font-light italic text-pave-dark hover:text-pave-gold transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${100 + idx * 100}ms` }}
          >
            {link.name}
          </Link>
        ))}
        <div className={`w-12 h-[1px] bg-pave-gold my-4 transition-all duration-500 ${isOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} style={{ transitionDelay: '600ms' }}></div>
        <Link 
          to="/contact" 
          className={`text-[10px] uppercase tracking-[0.4em] font-bold text-pave-dark transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '700ms' }}
        >
          Réserver une table
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;