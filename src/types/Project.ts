export type ProjectListeItem = {
  _id: string;
  title: string;
  description: string;
  slug: string;
};

export type Project = {
  body: string;
  categories: string[];
  mainImage: string;
} & ProjectListeItem;
