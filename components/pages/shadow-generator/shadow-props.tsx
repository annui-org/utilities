"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  IShadowGeneratorStoreMutateShadow,
  IShadowGeneratorStoreRemoveShadow,
  useShadowGeneratorStore,
} from "@/stores/shadow-generator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, useAnimate } from "framer-motion";
import { ColorPicker } from "@/components/ui/color-picker";

export const ShadowProps = () => {
  const { shadows, mutateShadow, removeShadow, addShadow } =
    useShadowGeneratorStore();

  return (
    <ScrollArea className="w-[30rem]">
      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-base">Shadows</h1>
        <Button size="sm" onClick={addShadow}>
          New
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={shadows.map((shadow) => shadow.uid)}
      >
        {shadows.map((shadow, index) => (
          <Shadow
            key={shadow.uid}
            shadow={shadow}
            index={index}
            mutateShadow={mutateShadow}
            removeShadow={removeShadow}
          />
        ))}
      </Accordion>
    </ScrollArea>
  );
};

const Shadow = ({
  shadow,
  index,
  mutateShadow,
  removeShadow,
}: {
  shadow: any;
  index: number;
  mutateShadow: IShadowGeneratorStoreMutateShadow;
  removeShadow: IShadowGeneratorStoreRemoveShadow;
}) => {
  const [scope, animate] = useAnimate();

  return (
    <AccordionItem value={shadow.uid} className="border-b-0" asChild>
      <motion.div
        layout="position"
        ref={scope}
        initial={{
          opacity: 0,
          x: -15,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        <AccordionTrigger className="px-4 py-2 hover:bg-accent hover:text-accent-foreground hover:no-underline">
          Shadow {index + 1}
        </AccordionTrigger>
        <AccordionContent className="p-4 space-y-2 bg-accent">
          <Status
            index={index}
            scope={scope}
            shadow={shadow}
            removeShadow={removeShadow}
            mutateShadow={mutateShadow}
            animate={animate}
          />
          <HorizontalOffset
            shadow={shadow}
            index={index}
            mutateShadow={mutateShadow}
          />
          <VerticalOffset
            shadow={shadow}
            index={index}
            mutateShadow={mutateShadow}
          />
          <BlurRadius
            shadow={shadow}
            index={index}
            mutateShadow={mutateShadow}
          />
          <SpreadRadius
            shadow={shadow}
            index={index}
            mutateShadow={mutateShadow}
          />
          <Color shadow={shadow} index={index} mutateShadow={mutateShadow} />
        </AccordionContent>
      </motion.div>
    </AccordionItem>
  );
};

const HorizontalOffset = ({
  shadow,
  index,
  mutateShadow,
}: {
  shadow: any;
  index: number;
  mutateShadow: IShadowGeneratorStoreMutateShadow;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label>Horizontal offset</Label>
        <div className="flex items-center gap-1">
          <Input
            id={`horizontal-offset-${index}`}
            aria-label="Horizontal offset"
            className="w-[4.5rem]"
            type="number"
            value={shadow.horizontalOffset}
            onChange={(e) =>
              mutateShadow(index, {
                horizontalOffset: Number(e.target.value),
              })
            }
          />
          px
        </div>
      </div>
      <Slider
        aria-label="Horizontal offset"
        min={-100}
        max={100}
        value={[shadow.horizontalOffset]}
        onValueChange={([value]) =>
          mutateShadow(index, { horizontalOffset: value })
        }
      />
    </div>
  );
};

const VerticalOffset = ({
  shadow,
  index,
  mutateShadow,
}: {
  shadow: any;
  index: number;
  mutateShadow: IShadowGeneratorStoreMutateShadow;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label>Vertical offset</Label>
        <div className="flex items-center gap-1">
          <Input
            id={`vertical-offset-${index}`}
            aria-label="Vertical offset"
            className="w-[4.5rem]"
            type="number"
            value={shadow.verticalOffset}
            onChange={(e) =>
              mutateShadow(index, {
                verticalOffset: Number(e.target.value),
              })
            }
          />
          px
        </div>
      </div>
      <Slider
        aria-label="Vertical offset"
        min={-100}
        max={100}
        value={[shadow.verticalOffset]}
        onValueChange={([value]) =>
          mutateShadow(index, { verticalOffset: value })
        }
      />
    </div>
  );
};

const BlurRadius = ({
  shadow,
  index,
  mutateShadow,
}: {
  shadow: any;
  index: number;
  mutateShadow: IShadowGeneratorStoreMutateShadow;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label>Blur radius</Label>
        <div className="flex items-center gap-1">
          <Input
            id={`blur-radius-${index}`}
            aria-label="Blur radius"
            className="w-[4.5rem]"
            type="number"
            value={shadow.blurRadius}
            onChange={(e) =>
              mutateShadow(index, { blurRadius: Number(e.target.value) })
            }
          />
          px
        </div>
      </div>
      <Slider
        aria-label="Blur radius"
        min={0}
        max={100}
        value={[shadow.blurRadius]}
        onValueChange={([value]) => mutateShadow(index, { blurRadius: value })}
      />
    </div>
  );
};

const SpreadRadius = ({
  shadow,
  index,
  mutateShadow,
}: {
  shadow: any;
  index: number;
  mutateShadow: IShadowGeneratorStoreMutateShadow;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label>Spread radius</Label>
        <div className="flex items-center gap-1">
          <Input
            id={`spread-radius-${index}`}
            aria-label="Spread radius"
            className="w-[4.5rem]"
            type="number"
            value={shadow.spreadRadius}
            onChange={(e) =>
              mutateShadow(index, { spreadRadius: Number(e.target.value) })
            }
          />
          px
        </div>
      </div>
      <Slider
        aria-label="Spread radius"
        min={-100}
        max={100}
        value={[shadow.spreadRadius]}
        onValueChange={([value]) =>
          mutateShadow(index, { spreadRadius: value })
        }
      />
    </div>
  );
};

const Color = ({
  shadow,
  index,
  mutateShadow,
}: {
  shadow: any;
  index: number;
  mutateShadow: IShadowGeneratorStoreMutateShadow;
}) => {
  return (
    <div className="flex flex-col justify-center gap-2 py-2">
      <Label>Color</Label>
      <ColorPicker
        inputProps={{
          id: `color-${index}`,
          "aria-label": "Color",
        }}
        color={shadow.color}
        onChange={(color) => mutateShadow(index, { color })}
      />
    </div>
  );
};

const Status = ({
  shadow,
  mutateShadow,
  removeShadow,
  index,
  scope,
  animate,
}: {
  shadow: { active: boolean; inset: boolean };
  mutateShadow: IShadowGeneratorStoreMutateShadow;
  removeShadow: IShadowGeneratorStoreRemoveShadow;
  index: number;
  scope: ReturnType<typeof useAnimate>[0];
  animate: ReturnType<typeof useAnimate>[1];
}) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <Button
        size="sm"
        onClick={() => mutateShadow(index, { active: !shadow.active })}
      >
        {shadow.active ? "Disable" : "Enable"}
      </Button>
      <Button
        size="sm"
        onClick={() => mutateShadow(index, { inset: !shadow.inset })}
      >
        {shadow.inset ? "Outset" : "Inset"}
      </Button>
      <Button
        size="sm"
        variant="destructive"
        onClick={async () => {
          await animate(scope.current, { opacity: 0, x: 15 });
          removeShadow(index);
        }}
      >
        Remove
      </Button>
    </div>
  );
};
