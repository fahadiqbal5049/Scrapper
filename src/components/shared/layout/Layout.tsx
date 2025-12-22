"use client";
import React, { ReactNode } from "react";
import LeftNavigation from "./subs/LeftNavigation";
import Header from "./subs/Header";
import { UserProvider } from "@/context/UserContext";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <UserProvider>
      <div className="size-full bg-secondary grid lg:grid-cols-[270px,calc(100%-270px)] xl:grid-cols-[310px,calc(100%-310px)]">
        {/*  */}
        <LeftNavigation />
        <div className="w-full h-dvh overflow-y-auto flex flex-col">
          <Header />
          <main className="flex-grow mx-auto w-full max-w-[1700px] mt-[56px] px-4 sm:px-6 lg:px-12 py-5 ">
            {children}
          </main>
        </div>
      </div>
    </UserProvider>
  );
};
