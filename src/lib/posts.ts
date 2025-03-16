import FusionCollection, { OperatorEnum } from "fusionable/FusionCollection";
import { s } from "./slug";

export const getContent = () => {
  const collection = new FusionCollection()
    .loadFromDir("src/contents/posts")
    .orderBy("date", "desc");
  return collection;
};

interface PostFilter {
  key: string;
  operator: OperatorEnum;
  value: unknown;
}

export const getAllPosts = (limit?: number, filter?: PostFilter) => {
  const postLimit =
    limit && limit > 0 ? getContent().limit(limit) : getContent();

  const postFilter = filter
    ? postLimit.filter(filter.key, filter.operator, filter.value)
    : postLimit;

  return postFilter.getItemsArray();
};

export const getPostBySlug = (slug: string) => {
  const post = getContent().getOneBySlug(slug);
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
    if (post["fields"][objectKey]) {
      if (valKey === "array") {
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
      } else {
        const sVal = s(post["fields"][objectKey]);
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

  return groups;
};

export const getAllCategories = (): string[] => {
  const posts = getAllPosts(0);
  const categories = posts.map((post) => post.fields.category);
  return categories;
};

export const getPostsByTag = (tag: string) => {
  const posts = getAllPosts(0);
  const postsByTag = posts.filter((post) => post.fields.tags.includes(tag));
  return postsByTag;
};
