import React from "react";
import Typography from "@/components/ui/typography";
import SearchComponent from "@/components/shared/SearchComponent";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const SearchHeader: React.FC = () => {
  return (
    <div className="w-full flex flex-wrap gap-2 justify-between items-center py-4">
      <div className="flex flex-wrap justify-start items-center gap-2 sm:gap-3">
        <Typography variant="p" className="font-medium" color="primary">
          Add and manage your competitors
        </Typography>
        <Typography
          variant="p"
          className="bg-success-4 text-success-2 px-2 py-[2px] rounded-2xl"
        >
          283 Urls
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3">
        <SearchComponent size="w-[200px] md:w-[250px] xl:w-[307px]" />
        <Link href="/competitors/monitored-url/add-monitored-url">
          <Button
            size="sm"
            variant="orangeGradient"
            className="rounded-sm"
            iconPosition="left"
            icon={<Plus size={16} color="#ffffff" />}
          >
            Add Monitored URL
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SearchHeader;
