"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TableOfContentProps, TOCItem } from "@/types/toc";
import { cn } from "@/lib/utils";

export function TableOfContent({ items }: TableOfContentProps) {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Add scroll margin to all heading elements to account for the navbar height
    const headings = document.querySelectorAll("h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      (heading as HTMLElement).style.scrollMarginTop = "100px"; // Adjust this value to match your navbar height plus some padding
    });

    const handleScroll = () => {
      const headingElements = Array.from(
        document.querySelectorAll("h2, h3, h4, h5, h6")
      ).filter((element) => element.id);

      // Find the heading element that is currently in view
      const visibleHeadings = headingElements.filter((element) => {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 3;
      });

      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0].id);
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Add a new effect to scroll the active TOC item into view
  useEffect(() => {
    if (activeId) {
      // Find the active TOC item link by its href
      const activeTocLink = document.querySelector(
        `.toc-nav a[href="#${activeId}"]`
      );

      if (activeTocLink) {
        // Scroll the TOC item into view, within the constraints of its container
        activeTocLink.scrollIntoView({
          behavior: "smooth",
          block: "nearest", // Only scroll if needed to make the element visible
        });
      }
    }
  }, [activeId]);

  // Get the heading ID from the data object or fall back to generating a slug
  const getHeadingId = (item: TOCItem): string => {
    // First try to get the ID from the data object
    if (item.data?.id) {
      return item.data.id;
    }

    if (item.data?.hProperties?.id) {
      return item.data.hProperties.id;
    }

    // Fall back to the old slug generation method if no ID is provided
    return item.value
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");
  };

  // Function to handle smooth scroll to section
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    slug: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveId(slug);
    }
  };

  if (items.tocs.length === 0) return null;

  return (
    <div className="prose prose-base dark:prose-invert mb-8 rounded-lg border border-gray-200 p-4 dark:border-gray-700 sticky top-16 max-h-[calc(100vh-160px)] overflow-y-auto z-10 bg-white dark:bg-gray-900 self-start [&_a]:no-underline">
      <nav className="toc-nav">
        <ul className="space-y-1 text-sm">
          {items.tocs.map((item, index) => {
            const headingId = getHeadingId(item);
            const indentClass =
              item.depth === 2
                ? "ml-0"
                : item.depth === 3
                ? "ml-4"
                : item.depth === 4
                ? "ml-8"
                : item.depth === 5
                ? "ml-12"
                : "ml-16";

            return (
              <li key={index} className={indentClass}>
                <a
                  href={`#${headingId}`}
                  onClick={(e) => scrollToSection(e, headingId)}
                  className={cn(
                    "block rounded py-1 transition-colors hover:text-blue-500 dark:hover:text-blue-400  border-b-0",
                    activeId === headingId
                      ? "font-medium text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  )}
                  style={{ textDecoration: "none !important" }}
                >
                  {item.value}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default TableOfContent;
