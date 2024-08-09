import React from "react";
import Link from "next/link";
import getRecentNotes from "../helper/getRecentNotes";

const RecentNotes = () => {
  const recentNotes = getRecentNotes();
  return (
    <section className="grid gap-4 mb-10 px-4 md:px-0">
      <h2 className="text-3xl font-semibold">Recent Notes</h2>
      <hr className="mb-4" />
      <ul className="space-y-8">
        {recentNotes.map((note) => (
          <li key={note.slug}>
            <Link href={`/notes/${note.slug}`} className="grid gap-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="md:text-xl text-lg font-semibold truncate">
                  {note.title}
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
