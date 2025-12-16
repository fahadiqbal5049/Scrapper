import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const FilterSection: React.FC = () => {
  const pathName = usePathname();

  return (
    <div className="min-h-9">
      {pathName !== "/alert/alert-rule" && (
        <Button variant="outline">Save</Button>
      )}
    </div>
  );
};

export default FilterSection;
