"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import { Switch } from "@/components/ui/switch";
import UpgradeDialog from "@/components/shared/modals/UpgradeDialog";

interface Props {
  isUpgradeButton?: boolean;
}

const AlertType: React.FC<Props> = ({ isUpgradeButton }: Props) => {
  const [isUpgradeDialogOpen, setIsUpgradeDialogOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Typography className="font-medium" color="primary" variant="text">
            Alert Type
          </Typography>
          <Typography variant="p" color="primary">
            Please select the frequency of this alert.
          </Typography>
        </div>
        {/* Instant Switch */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center space-x-2">
            <Switch
              width="w-[25px]"
              height="h-[13px]"
              thumbHeight="h-[9px]"
              thumbWidth="w-[9px]"
              thumbStyles="data-[state=checked]:translate-x-3"
              id="instant"
            />
            <div className="flex justify-center items-center gap-2">
              <label htmlFor="instant">
                <Typography variant="p" className="text-white-4">
                  Instant
                </Typography>
              </label>
              {isUpgradeButton && (
                <button
                  onClick={() => setIsUpgradeDialogOpen(!isUpgradeDialogOpen)}
                >
                  <Typography
                    variant="small"
                    className="text-success-2 shrink-0 bg-success-2/10 rounded-full px-2 py-1"
                  >
                    Upgrade to unlock
                  </Typography>
                </button>
              )}
            </div>
          </div>
          <Typography variant="p" color="primary">
            The alert message is sent to you at the same moment the rule is
            triggered
          </Typography>
        </div>
        {/* Once per day */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center space-x-2">
            <Switch
              width="w-[25px]"
              height="h-[13px]"
              thumbHeight="h-[9px]"
              thumbWidth="w-[9px]"
              thumbStyles="data-[state=checked]:translate-x-3"
              id="once-per-day"
            />
            <div className="flex justify-center items-center gap-2">
              <label htmlFor="once-per-day">
                <Typography variant="p" className="text-white-4">
                  Once per day
                </Typography>
              </label>
              {isUpgradeButton && (
                <button
                  onClick={() => setIsUpgradeDialogOpen(!isUpgradeDialogOpen)}
                >
                  <Typography
                    variant="small"
                    className="text-success-2 shrink-0 bg-success-2/10 rounded-full px-2 py-1"
                  >
                    Upgrade to unlock
                  </Typography>
                </button>
              )}
            </div>
          </div>
          <Typography variant="p" color="primary">
            Alerts are summrized and sent you once per day
          </Typography>
        </div>
      </div>
      <UpgradeDialog
        isManual={isUpgradeDialogOpen}
        handleManualChange={() => setIsUpgradeDialogOpen(false)}
      />
    </React.Fragment>
  );
};

export default AlertType;
