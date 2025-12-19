"use client";
import React from "react";
import { googleProvidedData } from "@/data/ResearchData";
import Typography from "@/components/ui/typography";
import VerticalBarRange from "../keywords/subs/VerticalBarRange";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import * as Icons from "@/svg/Icons";
import { Newspaper, Video } from "lucide-react";
const MonthlyVolumeStats = () => {
  const pieChartData = [
    { name: "mobile", visitors: 45, fill: "#FB0078" },
    { name: "desktop", visitors: 55, fill: "#00FBA0" },
  ];
  const pieChartConfig = {
    visitors: {
      label: "Visitors",
    },
    mobile: {
      label: "mobile",
      color: "#FB0078",
    },
    paid: {
      label: "paid",
      color: "#00FBA0",
    },
  } satisfies ChartConfig;
  return (
    <aside className="w-full bg-primary rounded-lg xl:h-[1670px] h-full flex flex-col items-start">
      {/* Header */}
      <div className="w-full px-3 sm:px-4 py-5 border-b border-b-gray-1 flex flex-col">
        <Typography className="font-semibold" variant="h4">
          118,000
        </Typography>
        <Typography className="font-medium">Monthly Volume</Typography>
      </div>
      {/* content here */}
      <div className="w-full flex flex-col items-start gap-5 sm:gap-12 px-3 sm:px-4 py-4">
        {/* Estimated Clicks */}
        <div className="w-full flex flex-col items-start">
          {" "}
          <div className="w-full flex flex-col items-start justify-start">
            <Typography className="font-semibold" variant="h4">
              44,800
            </Typography>
            <Typography className="font-medium">Estimated Clicks</Typography>
          </div>
          <VerticalBarRange
            data={[
              20, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 31, 32, 33,
              34, 35, 36, 37, 38, 40, 43, 45, 46, 48, 49, 51, 52, 53, 55, 56,
              57, 58,
            ]}
          />
        </div>{" "}
        {/* clicked results */}
        <div className="w-full flex flex-col items-start gap-2">
          <Typography className="font-medium">Clicked any result</Typography>

          <VerticalBarRange
            height="h-[30px]"
            data={[
              20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
              30, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
              20, 20,
            ]}
          />
          <div className="w-full flex items-center justify-between gap-4 mt-3">
            <div className="w-full flex flex-col items-center justify-center gap-1">
              <span className="w-full h-[10px] border-x border-b-white-3 border-b border-x-white-3"></span>
              <Typography color="primary">Low</Typography>{" "}
            </div>
            <Typography color="primary" className="font-semibold -mt-4">
              38%
            </Typography>
            <div className="w-full flex flex-col items-center justify-center gap-1">
              <span className="w-full h-[10px] border-x border-b-white-3 border-b border-x-white-3"></span>
              <Typography color="primary">High</Typography>{" "}
            </div>
          </div>
        </div>
        {/* mobile vs desktop */}
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <Typography className="font-medium">Mobile vs Desktop</Typography>
          <div className="w-full flex  items-center justify-between">
            <aside className="flex items-center justify-start gap-5">
              <div className=" w-[50px] h-[50px] bg-transparent rounded-full">
                <ChartContainer config={pieChartConfig} className="size-full">
                  <PieChart width={50} height={50}>
                    <Pie
                      data={pieChartData}
                      dataKey="visitors"
                      nameKey="name"
                      innerRadius={15}
                      outerRadius={25}
                      strokeWidth={2}
                    />
                  </PieChart>
                </ChartContainer>
              </div>
              <div className="flex flex-col items-start justify-center gap-0.5">
                <span className="flex items-center justify-start gap-2">
                  <span className="size-[14px] rounded-[2px] bg-pink-1"></span>
                  <Typography color="primary">Mobile</Typography>
                </span>
                <span className="flex items-center justify-start gap-2">
                  <span className="size-[14px] rounded-[2px] bg-success-1"></span>
                  <Typography color="primary">Desktop</Typography>
                </span>
              </div>
            </aside>
            <aside className="flex flex-col items-center justify-start gap-1">
              <div className="w-[40px] h-[30px] flex items-end justify-between">
                <span className="w-[6px] bg-white-2 rounded-[1px] h-[12px]"></span>{" "}
                <span className="w-[6px] bg-white-2 rounded-[1px] h-[18px]"></span>{" "}
                <span className="w-[6px] bg-[#424A50] rounded-[1px] h-[24px]"></span>{" "}
                <span className="w-[6px] bg-[#424A50] rounded-[1px] h-[30px]"></span>
              </div>
              <Typography color="primary">Normal</Typography>
            </aside>
          </div>
        </div>
        {/* paid clicks */}
        <div className="w-full flex flex-col items-start gap-2">
          <Typography className="font-medium">Paid clicks</Typography>

          <VerticalBarRange
            height="h-[30px]"
            data={[
              20, 20, 20, 20, 30, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
              20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
              20, 20,
            ]}
          />
          <div className="w-full flex items-start justify-start gap-4 mt-3">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="w-[60px] h-[10px] border-x border-b-white-3 border-b border-x-white-3"></span>
              <Typography color="primary">Low</Typography>{" "}
              <Typography color="primary">0.3%</Typography>
            </div>
            <Typography color="primary" className="font-semibold">
              23%
            </Typography>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="w-[180px] h-[10px] border-x border-b-white-3 border-b border-x-white-3"></span>
              <Typography color="primary">High</Typography>{" "}
              <Typography color="primary">13%+</Typography>
            </div>
          </div>
        </div>
        {/* difficulty */}
        <div className="w-full flex flex-col items-start gap-2">
          <Typography className="font-medium">Difficulty</Typography>

          <VerticalBarRange
            height="h-[30px]"
            data={[
              20, 20, 20, 20, 30, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
              20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
              20, 20,
            ]}
          />
          <div className="w-full flex items-start justify-start gap-4 mt-3">
            <Typography color="primary" className="font-semibold pl-[20%]">
              39
            </Typography>
          </div>
        </div>
        {/* google provided data */}
        <div className="w-full flex flex-col items-start justify-start gap-4 py-2 sm:py-4 border-b border-b-[#4E4E4E]">
          <Typography className="font-medium" variant="text">
            Google provided data
          </Typography>
          {googleProvidedData.map((item: any, index: number) => (
            <div key={index} className="w-full flex flex-col items-start gap-4">
              <Typography className="font-medium">{item.title}</Typography>
              {item.stats.map((stat: any, index: number) => (
                <div
                  key={index}
                  className="w-full flex items-center justify-between gap-4"
                >
                  <Typography color="secondary">{stat.name}</Typography>
                  <Typography color="secondary">{stat.value}</Typography>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* bottom bar */}
        <div className="w-full flex flex-col lg:-mt-4 items-start justify-start gap-4">
          {" "}
          <Typography className="font-medium">
            Universal Search in SERP
          </Typography>
          <div className="w-full flex items-center justify-start gap-4 flex-wrap">
            <Newspaper className="size-[24px] text-white-2" strokeWidth={2} />
            <Icons.image />
            <Icons.mapPin />
            <Video className="size-[24px] text-white-2" strokeWidth={2} />{" "}
            <Icons.cart />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MonthlyVolumeStats;
