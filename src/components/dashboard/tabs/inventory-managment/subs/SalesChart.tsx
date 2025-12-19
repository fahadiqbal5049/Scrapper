"use client";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import RangeCalender from "@/components/shared/RangeCalender/RangeCalender";

import Typography from "@/components/ui/typography";
const SalesChart = () => {
  const chartData = [
    { month: "2008", desktop: 68 },
    { month: "2010", desktop: 80 },
    { month: "2012", desktop: 90 },
    { month: "2014", desktop: 118 },
    { month: "2016", desktop: 152 },
    { month: "2018", desktop: 152 },
    { month: "2020", desktop: 152 },
  ];
  const chartConfig = {
    desktop: {
      label: "Organic Keywords : ",
      color: "#fff",
    },
  } satisfies ChartConfig;
  return (
    <div className="w-full flex flex-col bg-primary rounded-lg px-3 sm:px-4 pt-4 pb-6 sm:pb-8 sm:pt-5 gap-5">
      <Typography className="font-medium" color="primary">
        Sales
      </Typography>
      <div className="xs:pt-0 pt-3 my-2 z-20 flex xs:flex-row flex-col justify-start items-center gap-2 xs:gap-5">
        <Typography className="font-semibold" color="secondary">
          Price Position Over Time
        </Typography>
        <RangeCalender />
      </div>
      <ChartContainer
        config={chartConfig}
        className="w-full h-[200px] sm:h-[350px] -ml-6"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} stroke="#A4A4A44D" />
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
              tickMargin={10}
              tick={{ fill: "#A4A4A4" }}
              tickFormatter={(value) => `${value}K`}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value) => `Sales Made: ${value}K`}
                />
              }
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="#FB0078"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default SalesChart;
