import React from "react";
import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

const getPostContent = async (slug: string) => {
  const content = fs.readFileSync(
    path.join("./content", `${slug}.md`),
    "utf-8"
  );
  const note = matter(content);
  return note;
};

const NotePage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const note = await getPostContent(params.slug);
  return (
    <div className="flex items-center justify-center">
      <div className="md:max-w-3xl w-full">
        <div className="py-10 px-4">
          <Link
            href={"/notes"}
            className="flex text-primary items-center text-sm mb-4 md:hidden"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to the notes
          </Link>
          <h1 className="text-3xl font-bold mb-1">{note.data.title}</h1>
          <small>{note.data.date} / Pradhuman Shrestha</small>
          <hr className="my-5" />
          <div className="flex flex-col md:flex-row gap-8">
            <div className=" max-w-[220px] w-full pt-5 hidden md:block">
              <h2 className="text-base font-medium mb-8">Shrestha Pradhuman</h2>
              <hr className="mb-8" />
              <div className="space-y-2 mb-8">
                <h2 className="text-base font-semibold">CATEGORIES</h2>
                <p className=" uppercase text-primary">
                  {note.data.category.join(", ")}
                </p>
              </div>
              <hr className="mb-8" />
              <Link
                href={"/notes"}
                className="flex text-primary items-center text-sm"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back to the notes
              </Link>
            </div>
            <div className="prose max-w-xl">
              <Markdown>{note.content}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotePage;
