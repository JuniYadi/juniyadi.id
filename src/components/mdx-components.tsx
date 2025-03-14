import Image from "next/image";
import Link from "next/link";
import React from "react";

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={`mt-8 mb-4 text-4xl font-bold ${className || ""}`}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={`mt-8 mb-3 text-3xl font-bold ${className || ""}`}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={`mt-6 mb-3 text-2xl font-bold ${className || ""}`}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`my-4 ${className || ""}`} {...props} />
  ),
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith("/")) {
      return <Link href={href} {...props} />;
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
        {...props}
      />
    );
  },
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={`my-6 ml-6 list-disc ${className || ""}`} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={`my-6 ml-6 list-decimal ${className || ""}`} {...props} />
  ),
  li: ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className={`mt-2 ${className || ""}`} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={`border-l-4 border-gray-300 pl-4 my-6 italic ${
        className || ""
      }`}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={`bg-gray-100 dark:bg-gray-900 rounded p-1 ${className || ""}`}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={`bg-gray-100 dark:bg-gray-900 rounded p-4 overflow-x-auto ${
        className || ""
      }`}
      {...props}
    />
  ),
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    if (!src) return null;
    return (
      <Image
        src={src}
        alt={alt || ""}
        className="rounded-lg"
        {...props}
        width={Number(props.width)}
        height={Number(props.height)}
      />
    );
  },
};

export default components;
