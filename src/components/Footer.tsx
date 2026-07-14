import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pink-50 border-t border-pink-100 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-pink-500 mb-2">桃川ブログ</h3>
            <p className="text-sm text-gray-500">
              元芸能マネージャー桃川の、聞きにくいことぜんぶ答えるブログ
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-2 text-sm">
              カテゴリ
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/category/industry-basics"
                  className="text-gray-500 hover:text-pink-500"
                >
                  業界基礎知識
                </Link>
              </li>
              <li>
                <Link
                  href="/category/before-working"
                  className="text-gray-500 hover:text-pink-500"
                >
                  働く前に知るべきこと
                </Link>
              </li>
              <li>
                <Link
                  href="/category/health-safety"
                  className="text-gray-500 hover:text-pink-500"
                >
                  健康・安全
                </Link>
              </li>
              <li>
                <Link
                  href="/category/mens-esthe"
                  className="text-gray-500 hover:text-pink-500"
                >
                  メンエス
                </Link>
              </li>
              <li>
                <Link
                  href="/category/daily-life"
                  className="text-gray-500 hover:text-pink-500"
                >
                  桃川の日常
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-2 text-sm">SNS</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/barbie0mint/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-pink-500"
                >
                  Instagram: @barbie0mint
                </a>
              </li>
              <li>
                <a
                  href="https://line.me/ti/p/MBbG6mAym2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-pink-500"
                >
                  LINE: 桃川に相談する
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-pink-100 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} 桃川ブログ All rights reserved.
        </div>
      </div>
    </footer>
  );
}
