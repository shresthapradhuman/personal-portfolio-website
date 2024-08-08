"use client";
import React, { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Note } from "../notes/page";

const NavbarSearch = ({ data }: { data: Note[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open);
      }}
    >
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"} className="-mr-3">
          <SearchIcon className="w-[1.25rem] h-[1.25rem]" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm md:max-w-3xl">
        <DialogTitle>Search Note By Title</DialogTitle>
        <DialogDescription />
        <Command>
          <CommandInput placeholder="Enter your search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {data.map((note) => (
              <CommandItem key={note.slug} className="py-4 first:mt-5">
                <Link
                  href={`/notes/${note.slug}`}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {note.title}
                </Link>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default NavbarSearch;
