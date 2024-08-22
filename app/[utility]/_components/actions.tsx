"use client";

import React, { createContext, useContext, useState } from "react";

interface ActionsContext {
  actions: React.ReactNode;
  setActions: (actions: React.ReactNode) => void;
}

const ActionsContext = createContext<ActionsContext>({
  actions: null,
  setActions: () => {},
});

export const useActions = () => useContext(ActionsContext);

export const ActionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [actions, setActions] = useState<React.ReactNode>(null);

  return (
    <ActionsContext.Provider value={{ actions, setActions }}>
      {children}
    </ActionsContext.Provider>
  );
};

export const Actions = () => {
  const { actions } = useActions();

  return actions;
};
