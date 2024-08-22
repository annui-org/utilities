"use client";

import { useActions } from "@/app/[utility]/_components/actions";
import React, { useEffect } from "react";
import { ShadowExport } from "./shadow-export";

export const ShadowActions = () => {
  const { setActions } = useActions();

  useEffect(() => {
    setActions(<ShadowExport />);
  }, [setActions]);

  return null;
};
