"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableCell from "@/components/shared/table/TableCell";
import TableRow from "@/components/shared/table/TableRow";
import TableHeader from "@/components/shared/table/TableHeader";
import { Checkbox } from "@/components/ui/checkbox";
import ScrollArea from "@/components/shared/ScrollArea";
import { ExternalLink, EllipsisVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as Icons from "@/svg/Icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import clsx from "clsx";
import SeePricingAndPlans from "./SeePricingAndPlans";
import DetailedPagination from "@/components/shared/DetailedPagination";

const KeyWordsStatsTable: React.FC = () => {
  const [isPlaneSubscribe, setIsPlaneSubscribe] = useState(true);

  return (
    <div className="w-full flex items-end gap-4 flex-col">
      <div className="w-full h-fit pb-2 flex flex-col bg-primary rounded-lg">
        {/* stats highlights ----> */}
        <div className="w-full flex-wrap px-4 py-4 flex justify-start items-center gap-2 xs:gap-4 md:gap-8">
          <Typography variant="p" color="primary">
            Total Keywords: 1,977,958
          </Typography>
          <Typography variant="p" color="primary">
            Total Volume: 218M
          </Typography>
          <Typography variant="p" color="primary">
            Total SEO Clicks: 3.44M
          </Typography>
        </div>
        {/* table */}
        <div className="w-full relative">
          <div className="flex">
            {/* Fixed columns */}
            <div className="w-[250px] xs:w-[370px] flex-shrink-0">
              <Table className="table-fixed w-full">
                <TableHeader className="border-t-[1px] border-[#4E4E4E]">
                  <TableRow className="[&_td]:h-[64px] [&_th]:h-[64px]">
                    <TableCell as="th" className="pl-3 w-[30px]">
                      <Checkbox />
                    </TableCell>
                    <TableCell as="th" className="w-[250px] xs:w-[310px] py-4">
                      <Typography
                        variant="p"
                        className="text-[#F1F1F1] font-semibold"
                      >
                        Keyword
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array(12)
                    .fill(0)
                    .map((_, index) => (
                      <TableRow
                        key={index}
                        className={clsx(
                          "border-t-[1px] duration-300 border-[#4E4E4E] [&_td]:h-[64px]",
                          index === 11 && "border-b-[1px]",
                          index > 5 && isPlaneSubscribe
                            ? "opacity-5 border-opacity-5"
                            : "opacity-100"
                        )}
                      >
                        <TableCell as="td" className="pl-3 w-[30px]">
                          <Checkbox />
                        </TableCell>
                        <TableCell as="td" className=" w-[310px]">
                          <div className="flex flex-col">
                            <Typography
                              variant="p"
                              color="primary"
                              className="font-semibold"
                            >
                              stockx
                            </Typography>
                            <button className="flex justify-start items-center gap-1">
                              <ExternalLink size={16} color="#A3A3A3" />
                              <Typography variant="p" color="primary">
                                https://stockx.com/
                              </Typography>
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
            {/* Scrollable section */}
            <ScrollArea>
              <Table className="table-fixed min-w-[910px]">
                <TableHeader
                  className={clsx("border-t-[1px] border-[#4E4E4E]")}
                >
                  <TableRow className="[&_td]:h-[64px] [&_th]:h-[64px]">
                    {[
                      "Volume",
                      "Rank (Change)",
                      "SEO Clicks (Change)",
                      "KD",
                      "CPC (B)",
                      "Desktop Searches",
                      "Actions",
                    ].map((item, index) => {
                      return (
                        <TableCell key={index} as="th" className="">
                          <Typography
                            variant="p"
                            className="text-[#F1F1F1] font-semibold"
                          >
                            {item}
                          </Typography>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array(12)
                    .fill(0)
                    .map((_, index) => (
                      <TableRow
                        key={index}
                        className={clsx(
                          "border-t-[1px] duration-300 border-[#4E4E4E] [&_td]:h-[64px]",
                          index === 11 && "border-b-[1px]",
                          index > 5 && isPlaneSubscribe
                            ? "opacity-5 border-opacity-5"
                            : "opacity-100"
                        )}
                      >
                        <TableCell as="td">946k</TableCell>
                        <TableCell as="td">
                          <div className="flex justify-start items-center gap-4">
                            <p>1 -</p>
                            <div className="flex justify-center items-center">
                              <p className="text-cyan-1">2</p>
                              <Icons.upArrow
                                className="w-[14px] h-[14px]"
                                stroke="stroke-cyan-1"
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell as="td">155k -</TableCell>
                        <TableCell as="td">51</TableCell>
                        <TableCell as="td">$0.08</TableCell>
                        <TableCell as="td">76.3%</TableCell>
                        <TableCell as="td">
                          <div className="flex justify-center items-center gap-2">
                            <Button variant="orangeGradient" size="sm">
                              Add
                            </Button>
                            <Popover>
                              <PopoverTrigger
                                className="cursor-pointer"
                                asChild
                              >
                                <EllipsisVertical size={26} color="#A3A3A3" />
                              </PopoverTrigger>
                              <PopoverContent
                                align="end"
                                className="flex bg-secondary w-fit items-start border-transparent p-3 flex-col gap-2"
                              >
                                <button className="">
                                  <Typography variant="p">Visit URL</Typography>
                                </button>
                                <button className="">
                                  <Typography variant="p">
                                    View Ranking History
                                  </Typography>
                                </button>
                                <button className="">
                                  <Typography variant="p">
                                    View Cashed SERP
                                  </Typography>
                                </button>
                              </PopoverContent>
                            </Popover>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
          {/* see plans and pricing ----> */}
          {isPlaneSubscribe && (
            <SeePricingAndPlans
              handlePlaneSub={() => setIsPlaneSubscribe(false)}
            />
          )}
        </div>
      </div>
      <DetailedPagination />
    </div>
  );
};

export default KeyWordsStatsTable;
