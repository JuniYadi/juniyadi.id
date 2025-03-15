import FusionCollection from "fusionable/FusionCollection";

export const getContent = () => {
  const collection = new FusionCollection().loadFromDir("src/contents/posts");
  return collection;
};

export const getAllPosts = (limit?: number) => {
  if (limit) {
    return getContent().orderBy("date", "desc").limit(limit).getItemsArray();
  }

  return getContent().orderBy("date", "desc").getItemsArray();
};

export const getPostBySlug = (slug: string) => {
  return getContent().getOneBySlug(slug);
};
