import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  className?: string;
};

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className = '', ...props }, ref) => {
    return <thead ref={ref} className={cn('', className)} {...props} />;
  }
);

TableHeader.displayName = 'TableHeader';

export default TableHeader;
