"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import SearchComponent from "@/components/shared/SearchComponent";
import { Plus, Settings } from "lucide-react";
import Typography from "@/components/ui/typography";
import { useSeoOrPpc } from "../context/SeoOrPpcContext";

const ChartSearchHeader: React.FC = () => {
  const { isSeoOrPpc } = useSeoOrPpc();

  return (
    <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-start md:items-center p-4 border-b-[1px] border-[#414141]">
      <div className="flex flex-wrap justify-start items-center gap-2 xl:gap-4">
        <Button variant="orangeGradient" size="sm" className="rounded-sm">
          {isSeoOrPpc ? "View PPC Keywords" : " View SEO Keywords"}
        </Button>
        <Button variant="gradientOutline" size="sm">
          {isSeoOrPpc ? "View Monthly Clicks" : "View Ad Budget"}
        </Button>
        <Button variant="gradientOutline" size="sm">
          {isSeoOrPpc ? "View Monthly Value" : "View Paid Clicks"}
        </Button>
      </div>
      <div className="flex justify-center items-center gap-2 xl:gap-4">
        <div className="flex justify-center items-center h-[26px]">
          <SearchComponent
            rounded="rounded-l-sm"
            size="w-[150px] xl:w-[307px] h-full rounded-0"
            placeholder="Compare Custom Domain"
          />
          <button className="flex bg-pink-1 rounded-r-sm p-1 justify-center items-center h-full">
            <Plus color="#F1F1F1" size={14} />
            <Typography className="text-[#F1F1F1]" variant="p">
              Add
            </Typography>
          </button>
        </div>
        <button>
          <Settings color="#A3A3A3" size={25} />
        </button>
      </div>
    </div>
  );
};

export default ChartSearchHeader;
