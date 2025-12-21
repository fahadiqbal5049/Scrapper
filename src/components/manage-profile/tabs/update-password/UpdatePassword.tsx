"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { EyeOff, Eye } from "lucide-react";
import PasswordInput from "@/components/shared/PasswordInput";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full gap-4 md:gap-7 bg-primary rounded-lg p-4 flex flex-col">
      <div className="w-full flex gap-2 flex-wrap justify-between items-center">
        <div className="flex gap-1 flex-col">
          <Typography variant="text" className="text-white-4 font-medium">
            Password
          </Typography>
          <Typography variant="p" color="primary">
            Use this section to change or update your password
          </Typography>
        </div>
        <Button variant="orangeGradient" className="rounded-sm" size="sm">
          Change Password
        </Button>
      </div>
      <form
        onSubmit={handleFormSubmission}
        action=""
        className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 xs:gap-4 md:gap-6"
      >
        <PasswordInput
          label="Old Password"
          value={oldPassword}
          onChange={setOldPassword}
        />
        <PasswordInput
          label="New Password"
          value={newPassword}
          onChange={setNewPassword}
        />
        <PasswordInput
          label="New Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
      </form>
    </div>
  );
};

export default UpdatePassword;
