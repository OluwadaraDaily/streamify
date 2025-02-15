"use client"
import { createContext, useContext, ReactNode } from "react";
import { IDashboardContext } from "../types/context";
import { dashboardData } from "@/common/data";

const DashboardContext = createContext<IDashboardContext | undefined>(undefined)

export const DashboardContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DashboardContext.Provider value={dashboardData}>
      {children}
    </DashboardContext.Provider>
  )
};

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboardContext must be used within a DashboardContextProvider");
  };
  return context;
}