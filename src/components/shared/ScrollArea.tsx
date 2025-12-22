import React from "react";
import { cn } from "@/lib/utils";

interface IProps {
  children: React.ReactNode;
  classNames?: {
    root?: string;
  };
  as?: React.ElementType;
}

const ScrollArea: React.FC<IProps> = ({
  as: Component = "div",
  children,
  classNames,
}) => {
  return (
    <Component
      className={cn("table-scrollbar w-full overflow-auto", classNames?.root)}
    >
      {children}
    </Component>
  );
};

export default ScrollArea;
