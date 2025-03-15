import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import rehypeSlug from "rehype-slug";
import rehypeSanitize from "rehype-sanitize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "rehype-toc";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeLine from "rehype-highlight-code-lines";

export const MarkdownOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkEmoji],
    rehypePlugins: [
      rehypeSanitize,
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeHighlight,
      [rehypeCodeLine, { showLineNumbers: false }] as never,
      rehypeToc,
    ],
  },
};
