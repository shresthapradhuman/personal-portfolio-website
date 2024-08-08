import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center ">
      <div className="md:max-w-3xl w-full flex-col md:flex-row space-y-2 md:space-y-0 flex items-center justify-between border-t pb-2 pt-4">
        <p>©2024 Pradhuman Shrestha. All rights reserved.</p>
        <ul className="flex items-center space-x-3">
          <li>
            <Link href="/">
              <YoutubeIcon className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FacebookIcon className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <InstagramIcon className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <LinkedinIcon className="h-5 w-5" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
