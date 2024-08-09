import React from "react";
import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

const getPostContent = (slug: string) => {
  const content = fs.readFileSync(
    path.join("./content", `${slug}.md`),
    "utf-8"
  );
  const note = matter(content);
  return note;
};

const NotePage = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const note = getPostContent(params.slug);
  return (
    <div className="flex items-center justify-center">
      <div className="md:max-w-3xl w-full space-y-8 px-4 md:px-0">
        <Link
          href={"/notes"}
          className="flex text-primary items-center text-sm"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to the notes
        </Link>
        <div>
          <h1 className="text-2xl font-bold mb-1">{note.data.title}</h1>
          <small>{note.data.date}</small>
          <hr className="my-5" />

          <div className="prose max-w-3xl w-full dark:prose-invert">
            <Markdown>{note.content}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotePage;
