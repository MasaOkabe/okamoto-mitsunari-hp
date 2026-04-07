"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a3a6b] via-[#2d5fa8] to-[#1a3a6b] text-white py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              日本を、もっと前へ。
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10">
              衆議院議員 岡本みつなり
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/policy" className="inline-block bg-white text-[#1a3a6b] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                政策を見る
              </Link>
              <Link href="/contact" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#1a3a6b] transition">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Card Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1a3a6b]">
            プロフィール
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-[#1a3a6b] to-[#2d5fa8] rounded-lg p-12 text-white flex items-center justify-center h-64 md:h-80">
                <div className="text-center">
                  <p className="text-3xl font-bold mb-2">岡本みつなり</p>
                  <p className="text-xl">衆議院議員 6期目</p>
                  <p className="text-sm mt-4 text-blue-100">東京29区</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a3a6b] mb-4">岡本三成</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>生年月日：</strong> 1965年5月5日</li>
                  <li><strong>出身地：</strong> 佐賀県鳥栖市</li>
                  <li><strong>家族：</strong> 妻と二女</li>
                  <li><strong>学歴：</strong> 創価大学卒業</li>
                  <li className="text-sm text-gray-600 ml-4">英国グラスゴー大学留学</li>
                  <li className="text-sm text-gray-600 ml-4">米国ケロッグ経営大学院修了(MBA)</li>
                  <li><strong>経歴：</strong> シティバンク、ゴールドマン・サックス証券</li>
                </ul>
                <Link href="/profile" className="inline-block mt-6 text-[#1a3a6b] font-bold hover:text-[#2d5fa8] transition">
                  詳しく見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1a3a6b]">
            最新ニュース
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { date: "2026年3月26日", title: "各国大使と面談" },
              { date: "2026年2月27日", title: "予算委員会質疑" },
              { date: "2026年2月13日", title: "新代表選出" },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-[#1a3a6b] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">最新の活動内容をご紹介します。</p>
                <a href="#" className="text-[#1a3a6b] font-semibold hover:text-[#2d5fa8] transition">
                  詳細を読む →
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/news" className="inline-block bg-[#1a3a6b] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2d5fa8] transition">
              すべてのニュースを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1a3a6b]">
            主な実績
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "⭐", title: "中小企業省力化投資補助金の創設", date: "2024年6月" },
              { icon: "🚄", title: "JR鉄道運賃割引制度の拡大", date: "2024年4月" },
              { icon: "💧", title: "足立区の水害対策強化", date: "2023年12月" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border-l-4 border-[#1a3a6b] hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#1a3a6b] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.date}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/achievements" className="inline-block bg-[#1a3a6b] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2d5fa8] transition">
              すべての実績を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Policy Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1a3a6b]">
            政策の柱
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "経済・金融", points: ["NISA・iDeCo拡充", "最低賃金1,500円以上", "食料品消費税ゼロ"] },
              { title: "社会保障", points: ["奨学金支援強化", "予防医療の推進", "中間所得層重視"] },
              { title: "外交・国際", points: ["国連改革", "グローバルヘルス", "核融合エネルギー支援"] },
              { title: "地域(東京29区)", points: ["荒川治水対策", "首都直下地震対策", "聴覚障害者支援"] },
            ].map((policy, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-[#1a3a6b] mb-4">{policy.title}</h3>
                <ul className="space-y-2">
                  {policy.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-[#1a3a6b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/policy" className="inline-block bg-[#1a3a6b] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2d5fa8] transition">
              詳しい政策を見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1a3a6b] to-[#2d5fa8] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">ご意見・ご質問をお聞かせください</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            皆様からのご意見は、より良い政策立案の源となります。
          </p>
          <Link href="/contact" className="inline-block bg-white text-[#1a3a6b] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </>
  );
}
