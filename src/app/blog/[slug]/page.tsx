import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import FusionCollection from "fusionable/FusionCollection";
// import mdxComponents from "@/components/mdx-components";

// import "highlight.js/styles/github.css";
import "highlight.js/styles/github-dark.css";
import "./styles.css";

// plugins inject
import remarkGfm from "remark-gfm";
// import remarkGithub from "remark-github";
import remarkEmoji from "remark-emoji";
import rehypeSlug from "rehype-slug";
import rehypeSanitize from "rehype-sanitize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "rehype-toc";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeLine from "rehype-highlight-code-lines";
// import rehypePrettyCode from "rehype-pretty-code";

const options = {
  mdxOptions: {
    // remarkPlugins: [remarkGfm, remarkGithub, remarkEmoji],
    remarkPlugins: [remarkGfm, remarkEmoji],
    // rehypePlugins: [],
    rehypePlugins: [
      rehypeSanitize,
      rehypeSlug,
      rehypeToc,
      rehypeAutolinkHeadings,
      rehypeHighlight,
      [rehypeCodeLine, { showLineNumbers: true }] as never,
      // rehypePrettyCode,
    ],
  },
};

export async function generateStaticParams() {
  const collection = new FusionCollection()
    .loadFromDir("src/contents/posts")
    .orderBy("date", "desc");
  const posts = collection.getItemsArray();

  return posts.map((p) => ({
    slug: p.fields.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Check if slug is defined
  if (!slug) {
    notFound();
  }

  try {
    const collection = new FusionCollection().loadFromDir("src/contents/posts");
    const fileContent = collection.getOneBySlug(slug);

    if (!fileContent) {
      notFound();
    }

    const itemContent = fileContent.getItem();

    // Parse frontmatter
    const { content } = matter(itemContent.content);

    return (
      <div className="container mx-auto py-10 px-4">
        <article className="prose prose-lg lg:prose-xl dark:prose-invert prose-table:border-collapse prose-td:border prose-td:border-gray-300 prose-td:p-2 prose-th:border prose-th:border-gray-300 prose-th:p-2 mx-auto max-w-4xl w-full">
          <h1>{itemContent.fields.title}</h1>
          <div className="text-sm text-gray-500 mb-8">
            {itemContent.fields.date &&
              new Date(itemContent.fields.date).toLocaleString()}
          </div>
          <MDXRemote
            source={content}
            // components={mdxComponents}
            options={options}
          />
        </article>
      </div>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}
