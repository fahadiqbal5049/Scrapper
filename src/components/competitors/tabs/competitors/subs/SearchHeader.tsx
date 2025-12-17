import React from "react";
import Typography from "@/components/ui/typography";
import SearchComponent from "@/components/shared/SearchComponent";

const SearchHeader = () => {
  return (
    <div className="w-full flex flex-wrap gap-2 justify-between items-center py-4">
      <div className="flex flex-wrap justify-start items-center gap-2 sm:gap-3">
        <Typography variant="p" className="font-medium" color="primary">
          Add and manage your competitors
        </Typography>
        <Typography
          variant="p"
          className="bg-success-4 text-success-2 px-3 py-1 rounded-2xl"
        >
          5 active products
        </Typography>
      </div>
      <SearchComponent size="w-[200px] md:w-[250px] xl:w-[307px]" />
    </div>
  );
};

export default SearchHeader;
