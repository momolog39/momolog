import type { Metadata } from "next";
import { getPostBySlug, getAllSlugs, getPostsByCategory, CATEGORIES } from "@/lib/posts";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import CtaCard from "@/components/CtaCard";
import ArticleCard from "@/components/ArticleCard";
import ProfileCard from "@/components/ProfileCard";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        images: [{ url: "/momo-header.jpg" }],
      },
    };
  } catch {
    return { title: "記事が見つかりません" };
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.slug === post.categorySlug);
  const relatedPosts = getPostsByCategory(post.categorySlug)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "桃川",
    },
    publisher: {
      "@type": "Organization",
      name: "桃川ブログ",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main */}
          <article className="flex-1 min-w-0">
            <Breadcrumb
              items={[
                { label: "トップ", href: "/" },
                {
                  label: category?.name ?? post.category,
                  href: `/category/${post.categorySlug}`,
                },
                { label: post.title },
              ]}
            />
            <span className="inline-block text-xs font-medium text-pink-500 bg-pink-50 px-3 py-1 rounded-full mb-3">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-8">
              {post.title}
            </h1>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
            <CtaCard />
          </article>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0 space-y-6">
            <ProfileCard />
            {relatedPosts.length > 0 && (
              <div>
                <h3 className="font-bold text-gray-700 text-sm mb-3">
                  関連記事
                </h3>
                <div className="space-y-3">
                  {relatedPosts.map((rp) => (
                    <ArticleCard key={rp.slug} post={rp} />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
