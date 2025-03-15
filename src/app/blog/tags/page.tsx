import { getPostsWithGrouped } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import { formatDateTime } from "@/lib/date";
import { s } from "@/lib/slug";
import { search } from "deepsearchjs";
import { notFound } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const q = (await searchParams).q as string;
  const contents = getPostsWithGrouped("tags", "array");
  const filter = q ? search(contents, new RegExp(q, "gi")) : contents;

  console.log("filter", q, filter);

  if (Object.keys(contents).length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Page Tags
      </h1>
      {Object.keys(contents).map((tag) => (
        <div key={tag} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            {tag}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {contents[tag].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors overflow-hidden flex flex-col h-full bg-white dark:bg-gray-800"
              >
                {post.cover && (
                  <div className="relative h-40 w-full">
                    <Image
                      src={post.cover}
                      alt={post.title}
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
                <div className="p-4 flex flex-col flex-grow">
                  <div className="min-h-[4.5rem] mb-2">
                    <h3 className="text-lg font-semibold line-clamp-3 overflow-ellipsis text-gray-900 dark:text-gray-100">
                      {post.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {post.date && formatDateTime(post.date)}
                  </p>
                  <p className="text-sm line-clamp-2 mb-3 flex-grow text-gray-700 dark:text-gray-300">
                    {post.description}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={`${post.slug}-tag-${index}-${s(tag)}`}
                          className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full"
                        >
                          #{s(tag)}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span
                          key={`${post.slug}-tag-more`}
                          className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full"
                        >
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
