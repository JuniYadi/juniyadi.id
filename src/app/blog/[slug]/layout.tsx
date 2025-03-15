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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main content - blog post */}
        <main className="lg:col-span-9 prose prose-lg dark:prose-invert max-w-none">
          {children}
        </main>

        {/* Right sidebar - Table of Contents */}
        <aside className="lg:col-span-3 hidden lg:block">
          {/* <div className="sticky top-20">
            <h3 className="font-bold text-lg mb-4">Table of Contents</h3>
            <div id="table-of-contents" className="text-sm">
              TABLE_OF_CONTENTS
            </div>
          </div> */}
          TABLE_OF_CONTENTS
        </aside>

        {/* Comments section - spans full width below the content */}
        <div className="lg:col-span-12 mt-12 pt-8 border-t">
          <h3 className="font-bold text-xl mb-6">Comments</h3>
          <Comments />
        </div>
      </div>
    </div>
  );
}
