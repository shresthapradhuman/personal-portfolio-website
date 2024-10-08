import React from "react";
import ProjectCard from "./_components/ProjectCard";

const ideas = [
  {
    title: "Tr-acker",
    desc: "A web application to track reading habits using Next.js, PostgreSQL, and Prisma.",
    techStack: [
      "NextJS",
      "Mongodb",
      "Prisma",
      "Auth V5",
      "React Hook Form",
      "Zod Validation",
      "Resend",
      "Typescript",
      "Shadcn Tailwind UI Library",
    ],
    sourceCode: "https://github.com/shresthapradhuman/tr-acker.git",
    imageUrl: "/projects/tracker.png",
    proofLink: "https://tr-acker.vercel.app/",
  },
];

const ProjectsPage = () => {
  return (
    <div className="flex items-center justify-center pt-10">
      <div className="md:max-w-3xl w-full">
        <div className="grid md:grid-cols-2 gap-10">
          {ideas.map((idea, index) => (
            <ProjectCard key={index} data={idea} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
