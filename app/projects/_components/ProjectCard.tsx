import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  data,
}: {
  data: {
    title: string;
    desc: string;
    techStack: string[];
    imageUrl: string;
    sourceCode: string;
    proofLink: string;
  };
}) => {
  return (
    <Card className="shadow-md relative">
      <CardHeader className="gap-2 ">
        <CardTitle>
          <Link href={"/"}>{data.title}</Link>
        </CardTitle>
        <Image
          src={data?.imageUrl || "/projects/tracker.png"}
          alt=""
          width={100}
          height={100}
          priority
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardContent className="grid gap-3">
        <CardDescription>{data.desc}</CardDescription>
        <h1 className="text-primary">Tech Stack:</h1>
        <div className="tracking-wide text-muted-foreground mb-2">
          {data.techStack.join(", ").slice(0, 30)}...
        </div>
      </CardContent>
      <CardFooter className="relative w-full flex items-center justify-between">
        <Link href={data.proofLink} className="text-primary">
          Preview Link
        </Link>
        <Link href={data.sourceCode} className="text-primary">
          Source Code Link
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
