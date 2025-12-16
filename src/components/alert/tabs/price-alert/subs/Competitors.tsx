import React from "react";
import Typography from "@/components/ui/typography";
import CustomSelect from "@/components/shared/form/CustomSelect";

const Competitors: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      <Typography className="font-medium" color="primary" variant="text">
        Competitors
      </Typography>
      <Typography variant="p" color="primary">
        Please select the competitors on which the alert will be active.
      </Typography>
      <CustomSelect
        triggerStyles="w-fit h-[29px] min-w-[234px] border-white-2 rounded-[2px]"
        placeholder="Select a Competitors"
        options={CompetitorOptions}
      />
    </div>
  );
};

export default Competitors;

export const CompetitorOptions = [
  {
    value: "all-competitors",
    label: "All competitors",
  },
  {
    value: "kicks.com",
    label: "kicks.com",
  },
  {
    value: "restocks.com",
    label: "restocks.com",
  },
  {
    value: "stockx.com",
    label: "stockx.com",
  },
];
