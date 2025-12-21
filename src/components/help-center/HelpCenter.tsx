import React from "react";
import Typography from "../ui/typography";
import SearchComponent from "../shared/SearchComponent";
import InfoCard from "../apps/subs/InfoCard";
import KnowledgeBase from "./subs/KnowledgeBase";
import { Button } from "../ui/button";

const HelpCenter = () => {
  return (
    <div className="size-full flex flex-col gap-5 sm:gap-8">
      <div className="w-full flex flex-col gap-4">
        <Typography className="font-medium">How can we help</Typography>
        <SearchComponent size="h-[42px] w-full" bg="bg-white-3/5" />
      </div>
      <div className="w-full grid gap-5 sm:gap-8 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
        <InfoCard
          title={"Video tutorials"}
          description={
            "Use 1230scraper from any browser— no installation necessary."
          }
          actionBtnTxt="Learn More"
          actionBtnStyles="h-[26px] w-[96px]"
          styles="gap-4 pb-6"
        />
        <InfoCard
          title={"API documentation"}
          description={
            "Download the Android app and receive push notifications."
          }
          actionBtnTxt="Learn More"
          actionBtnStyles="h-[26px] w-[96px]"
          styles="gap-4 pb-6"
        />
      </div>
      <KnowledgeBase />
      <div className="w-full px-4 py-6 sm:py-10 flex flex-col items-center justify-center gap-4 sm:gap-6 bg-primary rounded-lg">
        <Typography variant="h4" className="text-[24px]">
          Still having trouble?
        </Typography>
        <Typography
          className="font-medium lg:w-[30%] text-center"
          color="primary"
        >
          Not finding the answer to your question? Get in touch with us, and
          we'll do our best to help you out!
        </Typography>
        <Button
          variant={"destructive"}
          className="bg-pink-1 text-xs font-semibold h-[34px] w-[128px] hover:bg-pink-600"
        >
          Contact Support
        </Button>
      </div>
    </div>
  );
};

export default HelpCenter;
