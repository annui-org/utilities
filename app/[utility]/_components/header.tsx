import React from "react";
import { UtilitySelect } from "./utility-select";
import { Utility } from "@/lib/utility";
import { Actions } from "./actions";

export const Header = ({ current }: { current: Utility }) => {
  return (
    <header className="flex items-center justify-between p-1.5">
      <UtilitySelect current={current} />
      <Actions />
    </header>
  );
};
