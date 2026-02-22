import React from 'react';
import { RESTAURANT_INFO } from '../constants';
import { MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pave-dark text-neutral-content font-sans">
      <div className="footer pt-12 pb-8 px-6 md:pt-16 md:pb-10 md:px-10 container mx-auto flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-10 md:gap-12">
        <aside>
          <h3 className="font-serif text-2xl md:text-3xl text-pave-gold mb-4">{RESTAURANT_INFO.name}</h3>
          <p className="max-w-xs text-gray-300">
            Cuisine authentique et familiale au cœur de Ferrières.
            Des produits locaux, une passion véritable.
          </p>
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
             {/* Mock Social Icons */}
            <a href="#" className="btn btn-circle btn-sm btn-outline text-white hover:bg-pave-gold hover:border-pave-gold">
              <Facebook size={18} />
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-outline text-white hover:bg-pave-gold hover:border-pave-gold">
              <Instagram size={18} />
            </a>
          </div>
        </aside> 
        <nav>
          <h6 className="footer-title text-pave-gold opacity-100">Navigation</h6> 
          <Link to="/" className="link link-hover">Accueil</Link>
          <Link to="/menu" className="link link-hover">Notre Menu</Link>
          <Link to="/about" className="link link-hover">À Propos</Link>
          <Link to="/gallery" className="link link-hover">Galerie</Link>
          <Link to="/contact" className="link link-hover">Réserver</Link>
        </nav> 
        <nav>
          <h6 className="footer-title text-pave-gold opacity-100">Contact</h6> 
          <div className="flex items-start gap-2 mb-2 justify-center md:justify-start">
            <MapPin size={18} className="mt-1 text-pave-gold shrink-0" />
            <span className="max-w-[200px]">{RESTAURANT_INFO.address}</span>
          </div>
          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            <Phone size={18} className="text-pave-gold shrink-0" />
            <span>{RESTAURANT_INFO.phone}</span>
          </div>
          <p className="text-sm mt-4 text-gray-400">
            Paiements: Espèces & Bancontact
          </p>
          <div className="text-sm mt-4 text-gray-400 space-y-1">
            <p>TVA : BE1019 116 939</p>
            <p>CRELAN : BE27 1030 9666 1073</p>
          </div>
        </nav>
      </div>
      <div className="footer px-6 md:px-10 py-4 border-t border-white/10 bg-neutral-900 text-neutral-content flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 container mx-auto">
        <p className="text-sm text-center">© {new Date().getFullYear()} Le Pavé. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;