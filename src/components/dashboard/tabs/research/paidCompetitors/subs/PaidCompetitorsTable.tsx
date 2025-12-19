"use client";

import React, { useState } from "react";
import Table from "@/components/shared/table/Table";
import TableHeader from "@/components/shared/table/TableHeader";
import TableBody from "@/components/shared/table/TableBody";
import TableCell from "@/components/shared/table/TableCell";
import TableRow from "@/components/shared/table/TableRow";
import { Checkbox } from "@/components/ui/checkbox";
import SeePricingAndPlans from "../../organicKeyWords/subs/SeePricingAndPlans";
import ScrollArea from "@/components/shared/ScrollArea";
import clsx from "clsx";

const OrganicCompetitorsTable: React.FC = () => {
  const [isPlaneSubscribe, setIsPlaneSubscribe] = useState(true);

  return (
    <div className="w-full py-5 relative rounded-lg bg-primary">
      <ScrollArea>
        <Table className="min-w-[900px]">
          <TableHeader>
            <TableRow className="border-b-[1px] border-[#4E4E4E] bg-primary">
              <TableCell as="th" className="pb-5 pl-4">
                <Checkbox />
              </TableCell>
              {[
                "Domain",
                "Overlap",
                "Common Keywords",
                "Number of Keywords",
                "Monthly Clicks",
                "Monthly Value of Clicks",
              ].map((item, index) => {
                return (
                  <TableCell
                    key={index}
                    as="th"
                    className="font-semibold pb-5 text-white-1"
                  >
                    Domain
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(12)
              .fill(0)
              .map((_, index) => {
                return (
                  <TableRow
                    key={index}
                    className={clsx(
                      "border-b-[1px] border-[#4E4E4E] duration-300",
                      index > 5 && isPlaneSubscribe
                        ? "opacity-5 border-opacity-5"
                        : "opacity-100"
                    )}
                  >
                    <TableCell as="td" className="py-5 pl-4">
                      <Checkbox />
                    </TableCell>
                    <TableCell as="td" className="font-semibold min-w-[160px]">
                      stockx.com
                    </TableCell>
                    <TableCell as="td" className="min-w-[120px]">
                      <div className="max-w-[55px] h-[12px] relative w-full border-[1px] border-white-2">
                        <div className="w-[80%] h-[6px] absolute left-[2px] top-1/2 -translate-y-1/2 bg-cyan-1"></div>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="font-semibold">
                      311k
                    </TableCell>
                    <TableCell as="td" className="font-semibold">
                      923k
                    </TableCell>
                    <TableCell as="td" className="font-semibold">
                      1.63M
                    </TableCell>
                    <TableCell as="td" className="font-semibold">
                      $322k
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </ScrollArea>
      {isPlaneSubscribe && (
        <SeePricingAndPlans handlePlaneSub={() => setIsPlaneSubscribe(false)} />
      )}
    </div>
  );
};

export default OrganicCompetitorsTable;
