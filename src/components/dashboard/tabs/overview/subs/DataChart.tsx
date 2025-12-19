"use client";

import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Typography from "@/components/ui/typography";
import RangeCalender from "../../../../shared/RangeCalender/RangeCalender";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";

const chartData = [
  { year: "2020", desktop: 186, mobile: 123, tablet: 85 },
  { year: "2021", desktop: 305, mobile: 208, tablet: 132 },
  { year: "2022", desktop: 237, mobile: 189, tablet: 98 },
  { year: "2023", desktop: 373, mobile: 257, tablet: 154 },
  { year: "2024", desktop: 409, mobile: 302, tablet: 201 },
];

const chartConfig: ChartConfig = {
  desktop: { color: "#FB0078" },
  mobile: { color: "#00FBA0" },
  tablet: { color: "#EB7301" },
};

const DataChart: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-primary rounded-lg min-h-[320px]">
      <div className="h-[50px] xs:pt-0 pt-3 z-20 px-5 flex xs:flex-row flex-col justify-start items-center gap-2 xs:gap-5">
        <div className="h-full flex items-center justify-start gap-1">
          <Typography variant="p" className="font-semibold" color="secondary">
            Price Position Over Time
          </Typography>{" "}
          <InputHelpTooltip
            fill="fill-white-2"
            helperText=" Price Position Over Time"
          />
        </div>
        <RangeCalender />
      </div>
      <ChartContainer config={chartConfig} className="h-[260px] w-full">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 40,
            top: 20,
            bottom: 12,
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
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
          <Line
            dataKey="desktop"
            type="monotone"
            stroke={chartConfig.desktop.color}
            strokeWidth={3}
            dot={false}
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke={chartConfig.mobile.color}
            strokeWidth={3}
            dot={false}
          />
          <Line
            dataKey="tablet"
            type="monotone"
            stroke={chartConfig.tablet.color}
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default DataChart;
