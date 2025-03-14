import FusionCollection from "fusionable/FusionCollection";

export const getAllPosts = () => {
  const collection = new FusionCollection()
    .loadFromDir("src/contents/posts")
    .orderBy("date", "desc");
  return collection.getItemsArray();
};
