"use client";

import React, { useState, useEffect } from "react";
import Typography from "@/components/ui/typography";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import LeftNavigationForSmallScreen from "./LeftNavigationForSmallScreen";
import SearchComponent from "../../SearchComponent";
import { userRole, UserRoleType } from "@/context/UserContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("english");
  const { setRole, role } = userRole();
  const router = useRouter();

  const getLanguageCode = (language: string) => {
    return language.slice(0, 2).toUpperCase();
  };

  // Prefetch routes on component mount
  useEffect(() => {
    router.prefetch("/dashboard/overview");
    router.prefetch("/admin");
    router.prefetch("/owner");
  }, [router]);

  // Handle role change and route navigation
  const handleRoleChange = (value: string) => {
    setRole(value as UserRoleType);

    switch (value) {
      case "user":
        router.push("/dashboard/overview");
        break;
      case "admin":
        router.push("/admin");
        break;
      case "owner":
        router.push("/owner");
        break;
      default:
        break;
    }
  };

  return (
    <div className=" xl:w-[calc(100%-310px)] z-40 lg:w-[calc(100%-270px)] w-full  fixed bg-primary px-4 sm:px-6 lg:px-12 min-h-[56px] flex justify-between items-center">
      {/* left por */}
      <Typography variant="text" color="primary" className="font-medium">
        My Dashboard
      </Typography>
      {/* right por */}
      <div className="flex justify-center items-center gap-4 sm:gap-7">
        {/* search input  */}
        <div className="cmd:block hidden">
          <SearchComponent size="w-[168px]" />
        </div>

        {/* toggle language  */}
        <div className="cmd:block hidden">
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="flex justify-center text-[14px] font-normal text-white-2 items-center gap-1">
              <SelectValue>{getLanguageCode(selectedLanguage)}</SelectValue>
              <SelectContent className="text-white-1 text-[14px] font-normal">
                <SelectGroup>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                </SelectGroup>
              </SelectContent>
            </SelectTrigger>
          </Select>
        </div>
        {/* user profile */}
        <div className="flex justify-center items-center gap-2">
          <div className="w-[28px] xs:w-[32px] h-[28px] xs:h-[32px] rounded-full bg-cyan-1 flex justify-center items-center">
            <Typography variant="p" className="text-white-1">
              Z
            </Typography>
          </div>
          <Typography variant="p" color="primary">
            John Doe
          </Typography>
        </div>
        <Select value={role || ""} onValueChange={handleRoleChange}>
          <SelectTrigger className="flex capitalize justify-center text-[14px] font-normal text-white-2 items-center gap-1">
            <SelectValue>{role}</SelectValue>
          </SelectTrigger>
          <SelectContent className="text-white-1 text-[14px] font-normal">
            <SelectGroup>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="owner">Owner</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Menu for small screen  */}
        <LeftNavigationForSmallScreen />
      </div>
    </div>
  );
};

export default Header;
