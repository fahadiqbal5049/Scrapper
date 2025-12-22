import React from "react";
import * as Icons from "@/svg/Icons";
import Typography from "@/components/ui/typography";

interface Props {
  icon: React.FC<{ stroke?: string; className?: string }>;
  des: string;
  title:string;
}

const ValuesSettingCard: React.FC<Props> = ({ title,icon: Icon, des }: Props) => {
  return (
    <div className="w-full flex flex-col rounded-md p-4 bg-[#3A4249]">
      <Icon/>
        <Typography variant="text" className="text-white-4 h-[50px] flex items-center font-medium">{title}</Typography>
      <Typography variant="p" color="primary">
        {des}
      </Typography>
    </div>
  );
};

export default ValuesSettingCard;
