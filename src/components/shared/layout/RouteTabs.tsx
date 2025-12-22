"use client";
import Typography from "@/components/ui/typography";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  tabs: any[];
  rightSection?: React.ReactNode;
};
const RouteTabs = ({ tabs, rightSection }: Props) => {
  const pathname = usePathname();
  return (
    <div className="w-full sm:flex-row flex-col flex items-start sm:items-center justify-between gap-4 sm:gap-5">
      <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-2 sm:gap-x-5">
        {tabs.map((item: any, index: number) => (
          <Link key={index} href={item.route}>
            <Typography
              variant="text"
              color="primary"
              className={clsx(
                `hover:text-white-1 hover:font-semibold hover:duration-150 transform transition-all`,
                pathname.includes(item.route) && "text-white-1 font-semibold"
              )}
            >
              {item.name}
            </Typography>
          </Link>
        ))}
      </div>
      {rightSection}
    </div>
  );
};

export default RouteTabs;
