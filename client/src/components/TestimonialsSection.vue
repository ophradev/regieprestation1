<script lang="ts" setup>
const testimonials = [
  {
    id: 1,
    name: 'Amah K.',
    role: 'Entrepreneur, Lomé',
    rating: 5,
    content: 'Grâce à l\'assistant IA, j\'ai pu renouveler mon passeport sans faire la queue pendant des heures. Le processus était simple et les instructions étaient claires.',
    avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 2,
    name: 'Kofi T.',
    role: 'Enseignant, Kara',
    rating: 4.5,
    content: 'J\'avais besoin d\'informations sur les impôts et l\'assistant m\'a fourni toutes les réponses dont j\'avais besoin. C\'est comme avoir un expert fiscal disponible 24/7!',
    avatar: 'https://pixabay.com/get/g4ca4617de90b548e10d045e42755682b968ea6432807bc5ec92d6d5a613711c08a12888d619a75fbdba5278df3b62b9b292bb1f016402fd96c073ce89f8eb5cb_1280.jpg'
  },
  {
    id: 3,
    name: 'Afi D.',
    role: 'Commerçante, Atakpamé',
    rating: 5,
    content: 'L\'enregistrement de mon entreprise a été simplifié grâce à cette application. L\'assistant m\'a guidé étape par étape et m\'a aidé à économiser beaucoup de temps.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  }
];
</script>

<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-togo-dark mb-4">Témoignages des Utilisateurs</h2>
        <p class="text-lg text-togo-gray max-w-3xl mx-auto">Découvrez comment notre application a simplifié la vie administrative des citoyens togolais.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-togo-light rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
        >
          <div class="flex items-center mb-4">
            <div class="text-yellow-400 flex">
              <i 
                v-for="i in Math.floor(testimonial.rating)"
                :key="'star-full-'+i"
                class="fas fa-star"
              ></i>
              <i 
                v-if="testimonial.rating % 1 !== 0"
                class="fas fa-star-half-alt"
              ></i>
            </div>
            <span class="ml-2 text-sm text-togo-gray">{{ testimonial.rating.toFixed(1) }}</span>
          </div>
          <p class="text-togo-gray mb-6">"{{ testimonial.content }}"</p>
          <div class="flex items-center">
            <img 
              :src="testimonial.avatar" 
              :alt="`Portrait de ${testimonial.name}`" 
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="ml-3">
              <h4 class="font-bold text-togo-dark">{{ testimonial.name }}</h4>
              <p class="text-sm text-togo-gray">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
