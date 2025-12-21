"use client";

import React, { useState } from "react";
import SearchHeader from "./subs/SearchHeader";
import UsersTable from "./subs/UsersTable";
import BasicPagination from "@/components/shared/BasicPagination";
import UserAccessTable from "./subs/UserAccessTable";

const ManageUser: React.FC = () => {
  const [userState, setUserState] = useState<string>("Generate Reports");

  // states ----->
  // for pagination ------->
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 50;

  // Actions ----------------->
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full gap-5 bg-primary rounded-lg p-4 flex flex-col">
        <SearchHeader userState={userState} setUserState={setUserState} />
        {userState === "User Access" ? <UserAccessTable /> : <UsersTable />}
      </div>
      <BasicPagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ManageUser;
