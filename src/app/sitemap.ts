import { getAllPosts } from "@/lib/posts";
import dayjs from "dayjs";
import { OperatorEnum } from "fusionable/FusionCollection";

interface ISitemap {
  url: string;
  lastModified: Date;
}

interface IDynamic {
  [key: string]: string;
}

export default async function sitemap() {
  const domain = "https://juniyadi.id";
  const staticDate = "2025-03-01T00:00:00.000Z";
  const posts = getAllPosts(0, {
    key: "draft",
    operator: OperatorEnum.EQUALS,
    value: false,
  });

  const staticPage = ["/", "/about", "/projects"];

  const sitemapsData: ISitemap[] = [];
  const categories: IDynamic = {};
  const tags: IDynamic = {};

  for (const page of staticPage) {
    sitemapsData.push({
      url: `${domain}${page}`,
      lastModified: new Date(staticDate),
    });
  }

  for (const post of posts) {
    sitemapsData.push({
      url: `${domain}/blog/${post.fields.slug}`,
      lastModified: dayjs(post.fields.date).toDate(),
    });

    // get category
    if (post.fields.category) {
      categories[post.fields.category] = post.fields.date;
    }

    // get tags
    for (const tag of post.fields.tags) {
      tags[tag] = post.fields.date;
    }
  }

  for (const category in categories) {
    sitemapsData.push({
      url: `${domain}/blog/categories/${category}`,
      lastModified: dayjs(categories[category]).toDate(),
    });
  }

  for (const tag in tags) {
    sitemapsData.push({
      url: `${domain}/blog/tags/${tag}`,
      lastModified: dayjs(tags[tag]).toDate(),
    });
  }

  return sitemapsData;
}
