import React from "react";
import { cn } from "@/lib/utils";
import { TypographyProps } from "@/types/typography.types";

const variantClasses = {
  h1: "text-4xl font-extrabold lg:text-5xl",
  h2: "text-3xl font-semibold", // 40px
  h3: "text-2xl font-semibold", // 32px
  h4: "text-xl font-semibold", // 20px
  text: "text-base font-normal", // 16px
  p: "text-sm font-normal", // 14px
  small: "text-xs font-normal", // 12px
  label: "text-sm font-medium",
  blockquote: "border-l-4 pl-4 italic",
  caption: "text-sm text-muted-foreground",
};

const colorClasses = {
  default: "text-white-4",
  primary: "text-white-2", // #A3A3A3
  secondary: "text-white-3", // #A4A4A4
  success: "text-success-1",
  pink: "text-pink-1",
  orange: "text-orange-1",
  destructive: "text-destructive",
  muted: "text-muted-foreground",
  accent: "text-accent-foreground",
};

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  color = "default",
  className,
  children,
  ...props
}) => {
  const Component = variant === "text" ? "span" : variant;

  return (
    <Component
      className={cn(variantClasses[variant], colorClasses[color], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
