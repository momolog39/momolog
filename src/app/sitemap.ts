import type { MetadataRoute } from "next";
import { getAllPosts, CATEGORIES } from "@/lib/posts";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://momokawa-blog.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const now = new Date().toISOString();

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const categoryUrls: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${BASE_URL}/category/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...categoryUrls,
    ...blogUrls,
  ];
}
