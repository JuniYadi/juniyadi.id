import Link from "next/link";
import Image from "next/image";
import { getAllCategories, getAllPosts } from "@/lib/posts";
import { formatDateTime } from "@/lib/date";
import { s } from "@/lib/slug";
import { OperatorEnum } from "fusionable/FusionCollection";

export async function generateStaticParams() {
  const posts = getAllCategories();

  return posts.map((p) => ({
    slug: p,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return {
    title: `Category: ${slug}`,
    description: `Posts under the category ${slug}`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // Check if slug is defined
  if (!slug) {
    return "Error Not Found";
  }

  const posts = getAllPosts(0, {
    key: "category",
    operator: OperatorEnum.EQUALS,
    value: slug,
  });

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Category: {slug}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Link
            key={post.fields.slug}
            href={`/blog/${post.fields.slug}`}
            className="block border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors overflow-hidden flex flex-col h-full bg-white dark:bg-gray-800"
          >
            {post.fields.cover && (
              <div className="relative h-40 w-full">
                <Image
                  src={post.fields.cover}
                  alt={post.fields.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  priority={false}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2NjY2MiLz48L3N2Zz4="
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-4 flex flex-col flex-grow" key={post.fields.slug}>
              <div className="min-h-[4.5rem] mb-2">
                <h2 className="text-lg font-semibold line-clamp-3 overflow-ellipsis text-gray-900 dark:text-gray-100">
                  {post.fields.title}
                </h2>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                {post.fields.date && formatDateTime(post.fields.date)}
              </p>
              <p className="text-sm line-clamp-2 mb-3 flex-grow text-gray-700 dark:text-gray-300">
                {post.fields.description}
              </p>
              {post.fields.tags && post.fields.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-auto">
                  {post.fields.tags
                    .slice(0, 3)
                    .map((tag: string, index: number) => (
                      <span
                        key={`${post.fields.slug}-tag-${index}-${s(tag)}`}
                        className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full"
                      >
                        #{s(tag)}
                      </span>
                    ))}
                  {post.fields.tags.length > 3 && (
                    <span
                      key={`${post.fields.slug}-tag-more`}
                      className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full"
                    >
                      +{post.fields.tags.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
