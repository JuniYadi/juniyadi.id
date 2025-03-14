import Link from "next/link";
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
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6">
        {_posts.map((post) => (
          <Link
            key={post.fields.slug}
            href={`/blog/${post.fields.slug}`}
            className="block p-6 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.fields.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.fields.date}</p>
            <p>{post.fields.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
