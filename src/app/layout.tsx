import type { Metadata } from "next";
import Script from "next/script";
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
        <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WCS7K6XW');`}</Script>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCS7K6XW" height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
