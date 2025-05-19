<script lang="ts" setup>
// Features section component
const features = [
  {
    id: 1,
    icon: 'fas fa-bolt',
    title: 'Accès Instantané',
    description: 'Obtenez des informations sur les services ministériels instantanément grâce à notre assistant IA disponible 24/7.'
  },
  {
    id: 2,
    icon: 'fas fa-file-alt',
    title: 'Documents Administratifs',
    description: 'Demandez, suivez et recevez vos documents administratifs sans vous déplacer dans nos bureaux.'
  },
  {
    id: 3,
    icon: 'fas fa-calendar-check',
    title: 'Rendez-vous Simplifiés',
    description: 'Prenez rendez-vous avec différents ministères et recevez des rappels automatiques.'
  },
  {
    id: 4,
    icon: 'fas fa-shield-alt',
    title: 'Sécurité Garantie',
    description: 'Vos données sont protégées par des systèmes de sécurité avancés conformes aux normes internationales.'
  },
  {
    id: 5,
    icon: 'fas fa-hand-holding-usd',
    title: 'Paiements Électroniques',
    description: 'Effectuez vos paiements administratifs en ligne par mobile money ou carte bancaire en toute sécurité.'
  },
  {
    id: 6,
    icon: 'fas fa-bell',
    title: 'Notifications',
    description: 'Restez informé à chaque étape du traitement de vos demandes grâce aux notifications en temps réel.'
  }
];
</script>

<template>
  <section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-togo-dark mb-4">Nos Services Numériques</h2>
        <p class="text-lg text-togo-gray max-w-3xl mx-auto">Découvrez comment notre application transforme l'accès aux services gouvernementaux pour tous les citoyens togolais.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="feature in features" 
          :key="feature.id"
          class="bg-togo-light rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
        >
          <div class="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
            <i :class="[feature.icon, 'text-primary text-2xl']"></i>
          </div>
          <h3 class="text-xl font-bold mb-3 text-togo-dark">{{ feature.title }}</h3>
          <p class="text-togo-gray mb-4">{{ feature.description }}</p>
          <a href="#" class="text-primary font-medium flex items-center hover:underline">
            En savoir plus <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
