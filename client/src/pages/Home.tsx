import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AIAssistantSection from "../components/AIAssistantSection";
import MinisteriesSection from "../components/MinisteriesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

export default function Home() {
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
      
      {/* Chatbot pour les informations sur les services ministériels */}
      <ChatBot />
    </div>
  );
}