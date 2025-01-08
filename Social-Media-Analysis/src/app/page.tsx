"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import AnalyticsFeaturesSection from "@/components/AnalyticsFeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import MetricsDashboard from "@/components/MetricsDashboard";
import FAQAndFooter from "@/components/FAQAndFooter";
import Header from "@/components/Header";
import { AiChatbot } from "@/components/ChatBot/ChatBot";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <AnalyticsFeaturesSection />
        <HowItWorks />
        <MetricsDashboard />
        <AiChatbot
          websocketUrl="https://supahackathon.onrender.com"
          apiUrl="https://supahackathon.onrender.com/chat"
          position="bottom-right"
          title="Name of our AI Assistant"
        />

        <FAQAndFooter />
      </main>
    </div>
  );
};

export default LandingPage;
