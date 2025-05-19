<script lang="ts" setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-40">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center space-x-2">
          <img 
            src="https://images.unsplash.com/photo-1518371885443-fcd43e929668?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40" 
            alt="Drapeau du Togo" 
            class="h-8 w-auto rounded"
          />
          <span class="text-togo-dark font-poppins font-bold text-xl">
            e-Services<span class="text-primary">Togo</span>
          </span>
        </div>
        
        <nav class="hidden md:flex space-x-8">
          <a href="#accueil" class="text-togo-gray hover:text-primary font-medium">Accueil</a>
          <a href="#services" class="text-togo-gray hover:text-primary font-medium">Services</a>
          <a href="#ministeres" class="text-togo-gray hover:text-primary font-medium">Ministères</a>
          <a href="#apropos" class="text-togo-gray hover:text-primary font-medium">À propos</a>
        </nav>
        
        <div class="md:hidden">
          <button 
            class="text-togo-gray hover:text-primary" 
            aria-label="Menu"
            @click="toggleMobileMenu"
          >
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div 
        class="md:hidden" 
        :class="{ 'hidden': !mobileMenuOpen }"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a 
            href="#accueil" 
            class="block px-3 py-2 rounded-md text-base font-medium text-togo-gray hover:text-primary hover:bg-gray-50"
            @click="toggleMobileMenu"
          >
            Accueil
          </a>
          <a 
            href="#services" 
            class="block px-3 py-2 rounded-md text-base font-medium text-togo-gray hover:text-primary hover:bg-gray-50"
            @click="toggleMobileMenu"
          >
            Services
          </a>
          <a 
            href="#ministeres" 
            class="block px-3 py-2 rounded-md text-base font-medium text-togo-gray hover:text-primary hover:bg-gray-50"
            @click="toggleMobileMenu"
          >
            Ministères
          </a>
          <a 
            href="#apropos" 
            class="block px-3 py-2 rounded-md text-base font-medium text-togo-gray hover:text-primary hover:bg-gray-50"
            @click="toggleMobileMenu"
          >
            À propos
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
