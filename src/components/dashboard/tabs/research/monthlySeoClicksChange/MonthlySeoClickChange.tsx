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
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import RangeCalender from "@/components/shared/RangeCalender/RangeCalender";
import BottomStatCards from "./BottomStatCards";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
const MonthlySeoClickChange = () => {
  const chartData = [
    { month: "January", desktop: 0.6 },
    { month: "February", desktop: 1.4 },
    { month: "March", desktop: 1.8 },
    { month: "April", desktop: 2 },
    { month: "May", desktop: 1.8 },
    { month: "June", desktop: 1.9 },
  ];
  const chartConfig = {
    desktop: {
      label: "Organic Keywords : ",
      color: "#000",
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
          <BreadcrumbPage>Est Monthly SEO Click Change</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>{" "}
      <div className="w-full flex flex-col bg-primary rounded-lg px-3 sm:px-4 py-4 sm:py-5 md:gap-10 gap-5">
        <div className="w-full flex items-center justify-start flex-wrap lg:gap-6 gap-4">
          <StatCard
            title="Organic Keywords"
            titleValue="1,976,785"
            bgGradient
          />
          <StatCard
            title="Sum of Rank Change"
            titleValue={
              <span className="w-full flex items-center justify-start gap-0.5">
                <Typography variant="small">3mo:</Typography>
                <ArrowDown
                  className="text-red-1 size-[12px]"
                  strokeWidth={1.5}
                />
                <Typography variant="small">5.3M1 mo:</Typography>
                <ArrowDown
                  className="text-red-1 size-[12px]"
                  strokeWidth={1.5}
                />
                <Typography variant="small">480k</Typography>
              </span>
            }
          />
          <StatCard title="Est Monthly SEO Clicks" titleValue="3.43M" />
          <StatCard title="Est Monthly SEO Clicks Value" titleValue="$880k" />
        </div>
        <div className="xs:pt-0 pt-3 z-20 flex xs:flex-row flex-col justify-start items-center gap-2 xs:gap-5">
          <Typography className="font-semibold" color="secondary">
            Zoom
          </Typography>
          <RangeCalender />
        </div>
        <ChartContainer
          config={chartConfig}
          className="w-full h-[230px] sm:h-[290px] -ml-6"
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
                tickFormatter={(value) => `${value}M`}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    hideLabel
                    formatter={(value) => `Organic Keywords : ${value}M`}
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
      <BottomStatCards />
    </div>
  );
};

export default MonthlySeoClickChange;
