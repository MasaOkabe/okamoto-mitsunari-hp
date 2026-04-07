import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";

export default function PolicyPage() {
  const policies = [
    {
      icon: "💰",
      title: "経済・金融",
      tagline: "力強い経済成長と暮らしの安定",
      items: [
        "NISA・iDeCo拡充による資産形成支援",
        "最低賃金1,500円以上への引き上げ",
        "103万円の壁引き上げで働き方の多様化支援",
        "食料品消費税ゼロで生活必需品を守る",
        "ジャパン・ファンド創設による国際的な資産形成",
        "5年で60兆円成長投資による産業競争力強化",
      ],
    },
    {
      icon: "🏥",
      title: "社会保障",
      tagline: "誰もが安心して生きられる社会へ",
      items: [
        "現役世代・中間所得層を重視した政策展開",
        "奨学金返還支援制度の充実",
        "予防医療推進による健康寿命の延伸",
        "高齢者医療と介護の一体的改革",
        "子育て支援の強化と親の負担軽減",
        "障害者福祉の充実と就労支援",
      ],
    },
    {
      icon: "🌍",
      title: "外交・国際",
      tagline: "世界の課題解決への貢献",
      items: [
        "国連改革による民主的ガバナンス実現",
        "グローバルヘルス対策の強化",
        "核融合エネルギー研究開発支援",
        "ESG・インパクト投資の推進",
        "国際紛争の平和的解決への貢献",
        "途上国開発支援と経済連携強化",
      ],
    },
    {
      icon: "🏘️",
      title: "地域(東京29区)",
      tagline: "地元と国を繋ぐ政治",
      items: [
        "荒川治水対策の強化と河川敷活用",
        "首都直下地震対策の推進",
        "聴覚障害者支援と交通アクセス改善",
        "地元中小企業の経営支援",
        "スポーツ施設整備と地域活性化",
        "足立区・板橋区の産業振興",
      ],
    },
  ];

  const governance = [
    {
      title: "政治姿勢",
      items: [
        "中道ど真ん中の政治で、左右のイデオロギーにとらわれない実質的な政策を推し進めます",
        "大衆とともに、常に国民の声に耳を傾け、庶民の視点を政策に反映させます",
        "小さな声を政策に、少数派の意見も大切にし、社会的弱者の立場で政策を考えます",
      ],
    },
    {
      title: "経済哲学",
      items: [
        "生き方の選択肢を増やす、一人ひとりが自分のペースで人生を選択できる社会を実現します",
        "逆転の創造力で危機を機会に変え、新しい時代を切り開きます",
        "グローバルで、ローカル、国際的な視点を持ちながら地域密着で活動します",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <div className="max-w-[1296px] mx-auto px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 min-w-0">
            {/* Title */}
            <section className="mb-12">
              <h1 className="text-3xl font-bold text-[#2054a8] mb-2">目指す政策</h1>
              <p className="text-[#666] text-sm">日本を、もっと前へ。</p>
            </section>

            {/* Core Message */}
            <section className="mb-12">
              <div className="bg-white p-8 rounded border border-[#eeeeee]">
                <h2 className="text-lg font-bold text-[#2054a8] mb-4">政治理念</h2>
                <p className="text-[#666] text-sm mb-4 leading-relaxed">
                  2001年9月11日、ニューヨークで同時多発テロを目撃しました。その時、政治の力で世界を、日本を、地域を変えたいという想いが生まれました。
                </p>
                <p className="text-lg font-bold text-[#2054a8]">「中道ど真ん中」の政治で日本を、もっと前へ。</p>
              </div>
            </section>

            {/* Policy Pillars */}
            <section className="mb-12">
              <h2 className="section-heading">政策の四本柱</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {policies.map((policy, idx) => (
                  <div key={idx} className="bg-white rounded border border-[#eeeeee] overflow-hidden">
                    <div className="bg-[#2054a8] text-white p-6 text-center">
                      <div className="text-4xl mb-2">{policy.icon}</div>
                      <h3 className="font-bold text-sm">{policy.title}</h3>
                      <p className="text-xs text-blue-100 mt-1">{policy.tagline}</p>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-2">
                        {policy.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start text-xs">
                            <span className="inline-block w-1.5 h-1.5 bg-[#2054a8] rounded-full mt-1 mr-2 flex-shrink-0"></span>
                            <span className="text-[#666]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Governance Philosophy */}
            <section className="mb-12">
              <h2 className="section-heading">政治姿勢と経済哲学</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {governance.map((section, idx) => (
                  <div key={idx} className="bg-white rounded border border-[#eeeeee] p-6">
                    <h3 className="font-bold text-[#2054a8] mb-4 pb-2 border-b border-[#eeeeee] text-sm">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start text-xs">
                          <span className="inline-block w-1.5 h-1.5 bg-[#2054a8] rounded-full mt-1 mr-2 flex-shrink-0"></span>
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
          <div className="w-full lg:w-[304px] flex-shrink-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
