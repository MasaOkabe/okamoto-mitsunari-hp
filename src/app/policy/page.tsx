"use client";

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
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a3a6b] to-[#2d5fa8] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">政策</h1>
          <p className="text-xl text-blue-100">日本を、もっと前へ。</p>
        </div>
      </section>

      {/* Core Message */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-8 md:p-12 border-l-4 border-[#1a3a6b]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a6b] mb-6 text-center">
              政治理念
            </h2>
            <p className="text-xl text-gray-700 text-center leading-relaxed mb-8">
              2001年の9月11日、ニューヨークで同時多発テロを目撃しました。<br />
              その時、政治の力で世界を、日本を、地域を変えたいという想いが生まれました。
            </p>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#1a3a6b]">「中道ど真ん中」の政治で<br />日本を、もっと前へ。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Pillars */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a6b] mb-4 text-center">政策の四本柱</h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
            経済・金融、社会保障、外交・国際、そして地域(東京29区)の4つの分野で、
            具体的で実現可能な政策を推し進めます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="bg-gradient-to-r from-[#1a3a6b] to-[#2d5fa8] text-white p-8 text-center">
                  <div className="text-6xl mb-4">{policy.icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{policy.title}</h3>
                  <p className="text-blue-100 text-lg">{policy.tagline}</p>
                </div>

                <div className="p-8">
                  <ul className="space-y-3">
                    {policy.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <span className="inline-block w-2 h-2 bg-[#1a3a6b] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a6b] mb-12 text-center">
            政治姿勢と経済哲学
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {governance.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-[#1a3a6b] mb-6 border-b-2 border-[#1a3a6b] pb-3">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="inline-block flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-[#1a3a6b]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Words */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a6b] mb-12 text-center">
            政治の約束
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { keyword: "中道ど真ん中", desc: "イデオロギーにとらわれない実質的な政治" },
              { keyword: "大衆とともに", desc: "庶民の視点を何より大切にする政治" },
              { keyword: "生き方の選択肢を増やす", desc: "多様な人生を選択できる社会の構築" },
              { keyword: "逆転の創造力", desc: "危機を機会に変える創意工夫" },
              { keyword: "小さな声を政策に", desc: "少数派の意見も大切にする政治" },
              { keyword: "グローバルで、ローカル", desc: "国際的視点と地域密着の両立" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border-t-4 border-[#1a3a6b] text-center hover:shadow-lg transition"
              >
                <p className="text-xl font-bold text-[#1a3a6b] mb-3">「{item.keyword}」</p>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-[#1a3a6b] to-[#2d5fa8] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">政策についてのご質問・ご意見</h2>
          <p className="text-xl text-blue-100 mb-10">
            岡本の政策についてご質問やご意見がある場合は、お気軽にお問い合わせください。
            皆様からのご意見が、より良い政策立案の源となります。
          </p>
          <a href="/contact" className="inline-block bg-white text-[#1a3a6b] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            お問い合わせ
          </a>
        </div>
      </section>
    </>
  );
}
