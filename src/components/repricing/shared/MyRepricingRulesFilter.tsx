import React from "react";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { MassiveActionOptions } from "@/data/repricingData";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MyRepricingRulesFilter: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-start sm:justify-end items-center gap-4">
      {/* massive action -------->   */}
      <CustomSelect
        placeholder="Massive Action"
        options={MassiveActionOptions}
      />
      <Link href="/repricing/my-repricing-rules/edit-repricing-rule">
        <Button
          variant="iconOutline"
          className="border-[1px] border-white-4/80"
          icon={<Plus />}
          iconPosition="left"
        >
          Add Repricing Rule
        </Button>
      </Link>
    </div>
  );
};

export default MyRepricingRulesFilter;
