import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import Typography from "@/components/ui/typography";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
interface Props {
  isOpen: boolean;
  closeEvent: () => void;
}

const LoginModal: React.FC<Props> = ({ isOpen, closeEvent }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={closeEvent}>
      <DialogContent
        cancelIcon
        className="md:min-w-[600px] h-[350px] max-w-[90%] md:max-w-[600px] w-[90%] bg-primary border-none rounded-3xl"
      >
        <DialogTitle></DialogTitle>
        <div className="size-full max-w-full flex flex-col items-center justify-between gap-5">
          <Typography
            variant="h3"
            className="text-[24px] font-semibold text-center"
          >
            Log in to Canny with:
          </Typography>
          <div className="w-full flex items-center justify-center gap-3 md:gap-5">
            <button className="size-[45px] rounded-[10px] bg-gray-2 flex items-center justify-center shrink-0">
              <FaFacebookF size={24} className="text-blue-500" />
            </button>{" "}
            <button className="size-[45px] rounded-[10px] bg-gray-2 flex items-center justify-center shrink-0">
              <FcGoogle size={22} />
            </button>{" "}
            <button className="size-[45px] rounded-[10px] bg-gray-2 flex items-center justify-center shrink-0">
              <FaGithub size={24} />
            </button>{" "}
            <button className="size-[45px] rounded-[10px] bg-gray-2 flex items-center justify-center shrink-0">
              <CiMail strokeWidth={1} size={24} />
            </button>
          </div>
          <Typography className="font-medium" color="primary">
            OR
          </Typography>

          <Typography color="primary">Need an account? Sign up</Typography>
        </div>

        <DialogFooter>
          <div className="w-full flex  items-center justify-center gap-4">
            <Typography>Continue without logging in or signing up</Typography>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
