import FusionCollection from "fusionable/FusionCollection";
import { s } from "./slug";

export const getContent = () => {
  const collection = new FusionCollection()
    .loadFromDir("src/contents/posts")
    .orderBy("date", "desc");
  return collection;
};

export const getAllPosts = (limit?: number) => {
  if (limit) {
    return getContent().limit(limit).getItemsArray();
  }

  return getContent().getItemsArray();
};

export const getPostBySlug = (slug: string) => {
  return getContent().getOneBySlug(slug);
};

interface Post {
  title: string;
  slug: string;
  date: string;
  cover: string;
  description: string;
  category: string;
  tags: string[];
}
interface Grouped {
  [key: string]: Post[];
}

export const getPostsWithGrouped = (
  objectKey: string,
  valKey: "array" | "string" = "string"
) => {
  const content = getContent().getMetadataArray();

  const groups: Grouped = {};

  for (const post of content) {
    if (valKey === "array") {
      if (post["fields"][objectKey]) {
        for (const val of post["fields"][objectKey]) {
          const sVal = s(val);
          if (!groups[sVal]) {
            groups[sVal] = [];
          }

          const postItem: Post = {
            title: post.fields.title,
            slug: post.fields.slug,
            date: post.fields.date,
            cover: post.fields.cover,
            description: post.fields.description,
            category: post.fields.category,
            tags: post.fields.tags,
          };

          groups[sVal].push(postItem);
        }
      }
    }
  }

  return groups;
};
