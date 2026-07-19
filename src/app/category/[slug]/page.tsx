import type { Metadata } from "next";
import { CATEGORIES, getPostsByCategory } from "@/lib/posts";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return { title: "カテゴリが見つかりません" };
  const desc = `モモログの「${category.name}」カテゴリの記事一覧。メンエス・風俗業界の${category.name}に関する情報をまとめています。`;
  return {
    title: `${category.name} の記事一覧`,
    description: desc,
    openGraph: {
      title: `${category.name} の記事一覧`,
      description: desc,
      type: "website",
    },
    alternates: {
      canonical: `/category/${slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const posts = getPostsByCategory(slug);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: category.name },
        ]}
      />
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {category.name}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
