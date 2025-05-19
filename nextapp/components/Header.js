import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative h-16 w-16 mr-4">
              <svg width="64" height="64" viewBox="0 0 200 200" className="w-full h-full">
                <g>
                  <path d="M100,10 C50,10 20,40 20,100 C20,160 60,190 100,190 C140,190 180,160 180,100 C180,40 150,10 100,10 Z" fill="#006b3f" stroke="#fff" strokeWidth="4"/>
                  
                  <rect x="40" y="30" width="120" height="120" fill="#006b3f"/>
                  <rect x="40" y="30" width="120" height="24" fill="#ffce00"/>
                  <rect x="40" y="54" width="120" height="24" fill="#006b3f"/>
                  <rect x="40" y="78" width="120" height="24" fill="#ffce00"/>
                  <rect x="40" y="102" width="120" height="24" fill="#006b3f"/>
                  <rect x="40" y="126" width="120" height="24" fill="#ffce00"/>
                  
                  <rect x="40" y="30" width="60" height="72" fill="#d21034"/>
                  <polygon points="70,40 77,62 95,62 80,75 87,97 70,84 53,97 60,75 45,62 63,62" fill="white"/>
                  
                  <rect x="85" y="70" width="30" height="70" fill="#ffffff" opacity="0.8"/>
                  <rect x="80" y="60" width="40" height="10" fill="#ffffff" opacity="0.8"/>
                  <rect x="75" y="50" width="50" height="10" fill="#ffffff" opacity="0.8"/>
                </g>
              </svg>
            </div>
            <div>
              <h1 className={`font-bold text-xl sm:text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
                e-Services Togo
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Portail des Prestations Ministérielles
              </p>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} ${isScrolled ? 'text-primary' : 'text-white'}`}></i>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Accueil', href: '#accueil' },
              { name: 'Services', href: '#services' },
              { name: 'Ministères', href: '#ministeres' },
              { name: 'À propos', href: '#apropos' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-60 mt-4' : 'max-h-0'
          }`}
        >
          <div className={`flex flex-col space-y-4 py-4 px-2 rounded-lg ${isScrolled ? 'bg-white' : 'bg-primary bg-opacity-90'}`}>
            {[
              { name: 'Accueil', href: '#accueil' },
              { name: 'Services', href: '#services' },
              { name: 'Ministères', href: '#ministeres' },
              { name: 'À propos', href: '#apropos' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className={`font-medium ${
                  isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}