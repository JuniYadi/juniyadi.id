// Generated by Copilot
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  // Blog posts data with Picsum images
  const _blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build a modern web app with Next.js and React",
      date: "April 15, 2023",
      slug: "getting-started-nextjs",
      image: "https://picsum.photos/id/180/600/400",
    },
    {
      id: 2,
      title: "Mastering TypeScript",
      excerpt: "Tips and tricks for advancing your TypeScript skills",
      date: "March 22, 2023",
      slug: "mastering-typescript",
      image: "https://picsum.photos/id/235/600/400",
    },
    {
      id: 3,
      title: "Cloud Architecture Best Practices",
      excerpt: "Learn how to design scalable cloud solutions",
      date: "February 10, 2023",
      slug: "cloud-architecture",
      image: "https://picsum.photos/id/48/600/400",
    },
    {
      id: 4,
      title: "Introduction to Docker",
      excerpt: "A beginner's guide to containerization with Docker",
      date: "January 5, 2023",
      slug: "intro-docker",
      image: "https://picsum.photos/id/25/600/400",
    },
    {
      id: 5,
      title: "CI/CD Pipeline Implementation",
      excerpt: "How to automate your development workflow",
      date: "December 12, 2022",
      slug: "cicd-pipeline",
      image: "https://picsum.photos/id/87/600/400",
    },
    {
      id: 6,
      title: "RESTful API Design Patterns",
      excerpt: "Best practices for designing RESTful APIs",
      date: "November 28, 2022",
      slug: "restful-api-design",
      image: "https://picsum.photos/id/392/600/400",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {_blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-900 hover:text-blue-600"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
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
