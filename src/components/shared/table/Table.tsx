import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  className?: string;
};

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className = "", ...props }, ref) => {
    return <table ref={ref} className={cn("w-full", className)} {...props} />;
  }
);

Table.displayName = "Table";

export default Table;
