import Typography from "@/components/ui/typography";
import React from "react";
import FiltersPopup from "./FiltersPopup";
import StatCard from "./StatCard";
const RoadMapSection = () => {
  return (
    <div className="w-full flex flex-col gap-4 bg-primary rounded-lg p-4 sm:p-6">
      <div className="w-full flex items-center justify-between">
        <Typography variant="text" className="font-medium">
          Roadmap
        </Typography>
        <FiltersPopup />
      </div>
      <div className="w-full grid xl:grid-cols-3 gap-5 lg:gap-10">
        <StatCard title="Planned" />
        <StatCard title="In Progress" />
        <StatCard title="Complete" notifications={completedTasks} />
      </div>
    </div>
  );
};

export default RoadMapSection;
const completedTasks = [
  {
    title: "FEATURES REQUESTS",
    detail: "Price comparison Websites",
    notifications: 1,
  },
  {
    title: "FEATURES REQUESTS",
    detail:
      "Use Google Shopping XML file to import and automatically update own pricing",
    notifications: 1,
  },
  {
    title: "FEATURES REQUESTS",
    detail: "Ability to add user to the account",
    notifications: 4,
  },
  {
    title: "FEATURES REQUESTS",
    detail: "Missing Data fields in the export records",
    notifications: 1,
  },
  {
    title: "FEATURES REQUESTS",
    detail: "Export all competitor prices on one report",
    notifications: 4,
  },
  {
    title: "FEATURES REQUESTS",
    detail: "Scraping time in overviews",
    notifications: 1,
  },
  {
    title: "FEATURES REQUESTS",
    detail: "Price comparison Websites",
    notifications: 1,
  },
  {
    title: "FEATURES REQUESTS",
    detail: "Price comparison Websites",
    notifications: 1,
  },
];
