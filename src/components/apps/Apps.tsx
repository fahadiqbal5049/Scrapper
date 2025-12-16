import React from "react";
import Typography from "../ui/typography";
import InfoCard from "./subs/InfoCard";
import InstalledAppsTable from "./subs/InstalledAppsTable";

const Apps = () => {
  return (
    <div className="size-full flex flex-col gap-4 sm:gap-7">
      <Typography className="font-medium">Available in your plan</Typography>
      <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 3xl:gap-12">
        <InfoCard
          title={"Research Pro"}
          description={
            "This software is for photo and image editing with output in raster type"
          }
        />{" "}
        <InfoCard
          title={"Inventory Management"}
          description={
            "This software is for photo and image editing with output in raster type"
          }
        />{" "}
        <InfoCard
          title={"Inventory Management"}
          description={
            "This software is for photo and image editing with output in raster type"
          }
        />{" "}
        <InfoCard
          title={"Research Pro"}
          description={
            "This software is for photo and image editing with output in raster type"
          }
        />
      </div>
      <InstalledAppsTable />
      <Typography className="font-medium">Apps to try</Typography>
      <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 3xl:gap-12">
        <InfoCard
          title={"Research Ultimate"}
          tryBtn
          description={
            "This software is for photo and image editing with output in raster type"
          }
        />{" "}
        <InfoCard
          title={"Inventory Mangement Ultimate"}
          tryBtn
          description={
            "This software is for photo and image editing with output in raster type"
          }
        />
      </div>
    </div>
  );
};

export default Apps;
