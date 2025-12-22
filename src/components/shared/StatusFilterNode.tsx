import React from "react";
import { Plus, X } from "lucide-react";
import Typography from "../ui/typography";

interface StatusFilterProps {
  label: string;
  filterType: string;
  onRemove?: () => void;
}

const StatusFilterNode: React.FC<StatusFilterProps> = ({
  label,
  filterType,
  onRemove,
}) => {
  return (
    <>
      {filterType !== "" && (
        <div className="flex bg-[#252D33] rounded-2xl justify-center items-center gap-1 px-3 py-1">
          <Typography variant="small" className="text-white-1">
            {label} :
          </Typography>
          <Typography variant="small" className="text-white-1">
            {filterType}
          </Typography>
          <button onClick={onRemove}>
            <X size={16} className="text-white-1/50 hover:text-white-1" />
          </button>
        </div>
      )}
    </>
  );
};

export default StatusFilterNode;
