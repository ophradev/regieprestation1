export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Kokou Mensah",
      role: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      quote: "Grâce à l'assistant virtuel, j'ai pu obtenir toutes les informations nécessaires pour créer mon entreprise au Togo sans devoir me déplacer plusieurs fois dans différents ministères."
    },
    {
      name: "Ama Koffi",
      role: "Étudiante",
      image: "https://randomuser.me/api/portraits/women/43.jpg",
      quote: "Le processus pour demander une bourse d'études était confus, mais l'assistant m'a guidé étape par étape. C'est un gain de temps incroyable !"
    },
    {
      name: "Emmanuel Agbeko",
      role: "Agriculteur",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "J'ai pu découvrir les subventions disponibles pour mon exploitation agricole et comprendre comment les demander. L'information est claire et précise."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos utilisateurs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment notre assistant virtuel aide les citoyens togolais dans leurs démarches administratives au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
                <span className="text-5xl text-primary opacity-20">"</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 italic relative z-10">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Prêt à simplifier vos démarches administratives ?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Notre assistant virtuel est disponible 24h/24 pour répondre à toutes vos questions concernant les services ministériels au Togo.
          </p>
          <button 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center"
            onClick={() => {
              const heroButton = document.getElementById('hero-chat-button');
              if (heroButton) {
                heroButton.click();
              }
            }}
          >
            <i className="fas fa-comments mr-2"></i>
            Essayer maintenant
          </button>
        </div>
      </div>
    </section>
  );
}