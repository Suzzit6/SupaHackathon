"use client";
import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AnalyticsFeaturesSection from "@/components/AnalyticsFeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import MetricsDashboard from "@/components/MetricsDashboard";
import FAQAndFooter from "@/components/FAQAndFooter";
import { Header } from "@/components/Header";
import { AiChatbot } from "@/components/ChatBot/ChatBot";
import TeamSection from "@/components/TeamSection";

const LandingPage = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <AnalyticsFeaturesSection id="features" />
        <HowItWorks id="how-it-works" />
        <MetricsDashboard id="metrics" />
        <TeamSection id="team" />
        <FAQAndFooter id="faq" />
        <AiChatbot
          websocketUrl="https://supahackathon.onrender.com"
          apiUrl="https://supahackathon.onrender.com/chat"
          position="bottom-right"
          title="Name of our AI Assistant"
          isOpen={isChatbotOpen} // Pass the state
          onClose={toggleChatbot} // Pass the toggle function
        />
      </main>
    </div>
  );
};

export default LandingPage;