import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import rehypeSlug from "rehype-slug";
import rehypeSanitize from "rehype-sanitize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeLine from "rehype-highlight-code-lines";
import remarkFlexibleCodeTitles from "remark-flexible-code-titles";
import remarkFlexibleContainers from "remark-flexible-containers";

export const MarkdownOptions = {
  mdxOptions: {
    remarkPlugins: [
      remarkGfm,
      remarkEmoji,
      remarkFlexibleCodeTitles,
      remarkFlexibleContainers,
    ],
    rehypePlugins: [
      rehypeSanitize,
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeHighlight,
      [rehypeCodeLine, { showLineNumbers: false }] as never,
    ],
  },
};
