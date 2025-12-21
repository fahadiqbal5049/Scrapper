import Typography from "@/components/ui/typography";
import React from "react";
import PaymentPlanCard from "./PaymentPlanCard";
import { subscriptionPlans } from "@/data/paymentsData";

const SubscriptionPlans = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Typography
        variant="text"
        color="primary"
        className="font-medium text-lg"
      >
        Other available subscription plans
      </Typography>
      <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {subscriptionPlans.map((item: any, index: number) => (
          <PaymentPlanCard
            key={index}
            planName={item.planName}
            price={item.price}
            tag={item.tag}
            description={item.description}
            features={item.features}
          />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
