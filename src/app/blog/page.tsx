import Link from "next/link";
import Image from "next/image";
import FusionCollection from "fusionable/FusionCollection";

function getBlogPosts() {
  const collection = new FusionCollection()
    .loadFromDir("src/contents/posts")
    .orderBy("date", "desc");
  return collection.getItemsArray();
}

export default async function BlogPage() {
  const _posts = getBlogPosts();

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {_posts.map((post) => (
          <Link
            key={post.fields.slug}
            href={`/blog/${post.fields.slug}`}
            className="block border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors overflow-hidden flex flex-col h-full bg-white dark:bg-gray-800"
          >
            {post.fields.cover && (
              <div className="relative h-48 w-full">
                <Image
                  src={post.fields.cover}
                  alt={post.fields.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            )}
            <div className="p-4 flex flex-col flex-grow">
              <div className="min-h-[4.5rem] mb-2">
                <h2 className="text-lg font-semibold line-clamp-3 overflow-ellipsis text-gray-900 dark:text-gray-100">{post.fields.title}</h2>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{post.fields.date}</p>
              <p className="text-sm line-clamp-2 mb-3 flex-grow text-gray-700 dark:text-gray-300">{post.fields.description}</p>
              {post.fields.tags && post.fields.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-auto">
                  {post.fields.tags.slice(0, 3).map((tag: string) => (
                    <span key={tag} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                  {post.fields.tags.length > 3 && (
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">+{post.fields.tags.length - 3}</span>
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
