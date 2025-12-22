"use client";
import SignUpModal from "@/components/suggest-a-feature/shared/modals/SinupModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Typography from "@/components/ui/typography";
import clsx from "clsx";
import { Star, Heart } from "lucide-react";
import React, { useState } from "react";
type Props = {
  isLive: boolean;
  status: string;
};
const ActivityCard = ({ status, isLive }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="w-full flex gap-3">
        <div className="relative size-[22px]">
          {" "}
          <Avatar className="size-[22px]">
            <AvatarImage src="asd" />
            <AvatarFallback className="text-xs bg-success-1/80">
              P
            </AvatarFallback>
          </Avatar>{" "}
          <span className="absolute z-10 -bottom-0.5 -right-0.5 size-[12px] rounded-full flex items-center justify-center bg-blue-800">
            <Star size={10} className="text-white-1" />
          </span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-start gap-2">
            <Typography color="primary">
              <span className="text-success-1">Paul Morello</span> marked this
              post as
            </Typography>
            {!isLive && (
              <span
                className={clsx(
                  "h-[23px] rounded-sm px-2 flex items-center",
                  status === "Complete"
                    ? "bg-success-2/10"
                    : status == "In Progress"
                    ? "bg-orange-2/10"
                    : "bg-[#9747FF]/10"
                )}
              >
                <Typography
                  variant="small"
                  className={clsx(
                    "font-medium whitespace-nowrap",
                    status === "Complete"
                      ? "text-success-2"
                      : status == "In Progress"
                      ? "text-orange-2"
                      : "text-[#9747FF]"
                  )}
                >
                  {status}
                </Typography>
              </span>
            )}
          </div>
          {isLive && (
            <Typography variant="small" color="primary">
              This feature is now live
            </Typography>
          )}
          <div className="flex items-start justify-start gap-3">
            <button onClick={toggleIsOpen}>
              <Heart size={14} className="text-white-2" />
            </button>
            <Typography variant="small" color="primary">
              February 11, 2023
            </Typography>

            <Typography color="primary" variant="small" className="underline">
              Reply
            </Typography>
          </div>
        </div>
      </div>
      <SignUpModal isOpen={isOpen} closeEvent={toggleIsOpen} />
    </>
  );
};

export default ActivityCard;
