"use client";

import React from "react";
import Image from "next/image";
import Typography from "@/components/ui/typography";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  LeftNavigationData,
  AdminLeftNavigationData,
  OwnerLeftNavigationData
} from "@/data/leftNavigationData";
import { userRole } from "@/context/UserContext";

const LeftNavigation = () => {
  const pathName = usePathname();
  const { role } = userRole();

  const data = role === "user" ? LeftNavigationData : role === 'admin' ? AdminLeftNavigationData : OwnerLeftNavigationData

  return (
    <div className="lg:block hidden w-full shadow-lightShadow space-y-6 bg-primary overflow-auto h-dvh py-8">
      <div className="w-[160px] mx-auto h-[30px] relative">
        <Image src="/logo.svg" fill className="object-fill" alt="logo" />
      </div>
      {/* Navigation sections */}
      <div className="h-[calc(100%-60px)] px-5 overflow-auto flex flex-col gap-6">
        {data?.map((item, index) => (
          <div key={index} className="w-full flex flex-col gap-1">
            {item.type && (
              <Typography className="pb-3" variant="p" color="primary">
                <span className="font-medium capitalize">{item.type}</span>
              </Typography>
            )}
            {item.options.map((opt: any, index) => {
              // Apply dynamic icon color based on current path
              const iconFill = clsx(
                pathName.includes(
                  `${opt?.parentPath ? opt.parentPath : opt.path}`
                )
                  ? "fill-white-4"
                  : "group-hover:fill-white-1 fill-white-2"
              );

              // Special case for Auto Import and Auto Update
              if (opt.value === "Auto Import" || opt.value === "Auto Update") {
                return (
                  <div
                    key={index}
                    className={clsx(
                      "w-full group rounded-sm transition-all duration-200 hover:bg-white-1/10 px-4 py-2 flex justify-between items-center gap-1"
                    )}
                  >
                    <div className="flex justify-center items-center gap-1">
                      <opt.icon
                        className={`w-[24px] h-[24px]`}
                        fill={iconFill}
                      />
                      <Typography
                        className="group-hover:text-white-1"
                        variant="p"
                        color="primary"
                      >
                        {opt.value}
                      </Typography>
                    </div>
                    <Switch
                      width="w-[33px]"
                      height="17px"
                      thumbHeight="h-3"
                      thumbWidth="w-3"
                      thumbStyles="data-[state=checked]:translate-x-4"
                      id={opt.value}
                    />
                  </div>
                );
              }

              // Default case for regular navigation items
              return (
                <Link
                  href={opt.path}
                  key={index}
                  className={clsx(
                    "w-full group rounded-sm transition-all duration-200 px-4 py-2 flex justify-start items-center gap-1",
                    pathName.includes(
                      `${opt?.parentPath ? opt.parentPath : opt.path}`
                    )
                      ? "bg-white-1/10"
                      : "bg-transparent hover:bg-white-1/10"
                  )}
                >
                  <opt.icon className={`w-[24px] h-[24px] `} fill={iconFill} />
                  <Typography
                    className={clsx(
                      pathName.includes(
                        `${opt?.parentPath ? opt.parentPath : opt.path}`
                      )
                        ? ""
                        : "group-hover:text-white-1"
                    )}
                    variant="p"
                    color={
                      pathName.includes(
                        `${opt?.parentPath ? opt.parentPath : opt.path}`
                      )
                        ? "default"
                        : "primary"
                    }
                  >
                    {opt.value}
                  </Typography>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNavigation;
