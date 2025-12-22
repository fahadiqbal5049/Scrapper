import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  className?: string;
};

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className = "", ...props }, ref) => {
    return <tr ref={ref} className={cn("", className)} {...props} />;
  }
);

TableRow.displayName = "TableRow";

export default TableRow;
