import React from "react";
import getRecentNotes from "../../helper/getRecentNotes";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const RecentNotes = () => {
  const recentNotes = getRecentNotes();
  return (
    <section className="grid gap-4 mb-10">
      <h2 className="text-3xl font-semibold">Recent Notes</h2>
      <hr className="mb-4" />
      <ul className="space-y-8">
        {recentNotes.map((note) => (
          <li key={note.slug}>
            <Link href={`/notes/${note.slug}`} className="grid gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  {note.title.slice(0, 60)}...
                </h3>
                <small className="text-muted-foreground">{note.date}</small>
              </div>
              <p className="text-muted-foreground">{note.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/notes" className="text-primary underline mt-4">
        View All Notes
      </Link>
    </section>
  );
};

export default RecentNotes;
