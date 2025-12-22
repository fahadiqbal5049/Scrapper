"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import LoginModal from "./shared/modals/LoginModal";
import SignUpModal from "./shared/modals/SinupModal";

const HeaderRightSection = () => {
  const [isLogin, setIsLogin] = useState(false);
  const toggleIsLogin = () => setIsLogin(!isLogin);
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleIsSignUp = () => setIsSignUp(!isSignUp);
  return (
    <>
      {" "}
      <div className="flex items-center justify-center gap-4">
        <Button
          onClick={toggleIsLogin}
          variant={"outline"}
          className="h-[26px] text-xs"
        >
          Log in
        </Button>
        <Button
          onClick={toggleIsSignUp}
          variant={"orangeGradient"}
          className="h-[26px] text-xs"
        >
          Sign up
        </Button>
      </div>
      <LoginModal isOpen={isLogin} closeEvent={toggleIsLogin} />
      <SignUpModal isOpen={isSignUp} closeEvent={toggleIsSignUp} />
    </>
  );
};

export default HeaderRightSection;
