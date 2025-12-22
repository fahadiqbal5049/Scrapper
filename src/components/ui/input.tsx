import * as React from "react";
import { cn } from "@/lib/utils";
import clsx from "clsx";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  isRequired?: boolean;
  labelStyle?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, isRequired, labelStyle = "", ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        {label && (
          <label
            className={clsx(
              "text-sm font-normal flex gap-1 text-white-2",
              labelStyle
            )}
            htmlFor={props.id}
          >
            {label}
            {isRequired && <span className="text-[#FF3333]">*</span>}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-[2px] text-white-1/80 focus:text-white-1/80 border border-[#4E4E4E] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-white-2 focus-visible:outline-none focus-visible:ring-0 focus:border-white-1/60 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
