"use client";
import { cn } from "@/lib/utils";
import { Rajdhani } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const shadowsintolight = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-shadowsintolight",
});

export const menuItems = [
  { title: "Notes", url: "/notes" },
  { title: "Projects", url: "/projects" },
  // { title: "Work With Me", url: "/hire" },
  { title: "Contact", url: "/contact" },
];

const NavbarMenu = () => {
  const pathname = usePathname();
  const isActive = pathname.replace("/", "").split("/")[0];

  return (
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
  );
};

export default NavbarMenu;
