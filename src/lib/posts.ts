import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  articleNumber: number;
  image: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

export { CATEGORIES } from "./categories";

function stripCtaBlock(content: string): string {
  return content.replace(/\n*📩[\s\S]*$/m, "").trimEnd();
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
  return files
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return data as PostMeta;
    })
    .sort((a, b) => a.articleNumber - b.articleNumber);
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  return getAllPosts().filter((p) => p.categorySlug === categorySlug);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const cleaned = stripCtaBlock(content);
  const processed = await remark().use(html, { sanitize: false }).process(cleaned);
  return {
    ...(data as PostMeta),
    contentHtml: processed.toString(),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""));
}
