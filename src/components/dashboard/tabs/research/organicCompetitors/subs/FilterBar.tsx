'use client'

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import DataExportButton from "@/components/shared/DataExportButton";
import { Button } from "@/components/ui/button";
import { useSeoOrPpc } from "../context/SeoOrPpcContext";

const FilterBar: React.FC = () => {
  const { isSeoOrPpc, setIsSeoOrPpc } = useSeoOrPpc();

  return (
    <div className="w-full flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between items-start lg:items-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/dashboard/research">Research</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Organic Competitors</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-center items-center gap-5">
        <Button
          onClick={() => setIsSeoOrPpc(!isSeoOrPpc)}
          variant="outline"
          className=""
        >
          {isSeoOrPpc ? "View SEO Competitors" : "View PPC Competitors"}
        </Button>
        <DataExportButton />
      </div>
    </div>
  );
};

export default FilterBar;
