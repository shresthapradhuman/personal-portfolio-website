import React from "react";
import Link from "next/link";
import getNotesMetaData from "../helper/getNotesMetaData";
import NotesList from "./_components/NotesList";

export interface Note {
  title: string;
  date: string;
  excerpt: string;
  cover_image: string;
  category: string[];
  slug: string;
}

const NotesPage = ({
  searchParams,
}: {
  searchParams: {
    category: string;
    keyword: string;
  };
}) => {
  const notes = getNotesMetaData() as Note[];
  const categoriesData = notes.map((note) => note.category);
  const categories = Array.from(new Set(categoriesData.flat()));
  let filterNotes: Note[] = [];
  const { category, keyword } = searchParams;
  if (category) {
    filterNotes = notes.filter((note) => note.category.includes(category));
  } else {
    filterNotes = notes;
  }
  if (keyword) {
    filterNotes = filterNotes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );
  } else {
    filterNotes;
  }
  return (
    <div className="flex items-center justify-center">
      <div className="md:max-w-3xl w-full py-8">
        <div className="flex gap-x-10 px-4 md:px-0">
          <NotesList filterNotes={filterNotes} />
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
