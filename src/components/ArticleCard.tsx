import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="rounded-xl overflow-hidden h-full hover:shadow-lg transition-all duration-200 relative">
        <div className="relative aspect-[16/9]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-200" />
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <span className="inline-block self-start text-[10px] font-bold text-white bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full mb-2">
              {post.category}
            </span>
            <h3 className="font-bold text-white text-base md:text-lg leading-snug line-clamp-2 drop-shadow-md">
              {post.title}
            </h3>
          </div>
        </div>
      </article>
    </Link>
  );
}
