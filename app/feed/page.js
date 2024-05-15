import Polls from "@/components/poll/Polls";
import React from "react";
import { isLoggedIn } from "../../lib/isLoggedIn";

const Login = () => {
  isLoggedIn();
  return (
    <div className="flex justify-center">
      <Polls />
    </div>
  );
};

export default Login;
