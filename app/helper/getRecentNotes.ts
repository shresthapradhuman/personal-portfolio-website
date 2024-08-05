import fs from "fs";
import matter from "gray-matter";
import path from "path";

const getRecentNotes = () => {
  const notesDirectory = path.join(process.cwd(), "content");
  const files = fs.readdirSync(notesDirectory);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  const notes = markdownFiles.map((file) => {
    /** create slug */
    const slug = file.replace(".md", "");
    /** get formatter */
    const markdownWithMetadata = fs.readFileSync(
      path.join("./content", file),
      "utf-8"
    );
    const { data } = matter(markdownWithMetadata);
    data.slug = slug;
    return data;
  });
  return notes
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);
};

export default getRecentNotes;
