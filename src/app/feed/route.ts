import { getAllPosts } from "@/lib/posts";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://momokawa-blog.vercel.app";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts().reverse();

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <description>${escapeXml(post.description)}</description>
      <category>${escapeXml(post.category)}</category>
      <guid>${BASE_URL}/blog/${post.slug}</guid>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>モモログ</title>
    <link>${BASE_URL}</link>
    <description>元芸能マネージャー桃川が、メンズエステ・風俗業界のリアルな情報をお届け。</description>
    <language>ja</language>
    <atom:link href="${BASE_URL}/feed" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
