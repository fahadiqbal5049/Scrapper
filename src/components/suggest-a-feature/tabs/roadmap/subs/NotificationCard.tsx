"use client";
import SignUpModal from "@/components/suggest-a-feature/shared/modals/SinupModal";
import Typography from "@/components/ui/typography";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  detail: string;
  title?: string;
  notifications: number;
};
const NotificationCard = ({
  detail,
  notifications,
  title = "      FEATURES REQUESTS",
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="w-full flex gap-4 p-4">
        <div
          onClick={toggleIsOpen}
          className="w-[28px] cursor-pointer shrink-0 h-[43px] border-[0.5px] rounded-sm py-1 flex flex-col items-center justify-between border-white-1"
        >
          <ChevronUp size={12} className="text-white-1" />
          <Typography>{notifications}</Typography>
        </div>
        <Link
          href={"/suggest-a-feature/feedback/1"}
          className="w-full flex flex-col gap-1"
        >
          <Typography
            color="primary"
            className="hover:cursor-pointer hover:text-white-1 hover:duration-200"
          >
            {detail}
          </Typography>
          <Typography color="primary" variant="small" className="font-medium">
            {title}
          </Typography>
        </Link>
      </div>
      <SignUpModal isOpen={isOpen} closeEvent={toggleIsOpen} />
    </>
  );
};

export default NotificationCard;
