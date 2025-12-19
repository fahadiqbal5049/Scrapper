import React from "react";
type Props = {
  activeCount?: number;
  height?: string;
  primaryColor?: string;
  secondaryColor?: string;
  barWidth?: string;
  data: any[];
};

const VerticalBarRange = ({
  activeCount = 18, // Number of colored bars from start
  primaryColor = "#00FBA0",
  secondaryColor = "#FB0078",
  barWidth = "1px",
  height = "h-[60px]",
  data,
}: Props) => {
  return (
    <div className={`w-full ${height}`}>
      <div className=" size-full flex justify-between items-end gap-2">
        {data.map((item: any, index: number) => (
          <div
            key={index}
            style={{
              width: barWidth,
              height: `${item}px`,
              backgroundColor:
                index < activeCount ? primaryColor : secondaryColor,
              transition: "height 0.2s ease-in-out",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalBarRange;
