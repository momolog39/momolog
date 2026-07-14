import Image from "next/image";
import { getAllPosts, CATEGORIES } from "@/lib/posts";
import ArticleCard from "@/components/ArticleCard";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
                聞きにくいこと、
                <br />
                <span className="text-pink-500">ぜんぶ答えます。</span>
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed">
                元芸能マネージャー桃川が、メンズエステ・風俗業界のリアルな情報をお届け。
                <br className="hidden md:block" />
                メンエスのお仕事紹介もしています。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="https://line.me/ti/p/MBbG6mAym2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  LINEで相談する
                </a>
                <a
                  href="https://www.instagram.com/barbie0mint/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Instagramを見る
                </a>
              </div>
            </div>
            <div className="shrink-0">
              <Image
                src="/momo-header.jpg"
                alt="桃川"
                width={320}
                height={320}
                className="rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6">最新の記事</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-pink-50/50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            カテゴリから探す
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CATEGORIES.map((cat) => {
              const catPosts = posts.filter(
                (p) => p.categorySlug === cat.slug
              );
              return (
                <div
                  key={cat.slug}
                  className="bg-white rounded-xl border border-pink-100 p-5"
                >
                  <h3 className="font-bold text-pink-500 mb-3">{cat.name}</h3>
                  <ul className="space-y-2">
                    {catPosts.map((post) => (
                      <li key={post.slug}>
                        <a
                          href={`/blog/${post.slug}`}
                          className="text-sm text-gray-600 hover:text-pink-500 transition-colors block"
                        >
                          {post.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <ProfileCard />
        </div>
      </section>
    </>
  );
}
