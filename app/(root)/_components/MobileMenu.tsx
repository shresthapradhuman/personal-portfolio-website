import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import React from "react";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
    </Sheet>
  );
};

export default MobileMenu;
