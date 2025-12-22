import React from "react";
import { Copy } from "lucide-react";
import clsx from "clsx";

interface Props {
  className?: string;
}

const CopyText: React.FC<Props> = ({ className = "border-white-2" }: Props) => {
  return (
    <div
      className={clsx(
        "w-full min-h-[43px] grid grid-cols-[1fr,50px] border-[1px] rounded-sm",
        className
      )}
    >
      <div className="w-full h-full"></div>
      <div className="w-full h-full items-center justify-center flex">
        <button className="border-[1px] hover:bg-primary duration-200 rounded-sm p-[3px] border-white-2">
          <Copy size={18} color="#A3A3A3" />
        </button>
      </div>
    </div>
  );
};

export default CopyText;
