import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img 
              src="https://images.unsplash.com/photo-1518371885443-fcd43e929668?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40" 
              alt="Drapeau du Togo" 
              className="h-8 w-auto rounded"
            />
            <span className="text-togo-dark font-poppins font-bold text-xl">
              e-Services<span className="text-primary">Togo</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-togo-gray hover:text-primary font-medium">Accueil</a>
            <a href="#services" className="text-togo-gray hover:text-primary font-medium">Services</a>
            <a href="#ministeres" className="text-togo-gray hover:text-primary font-medium">Ministères</a>
            <a href="#apropos" className="text-togo-gray hover:text-primary font-medium">À propos</a>
          </nav>
          
          <div className="md:hidden">
            <button 
              className="text-togo-gray hover:text-primary" 
              aria-label="Menu"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div 
          className={`md:hidden ${mobileMenuOpen ? '' : 'hidden'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#accueil" 
              className="block px-3 py-2 rounded-md text-base font-medium text-togo-gray hover:text-primary hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              Accueil
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-togo-gray hover:text-primary hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
            <a 
              href="#ministeres" 
              className="block px-3 py-2 rounded-md text-base font-medium text-togo-gray hover:text-primary hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              Ministères
            </a>
            <a 
              href="#apropos" 
              className="block px-3 py-2 rounded-md text-base font-medium text-togo-gray hover:text-primary hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              À propos
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}