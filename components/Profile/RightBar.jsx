"use client";
import { userDetailsStore } from "@/store/userStore";
import Image from "next/image";
import React from "react";
import AvatarBg from "../../public/assets/images/profile.png";

const RightBar = () => {
  const userDetails = userDetailsStore((state) => state.userDetails);

  return (
    <div className="bg-rgba(45,45,45) flex flex-col flex-1">
      <div>
        {userDetails?.imageUrl ? (
          <img src={userDetails?.imageUrl} alt="" width={20} height={20} />
        ) : (
          <Image
            src={AvatarBg}
            alt=""
            className="w-10 h-10 cursor-pointer rounded-full"
          ></Image>
        )}
      </div>
    </div>
  );
};

export default RightBar;
