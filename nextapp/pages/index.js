import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AIAssistantSection from '../components/AIAssistantSection';
import MinisteriesSection from '../components/MinisteriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import { initializeN8NChat } from '../lib/n8nChat';

export default function Home() {
  useEffect(() => {
    // Initialiser le chat n8n
    initializeN8NChat();
    
    // Configurer le bouton de chat flottant
    const openChatButton = document.getElementById('open-n8n-chat');
    if (openChatButton) {
      openChatButton.addEventListener('click', () => {
        initializeN8NChat();
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>e-Services Togo - Accueil</title>
        <meta name="description" content="Accédez facilement aux informations sur les prestations des ministères togolais grâce à notre assistant virtuel." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eservices-togo.gouv.tg/" />
        <meta property="og:title" content="e-Services Togo - Portail des Prestations Ministérielles" />
        <meta property="og:description" content="Accédez facilement aux services des ministères togolais grâce à notre assistant IA disponible 24/7." />
      </Head>

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
      
      {/* Bouton Chat Flottant */}
      <div className="chat-button">
        <button 
          className="bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 transition duration-300 flex items-center justify-center animate-pulse"
          aria-label="Ouvrir le chat avec l'assistant IA"
          id="open-n8n-chat"
        >
          <i className="fas fa-comments text-2xl"></i>
        </button>
      </div>
    </div>
  );
}