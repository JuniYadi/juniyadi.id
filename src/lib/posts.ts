import FusionCollection from "fusionable/FusionCollection";

export const getContent = () => {
  const collection = new FusionCollection()
    .loadFromDir("src/contents/posts")
    .orderBy("date", "desc");
  return collection;
};

export const getAllPosts = (limit?: number) => {
  if (limit) {
    return getContent().limit(limit).getItemsArray();
  }

  return getContent().getItemsArray();
};

export const getPostBySlug = (slug: string) => {
  return getContent().getOneBySlug(slug);
};
