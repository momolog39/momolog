const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://momokawa-blog.vercel.app";

export default function ShareButtons({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  const url = `${BASE_URL}/blog/${slug}`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${title} | モモログ`
  )}&url=${encodeURIComponent(url)}`;
  const lineHref = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
    url
  )}`;

  return (
    <div className="mt-8 rounded-xl border border-pink-100 bg-pink-50/50 p-4">
      <p className="text-sm font-bold text-gray-700 mb-3 text-center">
        この記事が役に立ったらシェアしてね
      </p>
      <div className="flex items-center justify-center gap-3">
        <a
          href={xHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          ポストする
        </a>
        <a
          href={lineHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#06C755] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .348-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .349-.281.63-.63.63h-2.386c-.345 0-.627-.281-.627-.63V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.63-.631.63-.346 0-.626-.286-.626-.63V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.63-.631.63-.345 0-.627-.286-.627-.63V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.63H4.917c-.345 0-.63-.286-.63-.63V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .349-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
          LINEで送る
        </a>
      </div>
    </div>
  );
}
