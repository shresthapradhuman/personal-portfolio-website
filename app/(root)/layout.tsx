import React, { PropsWithChildren } from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
