import { Home, BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="text-xl mb-8">
        The blog post you are looking for does not exist or has been moved.
      </p>
      
      <div className="flex justify-center gap-4 mt-8">
        <a
          href="/"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
        >
          <Home size={18} />
          Back to Home
        </a>
        <a
          href="/blog"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors"
        >
          <BookOpen size={18} />
          Go to Blog Posts
        </a>
      </div>
    </div>
  );
}
