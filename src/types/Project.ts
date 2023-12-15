import { PortableTextBlock } from "sanity";

export type ProjectListItem = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
};

export type Project = {
  body: PortableTextBlock[];
  categories: string[];
} & ProjectListItem;
