"use client";
import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import NavContainer from "./NavContainer";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const ParentContainer = () => {
  return (
    <div className="grid grid-cols-[320px,1fr]">
      <Sidebar />
      <NavContainer />
    </div>
  );
};

export default ParentContainer;
