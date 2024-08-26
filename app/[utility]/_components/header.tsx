import React from "react";
import { UtilitySelect } from "./utility-select";
import { Utility } from "@/lib/utility";
import { Actions } from "./actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ThemeSwitcher } from "./theme-switcher";

export const Header = ({ current }: { current: Utility }) => {
  return (
    <header className="flex items-center justify-between p-1.5">
      <div className="flex items-center gap-2">
        <UtilitySelect current={current} />
        <nav className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/annui-org/utilities">
                  <GitHubLogoIcon className="size-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>View the source code on GitHub</TooltipContent>
          </Tooltip>
          <ThemeSwitcher />
        </nav>
      </div>
      <Actions />
    </header>
  );
};
