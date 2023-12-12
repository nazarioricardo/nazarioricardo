import { PortableTextBlock } from "sanity";

export type PostListItem = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
};

export type Post = {
  body: PortableTextBlock[];
  categories: string[];
} & PostListItem;
