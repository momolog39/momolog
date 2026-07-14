import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

const categoryStyles: Record<string, { gradient: string; emoji: string }> = {
  "industry-basics": { gradient: "from-purple-400 to-pink-400", emoji: "💡" },
  "before-working": { gradient: "from-amber-400 to-orange-400", emoji: "📋" },
  "health-safety": { gradient: "from-emerald-400 to-teal-400", emoji: "🛡️" },
  "mens-esthe": { gradient: "from-pink-400 to-rose-400", emoji: "✨" },
  "daily-life": { gradient: "from-sky-400 to-blue-400", emoji: "☕" },
};

export default function ArticleCard({ post }: { post: PostMeta }) {
  const style = categoryStyles[post.categorySlug] ?? { gradient: "from-pink-400 to-rose-400", emoji: "📝" };

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-xl border border-pink-100 overflow-hidden h-full hover:shadow-md hover:border-pink-200 transition-all duration-200">
        <div className={`bg-gradient-to-br ${style.gradient} p-4 flex items-center justify-between`}>
          <span className="inline-block text-xs font-bold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-3xl">{style.emoji}</span>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-gray-800 group-hover:text-pink-500 transition-colors leading-snug mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">{post.description}</p>
        </div>
      </article>
    </Link>
  );
}
