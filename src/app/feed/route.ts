import { getAllPosts } from "@/lib/posts";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://momokawa-blog.vercel.app";

const DRIP_START = new Date("2026-07-17T00:00:00+09:00");
const DRIP_INTERVAL_DAYS = 2;

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(date: Date): string {
  return date.toUTCString();
}

export const dynamic = "force-dynamic";

export async function GET() {
  const allPosts = getAllPosts();

  const now = new Date();
  const daysSinceStart = Math.max(
    0,
    (now.getTime() - DRIP_START.getTime()) / (1000 * 60 * 60 * 24)
  );
  const visibleCount = Math.floor(daysSinceStart / DRIP_INTERVAL_DAYS) + 1;
  const posts = allPosts.slice(0, visibleCount);

  const items = posts
    .map((post, i) => {
      const pubDate = new Date(
        DRIP_START.getTime() + i * DRIP_INTERVAL_DAYS * 24 * 60 * 60 * 1000
      );
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <description>${escapeXml(post.description)}</description>
      <category>${escapeXml(post.category)}</category>
      <guid>${BASE_URL}/blog/${post.slug}</guid>
      <pubDate>${toRfc822(pubDate)}</pubDate>
    </item>`;
    })
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
      "Cache-Control": "no-store",
    },
  });
}
