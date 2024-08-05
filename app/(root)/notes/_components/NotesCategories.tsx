"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const NotesCategories = ({ data }: { data: string[] }) => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");
  return (
    <ul className="flex flex-col gap-2 bg-muted p-4 rounded-md">
      <li className="w-full mb-3">
        <Link
          href={`/notes`}
          className={cn("flex uppercase hover:text-primary", {
            "text-primary": !activeCategory?.toLowerCase(),
          })}
        >
          all categories
        </Link>
      </li>
      {data.map((category, index) => (
        <li key={index} className="w-full mb-2">
          <Link
            href={`/notes?category=${category}`}
            className={cn("flex uppercase hover:text-primary", {
              "text-primary":
                activeCategory?.toLowerCase() == category.toLowerCase(),
            })}
          >
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NotesCategories;
