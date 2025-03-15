import FusionCollection from "fusionable/FusionCollection";
import { s } from "./slug";

export const getContent = () => {
  const collection = new FusionCollection()
    .loadFromDir("src/contents/posts")
    .orderBy("date", "desc");
  return collection;
};

function validateTags(post: Post) {
  const tagCount = post.tags.length;
  if (tagCount < 1 || tagCount > 4) {
    throw new Error(`Post "${post.title}" must have between 1 and 4 tags.`);
  }
}

export const getAllPosts = (limit?: number) => {
  const posts = limit ? getContent().limit(limit).getItemsArray() : getContent().getItemsArray();
  
  posts.forEach(validateTags); // Validate tags for each post
  
  return posts;
};

export const getPostBySlug = (slug: string) => {
  const post = getContent().getOneBySlug(slug);
  
  validateTags(post); // Validate tags for the specific post
  
  return post;
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
