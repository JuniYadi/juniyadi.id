"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="JuniYadi/juniyadi.id"
      repoId="R_kgDOOIk-RQ"
      category="General"
      categoryId="DIC_kwDOOIk-Rc4CoDtL"
      mapping="url"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  );
}
