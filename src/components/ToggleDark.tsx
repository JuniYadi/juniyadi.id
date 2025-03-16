"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, LoaderCircle } from "lucide-react";

const ToggleDark = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return !mounted ? (
    <>
      <LoaderCircle className="w-5 h-5 animate-spin" />
    </>
  ) : (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {theme && theme === "dark" ? (
        <Sun className="w-5 h-5" fill="yellow" />
      ) : (
        <Moon className="w-5 h-5" fill="black" />
      )}
    </button>
  );
};

export default ToggleDark;
