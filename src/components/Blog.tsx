import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  // Blog posts data with Picsum images
  const posts = getAllPosts(6);

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="block border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors overflow-hidden flex flex-col h-full bg-white dark:bg-gray-800"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.fields.cover}
                  alt={post.fields.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={false}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2NjY2MiLz48L3N2Zz4="
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="min-h-[4.5rem] mb-2">
                  <h3 className="text-lg font-semibold line-clamp-3 overflow-ellipsis text-gray-900 dark:text-gray-100">
                    {post.fields.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {post.fields.date &&
                    new Date(post.fields.date).toLocaleString()}
                </p>
                <p className="text-sm line-clamp-2 mb-3 flex-grow text-gray-700 dark:text-gray-300">
                  {post.fields.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium mt-auto"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
