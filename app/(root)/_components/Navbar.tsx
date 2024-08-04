"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Rajdhani } from "next/font/google";
import { ModeToggle } from "@/components/mode-toggle";
import MobileMenu from "./MobileMenu";

const shadowsintolight = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-shadowsintolight",
});

export const menuItems = [
  { title: "Notes", url: "/notes" },
  // { title: "Projects", url: "/projects" },
  { title: "Work With Me", url: "/hire" },
  { title: "Contact", url: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = pathname.replace("/", "").split("/")[0];

  return (
    <header className="sticky top-0 w-full h-16 bg-background flex items-center justify-center">
      <nav className="md:max-w-3xl w-full flex items-center px-4 md:px-0">
        <div className="block md:hidden">
          <MobileMenu />
        </div>
        <ul className="md:flex items-center space-x-8 hidden">
          <li className="mr-4">
            <Link
              href="/"
              className={cn(
                " text-4xl leading-tight font-bold",
                shadowsintolight.className
              )}
            >
              PS
            </Link>
          </li>
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.url}
                className={cn("font-medium hover:text-primary", {
                  "text-primary":
                    isActive === item.url.toLowerCase().replace("/", ""),
                })}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4 ml-auto">
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
