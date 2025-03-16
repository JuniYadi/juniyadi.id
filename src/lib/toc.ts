import { getPostBySlug } from "./posts";
import remarkHeadings from "@vcarl/remark-headings";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkHeadingId from "remark-heading-id";
export const getTocBySlug = (slug: string) => {
  const getContent = getPostBySlug(slug);
  if (!getContent) {
    return;
  }

  const { content } = getContent.getItem();

  const processor = unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkHeadingId, { defaults: true })
    .use(remarkHeadings);
  const file = processor.processSync(content);

  return file;
};
