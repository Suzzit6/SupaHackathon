"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface TimeSeriesData {
  value: number
  date: string
}

interface EngagementMetric {
  label: string
  value: number
}

interface EngagementAnalysisProps {
  timeSeriesData: TimeSeriesData[]
  currentRate: string
  metrics: EngagementMetric[]
}

const CustomTooltip = ({ active, payload, label }: any) => {

  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
        <p className="text-gray-200">{`Date: ${label}`}</p>
        <p className="text-gray-200">{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export function EngagementAnalysis({ timeSeriesData, currentRate, metrics }: EngagementAnalysisProps) {
  const [timeframe, setTimeframe] = useState('Day');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="lg:col-span-2 bg-gray-900 border-gray-800">
        <CardHeader>
          <div className="flex flex-col space-y-1.5">
            <CardTitle className="text-xl font-semibold text-white">
              Engagement Rate Over Time
            </CardTitle>
            <p className="text-sm text-gray-400">
              Current: {currentRate}
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            {['Day', 'Week', 'Month'].map((period) => (
              <Button
                key={period}
                variant={timeframe === period ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setTimeframe(period)}
                className={
                  timeframe === period
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }
              >
                {period}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={timeSeriesData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="date" 
                  stroke="#9CA3AF"
                  tick={{ fill: '#9CA3AF' }}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  tick={{ fill: '#9CA3AF' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8B5CF6"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-white">
            Engagement Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={metrics} layout="vertical">
                <XAxis 
                  type="number"
                  stroke="#9CA3AF"
                  tick={{ fill: '#9CA3AF' }}
                />
                <YAxis 
                  type="category"
                  dataKey="label"
                  stroke="#9CA3AF"
                  tick={{ fill: '#9CA3AF' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="value"
                  fill="#8B5CF6"
                  radius={[0, 4, 4, 0]}
                  className="hover:opacity-80 transition-opacity"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-gray-800/50 rounded-lg p-4 flex flex-col items-center justify-center"
              >
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default EngagementAnalysis;