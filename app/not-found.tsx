import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full md:max-w-3xl pt-56 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-8 mb-10">
          <div className="text-9xl font-medium border-r-8 pr-4 border-foreground">
            404
          </div>
          <div className="grid">
            <h1 className="text-5xl leading-normal font-bold">
              Page not found
            </h1>
            <p className="text-base font-medium text-muted-foreground -tracking-tight">
              Please check the URL in the address bar and try again.
            </p>
          </div>
        </div>
        <Link href={"/"} className="flex items-center text-sm text-primary">
          <ArrowLeftIcon className="h-4 w-4 mr-2" /> Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
