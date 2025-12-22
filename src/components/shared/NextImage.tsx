import Image from "next/image";
import React from "react";

type ImageProps = {
  height: string;
  width: string;
  source: string;
  containerStyles?: string;
  objectFit?: string;
  imageStyles? : string;
};

const NextImage = ({
  source,
  width,
  height,
  containerStyles = "",
  objectFit = "object-cover",
  imageStyles = "size-full",
}: ImageProps) => {
  return (
    <div className={`relative ${height} ${width} ${containerStyles}`}>
      <Image
        src={source}
        className={`${objectFit} ${imageStyles}`}
        fill
        alt=""
      />
    </div>
  );
};

export default NextImage;
