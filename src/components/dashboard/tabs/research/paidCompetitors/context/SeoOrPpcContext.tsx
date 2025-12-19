'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SeoOrPpcContextType {
  isSeoOrPpc: boolean;
  setIsSeoOrPpc: React.Dispatch<React.SetStateAction<boolean>>;
}

const SeoOrPpcContext = createContext<SeoOrPpcContextType | undefined>(
  undefined
);

interface SeoOrPpcProviderProps {
  children: ReactNode;
}

export const SeoOrPpcProvider: React.FC<SeoOrPpcProviderProps> = ({
  children,
}) => {
  const [isSeoOrPpc, setIsSeoOrPpc] = useState(true);

  return (
    <SeoOrPpcContext.Provider value={{ isSeoOrPpc, setIsSeoOrPpc }}>
      {children}
    </SeoOrPpcContext.Provider>
  );
};

export const useSeoOrPpc = (): SeoOrPpcContextType => {
  const context = useContext(SeoOrPpcContext);
  if (!context) {
    throw new Error("useSeoOrPpc must be used within a SeoOrPpcProvider");
  }
  return context;
};
