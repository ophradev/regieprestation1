import { CheckCircle } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: "fa-id-card",
      title: "Documents administratifs",
      description: "Obtenez des informations précises sur les procédures pour obtenir vos documents d'état civil, passeports, et cartes d'identité.",
      benefits: ["Procédures simplifiées", "Délais de traitement connus", "Liste des pièces requises"]
    },
    {
      icon: "fa-building",
      title: "Services commerciaux",
      description: "Tout ce que vous devez savoir pour créer une entreprise ou obtenir des permis commerciaux au Togo.",
      benefits: ["Création d'entreprise", "Taxes et impôts", "Licences commerciales"]
    },
    {
      icon: "fa-graduation-cap",
      title: "Éducation",
      description: "Informations sur les inscriptions scolaires, bourses d'études et programmes de formation professionnelle.",
      benefits: ["Calendrier scolaire", "Procédures d'inscription", "Programmes de bourse"]
    },
    {
      icon: "fa-stethoscope",
      title: "Santé",
      description: "Accédez aux informations sur les services de santé publique, vaccinations et programmes de prévention.",
      benefits: ["Centres de santé", "Campagnes de vaccination", "Assurance maladie"]
    },
    {
      icon: "fa-gavel",
      title: "Justice",
      description: "Renseignez-vous sur vos droits, les procédures judiciaires et l'assistance juridique disponible.",
      benefits: ["Aide juridictionnelle", "Procédures judiciaires", "Médiation"]
    },
    {
      icon: "fa-tractor",
      title: "Agriculture",
      description: "Informations sur les subventions, formations et programmes de soutien pour les agriculteurs.",
      benefits: ["Subventions agricoles", "Formations techniques", "Programmes ruraux"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services Ministériels</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les différentes prestations des ministères togolais et obtenez des informations précises grâce à notre assistant virtuel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <i className={`fas ${feature.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">
                        <i className="fas fa-check-circle"></i>
                      </span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <button 
                  className="w-full py-2 bg-transparent text-primary hover:text-primary/80 font-medium transition-colors duration-300 flex items-center justify-center"
                  onClick={() => {
                    const heroButton = document.getElementById('hero-chat-button');
                    if (heroButton) {
                      heroButton.click();
                    }
                  }}
                >
                  <i className="fas fa-info-circle mr-2"></i>
                  Plus d'informations
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}