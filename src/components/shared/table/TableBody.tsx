import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  className?: string;
};

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className = '', ...props }, ref) => {
    return <tbody ref={ref} className={cn('', className)} {...props} />;
  }
);

TableBody.displayName = 'TableBody';

export default TableBody;
