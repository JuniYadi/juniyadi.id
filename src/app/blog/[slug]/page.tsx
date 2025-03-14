import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
// import mdxComponents from "@/components/mdx-components";
import matter from "gray-matter";
import FusionCollection from "fusionable/FusionCollection";
import remarkGfm from "remark-gfm";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
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
