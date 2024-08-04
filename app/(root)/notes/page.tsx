import React from "react";
import Link from "next/link";
import getNotesMetaData from "../../helper/getNotesMetaData";
import NotesCategories from "./_components/NotesCategories";
import SearchForm from "./_components/SearchForm";

interface Note {
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
        <div className="flex gap-x-5 px-4">
          <div className="w-full max-w-[180px] md:block hidden">
            <h1 className="text-2xl mt-1">Categories</h1>
            <hr className="mt-3 mb-5" />
            <NotesCategories data={categories} />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl">All Notes</h1>
              <SearchForm />
            </div>
            <hr className="mt-2 mb-4" />
            <ul className="flex flex-col gap-10">
              {notes &&
                filterNotes.map((note) => (
                  <li key={note.slug}>
                    <Link href={`/notes/${note.slug}`} className="space-y-2">
                      <small className="text-xs text-purple-600 font-medium">
                        {note.date}
                      </small>
                      <h2 className="text-xl font-semibold basis-3/4">
                        {note.title.slice(0, 50)}...
                      </h2>
                      <p className="uppercase text-sm font-medium text-pink-600 mb-5">
                        {note.category.join(", ")}
                      </p>
                      <p>{note.excerpt} ...</p>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
