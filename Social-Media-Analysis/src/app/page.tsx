"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import AnalyticsFeaturesSection from "@/components/AnalyticsFeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import MetricsDashboard from "@/components/MetricsDashboard";
import FAQAndFooter from "@/components/FAQAndFooter";
import {Header} from "@/components/Header";
import { AiChatbot } from "@/components/ChatBot/ChatBot";
import TeamSection from "@/components/TeamSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <AnalyticsFeaturesSection id="features" /> {/* Add id */}
        <HowItWorks id="how-it-works" /> {/* Add id */}
        <MetricsDashboard id="metrics" /> {/* Add id */}
        <TeamSection id="team" /> {/* Add id */}
        <FAQAndFooter id="faq" /> {/* Add id */}
        <AiChatbot
          websocketUrl="https://supahackathon.onrender.com"
          apiUrl="https://supahackathon.onrender.com/chat"
          position="bottom-right"
          title="Name of our AI Assistant"
          isOpen={false}
          onClose={() => {}}
        />
      </main>
    </div>
  );
};

export default LandingPage;