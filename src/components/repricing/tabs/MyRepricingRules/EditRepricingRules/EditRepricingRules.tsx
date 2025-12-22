import React from "react";
import StatusHeader from "./subs/StatusHeader";
import RuleName from "./subs/RuleName";
import RepricingStep from "./subs/RepricingStep";
import WhenStep from "./subs/WhenStep";
import StopCondition from "./subs/StopCondition";
import ApplyToProductsStep from "./subs/ApplyToProductsStep";
import ApplyToCompetitor from "./subs/ApplyToCompetitor";
import RepricingMethod from "./subs/RepricingMethod";
import OptionsStep from "./subs/OptionsStep";
import ExportStep from "./subs/ExportStep";


const EditRepricingRules: React.FC = () => {
  return (
    <div className="w-full flex gap-5 flex-col">
      <StatusHeader />
      <div className="w-full bg-primary gap-14 rounded-lg py-7 flex flex-col">
        {/* rule 1 ---->  */}
        
        <RuleName />
        <RepricingStep />
        <WhenStep />
        <StopCondition />
        <ApplyToProductsStep />
        <ApplyToCompetitor />
        <RepricingMethod />
        <OptionsStep />
        <ExportStep/>
      </div>
    </div>
  );
};

export default EditRepricingRules;
