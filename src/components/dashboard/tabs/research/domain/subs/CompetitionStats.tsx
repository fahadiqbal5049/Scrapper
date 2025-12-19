import Typography from "@/components/ui/typography";
import React from "react";
import BarGraphWidget from "../../shared/BarGraphWidget";
import * as Icons from "@/svg/Icons";
import { organicCompetitors, paidCompetitors } from "@/data/ResearchData";
import Link from "next/link";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";

const CompetitionStats = () => {
  return (
    <>
      <Typography className="font-medium">Competition</Typography>
      <div className="w-full grid md:grid-cols-2 gap-4">
        {/* organic competitors here */}
        <div className="size-full bg-primary rounded-lg flex flex-col items-start gap-4">
          {/* header */}
          <div className="px-3 w-full border-b border-b-gray-1 sm:px-4 py-4 flex items-center justify-start gap-2 relative">
            <Typography color="primary" className="font-semibold">
              Organic Competitors
            </Typography>{" "}
            <InputHelpTooltip helperText="Organic Competitors" />
          </div>
          {/* content here */}
          <div className="w-full flex flex-col px-3 sm:px-4 items-start justify-start gap-4">
            {organicCompetitors.map((item: any, index: number) => (
              <BarGraphWidget
                key={index}
                title={item.name}
                Number={index + 1}
                graphValue={item.value}
              />
            ))}
          </div>
          {/* bottom bar here */}
          <Link
            href="/dashboard/research/organic-competitors"
            className="w-full border-t border-t-gray-1 py-3 sm:py-4 flex items-center justify-center"
          >
            <Typography className="font-semibold" color="primary">
              View all competitors
            </Typography>
          </Link>
        </div>
        {/* paid competitors here */}
        <div className="size-full bg-primary rounded-lg flex flex-col items-start gap-4">
          {/* header */}
          <div className="px-3 w-full border-b border-b-gray-1 sm:px-4 py-4 flex items-center justify-start gap-2 relative">
            <Typography color="primary" className="font-semibold">
              Paid Competitors
            </Typography>{" "}
            <InputHelpTooltip helperText="Paid Competitors" />
          </div>
          {/* content here */}
          <div className="w-full flex flex-col px-3 sm:px-4 items-start justify-start gap-4">
            {paidCompetitors.map((item: any, index: number) => (
              <BarGraphWidget
                key={index}
                title={item.name}
                Number={index + 1}
                graphValue={item.value}
                graphColor="#00FBA0"
              />
            ))}
          </div>
          {/* bottom bar here */}
          <Link
            href="/dashboard/research/paid-competitors"
            className="w-full border-t border-t-gray-1 py-3 sm:py-4 flex items-center justify-center"
          >
            <Typography className="font-semibold" color="primary">
              View all competitors
            </Typography>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CompetitionStats;
