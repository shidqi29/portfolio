import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/types/PostMetadata";

export const getPostMetadata = (): PostMetadata[] => {
  const folderPath = "src/constant/posts/";
  const files = fs.readdirSync(folderPath);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      "src/constant/posts/" + fileName,
      "utf8",
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};
