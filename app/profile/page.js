import React from "react";
import { isLoggedIn } from "../../lib/isLoggedIn";
import Main from "@/components/Main";
import LeftBar from "@/components/Profile/LeftBar";
import RightBar from "@/components/Profile/RightBar";

const Profile = () => {
  //   isLoggedIn();
  return (
    <div className="w-screen bg-black h-screen flex justify-center">
      <LeftBar />
      <RightBar />
    </div>
  );
};

export default Profile;
