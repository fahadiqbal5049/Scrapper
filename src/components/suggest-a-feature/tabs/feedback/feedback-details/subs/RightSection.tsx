import CustomSelect from "@/components/shared/form/CustomSelect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Typography from "@/components/ui/typography";
import { sortByOptions, activities } from "@/data/suggestAFeatureData";
import { ChevronUp } from "lucide-react";

import React from "react";
import ActivityCard from "./ActivityCard";
import { Input } from "@/components/ui/input";

const RightSection = () => {
  return (
    <aside className="w-full flex flex-col sm:gap-6 gap-4">
      <div className="w-full flex gap-3">
        <div className="w-[28px] cursor-pointer shrink-0 h-[43px] border-[0.5px] rounded-sm py-1 flex flex-col items-center justify-between border-white-1">
          <ChevronUp size={12} className="text-white-1" />
          <Typography>4</Typography>
        </div>
        <div className="flex flex-col gap-1">
          <Typography variant="text" className="font-medium !text-[18px]">
            Ability to add user to the account
          </Typography>
          <Typography variant="small" color="primary">
            COMPLETE
          </Typography>
        </div>
      </div>
      <div className="w-full flex  gap-3">
        <Avatar className="size-[18px]">
          <AvatarImage src="asd" />
          <AvatarFallback className="text-[10px] bg-pink-400">M</AvatarFallback>
        </Avatar>{" "}
        <div className="flex flex-col gap-1">
          <Typography className="font-medium">Maurice Jacobs</Typography>
          <Typography variant="small" color="primary">
            Ability to add user to the account
          </Typography>{" "}
          <Typography variant="small" color="primary">
            June 22, 2022
          </Typography>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 sm:gap-6 sm:pl-6">
        <Input
          placeholder="Leave a comment"
          className="h-[42px] w-full border-white-2 !rounded-[5px]"
        />
        <div className="w-full flex items-center justify-between flex-wrap gap-4">
          <Typography className="font-medium" color="primary">
            Activity Feed
          </Typography>
          <div className="flex items-center gap-3">
            <Typography variant="small" color="primary">
              Sort by
            </Typography>
            <CustomSelect
              placeholder="Newest First"
              triggerStyles="h-[30px] rounded-sm border-white-2 w-[200px]"
              options={sortByOptions}
            />
          </div>
        </div>
        {activities.map((item: any, index: number) => (
          <ActivityCard key={index} status={item.status} isLive={item.isLive} />
        ))}
      </div>
    </aside>
  );
};

export default RightSection;
