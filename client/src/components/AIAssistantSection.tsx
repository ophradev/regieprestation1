export default function AIAssistantSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="bg-white p-6 rounded-xl shadow-xl max-w-md mx-auto">
                <div className="flex items-center border-b border-gray-200 pb-4 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-robot text-white"></i>
                  </div>
                  <h3 className="font-bold text-lg">Assistant e-Services</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                    <p className="text-gray-800">Bonjour, comment puis-je vous aider aujourd'hui avec les services administratifs du Togo?</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg rounded-tr-none ml-auto">
                    <p className="text-gray-800">Quelles sont les démarches pour obtenir un permis de conduire au Togo?</p>
                  </div>
                  
                  <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                    <p className="text-gray-800">Pour obtenir un permis de conduire au Togo, voici les étapes à suivre:</p>
                    <ol className="list-decimal pl-5 mt-2 space-y-1 text-gray-700">
                      <li>S'inscrire dans une auto-école agréée</li>
                      <li>Passer l'examen théorique (code de la route)</li>
                      <li>Passer l'examen pratique de conduite</li>
                      <li>Une fois réussi, déposer un dossier à la Direction des Transports Routiers</li>
                      <li>Payer les frais de dossier et d'établissement</li>
                    </ol>
                    <p className="mt-2 text-gray-800">Souhaitez-vous connaître les documents nécessaires pour constituer le dossier?</p>
                  </div>
                  
                  <div className="relative">
                    <span className="flex h-3 w-3 absolute -bottom-5 left-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full z-[-1] opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full z-[-1] opacity-30"></div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Notre Assistant Virtuel à Votre Service</h2>
            <p className="text-xl text-gray-600 mb-8">
              Posez vos questions en langage naturel et obtenez des réponses précises sur les démarches administratives au Togo.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  icon: "fa-comments-alt",
                  title: "Conversation Naturelle",
                  description: "Dialoguez comme avec un agent réel pour obtenir des informations personnalisées."
                },
                {
                  icon: "fa-clock",
                  title: "Disponible 24h/24",
                  description: "Accédez aux informations à tout moment, sans contrainte d'horaires."
                },
                {
                  icon: "fa-check-double",
                  title: "Information Précise",
                  description: "Obtenez des réponses vérifiées et à jour sur les procédures administratives."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 bg-primary/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <i className={`fas ${feature.icon} text-primary`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="mt-8 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center"
              onClick={() => {
                const heroButton = document.getElementById('hero-chat-button');
                if (heroButton) {
                  heroButton.click();
                }
              }}
            >
              <i className="fas fa-robot mr-2"></i>
              Essayer l'assistant maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}