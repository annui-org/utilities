import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useShadowGeneratorStore } from "@/stores/shadow-generator";
import React from "react";

export const ShadowExport = () => {
  const { computedBoxShadow } = useShadowGeneratorStore();
  const copyAsCss = () => {
    navigator.clipboard.writeText(`box-shadow: ${computedBoxShadow("css")};`);
  };
  const copyAsTailwindCss = () => {
    navigator.clipboard.writeText(
      `[box-shadow:${computedBoxShadow("tailwind")}]`,
    );
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Export</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Copy</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={copyAsCss}>Copy as CSS</DropdownMenuItem>
          <DropdownMenuItem onSelect={copyAsTailwindCss}>
            Copy as Tailwind CSS
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuLabel>Download (Coming Soon)</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>Download as SVG</DropdownMenuItem>
          <DropdownMenuItem disabled>Download as PNG</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
