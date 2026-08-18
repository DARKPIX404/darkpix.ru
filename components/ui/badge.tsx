import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "glass";
}

export function Badge({ className, variant = "glass", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
        variant === "default" &&
          "border-transparent bg-blue-600 text-white hover:bg-blue-700",
        variant === "glass" &&
          "border-white/10 bg-white/5 text-blue-300 hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}
