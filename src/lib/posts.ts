import FusionCollection from "fusionable/FusionCollection";

export const getContent = () => {
  const collection = new FusionCollection()
    .loadFromDir("src/contents/posts")
    .orderBy("date", "desc");

  return collection;
};

export const getAllPosts = () => {
  return getContent().orderBy("date", "desc").getItemsArray();
};

export const getPostBySlug = (slug: string) => {
  return getContent().getOneBySlug(slug);
};
