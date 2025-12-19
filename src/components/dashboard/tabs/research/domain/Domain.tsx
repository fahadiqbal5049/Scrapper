import Typography from "@/components/ui/typography";
import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";
import * as Icons from "@/svg/Icons";
import CompetitionStats from "./subs/CompetitionStats";
import TrafficChart from "./subs/TrafficChart";
import SearchComponent from "@/components/shared/SearchComponent";
import Link from "next/link";
import InputHelpTooltip from "@/components/shared/form/InputHelpTooltip";

const Domain = () => {
  return (
    <div className="size-full flex flex-col items-start justify-start gap-4 sm:gap-8">
      {/* searchbar here */}
      <SearchComponent
        placeholder="Enter a domain"
        size="w-full h-[42px]"
        bg="bg-white-3/5"
      />

      {/* top stats cards here */}
      <div className="w-full grid md:grid-cols-2  2xl:grid-cols-[1fr,1.5fr,1fr] gap-4">
        <div className="size-full flex-shrink-0 bg-primary pb-3 sm:pb-4 rounded-lg flex flex-col items-start gap-4">
          {/* header */}
          <div className="px-3 w-full border-b border-b-gray-1 sm:px-4 py-4 flex items-center justify-start gap-2 relative">
            <Typography color="primary" className="font-semibold">
              Organic Keywords (SEO)
            </Typography>{" "}
            <InputHelpTooltip helperText="Organic Keywords (SEO)" />
        
          </div>
          {/* content here */}
          <div className="w-full flex flex-col px-3 sm:px-4 items-start justify-start lg:gap-10 gap-6">
            <div className="w-full flex flex-col items-start justify-start">
              <Link href={"/dashboard/research/organic-keywords"}>
                {" "}
                <Typography color="secondary">Organic Keywords </Typography>
              </Link>{" "}
              <span className="flex items-center justify-start">
                <Typography variant="h2">1,984,639</Typography>
                <ArrowDown
                  className="size-[18px] text-red-1 -mb-4"
                  strokeWidth={3}
                />
              </span>
            </div>
            <div className="w-full flex flex-col items-start justify-start">
              <Link href={"/dashboard/research/est-monthly-seo-clicks"}>
                {" "}
                <Typography color="secondary">
                  Est Monthly SEO Clicks{" "}
                </Typography>
              </Link>{" "}
              <Typography variant="h4" color="primary" className="font-medium">
                3,450,785
              </Typography>
            </div>
            <div className="w-full flex flex-col items-start justify-start">
              <Link href={"/dashboard/research/est-monthly-seo-click-change"}>
                <Typography color="secondary">
                  Est Monthly SEO Click Change
                </Typography>
              </Link>
              <Typography variant="h4" color="primary" className="font-medium">
                -160,215
              </Typography>
            </div>
          </div>
        </div>
        {/* chart here */}
        <TrafficChart />

        <div className="size-full flex-shrink-0 bg-primary pb-3 sm:pb-4 rounded-lg flex flex-col items-start gap-4">
          {/* header */}
          <div className="px-3 w-full border-b border-b-gray-1 sm:px-4 py-4 flex items-center justify-start gap-2 relative">
            <Typography color="primary" className="font-semibold">
              Paid Search (PPC)
            </Typography>{" "}
            <InputHelpTooltip helperText="Paid Search (PPC)" />
       
          </div>
          {/* content here */}
          <div className="w-full flex flex-col px-3 sm:px-4 items-start justify-start lg:gap-10 gap-6">
            <div className="w-full flex flex-col items-start justify-start">
              <Link href={"/dashboard/research/paid-keywords"}>
                {" "}
                <Typography color="secondary">Paid Keywords </Typography>
              </Link>{" "}
              <span className="flex items-center justify-start">
                <Typography variant="h2">2,878</Typography>
                <ArrowUp
                  className="size-[18px] text-white-1 -mb-4"
                  strokeWidth={3}
                />
              </span>
            </div>
            <div className="w-full flex flex-col items-start justify-start">
              <Link href={"/dashboard/research/est-monthly-ppc-clicks"}>
                {" "}
                <Typography color="secondary">
                  Est Monthly PPC Clicks
                </Typography>
              </Link>{" "}
              <Typography variant="h4" color="primary" className="font-medium">
                170,427
              </Typography>
            </div>
            <div className="w-full flex flex-col items-start justify-start">
              <Link href={"/dashboard/research/est-monthly-googleads-budget"}>
                {" "}
                <Typography color="secondary">
                  Est Monthly Google Ads Budget
                </Typography>
              </Link>{" "}
              <Typography variant="h4" color="primary" className="font-medium">
                $92,460
              </Typography>
            </div>
          </div>
        </div>
      </div>
      {/* competitors charts here */}
      <CompetitionStats />
    </div>
  );
};

export default Domain;
