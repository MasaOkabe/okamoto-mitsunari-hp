import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <div className="max-w-[1296px] mx-auto px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 min-w-0">
            {/* Hero Section with Profile Photo */}
            <section className="mb-12">
              <div className="bg-white border border-[#eeeeee] rounded overflow-hidden">
                <img
                  src="https://www.m-okamoto.jp/wp-content/uploads/2023/11/profile.jpg"
                  alt="岡本みつなり"
                  className="w-full h-96 object-cover"
                />
              </div>
            </section>

            {/* Basic Info */}
            <section className="mb-12">
              <h2 className="section-heading">基本情報</h2>
              <div className="bg-white border border-[#eeeeee] rounded overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-[#eeeeee]">
                      <td className="font-bold py-3 px-4 w-32 bg-[#f9f9f9]">氏名</td>
                      <td className="py-3 px-4">岡本みつなり（岡本三成）</td>
                    </tr>
                    <tr className="border-b border-[#eeeeee]">
                      <td className="font-bold py-3 px-4 bg-[#f9f9f9]">生年月日</td>
                      <td className="py-3 px-4">1965年5月5日（58歳）</td>
                    </tr>
                    <tr className="border-b border-[#eeeeee]">
                      <td className="font-bold py-3 px-4 bg-[#f9f9f9]">出身地</td>
                      <td className="py-3 px-4">佐賀県鳥栖市</td>
                    </tr>
                    <tr className="border-b border-[#eeeeee]">
                      <td className="font-bold py-3 px-4 bg-[#f9f9f9]">現在地</td>
                      <td className="py-3 px-4">東京都荒川区</td>
                    </tr>
                    <tr className="border-b border-[#eeeeee]">
                      <td className="font-bold py-3 px-4 bg-[#f9f9f9]">家族</td>
                      <td className="py-3 px-4">妻と二女</td>
                    </tr>
                    <tr className="border-b border-[#eeeeee]">
                      <td className="font-bold py-3 px-4 bg-[#f9f9f9]">選挙区</td>
                      <td className="py-3 px-4">東京都第29区（荒川区・足立区北部）</td>
                    </tr>
                    <tr>
                      <td className="font-bold py-3 px-4 bg-[#f9f9f9]">当選回数</td>
                      <td className="py-3 px-4">6期</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Education */}
            <section className="mb-12">
              <h2 className="section-heading">学歴</h2>
              <div className="bg-white border border-[#eeeeee] rounded p-8 space-y-4">
                <div>
                  <p className="font-bold text-[#333]">創価大学卒業</p>
                  <p className="text-[#666] text-sm">1984年～1988年</p>
                </div>
                <div className="border-t border-[#eeeeee] pt-4">
                  <p className="font-bold text-[#333]">英国グラスゴー大学留学</p>
                  <p className="text-[#666] text-sm">1988年～1989年</p>
                </div>
                <div className="border-t border-[#eeeeee] pt-4">
                  <p className="font-bold text-[#333]">米国ケロッグ経営大学院修了（MBA）</p>
                  <p className="text-[#666] text-sm">2001年～2003年</p>
                </div>
              </div>
            </section>

            {/* Career */}
            <section className="mb-12">
              <h2 className="section-heading">職歴</h2>
              <div className="bg-white border border-[#eeeeee] rounded p-8 space-y-4">
                <div>
                  <p className="font-bold text-[#333]">シティバンク</p>
                  <p className="text-[#666] text-sm">1988年～1998年</p>
                  <p className="text-xs text-[#999]">東京支店、NY支店、シンガポール支店に勤務</p>
                </div>
                <div className="border-t border-[#eeeeee] pt-4">
                  <p className="font-bold text-[#333]">ゴールドマン・サックス証券</p>
                  <p className="text-[#666] text-sm">1998年～2003年</p>
                  <p className="text-xs text-[#999]">インベストメント・バンキング部門</p>
                </div>
              </div>
            </section>

            {/* Core Values */}
            <section className="mb-12">
              <h2 className="section-heading">三つの信念</h2>
              <div className="space-y-6">
                {/* Value 1 */}
                <div className="bg-white border border-[#eeeeee] rounded overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6 p-8">
                    <div className="flex-shrink-0 w-full md:w-48">
                      <img
                        src="https://www.m-okamoto.jp/wp-content/uploads/2023/11/canada-japan-3-1024x512.png"
                        alt="世界で培った国際感覚"
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#2054a8] mb-3">世界で培った国際感覚</h3>
                      <p className="text-[#666] text-sm leading-relaxed">
                        シティバンク、ゴールドマン・サックス証券での勤務を通じて、世界の金融市場を見つめてきました。国連改革、グローバルヘルス、核融合エネルギーなど、日本と世界の繋がりを強く意識した政策を推進します。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="bg-white border border-[#eeeeee] rounded overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6 p-8">
                    <div className="flex-shrink-0 w-full md:w-48">
                      <img
                        src="https://www.m-okamoto.jp/wp-content/uploads/2021/04/profile_career2.jpg"
                        alt="堅実な価値観"
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#2054a8] mb-3">堅実な価値観</h3>
                      <p className="text-[#666] text-sm leading-relaxed">
                        経営大学院で学んだ論理的思考と金融現場での経験を基に、確実で持続可能な政策立案を心がけています。NISA・iDeCo拡充、最低賃金引き上げなど、庶民の安定的な資産形成と生活向上を支援します。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="bg-white border border-[#eeeeee] rounded overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6 p-8">
                    <div className="flex-shrink-0 w-full md:w-48">
                      <div className="w-full h-32 bg-[#2054a8] rounded flex items-center justify-center text-white font-bold text-center px-4">
                        社会貢献への想い
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#2054a8] mb-3">社会貢献</h3>
                      <p className="text-[#666] text-sm leading-relaxed">
                        政治家としての使命は、一人ひとりの人生を豊かにすること。荒川河川敷に階段を整備、聴覚障害者支援、スポーツ広場の開設など、地元での活動を大切にしています。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Timeline */}
            <section className="mb-12">
              <h2 className="section-heading">経歴・当選履歴</h2>
              <div className="bg-white border border-[#eeeeee] rounded p-8">
                <div className="space-y-3 text-sm">
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">1965年</div>
                    <div className="text-[#666]">誕生</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">1988年</div>
                    <div className="text-[#666]">創価大学卒業、シティバンク入行</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2001年</div>
                    <div className="text-[#666]">ケロッグ経営大学院入学（MBA取得）</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2003年</div>
                    <div className="text-[#666]">ゴールドマン・サックス証券退職</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2005年</div>
                    <div className="text-[#666]">第1回当選（東京都第29区）</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2009年</div>
                    <div className="text-[#666]">第2回当選</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2012年</div>
                    <div className="text-[#666]">第3回当選</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2014年</div>
                    <div className="text-[#666]">第4回当選</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2017年</div>
                    <div className="text-[#666]">第5回当選</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2021年</div>
                    <div className="text-[#666]">第6回当選</div>
                  </div>
                </div>
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
