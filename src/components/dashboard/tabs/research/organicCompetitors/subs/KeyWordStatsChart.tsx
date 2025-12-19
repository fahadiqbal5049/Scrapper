"use client";

import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    year: "2020",
    stockx: 450,
    virtueplug: 320,
    kickpredict: 180,
    alias: 380,
    goat: 250,
  },
  {
    year: "2021",
    stockx: 580,
    virtueplug: 420,
    kickpredict: 230,
    alias: 490,
    goat: 320,
  },
  {
    year: "2022",
    stockx: 520,
    virtueplug: 380,
    kickpredict: 200,
    alias: 440,
    goat: 290,
  },
  {
    year: "2023",
    stockx: 650,
    virtueplug: 480,
    kickpredict: 270,
    alias: 550,
    goat: 380,
  },
  {
    year: "2024",
    stockx: 780,
    virtueplug: 560,
    kickpredict: 340,
    alias: 670,
    goat: 450,
  },
];

const chartConfig: ChartConfig = {
  stockx: { color: "#FB0078" },
  virtueplug: { color: "#00FBA0" },
  kickpredict: { color: "#EB7301" },
  alias: { color: "#4287f5" },
  goat: { color: "#9932CC" },
};

const KeyWordStatsChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <LineChart
            data={chartData}
            margin={{
              left: 10,
              right: 30,
              top: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid
              vertical={false}
              horizontal={true}
              stroke="#A4A4A40D"
              strokeWidth={1}
            />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12 }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              tickMargin={8}
              tick={{ fontSize: 12 }}
              width={40}
            />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
            {Object.entries(chartConfig).map(([key, value]) => (
              <Line
                key={key}
                dataKey={key}
                type="monotone"
                stroke={value.color}
                strokeWidth={3}
                dot={false}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  );
};

export default KeyWordStatsChart;