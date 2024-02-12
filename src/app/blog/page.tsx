import React from "react";

import { getPostMetadata } from "@/lib/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import { Separator } from "@/components/ui/separator";
import { BackButton } from "@/components/BackButton";

export default function BlogPage() {
  const postMetadata = getPostMetadata();

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col py-6">
      <div className="sticky top-0 flex w-full flex-col gap-y-2 bg-background pt-4">
        <BackButton />
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-lg font-semibold text-muted">
          Explore my latest posts
        </p>
        <Separator />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {postMetadata.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
