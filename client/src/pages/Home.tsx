import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AIAssistantSection from "@/components/AIAssistantSection";
import MinisteriesSection from "@/components/MinisteriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { initializeN8NChat } from "@/lib/n8nChat";

export default function Home() {
  useEffect(() => {
    // Initialize N8N Chat
    initializeN8NChat();
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