import React, { createContext, useContext, useState, ReactNode } from "react";

interface Filter {
  key: string;
  value: string;
}

interface FilterContextType {
  competitorSelectedFilter: Filter[];
  setCompetitorSelectedFilter: React.Dispatch<React.SetStateAction<Filter[]>>;
  monitoredUrlFilterValue: Filter[];
  setMonitoredUrlFilterValue: React.Dispatch<React.SetStateAction<Filter[]>>;
  competitorFilterOptions: Filter[];
  setCompetitorFilterOptions: React.Dispatch<React.SetStateAction<Filter[]>>;
  monitoredUrlFilterOptions: Filter[];
  setMonitoredUrlFilterOptions: React.Dispatch<React.SetStateAction<Filter[]>>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const CompetitorFilterProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // competitor filter
  const [competitorSelectedFilter, setCompetitorSelectedFilter] = useState<
    Filter[]
  >([
    {
      key: "Competitor Domain",
      value: "restocks.com",
    },
    {
      key: "Competitor Status",
      value: "in progress",
    },
  ]);

  const [competitorFilterOptions, setCompetitorFilterOptions] = useState([
    {
      key: "Competitor Domain",
      value: "restocks.com",
    },
    {
      key: "Competitor Status",
      value: "in progress",
    },
  ]);

  // Monitored URLs filter

  const [monitoredUrlFilterValue, setMonitoredUrlFilterValue] = useState<
    Filter[]
  >([
    { key: "Saved Filter Set", value: "" },
    { key: "Competitor", value: "" },
    { key: "Brand", value: "" },
    { key: "Stock", value: "" },
    { key: "Status", value: "" },
    { key: "Diff", value: "" },
  ]);

  const [monitoredUrlFilterOptions, setMonitoredUrlFilterOptions] = useState<
    Filter[]
  >([
    { key: "Saved Filter Set", value: "" },
    { key: "Competitor", value: "" },
    { key: "Brand", value: "" },
    { key: "Stock", value: "" },
    { key: "Status", value: "" },
    { key: "Diff", value: "" },
  ]);

  return (
    <FilterContext.Provider
      value={{
        competitorSelectedFilter,
        setCompetitorSelectedFilter,
        monitoredUrlFilterValue,
        setMonitoredUrlFilterValue,
        competitorFilterOptions,
        monitoredUrlFilterOptions,
        setMonitoredUrlFilterOptions,
        setCompetitorFilterOptions,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Create a custom hook to access the FilterContext
export const useCompetitorFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
