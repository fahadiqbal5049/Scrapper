"use client";
import Typography from "@/components/ui/typography";
import { keywordGainers } from "@/data/ResearchData";
import React from "react";
import BarGraphWidget from "../shared/BarGraphWidget";
import { Pie, PieChart } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";

const BottomStatCards = () => {
  const pieChartData = [
    { name: "Blogs", visitors: 45, fill: "#00ACED" },
    { name: "News", visitors: 30, fill: "#35D298" },
    { name: "Has affiliate links", visitors: 30, fill: "#FB933C" },
    { name: "Forums", visitors: 10, fill: "#AC03FC" },
    { name: ".gov / .edu", visitors: 10, fill: "#007EF2" },
    { name: "Directories", visitors: 5, fill: "#00FFFF" },
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
    <div className="w-full grid md:grid-cols-2  xl:grid-cols-[1.5fr,1fr] gap-4">
      {/* Keywords Gainers and Losers here */}
      <div className="size-full bg-primary rounded-lg flex flex-col items-start gap-4 pb-4 lg:pb-6">
        {/* header */}
        <div className="px-3 w-full border-b border-b-gray-1 sm:px-4 py-4 flex items-center justify-start gap-2 relative">
          <Typography color="primary" className="font-semibold">
            Keywords Gainers and Losers
          </Typography>{" "}
        </div>
        {/* content here */}
        <div className="w-full flex flex-col px-3 sm:px-4 items-start justify-start gap-4">
          {keywordGainers.map((item: any, index: number) => (
            <BarGraphWidget
              key={index}
              title={item.name}
              titleStat={item.titleStat}
              graphColor={item.color}
              Number={index + 1}
              graphValue={item.value}
            />
          ))}
        </div>
      </div>
      {/* Inbound Links here */}
      <div className="size-full bg-primary rounded-lg flex flex-col items-start gap-4">
        {/* header */}
        <div className="px-3 w-full border-b border-b-gray-1 sm:px-4 py-4 flex items-center justify-start gap-2 relative">
          <Typography color="primary" className="font-semibold">
            Inbound Links
          </Typography>{" "}
          <InputHelpTooltip fill="fill-white-2" helperText="Inbound Links" />{" "}
        </div>
        {/* content here */}
        <div className="size-full grid grid-cols-2 md:gap-5 gap-1 px-3 sm:px-4 pb-4 lg:pb-6">
          <div className="size-full flex items-center justify-center">
            <div className=" w-[150px] h-[150px] bg-transparent rounded-full">
              <ChartContainer config={pieChartConfig} className="size-full">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    dataKey="visitors"
                    nameKey="name"
                    innerRadius={25}
                    outerRadius={70}
                    strokeWidth={5}
                  ></Pie>
                </PieChart>
              </ChartContainer>
            </div>
          </div>
          <div className="size-full flex flex-col items-center justify-start gap-1">
            {pieChartData.map((item: any, index: number) => (
              <div
                key={index}
                className="flex w-full items-center justify-start gap-2"
              >
                <span
                  className={`size-[10px] rounded-full flex-shrink-0`}
                  style={{ background: item.fill }}
                ></span>
                <Typography color="secondary">{item.name}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomStatCards;
