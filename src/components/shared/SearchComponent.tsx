import React from "react";
import { Search } from "lucide-react";
import clsx from "clsx";

interface Props {
  size?: string;
  iconSize?: number;
  placeholder?: string;
  bg?: string;
  rounded?:string;

}

const SearchComponent: React.FC<Props> = ({
  size = "h-auto w-[168px]",
  iconSize = 14,
  placeholder = "Search",
  bg = "bg-[#3A4249]",
  rounded='rounded-md'
}: Props) => {
  return (
    <div
      className={clsx(
        "justify-center items-center px-2 py-1 grid grid-cols-[20px,1fr,20px]",
        size,
        rounded,
        bg
      )}
    >
      <Search size={iconSize} color="#A3A3A3" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full bg-transparent text-[12px] focus:outline-none text-white-2 font-normal placeholder:text-white-2"
      />
      <p className="text-white-2 w-full text-center text-[12px] font-normal">
        ⌘/
      </p>
    </div>
  );
};

export default SearchComponent;
