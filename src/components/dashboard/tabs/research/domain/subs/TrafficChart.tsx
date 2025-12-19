"use client";
import React from "react";
import * as Icons from "@/svg/Icons";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Pie,
  PieChart,
  Label,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import Typography from "@/components/ui/typography";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";

const chartData = [
  { month: "Jan", organic: 2.4, paid: 0 },
  { month: "Feb", organic: 3, paid: 0 },
  { month: "Mar", organic: 3, paid: 0 },
  { month: "Apr", organic: 3.3, paid: 0 },
  { month: "May", organic: 4, paid: 0 },
  { month: "Jun", organic: 3.2, paid: 0 },
  { month: "Jul", organic: 4, paid: 0 },
  { month: "Aug", organic: 4.2, paid: 0 },
  { month: "Sep", organic: 4, paid: 0 },
  { month: "Oct", organic: 5, paid: 0 },
  { month: "Nov", organic: 5, paid: 0 },
  { month: "Dec", organic: 5, paid: 0 },
];
const pieChartData = [
  { name: "paid", visitors: 5, fill: "#FB0078" },
  { name: "organic", visitors: 95, fill: "#00FBA0" },
];
const pieChartConfig = {
  visitors: {
    label: "Visitors",
  },
  paid: {
    label: "paid",
    color: "#FB0078",
  },
  organic: {
    label: "organic",
    color: "#00FBA0",
  },
} satisfies ChartConfig;
const chartConfig = {
  organic: {
    label: "Organic",
    color: "#00FBA0",
  },
  paid: {
    label: "Paid",
    color: "#FB0078",
  },
} satisfies ChartConfig;
const TrafficChart = () => {
  return (
    <div className="size-full bg-primary pb-3 sm:pb-4 rounded-lg flex flex-col items-start gap-4">
      <div className="px-3 w-full border-b border-b-gray-1 sm:px-4 py-4 flex items-center justify-start gap-2 relative">
        <Typography color="primary" className="font-semibold">
          Traffic from Google - Organic vs Paid
        </Typography>
        <InputHelpTooltip helperText="Traffic from Google - Organic vs Paid" />
      </div>

      <div className="w-full flex items-center justify-between px-3 sm:px-4">
        <span className="flex items-center justify-start gap-2">
          <span className="rounded-full bg-success-1 size-[10px]"></span>
          <Typography color="secondary">ORGANIC</Typography>
        </span>
        <span className="flex items-center justify-start gap-2">
          <span className="rounded-full bg-pink-1 size-[10px]"></span>
          <Typography color="secondary">PAID</Typography>
        </span>
      </div>

      {/* Charts container with proper positioning */}
      <div className="w-full px-3 sm:px-4 relative h-[200px] sm:h-[220px]">
        {/* Line chart as base layer */}
        <ChartContainer config={chartConfig} className="w-full -ml-6 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid vertical={false} stroke="#A4A4A40D" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fill: "#A4A4A4" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickMargin={8}
                tick={{ fill: "#A4A4A4" }}
                tickFormatter={(value) => `${value}`}
              />

              <Line
                dataKey="organic"
                type="monotone"
                stroke="#00FBA0"
                strokeWidth={2}
                fill="none"
                dot={true}
              />
              <Line
                dataKey="paid"
                type="monotone"
                stroke="#FB0078"
                strokeWidth={2}
                dot={true}
                fill="none"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Pie chart overlay */}
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-transparent rounded-full">
          <ChartContainer config={pieChartConfig} className="size-full">
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="visitors"
                nameKey="name"
                innerRadius={45}
                outerRadius={70}
                strokeWidth={5}
              >
                <Label
                  fill="none"
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <g>
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy! - 10}
                            textAnchor="middle"
                            className="text-[28px] font-medium"
                            fill="#ffffff"
                          >
                            95%
                          </text>
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy! + 15}
                            textAnchor="middle"
                            className="text-base font-normal"
                            fill="#A3A3A3"
                          >
                            Organic
                          </text>
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy! + 35}
                            textAnchor="middle"
                            className="text-base font-normal"
                            fill="#A3A3A3"
                          >
                            Traffic
                          </text>
                        </g>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-1">
        <Typography variant="small" color="primary">
          Complete Historical Data since:
        </Typography>
        <Typography variant="small" color="primary" className="font-semibold">
          December 2012
        </Typography>
      </div>
    </div>
  );
};

export default TrafficChart;
