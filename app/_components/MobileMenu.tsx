"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import React from "react";
import { menuItems } from "./NavbarMenu";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-2/3">
        <ul className="mt-5 space-y-2">
          <li className="w-full">
            <Link href={"/"} className="flex hover:bg-muted">
              <SheetClose className="w-full text-left p-2">Home</SheetClose>
            </Link>
          </li>
          {menuItems.map((item, index) => (
            <li key={index} className="w-full">
              <Link href={item.url} className="flex hover:bg-muted">
                <SheetClose className="w-full text-left p-2">
                  {item.title}
                </SheetClose>
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
