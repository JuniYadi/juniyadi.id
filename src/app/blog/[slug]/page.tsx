import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { Metadata } from "next";
import Image from "next/image";

import "highlight.js/styles/github-dark.css";
import "./styles.css";

// plugins inject
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import rehypeSlug from "rehype-slug";
import rehypeSanitize from "rehype-sanitize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "rehype-toc";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeLine from "rehype-highlight-code-lines";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

// Force static generation
export const dynamic = "force-static";
export const revalidate = false;

const options = {
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  try {
    const fileContent = getPostBySlug(slug);

    if (!fileContent) {
      return {
        title: "Post Not Found",
      };
    }

    const itemContent = fileContent.getItem();

    return {
      title: itemContent.fields.title,
      description: itemContent.fields.description || itemContent.fields.title,
      openGraph: {
        title: itemContent.fields.title,
        description: itemContent.fields.description || itemContent.fields.title,
        type: "article",
        publishedTime: itemContent.fields.date,
        authors: ["Juni Yadi"],
      },
    };
  } catch (e) {
    const error = e as Error;
    return {
      title: error.message || "Error loading blog post",
    };
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((p) => ({
    slug: p.fields.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // Check if slug is defined
  if (!slug) {
    notFound();
  }

  try {
    const fileContent = getPostBySlug(slug);

    if (!fileContent) {
      notFound();
    }

    const itemContent = fileContent.getItem();

    // Parse frontmatter
    const { content } = matter(itemContent.content);

    return (
      <div className="container mx-auto py-10 px-4">
        <article className="prose prose-lg lg:prose-xl dark:prose-invert prose-table:border-collapse prose-td:border prose-td:border-gray-300 prose-td:p-2 prose-th:border prose-th:border-gray-300 prose-th:p-2 mx-auto max-w-4xl w-full">
          <Image
            src={itemContent.fields.cover}
            alt={itemContent.fields.title}
            width={1600}
            height={800}
            className="mb-8 w-full"
          />
          <h1>{itemContent.fields.title}</h1>
          <div className="text-sm text-gray-500 mb-2">
            Posted by {itemContent.fields.author} at{" "}
            {itemContent.fields.date &&
              new Date(itemContent.fields.date).toLocaleString()}
          </div>
          <div className="text-sm text-gray-500 mb-2">
            Categories:{" "}
            <a
              key={itemContent.fields.category}
              href={`/categories/${itemContent.fields.category}`}
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded-full mr-2"
            >
              {itemContent.fields.category}
            </a>
          </div>
          <div className="text-sm text-gray-500 mb-2">
            Tags:{" "}
            {itemContent.fields.tags.map((tag: string) => (
              <a
                key={tag}
                href={`/tags/${tag}`}
                className="inline-block bg-gray-500 hover:bg-gray-700 text-white text-xs px-2 py-1 rounded-full mr-2"
              >
                #{tag}
              </a>
            ))}
          </div>
          <MDXRemote source={content} options={options} />
        </article>
      </div>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}
