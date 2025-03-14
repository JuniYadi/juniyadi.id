import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import mdxComponents from "@/components/mdx-components";
import matter from "gray-matter";
import FusionCollection from "fusionable/FusionCollection";

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
    const fileContent = collection.getOneByFilename(slug + ".md");

    console.log("src/contents/posts/" + slug + ".md");

    if (!fileContent) {
      notFound();
    }

    const itemContent = fileContent.getItem();

    // Parse frontmatter
    const { content, data: frontmatter } = matter(itemContent.content);

    return (
      <div className="container mx-auto py-10 px-4">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
          <h1>{frontmatter.title}</h1>
          <div className="text-sm text-gray-500 mb-8">
            {frontmatter.date &&
              new Date(frontmatter.date).toLocaleDateString()}
          </div>
          <MDXRemote source={content} components={mdxComponents} />
        </article>
      </div>
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}
