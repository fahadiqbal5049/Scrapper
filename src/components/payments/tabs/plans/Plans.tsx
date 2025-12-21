import Typography from "@/components/ui/typography";
import React from "react";
import OngoingSubscription from "./subs/OngoingSubscription";
import AppsToTry from "./subs/AppsToTry";
import SubscriptionPlans from "./subs/SubscriptionPlans";

const Plans = () => {
  return (
    <div className="size-full flex flex-col gap-5 sm:gap-8">
      <div className="w-full flex flex-col gap-3">
        <Typography variant="h4" className="font-medium">
          Simple, transparent billling
        </Typography>{" "}
        <Typography color="primary">
          We believe price monitoring should be accessible to all companies, no
          matter the size
        </Typography>
      </div>{" "}
      <OngoingSubscription />
      <SubscriptionPlans />
      <AppsToTry />
    </div>
  );
};

export default Plans;
