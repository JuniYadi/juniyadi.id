import slugify from "slugify";

export const s = (text: string | null | undefined): string => {
  if (text === null || text === undefined) {
    return "";
  }
  return slugify(text, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  });
};
