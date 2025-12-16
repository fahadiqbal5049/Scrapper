"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import { Switch } from "@/components/ui/switch";
import UpgradeDialog from "@/components/shared/modals/UpgradeDialog";

interface Props {
  isUpgradeButton?: boolean;
}

const CommunicationChannels: React.FC<Props> = ({ isUpgradeButton }: Props) => {
  const [isUpgradeDialogOpen, setIsUpgradeDialogOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Typography className="font-medium" color="primary" variant="text">
            Communication Channels
          </Typography>
          <Typography variant="p" color="primary">
            Please select how you prefer to receive these alert communications
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
              id="email"
            />
            <div className="flex justify-center items-center gap-10">
              <label htmlFor="email">
                <Typography variant="p" className="text-white-4">
                  Email
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
            john@gmail.com
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
              id="slack"
            />
            <div className="flex justify-center items-center gap-2">
              <label htmlFor="slack">
                <Typography variant="p" className="text-white-4">
                  Slack
                </Typography>
              </label>
            </div>
          </div>
        </div>
      </div>
      <UpgradeDialog
        isManual={isUpgradeDialogOpen}
        handleManualChange={() => setIsUpgradeDialogOpen(false)}
      />
    </React.Fragment>
  );
};

export default CommunicationChannels;
