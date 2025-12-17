"use client";
import NextImage from "@/components/shared/NextImage";
import Typography from "@/components/ui/typography";
import React, { useState } from "react";
import EditMapParametersDialog from "../modals/EditMapParametersDialog";

const ProductDetails = () => {
  const [mapInfo, setMapInfo] = useState({
    min: "$1090",
    max: "$1150",
    diff: "$1150",
  });
  const handleMapInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMapInfo({ ...mapInfo, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full flex md:flex-row flex-col md:items-start items-center gap-6">
      <NextImage
        height={"h-[261px]"}
        imageStyles="rounded-md"
        containerStyles="rounded-md shrink-0"
        width={"w-[300px]"}
        source={"/products/laptop.png"}
      />
      <div className="flex flex-col md:items-start items-center flex-grow w-full gap-4 md:gap-6">
        <Typography variant="h4">MacBook Air M2</Typography>
        <Typography className="font-normal md:text-left text-center lg:w-[40%]">
          The 2017 MacBook Pro looks much like last year's model. That's not
          necessarily a negative, though, as the beloved aluminum build is as
          sleek and premium as ever.
        </Typography>
        <div className="w-full flex items-center gap-x-6 md:gap-x-12 justify-start gap-y-4 flex-wrap">
          {items.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-1">
              <Typography className="font-semibold">{item.name}</Typography>
              <Typography>{item.value}</Typography>
            </div>
          ))}
        </div>
        <span className="w-full h-[1px] bg-[#555555] shrink-0"></span>
        <div className="flex items-center gap-2">
          <Typography variant="h4">Reseller Details</Typography>
          <EditMapParametersDialog
            mapInfo={mapInfo}
            handleMapInfoChange={handleMapInfoChange}
          />
        </div>
        <div className="w-full flex items-center gap-x-6 md:gap-x-12 justify-start gap-y-4 flex-wrap">
          <div className="flex items-center gap-1">
            <Typography className="font-semibold">Map Min Price:</Typography>
            <Typography>{mapInfo.min}</Typography>
          </div>
          <div className="flex items-center gap-1">
            <Typography className="font-semibold">Map Max Price:</Typography>
            <Typography>{mapInfo.max}</Typography>
          </div>
          <div className="flex items-center gap-1">
            <Typography className="font-semibold">Diff:</Typography>
            <Typography>{mapInfo.diff}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
const items = [
  { name: "Price:", value: "$1100" },
  { name: "Code:", value: "f43efrw43ed" },
  { name: "Brand:", value: "Apple" },
  { name: "Sku:", value: "F65dr45" },
  { name: "Stock:", value: "100" },
  { name: "Color:", value: "White" },
  { name: "Purchased Date:", value: "28-08-2024" },
  { name: "Purchased Price:", value: "$990" },
  { name: "Expire Date:", value: "28-08-2029" },
];
