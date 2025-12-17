"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Typography from "@/components/ui/typography";
import SearchComponent from "@/components/shared/SearchComponent";
import Image from "next/image";
import ProductCardWithRemoveButton from "@/components/shared/ProductCardWithRemoveButton";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableCell from "@/components/shared/table/TableCell";
import TableRow from "@/components/shared/table/TableRow";
import TableHeader from "@/components/shared/table/TableHeader";
import * as Icons from "@/svg/Icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import URLInputWithAction from "@/components/shared/URLInputWithAction";
import ScrollArea from "@/components/shared/ScrollArea";

const AddReseller: React.FC = () => {
  return (
    <div className="size-full flex flex-col items-start justify-start gap-5 lg:gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/competitors/map-infringements">Map infringements</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Add Reseller</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full flex flex-col gap-6 bg-primary rounded-lg px-4 py-6">
        {/* search your product ------> */}
        <div className="flex flex-col gap-2">
          <Typography variant="h4" className="text-white-1 font-normal">
            Search Your Product
          </Typography>
          <SearchComponent
            size="w-full min-h-[43px]"
            placeholder="Search product code, brand name"
          />
        </div>
        {/* product list  ------>  */}
        <div className="flex flex-col gap-3">
          <ProductCardWithRemoveButton
            imageUrl="/brands/product2.svg"
            title="ROG Zephyrus G14, AI Powered Gamin Laptop, AMD Ryzen 9 8945HS, RTX 4060 GPU (16GB/1TB/35.56cm (14) 3K Nebula/Windows 11 Home) GA403UV-Qs085ws"
            sku="SKU:4khdgb8"
            code="Code:E74848039"
          />
        </div>
        {/* inputs --------> */}
        <div className="w-full grid grid-cols-1 xs:grid-cols-3 gap-2 xs:gap-4 md:gap-12">
          <Input
            placeholder="$280"
            className="w-full rounded-md bg-gray-2 border-none"
            label="Map Min Price"
          />
          <Input
            placeholder="$300"
            className="w-full rounded-md bg-gray-2 border-none"
            label="Map Max Price"
          />
          <Input
            placeholder="$300"
            className="w-full rounded-md bg-gray-2 border-none"
            label="Drift Limit"
          />
        </div>
        {/* Added Reseller Products ------->  */}
        <div className="flex flex-col gap-2">
          <Typography variant="h4" className="text-white-1 font-normal">
            Added Reseller Products
          </Typography>
          <div className="bg-[#3A4249] px-3 py-2 rounded-lg">
            <ScrollArea>
              <Table className="min-w-[530px]">
                <TableHeader>
                  <TableRow>
                    <TableCell as="th" className="">
                      Competitors
                    </TableCell>
                    <TableCell as="th" className="">
                      Reseller URL’s
                    </TableCell>
                    <TableCell as="th" className="flex justify-end">
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell as="td" className="">
                      <div className="flex justify-start items-center gap-2">
                        <Image
                          src="/brands/nike.svg"
                          className="rounded-full"
                          alt=""
                          width={24}
                          height={24}
                        />
                        <Typography variant="p" className="text-white-1">
                          www.nike.com
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell as="td" className="text-white-1">
                      https://www.nike.com/shop-1
                    </TableCell>
                    <TableCell as="td" className="flex justify-end">
                      <button>
                        <Icons.trash
                          className="w-[24px] h-[24px]"
                          stroke="stroke-white-2"
                        />
                      </button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
        </div>
        {/* Reseller Product URL -----------> */}
        <div className="bg-gray-2 flex flex-col gap-6 rounded-lg px-4 py-6">
          <URLInputWithAction
            buttonLabel="Check Now"
            placeholder="www.amazon.com/product"
            label="Reseller Product URL"
            protocol="https;//"
          />
          <div className="w-full grid grid-cols-1 sm:grid-cols-[230px,1fr] md:grid-cols-[330px,1fr] justify-center items-start gap-2 sm:gap-4">
            <div className="w-full min-h-[200px] md:min-h-[313px] relative">
              <Image src="/brands/apple.svg" fill alt="" />
            </div>
            <form action="" className="w-full flex flex-col gap-3 sm:gap-5">
              <Input
                placeholder="Macbook Pro 15 Inch"
                className="w-full rounded-md"
                label="Title"
              />
              <div className="w-full grid grid-cols-2 gap-x-4 gap-y-4 md:gap-x-8 sm:gap-y-6">
                <Input
                  placeholder="$1100"
                  className="w-full rounded-md"
                  label="Reseller Price"
                />
                <Input
                  placeholder="Apple"
                  className="w-full rounded-md"
                  label="Brand"
                />
                <Input
                  placeholder="f47339hh33992"
                  className="w-full rounded-md"
                  label="Code"
                />
                <Input
                  placeholder="3d45hh6"
                  className="w-full rounded-md"
                  label="SKU"
                />
                <Input
                  placeholder="+91 8973245647"
                  className="w-full rounded-md"
                  label="Reseller Contact Number"
                />
                <Input
                  placeholder="reseller@gmail.com"
                  className="w-full rounded-md"
                  label="Reseller E-mail Id"
                />
              </div>

              <div className="col-span-2 mt-2 w-full flex justify-end">
                <Button
                  type="submit"
                  onClick={(e) => e.preventDefault()}
                  variant="orangeGradient"
                >
                  Add
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            onClick={(e) => e.preventDefault()}
            variant="orangeGradient"
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddReseller;
