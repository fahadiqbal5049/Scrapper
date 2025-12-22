"use client";
import SignUpModal from "@/components/suggest-a-feature/shared/modals/SinupModal";
import Typography from "@/components/ui/typography";
import clsx from "clsx";
import { MessageCircle, ChevronUp } from "lucide-react";
import React, { useState } from "react";

type Props = {
  title: string;
  detail: string;
  notifications: number;
  bg: string;
  messages: number;
};

const FeatureRequestCard = ({
  title,
  detail,
  notifications,
  bg,
  messages,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <>
      {" "}
      <div
        className={clsx(
          "w-full flex items-center justify-between p-2 sm:p-4 ",
          bg
        )}
      >
        <div className="flex flex-col gap-1">
          <Typography>{title}</Typography>
          <Typography variant="small" color="primary" className="font-medium">
            {detail}
          </Typography>
          <div className="flex items-center justify-start gap-1">
            <MessageCircle size={14} className="shrink-0 text-white-2" />
            <Typography variant="small" color="primary">
              {messages}
            </Typography>
          </div>
        </div>
        <div
          onClick={toggleIsOpen}
          className="w-[28px] cursor-pointer shrink-0 h-[43px] border-[0.5px] rounded-sm py-1 flex flex-col items-center justify-between border-white-1"
        >
          <ChevronUp size={12} className="text-white-1" />
          <Typography>{notifications}</Typography>
        </div>
      </div>{" "}
      <SignUpModal isOpen={isOpen} closeEvent={toggleIsOpen} />
    </>
  );
};

export default FeatureRequestCard;
