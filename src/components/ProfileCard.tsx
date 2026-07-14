import Image from "next/image";
import Link from "next/link";

export default function ProfileCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="bg-white rounded-xl border border-pink-100 p-5">
      <div className={`flex ${compact ? "flex-row items-center gap-3" : "flex-col items-center gap-3"}`}>
        <Image
          src="/momoicon_002_A.jpg"
          alt="桃川"
          width={compact ? 56 : 80}
          height={compact ? 56 : 80}
          className="rounded-full border-2 border-pink-200 shrink-0"
        />
        <div className={compact ? "" : "text-center"}>
          <h3 className="font-bold text-gray-800">桃川（ももかわ）</h3>
          <p className="text-xs text-gray-500 mt-1">
            元芸能事務所マネージャー
          </p>
        </div>
      </div>
      {!compact && (
        <>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            メンズエステ・芸能関連のお仕事紹介をしています。メンタルケアを大事に、中立的なスタンスで情報発信中。
          </p>
          <Link
            href="/about"
            className="block mt-3 text-center text-sm text-pink-500 hover:text-pink-600 font-medium"
          >
            プロフィールを見る →
          </Link>
          <div className="flex gap-2 mt-3">
            <a
              href="https://www.instagram.com/barbie0mint/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs bg-pink-50 text-pink-500 py-2 rounded-lg hover:bg-pink-100 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://line.me/ti/p/MBbG6mAym2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs bg-green-50 text-green-600 py-2 rounded-lg hover:bg-green-100 transition-colors"
            >
              LINE
            </a>
          </div>
        </>
      )}
    </div>
  );
}
