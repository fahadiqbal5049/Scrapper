"use client";

import { Menu } from "lucide-react";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { LeftNavigationData } from "@/data/leftNavigationData";
import Link from "next/link";
import Typography from "@/components/ui/typography";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Switch } from "@/components/ui/switch";

const LeftNavigationForSmallScreen: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden flex">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Menu size={24} color="#A3A3A3" />
        </SheetTrigger>
        <SheetContent
          className="bg-primary p-4 w-full xs:max-w-[380px] flex flex-col overflow-auto border-l-0"
          side="right"
        >
          <SheetTitle></SheetTitle>

          {LeftNavigationData.map((item, index) => (
            <div key={index} className="w-full flex flex-col gap-1">
              {item.type && (
                <Typography className="pb-3" variant="p" color="primary">
                  <span className="font-medium capitalize">{item.type}</span>
                </Typography>
              )}
              {item.options.map((opt, index) => {
                // Apply dynamic icon color based on current path
                const iconFill = clsx(
                  pathName === opt.path
                    ? "fill-white-4"
                    : "group-hover:fill-white-1 fill-white-2"
                );

                // Special case for Auto Import and Auto Update
                if (
                  opt.value === "Auto Import" ||
                  opt.value === "Auto Update"
                ) {
                  return (
                    <div
                      key={index}
                      className={clsx(
                        "w-full group rounded-sm transition-all duration-200 hover:bg-white-1/10 px-2 py-2 flex justify-between items-center gap-1"
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
                      "w-full group rounded-sm transition-all duration-200 px-2 py-2 flex justify-start items-center gap-1",
                      pathName === opt.path
                        ? "bg-white-1/10"
                        : "bg-transparent hover:bg-white-1/10"
                    )}
                    onClick={handleClose}
                  >
                    <opt.icon
                      className={`w-[24px] h-[24px] `}
                      fill={iconFill}
                    />
                    <Typography
                      className={clsx(
                        pathName === opt.path ? "" : "group-hover:text-white-1"
                      )}
                      variant="p"
                      color={pathName === opt.path ? "default" : "primary"}
                    >
                      {opt.value}
                    </Typography>
                  </Link>
                );
              })}
            </div>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default LeftNavigationForSmallScreen;
