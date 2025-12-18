"use client";


import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import DataExportPreferencesDialog from "@/components/shared/modals/DataExportPreferencesDialog";
import UpgradeDialog from "../../shared/modals/UpgradeDialog";

const MapInfringementFilter: React.FC = () => {
  // states ------------>
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isManual, setIsManual] = useState<boolean>(false);

  // actions ----------->
  const handleManualChange = () => {
    setIsManual(!isManual);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} variant="outline">
        Export
      </Button>
      <DataExportPreferencesDialog
        isManual={isManual}
        handleManualChange={handleManualChange}
        dialogName={isOpen}
        setDialogName={() => setIsOpen(!isOpen)}
      />

      <UpgradeDialog
        isManual={isManual}
        handleManualChange={handleManualChange}
      />
    </>
  );
};

export default MapInfringementFilter;
