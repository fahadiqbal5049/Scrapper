"use client";
import React from "react";
import CustomSelect from "@/components/shared/form/CustomSelect";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";
import RangeCalender from "@/components/shared/RangeCalender/RangeCalender";
import Typography from "@/components/ui/typography";
import { InvoiceAmounts } from "@/data/paymentsData";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const Specifications = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Subscription",
      color: "#FB0078",
    },
    mobile: {
      label: "Purchased Apps",
      color: "#00FBA0",
    },
  } satisfies ChartConfig;
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex items-center justify-between flex-wrap">
        <Typography className="font-medium">Specifications</Typography>
        <CustomSelect
          options={InvoiceAmounts}
          placeholder="Invoice Amount"
          triggerStyles="h-[26px] rounded-[6px] text-xs w-[140px] border border-white-2"
        />
      </div>
      <div className="w-full rounded-lg  px-3 sm:px-4 py-4 sm:py-6 bg-primary flex flex-col gap-5">
        <div className="xs:pt-0 pt-3 z-20 flex xs:flex-row flex-col justify-start items-center gap-2 xs:gap-5">
          <div className="h-full flex items-center justify-start gap-1">
            <Typography color="primary">
              Average consumption over the past 6 months
            </Typography>{" "}
            <InputHelpTooltip
              fill="fill-white-2"
              helperText="Average consumption over the past 6 months"
            />
          </div>
          <RangeCalender />
        </div>
        <Typography variant="h4" color="secondary">
          € 35,51
        </Typography>
        <ChartContainer config={chartConfig} className="h-[250px] w-full -ml-4">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid
              vertical={false}
              stroke="#A4A4A4"
              strokeOpacity={0.1}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />{" "}
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value: any) => `€${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              radius={[50, 50, 0, 0]}
              barSize={25}
            />
            <Bar
              dataKey="mobile"
              fill="var(--color-mobile)"
              radius={[50, 50, 0, 0]}
              barSize={25}
            />
          </BarChart>
        </ChartContainer>
        <div className="w-full flex flex-col gap-2 ">
          <div className="flex items-center gap-2">
            <span className="size-[15px] rounded-full bg-pink-1"></span>
            <Typography color="primary">Subscription</Typography>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-[15px] rounded-full bg-success-1"></span>
            <Typography color="primary">Purchased Apps</Typography>
          </div>
        </div>{" "}
        <Typography color="primary">
          We are allowed to retain and display detailed data for a maximum of 6
          months.
        </Typography>
      </div>
    </div>
  );
};

export default Specifications;
