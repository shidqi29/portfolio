import fs from "fs";
import React from "react";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

import { getPostMetadata } from "@/lib/getPostMetadata";
import { Separator } from "@/components/ui/separator";
import { BackButton } from "@/components/BackButton";

const getPostContent = (slug: string) => {
  const folderPath = "src/constant/posts/";
  const file = `${folderPath}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage({ params }: any) {
  const slug = params.slug;
  const post = getPostContent(slug);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center py-6">
      <div className="sticky top-0 flex w-full flex-col gap-y-2 bg-background pt-4">
        <BackButton />
        <h1 className="text-4xl font-bold">{post.data.title}</h1>
        <Separator />
      </div>
      <article className="prose prose-stone dark:prose-invert md:prose-lg lg:prose-xl w-full max-w-4xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
