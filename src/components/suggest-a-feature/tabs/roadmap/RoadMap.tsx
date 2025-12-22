import SearchComponent from "@/components/shared/SearchComponent";
import Typography from "@/components/ui/typography";
import Link from "next/link";
import React from "react";
import RoadMapSection from "./subs/RoadMapSection";

const RoadMap = () => {
  return (
    <div className="size-full flex flex-col gap-4 sm:gap-6">
      <SearchComponent size="w-full h-[42px]" bg="bg-white-3/5" />
      <div className="w-full flex flex-col gap-3">
        <Typography variant="text" className="font-medium">
          Boards
        </Typography>
        <Link
          href={"/suggest-a-feature/feedback"}
          className="w-full sm:w-[210px] h-[40px] flex items-center justify-between px-2 rounded-sm bg-gray-2"
        >
          <Typography color="primary" variant="text" className="font-normal">
            Features Request
          </Typography>
          <Typography color="primary" variant="text" className="font-normal">
            60
          </Typography>{" "}
        </Link>
      </div>
      <RoadMapSection />
    </div>
  );
};

export default RoadMap;
