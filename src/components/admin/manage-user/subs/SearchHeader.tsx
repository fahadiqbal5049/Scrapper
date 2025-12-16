import React from "react";
import Typography from "@/components/ui/typography";
import SearchComponent from "@/components/shared/SearchComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SearchHeader = () => {
  return (
    <div className="w-full flex justify-between items-center gap-2 flex-wrap">
      <div className="flex items-center gap-2">
        <Typography variant="p" color="primary" className="font-semibold">
          Your Customer Data
        </Typography>
        <Typography
          variant="p"
          className="text-[#00B62A] bg-success-4/20 px-3 py-[1px] rounded-xl"
        >
          1,056
        </Typography>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <SearchComponent placeholder="Search" size="w-[200px] sm:w-[307px]" />
        <Button size="sm" className="rounded-sm" variant="outline">
          Delete All
        </Button>
        <Link href="/admin/manage-user/add-user">
          <Button size="sm" className="rounded-sm" variant="orangeGradient">
            Add New User
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SearchHeader;
