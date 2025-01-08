import { Sidebar } from "@/components/sidebar";
import { MetricCard } from "@/components/metric-card";
import { BarChart } from "@/components/bar-chart";
import { Demographics } from "@/components/demographics";
import { PostingTimeChart } from "../../components/posting-time";
import { DevicePerformance } from "../../components/device-performance";
import { EngagementAnalysis } from "@/components/engagement-analysis";
import { OptimalPostingTimes } from "@/components/optimal-posting-times";
import { DetailedMetrics } from "@/components/detailed-metrics";

export default function DashboardPage() {
  const metrics = [
    { title: "Total Reach", value: "2,300", change: 12 },
    { title: "Impressions", value: "2,488", change: 8 },
    { title: "Engagement Rate", value: "5.43%", change: 2.1 },
    { title: "Click Through Rate", value: "3.46%", change: -1.2 },
  ];
  const timeSeriesData = [
    { date: "1", value: 65 },
    { date: "2", value: 35 },
    { date: "3", value: 45 },
    { date: "4", value: 85 },
    { date: "5", value: 35 },
    { date: "6", value: 65 },
    { date: "7", value: 45 },
  ];

  const engagementData = [
    { label: "Likes", value: 69, color: "bg-pink-500" },
    { label: "Comments", value: 10, color: "bg-blue-500" },
    { label: "Saves", value: 29, color: "bg-yellow-500" },
    { label: "Shares", value: 17, color: "bg-green-500" },
  ];

  const demographicsData = {
    genderData: {
      male: 47,
      female: 54,
    },
    ageData: [
      { label: "18-24", percentage: 26 },
      { label: "25-34", percentage: 26 },
      { label: "35-44", percentage: 22 },
    ],
  };

  const engagementMetrics = [
    { label: "Total Likes", value: 69 },
    { label: "Comments", value: 10 },
    { label: "Saves", value: 29 },
    { label: "Shares", value: 17 },
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
    { name: "Likes", value: 69, change: 12 },
    { name: "Comments", value: 10, change: 5 },
    { name: "Saves", value: 29, change: 8 },
    { name: "Shares", value: 17, change: -2 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-2xl font-semibold text-white">Overview</h1>
            <p className="text-sm text-gray-400">
              Analytics for January 9, 2024
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.title} {...metric} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
            <Demographics {...demographicsData} />
          </div>
          <OptimalPostingTimes timeSlots={optimalTimes} />
          <EngagementAnalysis
            timeSeriesData={timeSeriesData}
            currentRate="5.43%"
            metrics={engagementMetrics}
          />
          <DetailedMetrics metrics={detailedMetrics} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <PostingTimeChart data={postingTimeData} />
            <DevicePerformance primaryDevice="Desktop" percentage={75} />
          </div>
        </div>
      </main>
    </div>
  );
}
