import React from "react";
import Typography from "@/components/ui/typography";

const layout = ({ children }: any) => {
  return (
    <div className="w-full flex flex-col">
      <Typography variant="text" className="text-white-4 mb-4 sm:mb-6 font-medium">
        Users
      </Typography>
      {children}
    </div>
  );
};

export default layout;
