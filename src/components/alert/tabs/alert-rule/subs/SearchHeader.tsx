import React from "react";
import Typography from "@/components/ui/typography";
import SearchComponent from "@/components/shared/SearchComponent";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const SearchHeader: React.FC = () => {
  return (
    <div className="w-full flex gap-2 flex-wrap justify-between items-center">
      <Typography variant="p" className="text-white-4 font-medium">
        Create or edit your price and stock alert rules
      </Typography>
      <div className="flex justify-center flex-wrap items-center gap-3 sm:gap-5">
        <SearchComponent size="w-[220px] sm:w-[307px]" />
        <Link href={"/alert/price-alert"}>
          {" "}
          <Button
            variant="orangeGradient"
            size="sm"
            className="rounded-sm"
            icon={<Plus size={22} color="#FAFAFA" />}
          >
            Add Alert Rule
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SearchHeader;
