import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <p className="text-6xl mb-4">🍑</p>
      <h1 className="text-2xl font-bold text-gray-800 mb-3">
        ページが見つかりませんでした
      </h1>
      <p className="text-gray-500 mb-8">
        お探しのページは移動または削除された可能性があります。
      </p>
      <Link
        href="/"
        className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        トップページへ戻る
      </Link>
      <div className="mt-10">
        <h2 className="text-sm font-bold text-gray-700 mb-3">
          カテゴリから探す
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="text-sm text-pink-500 border border-pink-200 rounded-full px-4 py-1.5 hover:bg-pink-50 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
