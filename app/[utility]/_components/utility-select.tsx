import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { utilities, Utility } from "@/lib/utility";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const UtilitySelect = ({ current }: { current: Utility }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          key={current.url}
          className="flex gap-2 h-full text-start focus-visible:ring-0 px-2 py-1 text-primary"
          variant="outline"
        >
          <current.icon className="size-6" />
          <h1 className="text-xs">{current.name}</h1>
          <ChevronDownIcon className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {utilities.map((utility) => (
          <DropdownMenuItem
            key={utility.url}
            className="flex gap-2"
            disabled={utility.disabled}
            asChild
          >
            <Link href={utility.url}>
              <utility.icon className="size-8" />
              <div className="gap-2">
                <h1 className="text-xs">{utility.name}</h1>
                <p className="text-xs text-muted-foreground">
                  {utility.description}
                </p>
              </div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
