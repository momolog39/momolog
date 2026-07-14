"use client";

import Link from "next/link";
import { useState } from "react";
import { CATEGORIES } from "@/lib/categories";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-pink-500">
          モモログ
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              {c.name}
            </Link>
          ))}
          <Link
            href="/about"
            className="text-gray-600 hover:text-pink-500 transition-colors"
          >
            プロフィール
          </Link>
        </nav>
        <button
          className="md:hidden text-gray-600 p-2"
          onClick={() => setOpen(!open)}
          aria-label="メニューを開く"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-pink-100 bg-white px-4 pb-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="block py-2 text-gray-600 hover:text-pink-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              {c.name}
            </Link>
          ))}
          <Link
            href="/about"
            className="block py-2 text-gray-600 hover:text-pink-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            プロフィール
          </Link>
        </nav>
      )}
    </header>
  );
}
