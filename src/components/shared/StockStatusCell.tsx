import React from "react";
import * as Icons from "@/svg/Icons";

interface StockStatusCellProps {
  stock: number | string;
}

const StockStatusCell: React.FC<StockStatusCellProps> = ({ stock }) => {
  if (typeof stock === "number") {
    return <>{stock}</>;
  }

  if (stock === "analyzing") {
    return (
      <div className="px-2 py-1 rounded-[60px] w-fit bg-[#3A4249] gap-1 flex justify-center items-center">
        <Icons.rountSpinner
          className="w-[12px] h-[12px]"
          fill="fill-[#A3A3A3]"
        />
        <p>Analyzing..</p>
      </div>
    );
  }

  if (stock === "out-of-stock") {
    return (
      <div className="px-2 py-1 rounded-[60px] w-fit bg-[#3A4249] gap-1 flex justify-center items-center">
        <div className="w-[4px] h-[4px] rounded-full bg-white-2"></div>
        <p>Out of Stock</p>
      </div>
    );
  }

  if (stock === "no-data") {
    return (
      <div className="px-2 py-1 w-fit rounded-[60px] bg-[#3A4249] gap-1 flex justify-center items-center">
        <div className="w-[4px] h-[4px] rounded-full bg-white-2"></div>
        <p>No Data</p>
      </div>
    );
  }

  return null;
};

export default StockStatusCell;
