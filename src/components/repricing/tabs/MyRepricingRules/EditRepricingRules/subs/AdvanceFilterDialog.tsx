"use client";

import Typography from "@/components/ui/typography";
import { Eye, Filter, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import * as Icons from "@/svg/Icons";
import SearchComponent from "@/components/shared/SearchComponent";
import Table from "@/components/shared/table/Table";
import TableHeader from "@/components/shared/table/TableHeader";
import TableCell from "@/components/shared/table/TableCell";
import TableRow from "@/components/shared/table/TableRow";
import TableBody from "@/components/shared/table/TableBody";
import { fieldOptions, operatorOptions } from "@/data/repricingData";
const AdvanceFilterDialog = () => {
  const [groups, setGroups] = useState<any>([
    {
      field: "",
      operator: "",
      value: "",
      rules: [],
    },
  ]);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(!isOpened);
  };

  const addGroup = () => {
    setGroups([
      ...groups,
      {
        field: "",
        operator: "",
        value: "",
        rules: [],
      },
    ]);
  };

  const addRule = (groupIndex: number) => {
    const updatedGroups = [...groups];
    updatedGroups[groupIndex].rules.push({
      field: "",
      operator: "",
      value: "",
    });
    setGroups(updatedGroups);
  };

  const removeGroup = (groupIndex: number) => {
    if (groupIndex === 0) return;
    const updatedGroups = groups.filter(
      (_: any, index: number) => index !== groupIndex
    );
    setGroups(updatedGroups);
  };

  const removeRule = (groupIndex: number, ruleIndex: number) => {
    const updatedGroups = [...groups];
    updatedGroups[groupIndex].rules = updatedGroups[groupIndex].rules.filter(
      (_: any, index: number) => index !== ruleIndex
    );
    setGroups(updatedGroups);
  };

  return (
    <Dialog onOpenChange={handleOpen} open={isOpened}>
      <DialogTrigger asChild>
        <button className="flex justify-center items-center gap-1">
          <Filter size={18} color="#A4A4A4" />
          <Typography variant="p" color="primary">
            Advanced Filters
          </Typography>
        </button>
      </DialogTrigger>
      <DialogContent className="lg:min-w-[850px] overflow-y-auto max-h-dvh lg:min-h-[700px] max-w-[90%] lg:max-w-[850px] w-[90%] bg-primary border-none rounded-3xl">
        <DialogTitle>
          <Typography
            variant="p"
            className="text-[24px] font-semibold text-center"
          >
            Advanced Product Filters
          </Typography>
          <Typography
            className="font-medium text-center mt-5"
            color="secondary"
          >
            Use these filters to select which products your rule will take in
            consideration
          </Typography>
        </DialogTitle>
        {/* rules adder here */}
        <div className="w-full overflow-x-auto table-scrollbar my-5">
          <div className="w-full flex items-center justify-end px-5 mb-4">
            <button className="flex items-center gap-1" onClick={addGroup}>
              <Plus size={14} className="text-success-1" strokeWidth={3} />
              <Typography variant="small" color="success">
                Add Group
              </Typography>
            </button>
          </div>
          {groups.map((group: any, groupIndex: number) => (
            <div key={groupIndex} className="w-full mb-8 relative">
              <div className="w-full flex items-center justify-start">
                <div className="min-w-[42px] ml-10 mb-3 shrink-0 relative border-white-1 border border-dashed">
                  {groupIndex == 0 && (
                    <span className="h-[23px] z-10 absolute -left-10 bottom-[25px] w-[75px] flex">
                      <span className="h-full flex items-center justify-center bg-pink-1 w-[60%] rounded-l-sm">
                        <Typography variant="small">AND</Typography>
                      </span>
                      <span className="h-full flex items-center justify-center bg-pink-1/20 w-[40%] rounded-r-sm">
                        <Typography variant="small">OR</Typography>
                      </span>
                    </span>
                  )}

                  <div
                    className={clsx(
                      "w-[1px] absolute  border border-white-1 border-dashed bottom-[0px] left-0"
                    )}
                    style={{
                      height:
                        groupIndex === 0
                          ? "42px"
                          : `${
                              groups[groupIndex - 1].rules.length > 0
                                ? groups[groupIndex - 1].rules.length * 70 + 140
                                : 106
                            }px`,
                    }}
                  ></div>
                </div>
                <div className="flex items-center md:justify-start justify-between gap-3 md:gap-4 mb-4">
                  <CustomSelect
                    placeholder="Choose a field"
                    triggerStyles="h-[30px] w-full md:w-[152px] border-white-2"
                    options={fieldOptions}
                  />
                  <CustomSelect
                    placeholder="Choose an operator"
                    triggerStyles="h-[30px] w-full md:w-[180px] border-white-2"
                    options={operatorOptions}
                  />
                  <Input
                    type="number"
                    placeholder="Enter value"
                    className="border-white-2 h-[30px] w-full min-w-[130px] md:w-[286px] rounded-sm"
                  />
                  <button onClick={() => removeGroup(groupIndex)}>
                    <Trash2 size={20} className="text-white-2" />
                  </button>
                </div>
              </div>{" "}
              {group.rules.map((rule: any, ruleIndex: number) => (
                <div
                  key={ruleIndex}
                  className="w-full flex items-center justify-start"
                >
                  <div
                    className={clsx(
                      "min-w-[42px] ml-24 shrink-0 relative border-white-1 border border-dashed",
                      ruleIndex == 0 ? "-mb-8" : ""
                    )}
                  >
                    {ruleIndex == 0 && (
                      <span className="h-[23px] z-10 absolute -left-10 bottom-[25px] w-[75px] flex">
                        <span className="h-full flex items-center justify-center bg-pink-1 w-[60%] rounded-l-sm">
                          <Typography variant="small">AND</Typography>
                        </span>
                        <span className="h-full flex items-center justify-center bg-pink-1/20 w-[40%] rounded-r-sm">
                          <Typography variant="small">OR</Typography>
                        </span>
                      </span>
                    )}

                    <div
                      className={clsx(
                        "w-[1px] absolute border border-white-1 border-dashed bottom-[0px] left-0",
                        ruleIndex == 0 ? "h-[42px]" : "h-[68px]"
                      )}
                    ></div>
                  </div>{" "}
                  <div
                    className={clsx(
                      "flex items-center md:justify-start justify-between gap-3 md:gap-4",
                      ruleIndex == 0 ? "mt-14 mb-5" : "my-5"
                    )}
                  >
                    <CustomSelect
                      placeholder="Choose a field"
                      triggerStyles="h-[30px] w-full md:w-[152px] border-white-2"
                      options={fieldOptions}
                    />
                    <CustomSelect
                      placeholder="Choose an operator"
                      triggerStyles="h-[30px] w-full md:w-[180px] border-white-2"
                      options={operatorOptions}
                    />
                    <Input
                      type="number"
                      placeholder="Enter value"
                      className="border-white-2 h-[30px] w-full min-w-[100px] md:w-[200px] rounded-sm"
                    />
                    <button onClick={() => removeRule(groupIndex, ruleIndex)}>
                      <Trash2 size={20} className="text-white-2" />
                    </button>
                  </div>
                </div>
              ))}
              <div className="w-full flex items-center justify-end px-5">
                {" "}
                <button
                  className="flex items-center gap-1"
                  onClick={() => addRule(groupIndex)}
                >
                  <Plus size={14} className="text-white-2" strokeWidth={3} />
                  <Typography variant="small" color="primary">
                    Add Rule
                  </Typography>
                </button>
              </div>{" "}
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-5">
          <div className="w-full flex flex-wrap items-center justify-center gap-4 md:justify-between">
            <div className="flex justify-center items-center gap-2">
              <Typography variant="p" color="primary" className="font-medium">
                Products Preview
              </Typography>
              <span className="w-[90px] h-[22px] bg-pink-1/20 flex items-center justify-center rounded-full">
                <Typography color="pink">0 Products</Typography>
              </span>
            </div>
            <SearchComponent bg="bg-white-3/5" size="w-[200px] h-[26px]" />
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <Button
                variant={"outline"}
                className="border-white-2 hover:bg-transparent hover:text-white-2 hover:border-white-2 text-white-2  w-full sm:w-[80px] h-[26px] rounded-sm flex items-center justify-center gap-1"
              >
                <Icons.csv />
                <Typography variant="small" color="primary">
                  Export
                </Typography>
              </Button>
              <Button className="border-orange-1 flex items-center justify-center gap-1 hover:bg-orange-1 bg-orange-gradient hover:text-white-1 hover:border-orange-1 text-white-1 text-xs font-medium w-full sm:w-[110px] h-[26px] rounded-sm">
                <Eye size={16} className="text-white-1" />
                <Typography variant="small">Preview Now </Typography>
              </Button>
            </div>
          </div>
          <Table className="w-full min-w-full">
            <TableHeader>
              <TableRow className="bg-tertary h-[35px] rounded-sm">
                {["Product Name", "Price", "Status"].map(
                  (item: string, index: number) => (
                    <TableCell key={index} as="th" className="">
                      <Typography
                        color="primary"
                        variant="small"
                        className="font-medium px-2"
                      >
                        {item}
                      </Typography>
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHeader>
            <TableBody></TableBody>
          </Table>
        </div>
        <DialogFooter className="w-full mt-3">
          <div className="w-full flex items-center gap-4 sm:gap-6 justify-center">
            <Button
              onClick={handleOpen}
              variant={"outline"}
              className="border-orange-1 hover:bg-transparent hover:text-orange-1 hover:border-orange-1 text-orange-1 text-xs font-medium w-full sm:w-[140px] h-[34px] rounded-sm"
            >
              Cancel
            </Button>
            <Button
              onClick={handleOpen}
              className="bg-orange-gradient w-full sm:w-[110px] h-[34px] rounded-sm font-medium text-xs"
            >
              Save
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdvanceFilterDialog;
