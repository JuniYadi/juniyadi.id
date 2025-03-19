import Comments from "@/components/Comments";
import Image from "next/image";
import matter from "gray-matter";
import Pre from "@/components/Pre";
import TableOfContent from "@/components/TableOfContent";
import { formatDateTime } from "@/lib/date";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { getTocBySlug } from "@/lib/toc";
import { MarkdownOptions } from "@/lib/markdown";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { s } from "@/lib/slug";
import { TOCItem } from "@/types/toc";

import "highlight.js/styles/github-dark.min.css";

// Force static generation
export const dynamic = "force-static";
export const revalidate = false;

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
        tags: itemContent.fields.tags, // Include tags in metadata
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

  // Removed state for mobile TOC toggle

  // generate toc data
  const getToc = getTocBySlug(slug);
  const tocsData = getToc?.data?.headings as TOCItem[];

  try {
    const fileContent = getPostBySlug(slug);

    if (!fileContent) {
      notFound();
    }

    const itemContent = fileContent.getItem();

    // Parse frontmatter
    const { content } = matter(itemContent.content);

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content - blog post */}
          <main className="prose dark:prose-invert max-w-none lg:col-span-3">
            <article className="prose prose-base dark:prose-invert prose-table:border-collapse prose-td:border prose-td:border-gray-300 prose-td:p-2 prose-th:border prose-th:border-gray-300 prose-th:p-2 max-w-none mx-auto w-full">
              <h1>{itemContent.fields.title}</h1>
              <div className="text-sm text-gray-500 mb-2">
                Posted by {itemContent.fields.author} at{" "}
                {itemContent.fields.date &&
                  formatDateTime(itemContent.fields.date)}
              </div>

              <p>{itemContent.fields.description}</p>

              <Image
                src={itemContent.fields.cover}
                alt={itemContent.fields.title}
                width={640}
                height={360}
                className="mb-4 w-full"
              />

              {/* Mobile Table of Contents - Always visible on mobile */}
              {tocsData && tocsData.length > 0 && (
                <div className="block lg:hidden col-span-1 mb-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-lg shadow-sm">
                    <h2 className="mb-3 text-lg font-medium">
                      Table of Contents
                    </h2>
                    <div className="max-h-60 overflow-y-auto">
                      <TableOfContent items={{ tocs: tocsData }} />
                    </div>
                  </div>
                </div>
              )}

              <MDXRemote
                source={content}
                options={MarkdownOptions}
                components={{ pre: (props) => <Pre {...props} /> }}
              />
              <div className="text-sm text-gray-500 mb-2">
                Categories:{" "}
                <a
                  key={`category-${s(itemContent.fields.category)}`}
                  href={`/blog/categories/${s(itemContent.fields.category)}`}
                  className="inline-block bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-900 text-white text-xs px-2 py-1 rounded-full mr-2"
                >
                  {itemContent.fields.category}
                </a>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Tags:{" "}
                {itemContent.fields.tags.map((tag: string) => (
                  <a
                    key={`tag-${s(tag)}`}
                    href={`/blog/tags/${s(tag)}`}
                    className="inline-block bg-gray-500 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-900 text-white text-xs px-2 py-1 rounded-full mr-2"
                  >
                    #{s(tag)}
                  </a>
                ))}
              </div>
            </article>
          </main>

          {/* Table of Contents Sidebar - Desktop only version */}
          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <h2 className="mb-3 text-lg font-medium dark:text-gray-300">
                Table of Contents
              </h2>
              {tocsData ? (
                <TableOfContent items={{ tocs: tocsData }} />
              ) : (
                <p className="text-sm text-gray-500">No table of contents</p>
              )}
            </div>
          </aside>

          {/* Comments section - below the content, spans all columns */}
          <div className="mt-12 pt-8 border-t lg:col-span-4">
            <Comments />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}
