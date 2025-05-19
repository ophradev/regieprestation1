import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import logoPath from '../assets/logo_togo.svg';

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logoPath} 
              alt="République Togolaise" 
              className="h-16 mr-4"
            />
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