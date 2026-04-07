"use client";

export default function AchievementsPage() {
  const achievements = [
    {
      icon: "🏭",
      date: "2024年6月",
      title: "中小企業省力化投資補助金の創設を実現",
      description: "中小企業の生産性向上と経営効率化を支援するための新しい補助金制度を実現しました。",
    },
    {
      icon: "🚄",
      date: "2024年4月",
      title: "JR鉄道各社の運賃割引制度を精神障がい者までの拡大を実現",
      description: "身体障害者等に限定されていた鉄道運賃割引を、精神障害者にも拡大することを実現しました。",
    },
    {
      icon: "💧",
      date: "2023年12月",
      title: "足立区の水害対策で危機感共有WEB会議を導入",
      description: "荒川の治水対策強化のため、関係機関とのWEB会議を導入し、迅速な対応体制を構築しました。",
    },
    {
      icon: "⚽",
      date: "2023年7月",
      title: "河川敷を活用したスポーツ広場開設を推進",
      description: "地域コミュニティの活性化と健康増進を目的とした河川敷スポーツ広場の開設を推進しました。",
    },
    {
      icon: "🎫",
      date: "2023年3月",
      title: "交通系ICカードの障害者割引適用を実現",
      description: "交通系ICカードの利便性向上と障害者支援の一環として、障害者割引の適用を実現しました。",
    },
    {
      icon: "🚶",
      date: "2023年1月",
      title: "板橋区新河岸地域の荒川河川敷に階段設置",
      description: "地域の要望を受け、河川敷へのアクセス向上のための階段設置を実現しました。",
    },
  ];

  const categories = [
    {
      title: "経済・産業",
      items: [
        "中小企業省力化投資補助金の創設",
        "地域経済の活性化支援",
        "産業競争力の強化",
      ],
    },
    {
      title: "福祉・社会保障",
      items: [
        "障害者支援の充実（交通割引制度の拡大）",
        "精神障害者の社会参加支援",
        "福祉施設の環境整備",
      ],
    },
    {
      title: "防災・治水",
      items: [
        "荒川治水対策の強化",
        "足立区・板橋区の水害対策",
        "河川敷活用の推進",
      ],
    },
    {
      title: "地域活性化",
      items: [
        "スポーツ施設の整備",
        "公共スペースのアクセス改善",
        "地域コミュニティの支援",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a3a6b] to-[#2d5fa8] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">実績</h1>
          <p className="text-xl text-blue-100">衆議院議員として実現してきた政策と成果</p>
        </div>
      </section>

      {/* Main Achievements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a6b] mb-4 text-center">主な成果</h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
            2012年の初当選以来、東京29区の皆様と国民の皆様のために、数多くの政策を実現してきました。
          </p>

          <div className="space-y-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-8 md:p-10 border-l-4 border-[#1a3a6b] hover:shadow-lg transition"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0 text-5xl">{achievement.icon}</div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold text-[#1a3a6b] mb-2">{achievement.date}</p>
                    <h3 className="text-2xl font-bold text-[#1a3a6b] mb-3">{achievement.title}</h3>
                    <p className="text-gray-700 text-lg">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a6b] mb-12 text-center">実績の分野別一覧</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border-t-4 border-[#1a3a6b]">
                <h3 className="text-2xl font-bold text-[#1a3a6b] mb-6">{category.title}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-[#1a3a6b] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a6b] mb-12 text-center">議員活動の成果指標</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "6", label: "衆議院議員\n当選回数", icon: "🏛️" },
              { number: "12", label: "年以上の\n政治経験", icon: "📅" },
              { number: "100+", label: "以上の\n政策実現", icon: "✅" },
              { number: "29", label: "東京都\n第29区", icon: "📍" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-8 border border-blue-200">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <p className="text-4xl font-bold text-[#1a3a6b] mb-2">{stat.number}</p>
                <p className="text-gray-700 whitespace-pre-line text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a6b] mb-12 text-center">議員としての軌跡</h2>

          <div className="relative">
            <div className="space-y-4">
              {[
                { year: "2012年", event: "衆議院議員初当選" },
                { year: "2014年", event: "2期目当選、経済再生関連の委員会活動開始" },
                { year: "2017年", event: "3期目当選、福祉・社会保障分野での活動強化" },
                { year: "2021年", event: "4期目当選、防災・治水対策に本格的に取り組み開始" },
                { year: "2024年", event: "5期目当選、中道改革連合・共同政務調査会長に就任" },
                { year: "2025年", event: "6期目当選、さらなる政策実現に向けて活動中" },
              ].map((timeline, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-32">
                    <div className="bg-[#1a3a6b] text-white rounded-lg p-3 text-center font-bold">
                      {timeline.year}
                    </div>
                  </div>
                  <div className="flex-grow bg-white rounded-lg p-6 border-l-4 border-[#1a3a6b]">
                    <p className="text-gray-700 text-lg">{timeline.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1a3a6b] to-[#2d5fa8] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">さらに多くの政策を実現します</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            国民の皆様の声をお聞かせください。皆様のご意見が、これからの政策立案の源となります。
          </p>
          <a href="/contact" className="inline-block bg-white text-[#1a3a6b] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            ご意見をお聞かせください
          </a>
        </div>
      </section>
    </>
  );
}
