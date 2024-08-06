import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import MobileMenu from "./MobileMenu";
import NavbarSearch from "./NavbarSearch";
import NavbarMenu from "./NavbarMenu";
import getNotesMetaData from "@/app/helper/getNotesMetaData";
import { Note } from "../notes/page";

const Navbar = () => {
  const notes = getNotesMetaData() as Note[];
  return (
    <header className=" sticky top-0 w-full h-16 bg-background flex items-center justify-center">
      <nav className="md:max-w-3xl w-full flex items-center px-4 md:px-0">
        <div className="block md:hidden">
          <MobileMenu />
        </div>
        <NavbarMenu />
        <div className="flex items-center space-x-4 ml-auto">
          <NavbarSearch data={notes} />
          <ModeToggle />
          <Button size={"sm"} variant={"outline"} asChild>
            <Link href="/auth/login">Sign In</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
