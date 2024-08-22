import React from "react";
import { ShadowProps } from "./shadow-props";
import { ShadowBox } from "./shadow-box";
import { ShadowBoxProps } from "./shadow-box-props";
import { ShadowActions } from "./shadow-actions";

export const ShadowGenerator = () => {
  return (
    <main className="flex h-full">
      <ShadowProps />
      <ShadowBox />
      <ShadowBoxProps />
      <ShadowActions />
    </main>
  );
};
