"use client";

import { useShadowGeneratorStore } from "@/stores/shadow-generator";
import { motion } from "framer-motion";
import React from "react";

export const ShadowBox = () => {
  const { box, computedBoxShadow } = useShadowGeneratorStore();

  return (
    <div className="size-full pb-2 overflow-hidden">
      <div className="size-full flex items-center justify-center bg-accent rounded-[2rem]">
        <motion.div
          animate={{
            borderRadius: box.radius,
            height: box.height,
            width: box.width,
            background: box.background,
            boxShadow: computedBoxShadow(),
          }}
        />
      </div>
    </div>
  );
};
