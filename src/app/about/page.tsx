import type { Metadata } from "next";
import Image from "next/image";
import CtaCard from "@/components/CtaCard";

export const metadata: Metadata = {
  title: "プロフィール",
  description:
    "桃川（ももかわ）のプロフィール。元芸能事務所マネージャー、現在はメンズエステ・芸能系お仕事紹介。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <Image
          src="/momoicon_002_A.jpg"
          alt="桃川"
          width={120}
          height={120}
          className="rounded-full border-4 border-pink-200 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">
          桃川（ももかわ）
        </h1>
        <p className="text-gray-500 mt-1">
          元芸能事務所マネージャー / お仕事紹介
        </p>
      </div>

      <div className="prose max-w-none">
        <h2>自己紹介</h2>
        <p>
          はじめまして。桃川（ももかわ）です。
        </p>
        <p>
          もともと芸能事務所でマネージャーをしていました。タレントのスケジュール管理、現場の送迎、営業先との調整、SNSの運営サポートなど、「この子が売れるために裏で何でもやる」仕事をしていました。
        </p>
        <p>
          中でも一番気を使っていたのが、タレントのメンタルケアです。芸能の世界は見た目の評価、オーディションの結果、SNSの反応と、数字と他人の目にさらされ続ける仕事。だからこそ、本人が気づかないうちに限界を超えてしまうことがある。それを手前で拾うのがマネージャーの役割だと思ってやっていました。
        </p>

        <h2>今やっていること</h2>
        <p>
          現在は芸能事務所を離れ、メンズエステや芸能関連のお仕事紹介をしています。提携している芸能プロダクションがあるので、メンエスだけでなく芸能系のお仕事も紹介可能です。
        </p>
        <p>
          マネージャー時代に培った「人を見る力」と「メンタルケアの意識」を活かして、一人ひとりに合ったお仕事を紹介したいと思っています。
        </p>

        <h2>このブログについて</h2>
        <p>
          このブログでは、メンズエステや風俗業界に関するリアルな情報を中立的なスタンスで発信しています。「働くことに興味はあるけど、何もわからなくて不安」という方に向けて、聞きにくいことをぜんぶ答えるつもりで書いています。
        </p>
        <p>
          風俗業界は情報が偏りがちな分野ですが、できるだけフラットに、事実ベースで情報をお届けしていきます。
        </p>

        <h2>趣味</h2>
        <p>
          ディズニーが大好きで、元・年パス勢です。ブログでもディズニー関連の記事を書いています。
        </p>

        <h2>連絡先</h2>
        <p>
          お仕事に関するご相談、質問など、お気軽にどうぞ。
        </p>
      </div>

      <CtaCard />
    </div>
  );
}
