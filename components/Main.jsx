"use client";
import { Container } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./user-profile/Content";
// import { Container } from "chakra-ui/layout";

export default function Main() {
  return (
    <div
      className="flex w-full"
      // display={{ base: "block", md: "flex" }}
      // maxW="container.xl"
      // width="100%" // Add this line to set the width to 100%
    >
      <Sidebar />
    </div>
  );
}
