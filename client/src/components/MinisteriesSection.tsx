export default function MinisteriesSection() {
  const ministeries = [
    {
      name: "Ministère de l'Administration Territoriale",
      icon: "fa-building-columns",
      services: ["Délivrance de documents d'identité", "Sécurité civile", "Gestion des collectivités"]
    },
    {
      name: "Ministère de la Justice",
      icon: "fa-gavel",
      services: ["Services judiciaires", "Certificats de nationalité", "Casiers judiciaires"]
    },
    {
      name: "Ministère de l'Éducation",
      icon: "fa-graduation-cap",
      services: ["Inscriptions scolaires", "Bourses d'études", "Diplômes et équivalences"]
    },
    {
      name: "Ministère de la Santé",
      icon: "fa-hospital",
      services: ["Vaccinations", "Cartes sanitaires", "Assistance médicale"]
    },
    {
      name: "Ministère de l'Économie et des Finances",
      icon: "fa-money-bill-wave",
      services: ["Impôts et taxes", "Douanes", "Services du Trésor"]
    },
    {
      name: "Ministère du Commerce",
      icon: "fa-store",
      services: ["Licences commerciales", "Normalisation", "Promotion des exportations"]
    },
    {
      name: "Ministère de l'Agriculture",
      icon: "fa-tractor",
      services: ["Soutien agricole", "Formations techniques", "Subventions"]
    },
    {
      name: "Ministère du Numérique",
      icon: "fa-laptop-code",
      services: ["Services numériques", "Formation digitale", "Infrastructures IT"]
    }
  ];

  return (
    <section id="ministeres" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ministères et Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les différents ministères togolais et leurs services essentiels pour les citoyens et les entreprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministeries.map((ministry, index) => (
            <div 
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <i className={`fas ${ministry.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 h-14">{ministry.name}</h3>
                <ul className="space-y-2">
                  {ministry.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">
                        <i className="fas fa-circle-check text-sm"></i>
                      </span>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className="mt-4 w-full py-2 px-4 bg-white border border-gray-200 text-primary rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm font-medium"
                  onClick={() => {
                    const heroButton = document.getElementById('hero-chat-button');
                    if (heroButton) {
                      heroButton.click();
                    }
                  }}
                >
                  <i className="fas fa-info-circle mr-1"></i> Plus d'informations
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Notre assistant virtuel peut vous fournir des informations détaillées sur les services de chaque ministère.
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
            Poser une question sur un service ministériel
          </button>
        </div>
      </div>
    </section>
  );
}