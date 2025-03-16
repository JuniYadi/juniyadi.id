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

export const getTitleCase = (text: string): string => {
  return text
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
