import Link from "next/link";
import FusionCollection from "fusionable/FusionCollection";

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

function getBlogPosts() {
  const collection = new FusionCollection()
    .loadFromDir("src/contents/posts")
    .orderBy("date", "desc");
  return collection.getItemsArray();
}

// async function getBlogPosts(): Promise<BlogPost[]> {
//   try {
//     const postsDirectory = path.join(process.cwd(), "posts");
//     const filenames = await fs.readdir(postsDirectory);

//     const posts = await Promise.all(
//       filenames
//         .filter((filename) => filename.endsWith(".mdx"))
//         .map(async (filename) => {
//           const filePath = path.join(postsDirectory, filename);
//           const fileContent = await fs.readFile(filePath, "utf-8");

//           const { data } = matter(fileContent);
//           const slug = filename.replace(/\.mdx$/, "");

//           return {
//             slug,
//             title: data.title || slug,
//             date: data.date
//               ? new Date(data.date).toLocaleDateString()
//               : "Unknown date",
//             description: data.description || "",
//           };
//         })
//     );

//     // Sort posts by date (newest first)
//     return posts.sort((a, b) => {
//       return new Date(b.date).getTime() - new Date(a.date).getTime();
//     });
//   } catch (error) {
//     console.error("Error getting blog posts:", error);
//     return [];
//   }
// }
