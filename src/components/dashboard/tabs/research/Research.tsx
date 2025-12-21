"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResearchTabs } from "@/data/tabs";
import Domain from "./domain/Domain";
import Keyword from "./keywords/Keyword";
const Research = () => {
  return (
    <div className="size-full cmd:px-2">
      <Tabs
        defaultValue={ResearchTabs[0]}
        className="size-full flex flex-col justify-start gap-5"
      >
        <TabsList className="gap-4 justify-start">
          {ResearchTabs.map((tab, index) => (
            <TabsTrigger
              className="data-[state=active]:bg-primary data-[state=active]:text-orange-1 hover:bg-primary hover:text-orange-1 text-[14px] "
              key={index}
              value={tab}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* domain tab conent here */}
        <TabsContent value={"Domain"}>
          <Domain />
        </TabsContent>
        <TabsContent value={"Keyword"}>
          <Keyword />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Research;
