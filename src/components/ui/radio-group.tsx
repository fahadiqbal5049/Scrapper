"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

// Define the type of the props to include `color` for customization
interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  borderColor?: string;
  fillColor?: string;
  textColor?: string;
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(
  (
    {
      className,
      borderColor = "border-cyan-1",
      fillColor = "fill-cyan-1",
      textColor = "text-cyan-1",
      ...props
    },
    ref
  ) => {
    return (
      <RadioGroupPrimitive.Root
        className={cn("grid gap-2", className)}
        {...props}
        ref={ref}
      />
    );
  }
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  borderColor?: string;
  fillColor?: string;
  textColor?: string;
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(
  (
    {
      className,
      borderColor = "border-cyan-1",
      fillColor = "fill-cyan-1",
      textColor = "text-cyan-1",
      ...props
    },
    ref
  ) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "aspect-square min-h-4 min-w-4 relative rounded-full border-[2px] shadow focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
          borderColor
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ">
          <Circle className={cn("h-3 w-3 text-transparent", fillColor)} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
