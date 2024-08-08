"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Note } from "../page";
import Link from "next/link";

const NotesList = ({ filterNotes }: { filterNotes: Note[] }) => {
  const [data, setData] = useState<Note[]>(filterNotes.slice(0, 10)); // Initial data load
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if there's more data to load

  const loadMoreData = useCallback(() => {
    if (isLoading || !hasMore) return; // Prevent multiple calls and stop if no more data

    setIsLoading(true);
    setTimeout(() => {
      const moreData = filterNotes.slice(page * 10, (page + 1) * 10); // Load 10 items per page
      if (moreData.length > 0) {
        setData((currentData) => [...currentData, ...moreData]);
        setPage((currentPage) => currentPage + 1);
      } else {
        setHasMore(false); // No more data to load
      }
      setIsLoading(false);
    }, 1000); // Simulate network delay
  }, [isLoading, hasMore, page, filterNotes]);

  const onScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !isLoading
    ) {
      loadMoreData();
    }
  }, [isLoading, loadMoreData]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div>
      <ul className="flex flex-col gap-10">
        {data.map((note) => (
          <li key={note.slug}>
            <Link href={`/notes/${note.slug}`} className="space-y-2">
              <h2 className="text-xl font-semibold basis-3/4">{note.title}</h2>
              <small className="text-xs text-muted-foreground font-medium">
                {note.date}
              </small>
              <p>{note.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="pt-8 text-center">
        {isLoading && hasMore && <p>Loading more notes...</p>}{" "}
        {/* Loading indicator */}
      </div>
    </div>
  );
};

export default NotesList;
