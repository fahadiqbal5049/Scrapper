import React from "react";
import Typography from "../ui/typography";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ChevronLeft } from "lucide-react";

const DetailedPagination: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      {/* show rows */}
      <div className="flex justify-center items-center gap-1">
        <Typography variant="p" color="primary">
          Show Rows:
        </Typography>
        <Select>
          <SelectTrigger className="border-[1px] p-2 border-[#414141] rounded-sm">
            <SelectValue placeholder="50" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="150">150</SelectItem>
              <SelectItem value="200">200</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* start at rows ---> */}
      <div className="flex justify-center items-center gap-1">
        <Typography variant="p" color="primary">
          Start at Row:
        </Typography>
        <Select>
          <SelectTrigger className="border-[1px] p-2 border-[#414141] rounded-sm">
            <SelectValue placeholder="50" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="150">150</SelectItem>
              <SelectItem value="200">200</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* all rows */}

      <Typography variant="p" color="primary">
        Displaying Rows: 1to 50 of 1,976,277 rows
      </Typography>
      <div className="flex justify-center items-center gap-2">
        <button className="border-[1px] hover:bg-primary border-[#414141] rounded-[2px] p-[2px]">
          <ChevronLeft size={20} color="#A3A3A3" />
        </button>
        <button className="border-[1px] hover:bg-primary border-[#414141] rounded-[2px] p-[2px]">
          <ChevronLeft size={20} color="#A3A3A3" className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default DetailedPagination;
