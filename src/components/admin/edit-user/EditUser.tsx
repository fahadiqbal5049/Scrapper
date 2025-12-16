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
import { Input } from "@/components/ui/input";
import CustomSelect from "@/components/shared/form/CustomSelect";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const EditUser: React.FC = () => {
  return (
    <div className="size-full flex flex-col items-start justify-start gap-4 sm:gap-5 lg:gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/admin/manage-user">Users</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Edit User</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full gap-5 bg-primary rounded-lg pb-4 flex flex-col">
        <div className="w-full border-b-[1px] py-3 border-white-4/20 px-4">
          <Typography variant="text" className="text-white-4 font-medium">
            Edit User
          </Typography>
        </div>
        <div className="w-full px-4 flex flex-col gap-5">
          <div className="w-full grid sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-4">
            <Input
              label="First Name"
              type="text"
              placeholder="John"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
            <Input
              label="Last Name"
              placeholder="Doe"
              type="text"
              className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
            />
          </div>
          <Input
            label="Email Address"
            placeholder="louisa.reb@gmail.com"
            type="text"
            className="w-full h-[43px] border-none rounded-md bg-[#3A4249]"
          />
          <CustomSelect
            label="Country"
            options={RoleOptions}
            triggerStyles="border-none w-full bg-[#3A4249] rounded-md h-[43px]"
          />
          <div className="w-full flex justify-between items-center flex-wrap gap-2">
            <div className="flex flex-col gap-3">
              <Typography variant="p" color="primary">
                Enable User / Disable User
              </Typography>
              <Switch
                width="w-[35px]"
                height="h-[15px]"
                thumbHeight="h-[11px]"
                thumbWidth="w-[11px]"
                thumbStyles="data-[state=checked]:translate-x-5"
                id="enable-user/dsable-user"
              />
            </div>
            <div className="flex justify-center items-center gap-3">
                <Button iconPosition='left' className="rounded-sm !bg-pink-1/20 text-[#FB0078]" icon={<Trash size={20} color="#FB0078"/>}>Delete User</Button>
                <Button className="rounded-sm" variant='orangeGradient' size='sm'>Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;

export const RoleOptions = [
  {
    value: "admin",
    label: "Administrator",
  },
  {
    value: "editor",
    label: "Editor",
  },
  {
    value: "viewer",
    label: "Viewer",
  },
  {
    value: "manager",
    label: "Manager",
  },
  {
    value: "developer",
    label: "Developer",
  },
];
