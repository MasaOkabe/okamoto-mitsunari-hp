import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";

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
    <div className="min-h-screen bg-[#fdfdfd]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Title */}
            <section className="mb-12">
              <h1 className="text-3xl font-bold text-[#2054a8] mb-2">実績</h1>
              <p className="text-[#666] text-sm">衆議院議員として実現した政策と成果</p>
            </section>

            {/* Main Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded border border-[#eeeeee] p-6 card-hover"
                >
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <p className="text-xs text-[#999] mb-2">{achievement.date}</p>
                  <h3 className="font-bold text-[#333] mb-3 line-clamp-2 text-sm">{achievement.title}</h3>
                  <p className="text-xs text-[#666] leading-relaxed mb-4">{achievement.description}</p>
                  <Link href="#" className="text-[#1176d4] text-xs font-medium hover:text-[#2054a8] transition inline-block">
                    詳細 →
                  </Link>
                </div>
              ))}
            </div>

            {/* Categories */}
            <section className="mb-12">
              <h2 className="section-heading">分野別実績</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category, idx) => (
                  <div key={idx} className="bg-white rounded border border-[#eeeeee] p-6">
                    <h3 className="font-bold text-[#2054a8] mb-4 text-sm">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start text-xs">
                          <span className="inline-block w-1.5 h-1.5 bg-[#2054a8] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <span className="text-[#666]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
