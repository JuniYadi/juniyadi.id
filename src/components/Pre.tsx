"use client";

import React, { type ElementRef, useRef, useState } from "react";
import { Copy, CheckCheck } from "lucide-react";

const Pre = (props: React.ComponentPropsWithoutRef<"pre">) => {
  const preRef = useRef<ElementRef<"pre">>(null);
  const [copied, setCopied] = useState(false);

  // Extract language from className (format is usually "language-xxx")
  const language = props.className?.includes("language-")
    ? props.className.split("language-")[1]
    : "";

  const onCopy = (): void => {
    if (!preRef.current) return;

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);

    // clone the <code> element in order not to cause any change in actual DOM
    const code = preRef.current.getElementsByTagName("code")[0].cloneNode(true);

    // add eol to each code-line since there is no eol at the end when they are div
    Array.from((code as HTMLElement).querySelectorAll("div.code-line")).forEach(
      (line) => {
        line.innerHTML = line.innerHTML + "\r";
      }
    );

    void navigator.clipboard.writeText(code.textContent ?? "");
  };

  return (
    <div className="rounded overflow-hidden border border-gray-700 mb-4">
      {/* Title bar with language and copy button */}
      <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
        <span className="text-xs text-gray-300">
          {language || "code"}
        </span>
        <button
          className="bg-gray-700 hover:bg-gray-600 border-none cursor-pointer rounded p-1 transition-all flex items-center justify-center"
          onClick={onCopy}
          aria-label="Copy code"
        >
          {copied ? (
            <CheckCheck color="#4ade80" width="16px" height="16px" />
          ) : (
            <Copy color="#e2e8f0" width="16px" height="16px" />
          )}
        </button>
      </div>
      
      {/* Original pre element with simplified styling */}
      <pre ref={preRef} {...props} className={props.className}>
        {props.children}
      </pre>
    </div>
  );
};

export default Pre;
