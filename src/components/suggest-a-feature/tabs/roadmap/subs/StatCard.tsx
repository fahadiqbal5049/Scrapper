import { ScrollArea } from "@/components/ui/scroll-area";
import Typography from "@/components/ui/typography";
import { ChevronUp } from "lucide-react";
import React from "react";
import { GoLightBulb } from "react-icons/go";
import NotificationCard from "./NotificationCard";

type StatCardProps = {
  title: string;
  notifications?: any[];
};
const StatCard = ({ title, notifications }: StatCardProps) => {
  return (
    <div className="w-full h-[450px] border border-white-2 rounded-lg">
      <div className="w-full px-4 py-2 border-b border-b-white-2 flex items-center justify-start gap-2">
        <span className="size-[5px] rounded-full bg-white-2"></span>
        <Typography className="font-medium" color="primary">
          {title}
        </Typography>
      </div>
      {notifications ? (
        <ScrollArea className="w-full h-[410px] flex flex-col">
          {notifications.map((notificaiton: any, index: number) => (
            <NotificationCard
              key={index}
              title={notificaiton.title}
              notifications={notificaiton.notifications}
              detail={notificaiton.detail}
            />
          ))}
        </ScrollArea>
      ) : (
        <div className="w-full px-4 h-[410px] flex flex-col gap-5 items-center justify-center">
          <span className="size-[40px] rounded-full flex  items-center justify-center bg-success-1/20">
            <GoLightBulb className="text-success-1" size={22} />
          </span>
          <Typography className="text-center" color="primary">
            Share your feedback and check back here for updates.
          </Typography>
        </div>
      )}
    </div>
  );
};

export default StatCard;
