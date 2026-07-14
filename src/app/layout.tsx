import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://momokawa-blog.vercel.app"
  ),
  title: {
    default: "モモログ | メンエス・風俗業界の情報発信ブログ",
    template: "%s | モモログ",
  },
  description:
    "元芸能マネージャー桃川が、メンズエステ・風俗業界のリアルな情報をお届け。メンエス求人、セラピスト募集、業界の基礎知識まで。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "モモログ",
    title: "モモログ | メンエス・風俗業界の情報発信ブログ",
    description:
      "元芸能マネージャー桃川が、メンズエステ・風俗業界のリアルな情報をお届け。",
    images: [{ url: "/momo-header.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
