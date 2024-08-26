"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { HexColorPicker } from "react-colorful";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  className?: string;
  inputProps?: React.ComponentProps<typeof Input>;
}

export function ColorPicker({
  color,
  onChange,
  className,
  inputProps,
}: ColorPickerProps) {
  const [inputColor, setInputColor] = useState(color);

  const handleColorChange = (newColor: string) => {
    setInputColor(newColor);
    onChange(newColor);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputColor(value);
    if (
      /^#[0-9A-Fa-f]{6}$/.test(value) ||
      /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(value) ||
      /^hsl\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?\s*\)$/.test(value) ||
      /^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/.test(
        value
      ) ||
      /^[a-zA-Z]+$/.test(value)
    ) {
      onChange(value);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[220px] justify-start text-left font-normal",
            !color && "text-muted-foreground",
            className
          )}
        >
          <div
            className="w-4 h-4 rounded-sm mr-2 shrink-0 shadow-[inset_0px_2px_4px_0px_rgba(34,40,49,0.1),inset_0px_-2px_4px_0px_rgba(34,40,49,0.1)]"
            style={{ backgroundColor: color }}
          />
          {color}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3 border-none">
        <HexColorPicker color={color} onChange={handleColorChange} />
        <Input
          value={inputColor}
          onChange={handleInputChange}
          className="mt-2"
          placeholder="#000000"
          {...inputProps}
        />
      </PopoverContent>
    </Popover>
  );
}
