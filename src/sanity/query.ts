import { groq } from "next-sanity";
import client from "./client";

export async function getPosts() {
  return await client.fetch(
    groq`*[_type == "post"]{
      _id, 
      title,
      subtitle,
      description,
      "slug": slug.current,
      "image": image.asset->url,
    }`
  );
}

export async function getSinglePost(slug: string) {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      body,
      subtitle,
      description,
      "image": image.asset->url,
    }`,
    { slug }
  );
}
