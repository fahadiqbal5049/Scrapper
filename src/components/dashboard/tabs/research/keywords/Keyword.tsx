"use client";
import SearchComponent from "@/components/shared/SearchComponent";
import React from "react";
import StatsCard from "../shared/StatsCard";
import { statsCardsData } from "@/data/ResearchData";
import MonthlyVolumeStats from "../shared/MonthlyVolumeStats";

const Keyword = () => {
  return (
    <div className="size-full flex flex-col items-start justify-start gap-4 sm:gap-8">
      {/* searchbar here */}
      <SearchComponent
        placeholder="Enter a keyword"
        size="w-full h-[42px]"
        bg="bg-white-3/5"
      />
      <div className="w-full grid md:grid-cols-2 xl:grid-cols-[1fr,1.7fr] gap-4 xl:gap-6">
        <MonthlyVolumeStats />
        <aside className="size-full flex flex-col items-center justify-start gap-4 sm:gap-6">
          {statsCardsData.map((item: any, index: number) => (
            <StatsCard
              key={index}
              title={item.title}
              titleValue={item.titleValue}
              stats={item.stats}
              link={item.link}
            />
          ))}
        </aside>
      </div>
    </div>
  );
};

export default Keyword;
