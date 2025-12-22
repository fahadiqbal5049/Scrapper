import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  as?: 'th' | 'td';
  className?: string;
};

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ as: Component = 'td', className = '', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'whitespace-break-spaces break-words px-2 py-2 text-left font-normal text-white-3 text-sm',
          className
        )}
        {...props}
      />
    );
  }
);

TableCell.displayName = 'TableCell';

export default TableCell;
