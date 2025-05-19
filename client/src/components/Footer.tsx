import logoPath from '../assets/logo_togo.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src={logoPath} 
                alt="République Togolaise" 
                className="h-14 mr-3 bg-white p-1 rounded"
              />
              <div>
                <h3 className="font-bold text-lg">e-Services Togo</h3>
                <p className="text-sm text-gray-400">Portail des Prestations Ministérielles</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Votre guichet unique pour accéder aux informations sur les services administratifs du Togo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '#accueil' },
                { name: 'Services', href: '#services' },
                { name: 'Ministères', href: '#ministeres' },
                { name: 'À propos', href: '#apropos' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2"></i>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Ministères</h4>
            <ul className="space-y-2">
              {[
                { name: 'Affaires Étrangères', href: '#' },
                { name: 'Économie et Finances', href: '#' },
                { name: 'Éducation Nationale', href: '#' },
                { name: 'Santé Publique', href: '#' },
                { name: 'Justice', href: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2"></i>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-secondary"></i>
                <span className="text-gray-400">Place des Institutions, Lomé, Togo</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-secondary"></i>
                <span className="text-gray-400">+228 22 21 28 07</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-secondary"></i>
                <span className="text-gray-400">contact@eservices-togo.gouv.tg</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-secondary"></i>
                <span className="text-gray-400">Lun - Ven: 8h - 17h</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} e-Services Togo. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">
              Accessibilité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}