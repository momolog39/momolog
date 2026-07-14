import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/posts";

export default function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-xl border border-pink-100 overflow-hidden h-full hover:shadow-md hover:border-pink-200 transition-all duration-200">
        {post.image && (
          <div className="relative w-full h-40 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-5">
          <span className="inline-block text-xs font-medium text-pink-500 bg-pink-50 px-2.5 py-1 rounded-full mb-3">
            {post.category}
          </span>
          <h3 className="font-bold text-gray-800 group-hover:text-pink-500 transition-colors leading-snug mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">{post.description}</p>
        </div>
      </article>
    </Link>
  );
}
