<script lang="ts" setup>
import { onMounted } from 'vue';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import Header from '../components/Header.vue';
import HeroSection from '../components/HeroSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import AIAssistantSection from '../components/AIAssistantSection.vue';
import MinisteriesSection from '../components/MinisteriesSection.vue';
import TestimonialsSection from '../components/TestimonialsSection.vue';
import CtaSection from '../components/CtaSection.vue';
import Footer from '../components/Footer.vue';

// N8N Chat integration
onMounted(() => {
  createChat({
    webhookUrl: import.meta.env.VITE_N8N_WEBHOOK_URL || 'YOUR_PRODUCTION_WEBHOOK_URL'
  });
});
</script>

<template>
  <div class="min-h-screen bg-togo-light flex flex-col">
    <Header />
    <main>
      <HeroSection />
      <FeaturesSection />
      <AIAssistantSection />
      <MinisteriesSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
    <Footer />
    
    <!-- Chat Button -->
    <div class="chat-button">
      <button 
        class="bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 transition duration-300 flex items-center justify-center animate-pulse"
        aria-label="Ouvrir le chat avec l'assistant IA"
      >
        <i class="fas fa-comments text-2xl"></i>
      </button>
    </div>
  </div>
</template>
