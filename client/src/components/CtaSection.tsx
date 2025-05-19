export default function CtaSection() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-primary to-emerald-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'informations sur les services ministériels ?</h2>
          <p className="text-xl mb-8 text-white/90">
            Notre assistant virtuel est disponible 24h/24 pour répondre à toutes vos questions concernant les démarches administratives au Togo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-secondary text-togo-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition duration-300 shadow-lg flex items-center justify-center"
              onClick={() => {
                const heroButton = document.getElementById('hero-chat-button');
                if (heroButton) {
                  heroButton.click();
                }
              }}
            >
              <i className="fas fa-comments mr-2"></i> Discuter avec l'assistant
            </button>
            <a 
              href="mailto:contact@eservices-togo.gouv.tg" 
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition duration-300 flex items-center justify-center"
            >
              <i className="fas fa-envelope mr-2"></i> Nous contacter
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 justify-center items-center">
            <div className="flex items-center">
              <i className="fas fa-check-circle text-secondary text-2xl mr-3"></i>
              <span className="text-lg">Informations fiables</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-clock text-secondary text-2xl mr-3"></i>
              <span className="text-lg">Disponible 24h/24</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-shield-alt text-secondary text-2xl mr-3"></i>
              <span className="text-lg">Sécurisé et confidentiel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}