import fs from "fs";
import matter from "gray-matter";
import path from "path";

const getNotesMetaData = async () => {
  const files = fs.readdirSync(path.join("./content"));
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
  return notes.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export default getNotesMetaData;
