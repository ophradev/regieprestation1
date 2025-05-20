import { useEffect } from 'react';

export default function HeroSection() {
  useEffect(() => {
    // Aucune initialisation spéciale nécessaire, le chatbot est maintenant géré par le composant ChatBot.tsx
  }, []);

  return (
    <section id="accueil" className="relative bg-gradient-to-r from-primary to-emerald-800 text-white py-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="mt-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Accédez aux services gouvernementaux en quelques clics</h1>
            <p className="text-lg mb-8">Découvrez une nouvelle façon d'interagir avec les services ministériels togolais grâce à notre assistant intelligent.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                id="hero-chat-button" 
                className="bg-secondary text-togo-dark px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition duration-300 shadow-lg flex items-center justify-center"
              >
                <i className="fas fa-comments mr-2"></i> Discuter avec l'assistant
              </button>
              <a href="#services" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition duration-300 text-center">
                Découvrir nos services
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative bg-white p-6 rounded-lg shadow-xl transform rotate-3 z-10">
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-robot text-white"></i>
                  </div>
                  <span className="font-medium">Assistant e-Services</span>
                </div>
                <p className="text-gray-700">Bonjour ! Comment puis-je vous aider avec les services ministériels aujourd'hui ?</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg mb-4 ml-auto max-w-xs">
                <p className="text-gray-700">Je voudrais savoir comment obtenir un extrait de naissance.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-robot text-white"></i>
                  </div>
                  <span className="font-medium">Assistant e-Services</span>
                </div>
                <p className="text-gray-700">Pour obtenir un extrait de naissance, vous devez vous adresser au service d'état civil de votre mairie avec les documents suivants...</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-secondary rounded-lg shadow-xl transform -rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}