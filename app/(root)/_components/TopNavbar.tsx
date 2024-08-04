"use client";
import { usePathname } from "next/navigation";
import React from "react";

const TopNavbar = () => {
  const pathname = usePathname();
  const pathnames = pathname.replace("/", "").split("/");
  console.log(pathnames);
  return <div className="py-2 w-full border">TopNavbar</div>;
};

export default TopNavbar;
