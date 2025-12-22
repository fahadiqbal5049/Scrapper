import SearchComponent from "@/components/shared/SearchComponent";
import React from "react";
import Details from "./subs/Details";

const FeedbackDetails = () => {
  return (
    <div className="size-full flex flex-col gap-4 sm:gap-6">
      <SearchComponent size="w-full h-[42px]" bg="bg-white-3/5" />
      <Details />
    </div>
  );
};

export default FeedbackDetails;
