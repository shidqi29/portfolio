import Link from "next/link";
import React from "react";

import { PostMetadata } from "@/types/PostMetadata";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const PostPreview = ({ slug, title, date, subtitle }: PostMetadata) => {
  return (
    <Card className="border-secondary bg-primary transition hover:border-accent">
      <CardHeader className="gap-y-2">
        <CardTitle>
          <Link
            href={`/blog/${slug}`}
            className="hover:text-accent hover:underline"
          >
            {title}
          </Link>
        </CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{subtitle}</p>
      </CardContent>
    </Card>
  );
};

export default PostPreview;
