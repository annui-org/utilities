"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useShadowGeneratorStore } from "@/stores/shadow-generator";
import React from "react";

export const ShadowBoxProps = () => {
  const { mutateBox, box } = useShadowGeneratorStore();
  return (
    <div className="h-full overflow-auto w-[30rem]">
      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-base">Box Properties</h1>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Label>Width</Label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={box.width.replace("px", "")}
              onChange={(e) => mutateBox({ width: `${e.target.value}px` })}
            />
            px
          </div>
        </div>
        <div>
          <Label>Height</Label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={box.height.replace("px", "")}
              onChange={(e) => mutateBox({ height: `${e.target.value}px` })}
            />
            px
          </div>
        </div>
        <div>
          <Label>Border Radius</Label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={box.radius.replace("px", "")}
              onChange={(e) => mutateBox({ radius: `${e.target.value}px` })}
            />
            px
          </div>
        </div>
        <div>
          <Label>Background Color</Label>
          <Input
            type="color"
            value={box.background}
            onChange={(e) => mutateBox({ background: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};
