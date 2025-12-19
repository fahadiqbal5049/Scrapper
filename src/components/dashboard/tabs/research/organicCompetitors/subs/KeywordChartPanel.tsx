"use client";

import React from "react";
import ChartSearchHeader from "./ChartSearchHeader";
import Typography from "@/components/ui/typography";
import { Plus } from "lucide-react";
import clsx from "clsx";
import RangeCalender from "../../../../../shared/RangeCalender/RangeCalender";
import KeyWordStatsChart from "./KeyWordStatsChart";
import { useSeoOrPpc } from "../context/SeoOrPpcContext";

const KeywordChartPanel: React.FC = () => {
  const { isSeoOrPpc, setIsSeoOrPpc } = useSeoOrPpc();

  return (
    <div className="w-full flex pb-6 flex-col bg-primary rounded-lg">
      {/* search header ----> */}
      <ChartSearchHeader />
      <div className="w-full grid grid-cols-[150px,calc(100%-150px)] xs:grid-cols-[180px,calc(100%-180px)] sm:grid-cols-[220px,calc(100%-220px)]">
        {/* left keywords navigation -------> */}
        <div className="w-full border-r-[1px] border-[#414141] h-full flex flex-col">
          {/* keywords nodes */}
          {KeyWordsNodeData.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full border-b-[1px] border-[#414141] flex gap-2"
              >
                <div className={clsx("w-[6px] h-full", item.color)}></div>
                <div className="flex-grow pr-2 flex py-4 justify-between items-center gap-4">
                  <div className="flex flex-col gap-1">
                    <Typography
                      variant="p"
                      color="primary"
                      className="font-semibold"
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="p" color="primary" className="">
                      {isSeoOrPpc ? "Paid Keywords" : "SEO Keywords"}:
                      {item.status}
                    </Typography>
                  </div>
                  <button>
                    <Plus className="rotate-45" color="#A3A3A3" size={22} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* right keyword stats table -------> */}
        <div className="w-full h-full flex flex-col py-5 gap-2">
          <div className="flex px-4 justify-start items-center gap-4">
            <Typography variant="p" className="font-semibold" color="secondary">
              Zoom
            </Typography>
            <RangeCalender />
          </div>
          <KeyWordStatsChart />
        </div>
      </div>
    </div>
  );
};

export default KeywordChartPanel;

const KeyWordsNodeData = [
  {
    color: "bg-pink-1",
    name: "stockx.com",
    status: "2.86k",
  },
  {
    color: "bg-cyan-1",
    name: "virtueplug.store",
    status: "1",
  },
  {
    color: "bg-orange-1",
    name: "kickpredict.co",
    status: "2",
  },
  {
    color: "bg-[#9134DB]",
    name: "alias.org",
    status: "4",
  },
  {
    color: "bg-[#0B97B6]",
    name: "goat.com",
    status: "1.29k",
  },
];
