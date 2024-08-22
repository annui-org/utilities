import { ShadowGenerator } from "@/components/pages/shadow-generator/shadow-generator";
import { CodeIcon, ShadowOuterIcon } from "@radix-ui/react-icons";
import React from "react";

export interface Utility {
  url: string;
  name: string;
  description: string;
  icon: React.ElementType;
  page?: React.ElementType;
  disabled?: boolean;
}

export const utilities: Utility[] = [
  {
    url: "shadow-generator",
    name: "Shadow Generator",
    description: "Generate box shadows with ease.",
    icon: ShadowOuterIcon,
    page: ShadowGenerator,
  },
  {
    url: "code-to-image",
    name: "Code to Image",
    description: "Generate images from code.",
    icon: CodeIcon,
    disabled: true,
  },
];
