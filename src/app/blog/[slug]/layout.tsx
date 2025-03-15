import React from "react";
import Comments from "@/components/Comments";
interface BlogPostLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8">
        {/* Main content - blog post - now full width */}
        <main className="prose prose-lg dark:prose-invert max-w-none">
          {children}
        </main>

        {/* Comments section - below the content */}
        <div className="mt-12 pt-8 border-t">
          <Comments />
        </div>
      </div>
    </div>
  );
}
