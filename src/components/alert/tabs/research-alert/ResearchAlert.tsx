import React from "react";
import RuleName from "./subs/RuleName";
import Rules from "./subs/Rules";
import AlertType from "../../shared/AlertType";
import CommunicationChannels from "../../shared/CommunicationChannels";

const ResearchAlert: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-primary rounded-lg px-3 sm:px-4 pt-4 pb-6 sm:pb-8 sm:pt-5 gap-7">
      <RuleName />
      <Rules />
      <AlertType />
      <CommunicationChannels />
    </div>
  );
};

export default ResearchAlert;
