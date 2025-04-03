import Image from "next/image";
import { ImgHTMLAttributes, LegacyRef } from "react";

// Extend the props interface to accept all HTML img attributes
interface BlogImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  ref?: LegacyRef<HTMLImageElement>;
}

export default function BlogImage({
  src = "",
  alt = "",
  width = 500,
  height = 280,
  className = "",
  ...rest
}: BlogImageProps) {
  // If no src is provided, return nothing
  if (!src) return null;

  return (
    <div className="flex justify-center">
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-zoom-in"
        title="Click to view full size image"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`mb-4 w-full max-w-lg object-cover rounded-lg hover:opacity-90 transition-opacity ${className}`}
          priority
          {...rest}
        />
      </a>
    </div>
  );
}
