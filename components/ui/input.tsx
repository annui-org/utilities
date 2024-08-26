import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-[color,box-shadow] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-[inset_0px_2px_8px_0px_rgba(34,40,49,0.15),inset_0px_-2px_8px_0px_rgba(34,40,49,0.15)] dark:focus-visible:[box-shadow:inset_0px_0px_8px_0px_rgba(255,255,255,0.2)] disabled:cursor-not-allowed disabled:opacity-50",
          "shadow-[inset_0px_2px_4px_0px_rgba(34,40,49,0.1),inset_0px_-2px_4px_0px_rgba(34,40,49,0.1)] dark:[box-shadow:inset_0px_0px_6px_0px_rgba(255,255,255,0.1)]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
