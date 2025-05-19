<script lang="ts" setup>
import { ref } from 'vue';

const inputMessage = ref('');
const messages = ref([
  {
    type: 'ai',
    content: 'Bonjour ! Je suis l\'assistant virtuel du gouvernement togolais. Comment puis-je vous aider aujourd\'hui ?'
  },
  {
    type: 'user',
    content: 'Je voudrais renouveler ma carte d\'identité nationale.'
  },
  {
    type: 'ai',
    content: 'Pour renouveler votre carte d\'identité nationale, voici les étapes à suivre :',
    steps: [
      'Préparez une copie de votre acte de naissance',
      'Une photo d\'identité récente',
      'Un justificatif de domicile'
    ],
    followUp: 'Souhaitez-vous que je vous aide à prendre rendez-vous ?'
  }
]);

const benefits = [
  {
    icon: 'fas fa-check',
    title: 'Réponses Instantanées',
    description: 'Obtenez des informations précises sans attente ni file d\'attente.'
  },
  {
    icon: 'fas fa-check',
    title: 'Guidage Personnalisé',
    description: 'Recevez des instructions adaptées à votre situation spécifique.'
  },
  {
    icon: 'fas fa-check',
    title: 'Multilangue',
    description: 'Communiquez dans la langue de votre choix pour plus de confort.'
  }
];

const sendMessage = () => {
  if (!inputMessage.value.trim()) return;
  
  // Add user message
  messages.value.push({
    type: 'user',
    content: inputMessage.value
  });
  
  // In a real app, you would send this to an API and get a response
  // For now, we'll simulate an AI response
  setTimeout(() => {
    messages.value.push({
      type: 'ai',
      content: 'Je vous ai bien compris. Je suis là pour vous aider avec toutes vos questions concernant les services gouvernementaux.'
    });
  }, 1000);
  
  // Clear input
  inputMessage.value = '';
};
</script>

<template>
  <section class="py-20 bg-gradient-to-b from-white to-togo-light">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="order-2 md:order-1">
          <div class="bg-white rounded-2xl shadow-xl p-6 relative">
            <div class="bg-primary rounded-t-xl p-4 -mt-6 -mx-6 mb-4">
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-white ml-4 font-medium">Assistant IA du Gouvernement</span>
              </div>
            </div>
            
            <div class="space-y-4 max-h-80 overflow-y-auto p-2">
              <div 
                v-for="(message, index) in messages" 
                :key="index"
                :class="[
                  'flex items-start space-x-3', 
                  message.type === 'user' ? 'justify-end' : ''
                ]"
              >
                <!-- AI Icon (only for AI messages) -->
                <div 
                  v-if="message.type === 'ai'"
                  class="bg-primary text-white p-2 rounded-full flex items-center justify-center w-8 h-8"
                >
                  <i class="fas fa-robot"></i>
                </div>
                
                <!-- Message Bubble -->
                <div 
                  :class="[
                    message.type === 'ai' ? 'bg-togo-light' : 'bg-primary/10',
                    'rounded-lg p-3 max-w-xs'
                  ]"
                >
                  <p class="text-togo-dark">{{ message.content }}</p>
                  
                  <!-- Steps for AI messages that have steps -->
                  <ol 
                    v-if="message.steps && message.steps.length"
                    class="list-decimal pl-5 mt-2 text-togo-dark space-y-1"
                  >
                    <li v-for="(step, stepIndex) in message.steps" :key="stepIndex">
                      {{ step }}
                    </li>
                  </ol>
                  
                  <!-- Follow-up text if provided -->
                  <p v-if="message.followUp" class="mt-2 text-togo-dark">
                    {{ message.followUp }}
                  </p>
                </div>
                
                <!-- User Icon (only for user messages) -->
                <div 
                  v-if="message.type === 'user'"
                  class="bg-secondary text-togo-dark p-2 rounded-full flex items-center justify-center w-8 h-8"
                >
                  <i class="fas fa-user"></i>
                </div>
              </div>
            </div>
            
            <div class="mt-4 flex items-center bg-gray-100 rounded-lg p-2">
              <input 
                v-model="inputMessage"
                type="text" 
                placeholder="Posez votre question ici..." 
                class="flex-1 bg-transparent border-none focus:outline-none text-togo-dark"
                @keyup.enter="sendMessage"
              />
              <button 
                class="ml-2 bg-primary text-white p-2 rounded-lg"
                @click="sendMessage"
              >
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div class="order-1 md:order-2">
          <h2 class="text-3xl md:text-4xl font-bold text-togo-dark mb-6">Votre Assistant Numérique Personnel</h2>
          <p class="text-lg text-togo-gray mb-6">Notre assistant IA est disponible 24/7 pour répondre à toutes vos questions concernant les services gouvernementaux togolais.</p>
          
          <div class="space-y-4">
            <div 
              v-for="(benefit, index) in benefits" 
              :key="index"
              class="flex items-start space-x-4"
            >
              <div class="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <i :class="[benefit.icon, 'text-primary']"></i>
              </div>
              <div>
                <h4 class="font-bold text-togo-dark">{{ benefit.title }}</h4>
                <p class="text-togo-gray">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
          
          <button class="mt-8 bg-secondary text-togo-dark px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition duration-300 shadow-lg flex items-center">
            <i class="fas fa-comments mr-2"></i> Discuter avec l'assistant maintenant
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
