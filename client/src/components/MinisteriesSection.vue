<script lang="ts" setup>
const ministries = [
  {
    id: 1,
    name: 'Ministère de l\'Économie et des Finances',
    description: 'Services fiscaux, douanes, budget et trésor public.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    tags: ['Impôts', 'Douanes', 'Budget']
  },
  {
    id: 2,
    name: 'Ministère de l\'Administration Territoriale',
    description: 'Services d\'identification nationale, élections et collectivités locales.',
    image: 'https://pixabay.com/get/gc7d5a457e01b5df02c03cb9b3f8a8bebde537fdac9c1cf1304eabe76a91018eb7891ee936bc12102be07302bccc733912aaa37a6584d323c74d68eeeb50d80e6_1280.jpg',
    tags: ['Cartes d\'identité', 'Passeports', 'État civil']
  },
  {
    id: 3,
    name: 'Ministère de la Justice',
    description: 'Services judiciaires, casier judiciaire et légalisation de documents.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    tags: ['Casier judiciaire', 'Légalisations', 'Tribunaux']
  },
  {
    id: 4,
    name: 'Ministère de la Santé',
    description: 'Services de santé publique, assurance maladie et pharmacies.',
    image: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    tags: ['Vaccinations', 'Assurance', 'Hôpitaux']
  },
  {
    id: 5,
    name: 'Ministère de l\'Éducation Nationale',
    description: 'Services éducatifs, inscriptions scolaires et examens nationaux.',
    image: 'https://images.unsplash.com/photo-1573497701240-345a300b8d36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    tags: ['Inscriptions', 'Diplômes', 'Bourses']
  },
  {
    id: 6,
    name: 'Ministère du Travail et de la Fonction Publique',
    description: 'Services d\'emploi, concours administratifs et retraites.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    tags: ['Concours', 'Emplois', 'Retraites']
  }
];
</script>

<template>
  <section id="ministeres" class="py-20 bg-togo-light">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-togo-dark mb-4">Ministères Participants</h2>
        <p class="text-lg text-togo-gray max-w-3xl mx-auto">Notre application regroupe les services de plusieurs ministères togolais pour simplifier vos démarches administratives.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="ministry in ministries"
          :key="ministry.id"
          class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
        >
          <img 
            :src="ministry.image" 
            :alt="ministry.name" 
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 class="text-xl font-bold mb-2 text-togo-dark">{{ ministry.name }}</h3>
          <p class="text-togo-gray mb-4">{{ ministry.description }}</p>
          <div class="flex space-x-2 flex-wrap">
            <span 
              v-for="(tag, tagIndex) in ministry.tags" 
              :key="tagIndex"
              class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <p class="text-togo-gray mb-6">Vous avez des questions sur un service spécifique d'un ministère ?</p>
        <button class="bg-secondary text-togo-dark px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition duration-300 shadow-lg inline-flex items-center">
          <i class="fas fa-comments mr-2"></i> Consultez notre assistant IA
        </button>
      </div>
    </div>
  </section>
</template>
