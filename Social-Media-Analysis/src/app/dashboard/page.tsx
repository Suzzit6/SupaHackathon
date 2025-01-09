"use client";
import { Sidebar } from "@/components/sidebar";
import { MetricCard } from "@/components/metric-card";
import { BarChart } from "@/components/bar-chart";
import { Demographics } from "@/components/demographics";
import { PostingTimeChart } from "../../components/posting-time";
import { DevicePerformance } from "../../components/device-performance";
import { EngagementAnalysis } from "@/components/engagement-analysis";
import { OptimalPostingTimes } from "@/components/optimal-posting-times";
import { DetailedMetrics } from "@/components/detailed-metrics";
import data from "../../../public/data.json"; // Import data.json
import { useState } from "react";
import { AiChatbot } from "@/components/ChatBot/ChatBot";

export default function DashboardPage() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // State to control chatbot visibility

  const metrics = [
    { title: "Total Reach", value: data[0].Overall_Reach, change: 12 },
    { title: "Impressions", value: data[0].Impressions, change: 8 },
    {
      title: "Engagement Rate",
      value: `${data[0].Engagement_Rate}%`,
      change: 2.1,
    },
    { title: "Click Through Rate", value: `${data[0].CTR}%`, change: -1.2 },
  ];

  const engagementData = [
    { label: "Likes", value: data[0].Likes, color: "bg-pink-500" },
    { label: "Comments", value: data[0].Comments, color: "bg-blue-500" },
    { label: "Saves", value: data[0].Saves, color: "bg-yellow-500" },
    { label: "Shares", value: data[0].Shares, color: "bg-green-500" },
  ];

  const demographicsData = {
    genderData: {
      male: data[0].Audience_Gender.Male,
      female: data[0].Audience_Gender.Female,
    },
    ageData: Object.entries(data[0].Audience_Age_Groups).map(
      ([label, percentage]) => ({
        label,
        percentage,
      })
    ),
  };

  const engagementMetrics = [
    { label: "Total Likes", value: data[0].Likes },
    { label: "Comments", value: data[0].Comments },
    { label: "Saves", value: data[0].Saves },
    { label: "Shares", value: data[0].Shares },
  ];

  const postingTimeData = [
    { day: "Mon", value: 85 },
    { day: "Tue", value: 70 },
    { day: "Wed", value: 45 },
    { day: "Thu", value: 65 },
    { day: "Fri", value: 80 },
    { day: "Sat", value: 35 },
    { day: "Sun", value: 30 },
  ];

  const optimalTimes = [
    {
      period: "Morning",
      timeRange: "9:00 AM - 11:00 AM",
      performance: "Highest Engagement",
      colorClass: "text-green-500",
    },
    {
      period: "Afternoon",
      timeRange: "2:00 PM - 4:00 PM",
      performance: "Good Reach",
      colorClass: "text-blue-500",
    },
    {
      period: "Evening",
      timeRange: "7:00 PM - 9:00 PM",
      performance: "Best CTR",
      colorClass: "text-purple-500",
    },
    {
      period: "Night",
      timeRange: "10:00 PM - 12:00 AM",
      performance: "Moderate Activity",
      colorClass: "text-yellow-500",
    },
  ];

  const detailedMetrics = [
    { name: "Likes", value: data[0].Likes, change: 12 },
    { name: "Comments", value: data[0].Comments, change: 5 },
    { name: "Saves", value: data[0].Saves, change: 8 },
    { name: "Shares", value: data[0].Shares, change: -2 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar onChatbotToggle={() => setIsChatbotOpen((prev) => !prev)} />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-2xl font-semibold text-white">Overview</h1>
            <p className="text-sm text-gray-400">
              Analytics for {new Date(data[0].Post_Date).toLocaleDateString()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.title}
                {...metric}
              />
            ))}
          </div>

          <div
            id="engagement"
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            <div className="rounded-lg bg-gray-900 border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Engagement Breakdown
              </h3>
              <div className="space-y-4">
                {engagementData.map((data) => (
                  <BarChart
                    key={data.label}
                    {...data}
                    max={Math.max(...engagementData.map((d) => d.value))}
                  />
                ))}
              </div>
            </div>
            <div id="demographics">
              <Demographics {...demographicsData} />
            </div>
          </div>
          <div id="performance">
            <OptimalPostingTimes timeSlots={optimalTimes} />
          </div>
          <EngagementAnalysis
            timeSeriesData={postingTimeData.map((item) => ({
              date: item.day,
              value: item.value,
            }))}
            currentRate={`${data[0].Engagement_Rate}%`}
            metrics={engagementMetrics}
          />
          <div id="posts">
            <DetailedMetrics metrics={detailedMetrics} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <PostingTimeChart data={postingTimeData} />
            <DevicePerformance
              primaryDevice={data[0].Device}
              percentage={75}
            />
          </div>
        </div>
      </main>

      {/* Render AiChatbot */}
      <AiChatbot
        websocketUrl="https://supahackathon.onrender.com"
        apiUrl="https://supahackathon.onrender.com/chat"
        position="bottom-right"
        title="Name of our AI Assistant"
        isOpen={isChatbotOpen} // Pass the state
        onClose={() => setIsChatbotOpen(false)} // Pass the close handler
      />
    </div>
  );
}
