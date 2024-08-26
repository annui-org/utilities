"use client";

import { TooltipProvider } from "@/components/ui/tooltip";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <TooltipProvider delayDuration={0}>{children}</TooltipProvider>;
};
