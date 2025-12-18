import React from "react";
import clsx from "clsx";
import Typography from "@/components/ui/typography";

interface Props {
  statusObject: {
    status: string;
    bgColor: string;
    textColor: string;
  };
}

const MapStatus: React.FC<Props> = ({ statusObject }: Props) => {
  if (statusObject.status === "MAP Infringement Detected") {
    return (
      <Typography
        variant="p"
        className={clsx(
          "px-2 py-[2px] w-fit rounded-2xl",
          statusObject.bgColor,
          statusObject.textColor
        )}
      >
        {statusObject.status}
      </Typography>
    );
  }
  if (statusObject.status === "Action Required") {
    return (
      <Typography
        variant="p"
        className={clsx(
          "px-2 py-[2px] w-fit rounded-2xl",
          statusObject.bgColor,
          statusObject.textColor
        )}
      >
        {statusObject.status}
      </Typography>
    );
  }
  if (statusObject.status === "Not Found") {
    return (
      <Typography
        variant="p"
        className={clsx(
          "px-2 py-[2px] w-fit rounded-2xl",
          statusObject.bgColor,
          statusObject.textColor
        )}
      >
        {statusObject.status}
      </Typography>
    );
  }
};

export default MapStatus;
