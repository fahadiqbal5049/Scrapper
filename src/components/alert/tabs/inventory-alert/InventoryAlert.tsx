import React from "react";
import RuleName from "./subs/RuleName";
import Product from "./subs/Product";
import Rules from "./subs/Rules";
import AlertType from "../../shared/AlertType";
import CommunicationChannels from "../../shared/CommunicationChannels";

const InventoryAlert = () => {
  return (
    <div className="w-full flex flex-col bg-primary rounded-lg px-3 sm:px-4 pt-4 pb-6 sm:pb-8 sm:pt-5 gap-7">
      <RuleName />
      <Product />
      <Rules />
      <AlertType />
      <CommunicationChannels />
    </div>
  );
};

export default InventoryAlert;
