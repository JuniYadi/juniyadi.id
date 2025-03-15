import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { Metadata } from "next";
import Image from "next/image";
import Comments from "@/components/Comments";
import { s } from "@/lib/slug";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDateTime } from "@/lib/date";
import { MarkdownOptions } from "@/lib/markdown";

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
        <div className="grid grid-cols-1 gap-8">
          {/* Main content - blog post - now full width */}
          <main className="prose prose-lg dark:prose-invert max-w-none">
            <article className="prose prose-lg lg:prose-xl dark:prose-invert prose-table:border-collapse prose-td:border prose-td:border-gray-300 prose-td:p-2 prose-th:border prose-th:border-gray-300 prose-th:p-2 mx-auto max-w-4xl w-full">
              <Image
                src={itemContent.fields.cover}
                alt={itemContent.fields.title}
                width={640} // further reduced width
                height={360} // further reduced height
                className="mb-8 w-full"
              />
              <h1>{itemContent.fields.title}</h1>
              <div className="text-sm text-gray-500 mb-2">
                Posted by {itemContent.fields.author} at{" "}
                {itemContent.fields.date &&
                  formatDateTime(itemContent.fields.date)}
              </div>
              <div className="text-sm text-gray-500 mb-2">
                Categories:{" "}
                <a
                  key={`category-${s(itemContent.fields.category)}`}
                  href={`/categories/${s(itemContent.fields.category)}`}
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded-full mr-2"
                >
                  {itemContent.fields.category}
                </a>
              </div>
              <div className="text-sm text-gray-500 mb-2">
                Tags:{" "}
                {itemContent.fields.tags.map((tag: string) => (
                  <a
                    key={`tag-${s(tag)}`}
                    href={`/tags/${s(tag)}`}
                    className="inline-block bg-gray-500 hover:bg-gray-700 text-white text-xs px-2 py-1 rounded-full mr-2"
                  >
                    #{s(tag)}
                  </a>
                ))}
              </div>
              <MDXRemote source={content} options={MarkdownOptions} />
            </article>
          </main>

          {/* Comments section - below the content */}
          <div className="mt-12 pt-8 border-t">
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
