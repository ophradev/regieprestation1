import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AIAssistantSection from "../components/AIAssistantSection";
import MinisteriesSection from "../components/MinisteriesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import ChatIntegration, { openChat } from "../components/ChatIntegration";

export default function Home() {
  useEffect(() => {
    // Configurer le bouton de chat flottant
    const openChatButton = document.getElementById('open-n8n-chat');
    if (openChatButton) {
      openChatButton.addEventListener('click', () => {
        openChat();
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
      
      {/* Intégration du Chat N8N */}
      <ChatIntegration />
      
      {/* Chat Button */}
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