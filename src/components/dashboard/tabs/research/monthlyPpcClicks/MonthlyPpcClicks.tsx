"use client";
import Typography from "@/components/ui/typography";
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
import StatCard from "../monthlySeoClicks/StatCard";
import RangeCalender from "@/components/shared/RangeCalender/RangeCalender";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const MonthlyPpcClicks = () => {
  const chartData = [
    { month: "January", desktop: 151 },
    { month: "February", desktop: 152 },
    { month: "March", desktop: 150 },
    { month: "April", desktop: 151 },
    { month: "May", desktop: 152 },
    { month: "June", desktop: 152 },
  ];
  const chartConfig = {
    desktop: {
      label: "Organic Keywords : ",
      color: "#fff",
    },
  } satisfies ChartConfig;
  return (
    <div className="size-full flex flex-col items-start justify-start gap-5 lg:gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/dashboard/research">Research</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Est Monthly PPC Clicks</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>{" "}
      <div className="w-full flex flex-col bg-primary rounded-lg px-3 sm:px-4 pt-4 pb-6 sm:pb-8 sm:pt-5 md:gap-10 gap-5">
        <div className="w-full flex items-center justify-start flex-wrap lg:gap-6 gap-4">
          <StatCard title="Paid Keywords" titleValue="2,875" />

          <StatCard
            bgGradient
            title="Est Monthly PPC Clicks"
            titleValue="170K"
          />
          <StatCard title="Est Monthly PPC Budget" titleValue="$92.5k" />
        </div>
        <div className="xs:pt-0 pt-3 z-20 flex xs:flex-row flex-col justify-start items-center gap-2 xs:gap-5">
          <Typography className="font-semibold" color="secondary">
            Zoom
          </Typography>
          <RangeCalender />
        </div>
        <ChartContainer
          config={chartConfig}
          className="w-full h-[230px] sm:h-[480px] -ml-6"
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
                    formatter={(value) => `PPC Clicks : ${value}K`}
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
    </div>
  );
};

export default MonthlyPpcClicks;
