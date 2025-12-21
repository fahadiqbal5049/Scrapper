import InfoCard from "@/components/apps/subs/InfoCard";
import Typography from "@/components/ui/typography";
import React from "react";

const AppsToTry = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      {" "}
      <Typography
        variant="text"
        color="primary"
        className="font-medium text-lg"
      >
        Apps to try
      </Typography>
      <div className="w-full grid md:grid-cols-3 gap-6 lg:gap-8">
        <InfoCard
          title={"Research Ultimate"}
          description={
            "This software is for photo and image editing with output in raster type"
          }
          actionBtnTxt="Buy"
          tryBtn
        />
        <InfoCard
          title={"Inventory Mangement Ultimate"}
          description={
            "This software is for photo and image editing with output in raster type"
          }
          actionBtnTxt="Buy"
          tryBtn
        />
      </div>
    </div>
  );
};

export default AppsToTry;
