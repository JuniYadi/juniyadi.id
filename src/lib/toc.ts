import { getPostBySlug } from "./posts";
import { rehype } from "rehype";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";

export const getTocBySlug = (slug: string) => {
  const getContent = getPostBySlug(slug);
  if (!getContent) {
    return;
  }

  const { content } = getContent.getItem();

  const processor = rehype().use(rehypeSlug).use(rehypeToc);
  const file = processor.processSync(content);

  return file;
};
