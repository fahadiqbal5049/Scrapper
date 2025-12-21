"use client";

import React, { useState } from "react";
import Typography from "@/components/ui/typography";
import SearchComponent from "@/components/shared/SearchComponent";
import ScrollArea from "@/components/shared/ScrollArea";
import Table from "@/components/shared/table/Table";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import TableCell from "@/components/shared/table/TableCell";
import TableBody from "@/components/shared/table/TableBody";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, CirclePlus } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import * as Icons from "@/svg/Icons";
import { ProductCatalogData } from "@/data/myCatalog";
import BasicPagination from "@/components/shared/BasicPagination";


const ProductCatalog: React.FC = () => {
  //  states ---------->
  const [isVisible, setIsVisible] = useState(Array(8).fill(true));
  const [selectedRows, setSelectedRows] = useState(Array(8).fill(false));
  const [selectAll, setSelectAll] = useState(false);

  // for pagination ------->
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 50;

  // functions -------->
  const toggleVisibility = (index: number) => {
    setIsVisible((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const handleRowCheckboxChange = (index: number, checked: boolean) => {
    setSelectedRows((prevSelectedRows) => {
      const updatedRows = [...prevSelectedRows];
      updatedRows[index] = checked;

      setSelectAll(updatedRows.every((row) => row));

      return updatedRows;
    });
  };

  const handleSelectAllChange = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.map(() => !selectAll)
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <React.Fragment>
      <div className="w-full flex flex-col gap-3">
        {/* active products ----> */}
        <div className="flex items-center gap-2">
          <Typography variant="p" className="text-white-4 font-medium">
            Manage your products
          </Typography>
          <Typography
            variant="p"
            className="text-success-2 rounded-3xl py-[2px] bg-success-2/20 px-3"
          >
            5 active products
          </Typography>
        </div>
        <div className="w-full bg-primary rounded-lg py-4 sm:py-5 px-3 sm:px-4 flex flex-col gap-5">
          {/* header */}
          <div className="w-full flex flex-wrap gap-2 justify-between items-center">
            <Typography variant="p" className="font-medium" color="primary">
              Create or edit your repricing rule
            </Typography>

            <SearchComponent size="w-full md:w-[250px] xl:w-[307px] h-[26px]" />
          </div>
          {/* table here  */}
          <ScrollArea>
            <Table className="min-w-[1100px]">
              <TableHeader>
                <TableRow className="bg-[#252D33]">
                  <TableCell as="th" className="">
                    <Checkbox
                      checked={selectAll}
                      onCheckedChange={handleSelectAllChange}
                    />
                  </TableCell>
                  {[
                    "Product Name",
                    "Brand",
                    "Code",
                    "My Price",
                    "Min-Max Price",
                    "Competitor URL",
                    "Position",
                    "status",
                    "Action",
                  ].map((item: string, index: number) => (
                    <TableCell as="th" key={index}>
                      <div className="flex justify-start items-center gap-1">
                        <p>{item}</p>
                        <Icons.sort
                          className="w-[14px] h-[14px]"
                          fill="fill-white-2"
                        />
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {ProductCatalogData.map((item, index) => {
                  return (
                    <TableRow
                      key={index}
                      className={clsx(
                        index % 2 === 0 ? "bg-transparent" : "bg-[#343E46]"
                      )}
                    >
                      <TableCell as="td" className="">
                        <Checkbox
                          checked={selectedRows[index]}
                          onCheckedChange={(checked: boolean) =>
                            handleRowCheckboxChange(index, checked)
                          }
                        />
                      </TableCell>
                      <TableCell as="td" className="">
                        <div className="flex justify-start items-center gap-2">
                          <Image
                            src="/brands/appleMobile.svg"
                            className="object-fill"
                            alt=""
                            width={23}
                            height={23}
                          />
                          <p>Simple Traditional Chair</p>
                        </div>
                      </TableCell>
                      <TableCell as="td" className="">
                        Simplo
                      </TableCell>
                      <TableCell as="td" className="">
                        9urhhfj883737
                      </TableCell>
                      <TableCell as="td" className="">
                        $45
                      </TableCell>
                      <TableCell as="td" className="">
                        $290-$320
                      </TableCell>
                      <TableCell as="td" className="">
                        {item.isAddUrl ? (
                          <div className="flex justify-start items-center gap-1">
                            <button>
                              <CirclePlus size={20} color="#00FBA0" />
                            </button>
                            <p>Add URL</p>
                          </div>
                        ) : (
                          <div className="flex justify-start items-center gap-2">
                            <div className="w-[38px] flex justify-center items-center h-[38px] rounded-full bg-white-2/50">
                              <Typography variant="p" className="text-white-1">
                                5
                              </Typography>
                            </div>
                            <p>Show all</p>
                          </div>
                        )}
                      </TableCell>
                      <TableCell as="td" className="">
                        <div className="flex flex-col justify-center items-start gap-2">
                          <div className="flex justify-start gap-1 items-center">
                            <Icons.upCircle
                              className="w-[16px] h-[16px]"
                              fill="fill-success-1"
                            />
                            <Typography variant="p" className="text-white-1">
                              4/5
                            </Typography>
                          </div>
                          <div className="max-w-[80px] w-full relative bg-success-3 rounded-[10px] h-[7px]">
                            <div className="absolute h-full rounded-[10px] left-0 top-0 bg-success-1 w-[70%]"></div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          className={clsx(
                            "flex justify-start w-fit px-2 gap-1 items-center bg-[#00B62A1A] rounded-[80px]",
                            !isVisible[index] && "bg-pink-1/15"
                          )}
                        >
                          <Icons.dot
                            className="w-[3px] h-[4px]"
                            fill={clsx(
                              "fill-[#00B62A]",
                              !isVisible[index] && "fill-[#FB0078]"
                            )}
                          />
                          <Typography
                            variant="p"
                            className={clsx(
                              "text-[#00B62A]",
                              !isVisible[index] && "text-pink-1"
                            )}
                          >
                            {isVisible[index] ? "Enabled" : "Disabled"}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell as="td" className="">
                        <div className="flex justify-start w-fit gap-4 items-center">
                          <Icons.loyality />
                          <button onClick={() => toggleVisibility(index)}>
                            {isVisible[index] ? (
                              <Eye color="#A3A3A3" size={20} />
                            ) : (
                              <EyeOff color="#A3A3A3" size={20} />
                            )}
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
        {/* pagination ------->  */}
        <div className="pt-2">
          <BasicPagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
  
    </React.Fragment>
  );
};

export default ProductCatalog;
