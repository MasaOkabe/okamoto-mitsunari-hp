"use client";

export default function ProfilePage() {
  const careerHistory = [
    { year: "1965年", event: "佐賀県鳥栖市に生まれる" },
    { year: "1984年", event: "創価大学入学" },
    { year: "1988年", event: "創価大学卒業" },
    { year: "1988-1996年", event: "シティバンク勤務（フェニックス・アワード受賞）" },
    { year: "1996-1998年", event: "英国グラスゴー大学留学" },
    { year: "1999-2012年", event: "ゴールドマン・サックス証券勤務（執行役員）" },
    { year: "2012年", event: "衆議院議員初当選（東京29区）" },
    { year: "2014年", event: "衆議院議員2期目当選" },
    { year: "2017年", event: "衆議院議員3期目当選" },
    { year: "2021年", event: "衆議院議員4期目当選" },
    { year: "2024年", event: "衆議院議員5期目当選、中道改革連合・共同政務調査会長就任" },
    { year: "2025年", event: "衆議院議員6期目当選" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a3a6b] to-[#2d5fa8] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">プロフィール</h1>
          <p className="text-xl text-blue-100">衆議院議員 岡本みつなりについて</p>
        </div>
      </section>

      {/* Basic Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#1a3a6b] to-[#2d5fa8] rounded-lg p-12 text-white flex items-center justify-center h-96">
              <div className="text-center">
                <p className="text-5xl font-bold mb-4">岡本みつなり</p>
                <p className="text-2xl mb-2">岡本三成</p>
                <div className="border-t border-blue-300 pt-4 mt-4">
                  <p className="text-lg text-blue-100">衆議院議員 6期目</p>
                  <p className="text-lg text-blue-100">東京29区</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#1a3a6b] mb-6">基本情報</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="font-bold text-[#1a3a6b] mb-1">生年月日</dt>
                  <dd className="text-gray-700">1965年5月5日（61歳）</dd>
                </div>
                <div>
                  <dt className="font-bold text-[#1a3a6b] mb-1">出身地</dt>
                  <dd className="text-gray-700">佐賀県鳥栖市</dd>
                </div>
                <div>
                  <dt className="font-bold text-[#1a3a6b] mb-1">家族</dt>
                  <dd className="text-gray-700">妻と二女</dd>
                </div>
                <div>
                  <dt className="font-bold text-[#1a3a6b] mb-1">現職</dt>
                  <dd className="text-gray-700">
                    衆議院議員（6期目）<br />
                    中道改革連合・共同政務調査会長
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a6b] mb-8">学歴</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#1a3a6b]">
              <h3 className="text-xl font-bold text-[#1a3a6b] mb-2">創価大学</h3>
              <p className="text-gray-700">文学部卒業（1988年）</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#1a3a6b]">
              <h3 className="text-xl font-bold text-[#1a3a6b] mb-2">英国グラスゴー大学</h3>
              <p className="text-gray-700">国際経営学修了（1996-1998年留学）</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#1a3a6b]">
              <h3 className="text-xl font-bold text-[#1a3a6b] mb-2">米国ケロッグ経営大学院</h3>
              <p className="text-gray-700">MBA（経営学修士）修了</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a6b] mb-8">職歴</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-6 border-l-4 border-[#1a3a6b]">
              <h3 className="text-xl font-bold text-[#1a3a6b] mb-2">シティバンク</h3>
              <p className="text-gray-700 mb-2">1989年〜1996年</p>
              <p className="text-gray-600 text-sm">フェニックス・アワード受賞</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-6 border-l-4 border-[#1a3a6b]">
              <h3 className="text-xl font-bold text-[#1a3a6b] mb-2">ゴールドマン・サックス証券</h3>
              <p className="text-gray-700 mb-2">1998年〜2012年</p>
              <p className="text-gray-600 text-sm">執行役員</p>
            </div>
          </div>
        </div>
      </section>

      {/* Political Journey */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a6b] mb-4 text-center">政治家としての道</h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
            2001年9月11日、アメリカ同時多発テロを現地で目撃。政治の力で世界をより良くしたいという想いから、政治家への道を決断しました。
          </p>

          <div className="relative">
            {/* Timeline */}
            <div className="space-y-4 md:space-y-6">
              {careerHistory.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-24">
                    <div className="bg-[#1a3a6b] text-white rounded-lg p-3 text-center font-bold text-sm">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-grow bg-white rounded-lg p-6 border-l-4 border-[#1a3a6b]">
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a6b] mb-12 text-center">政治理念</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { keyword: "中道ど真ん中", description: "イデオロギーに左右されない、国民視点の中道改革を推し進めます。" },
              { keyword: "大衆とともに", description: "常に国民の声に耳を傾け、庶民の目線で政策を考えます。" },
              { keyword: "生き方の選択肢を増やす", description: "一人ひとりが自分のペースで人生を選択できる社会を目指します。" },
              { keyword: "逆転の創造力", description: "危機を機会に変え、新しい時代を創造していく力を持ちます。" },
              { keyword: "小さな声を政策に", description: "少数派の声も大切にし、それを政策に反映させます。" },
              { keyword: "グローバルで、ローカル", description: "国際的な視点を持ちながら、地域に密着した活動を実践します。" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-8 border-l-4 border-[#1a3a6b]">
                <p className="text-xl font-bold text-[#1a3a6b] mb-3">「{item.keyword}」</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
