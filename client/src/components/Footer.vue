<script lang="ts" setup>
// Footer component
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-togo-dark text-white py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center space-x-2 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1518371885443-fcd43e929668?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40" 
              alt="Drapeau du Togo" 
              class="h-8 w-auto rounded"
            />
            <span class="text-white font-poppins font-bold text-xl">
              e-Services<span class="text-primary">Togo</span>
            </span>
          </div>
          <p class="text-gray-400">Votre portail numérique pour accéder aux services des ministères togolais.</p>
          <div class="flex space-x-4 mt-6">
            <a href="#" class="text-gray-400 hover:text-white transition duration-300">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition duration-300">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition duration-300">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition duration-300">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="font-bold text-lg mb-4">Liens Rapides</h3>
          <ul class="space-y-2">
            <li><a href="#accueil" class="text-gray-400 hover:text-white transition duration-300">Accueil</a></li>
            <li><a href="#services" class="text-gray-400 hover:text-white transition duration-300">Services</a></li>
            <li><a href="#ministeres" class="text-gray-400 hover:text-white transition duration-300">Ministères</a></li>
            <li><a href="#apropos" class="text-gray-400 hover:text-white transition duration-300">À propos</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-bold text-lg mb-4">Ministères</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Économie et Finances</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Administration Territoriale</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Justice</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Santé</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Éducation Nationale</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-bold text-lg mb-4">Contact</h3>
          <ul class="space-y-2">
            <li class="flex items-start space-x-3">
              <i class="fas fa-map-marker-alt mt-1 text-primary"></i>
              <span class="text-gray-400">Lomé, Togo<br>Avenue de la Présidence</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-phone-alt text-primary"></i>
              <span class="text-gray-400">+228 22 21 XX XX</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-envelope text-primary"></i>
              <span class="text-gray-400">contact@eservices-togo.gouv.tg</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">&copy; {{ currentYear }} e-Services Togo. Tous droits réservés.</p>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-white text-sm transition duration-300">Politique de confidentialité</a>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition duration-300">Conditions d'utilisation</a>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition duration-300">Accessibilité</a>
        </div>
      </div>
    </div>
  </footer>
</template>
