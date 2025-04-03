"use client";

import { useState } from "react";
import Link from "next/link";
import ToggleDark from "./ToggleDark";

const Navbar = () => {
  const [isMenuOpen, _setIsMenuOpen] = useState(false);
  const resumeLink = "/resume/Resume-JuniYadi.pdf";
  const contactLink = "mailto:me@juniyadi.id";

  const toggleMenu = () => {
    _setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-theme print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="font-bold text-xl text-black dark:text-white"
            >
              JuniYadi
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-4">
              <Link
                href="/"
                className="px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Blog
              </Link>
              <Link
                href="/projects"
                className="px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Projects
              </Link>
            </div>
          </div>

          {/* Action buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark mode toggle */}
            <ToggleDark />
            <Link
              href={resumeLink}
              className="px-4 py-2 border border-blue-500 text-blue-500 dark:text-blue-400 dark:border-blue-400 rounded-md hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-colors"
            >
              Get Resume
            </Link>
            <Link
              href={contactLink}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark mode toggle for mobile */}
            <ToggleDark />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Projects
            </Link>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-2">
            <Link
              href={resumeLink}
              className="block px-4 py-2 text-center border border-blue-500 text-blue-500 dark:text-blue-400 dark:border-blue-400 rounded-md hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-colors"
            >
              Get Resume
            </Link>
            <Link
              href={contactLink}
              className="block px-4 py-2 text-center bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
