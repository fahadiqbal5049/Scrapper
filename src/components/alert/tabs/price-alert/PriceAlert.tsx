import React from "react";
import RuleName from "./subs/RulName";
import Products from "./subs/Products";
import Rules from "./subs/Rules";
import Competitors from "./subs/Competitors";
import AlertType from "../../shared/AlertType";
import CommunicationChannels from "../../shared/CommunicationChannels";

const PriceAlert: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-primary rounded-lg px-3 sm:px-4 pt-4 pb-6 sm:pb-8 sm:pt-5 gap-7">
      <RuleName />
      <Products />
      <Rules />
      <Competitors />
      <AlertType isUpgradeButton={true} />
      <CommunicationChannels isUpgradeButton={true} />
    </div>
  );
};

export default PriceAlert;
