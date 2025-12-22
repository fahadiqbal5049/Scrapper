import CopyText from "@/components/shared/CopyText";
import Typography from "@/components/ui/typography";
import { LockKeyhole } from "lucide-react";
import * as Icons from "@/svg/Icons";

const ApiKeys = () => {
  return (
    <div className="size-full">
      <div className="w-full bg-primary rounded-lg px-4 py-5 sm:px-6 sm:py-8 lg:h-[600px] flex flex-col gap-4 sm:gap-6">
        <div className="w-full flex  items-center justify-between">
          <Typography variant="text" className="font-medium">
            API Key
          </Typography>
          <button>
            <Typography color="success" className="underline">
              Generate New Key
            </Typography>
          </button>
        </div>
        <CopyText />
        <div className="flex items-center gap-2 mt-2 sm:mt-4">
          <LockKeyhole size={20} className="text-pink-1" strokeWidth={2} />
          <Typography variant="text" className="font-medium">
            Manage your API Key like a password
          </Typography>
        </div>
        <Typography variant="text" color="primary">
          Anyone who has your REST API key will be able to send notifications
          from your app. Do not expose the REST API key in your application
          code. Do not share it on GitHub or anywhere else online.
        </Typography>
        <div className="w-full flex items-center justify-between">
          {" "}
          <button className="flex items-center gap-1">
            <Icons.file />
            <Typography color="success" className="underline">
              Our API docs
            </Typography>
          </button>
          <button className="flex items-center gap-1">
            <Icons.file />
            <Typography color="success" className="underline">
              Postman Workspace
            </Typography>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeys;
