import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Hero Section with Profile Photo */}
            <section className="mb-12">
              <div className="bg-white rounded overflow-hidden">
                <img
                  src="https://www.m-okamoto.jp/wp-content/uploads/2023/11/profile.jpg"
                  alt="岡本みつなり"
                  className="w-full h-96 object-cover"
                />
              </div>
            </section>

            {/* Basic Info */}
            <section className="mb-12">
              <div className="section-heading">基本情報</div>
              <div className="bg-white p-8 rounded">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-[#eeeeee]">
                      <td className="font-bold py-3 pr-4 w-32">氏名</td>
                      <td className="py-3">岡本みつなり（岡本三成）</td>
                    </tr>
                    <tr className="border-b border-[#eeeeee]">
                      <td className="font-bold py-3 pr-4">生年月日</td>
                      <td className="py-3">1965年5月5日（58歳）</td>
                    </tr>
                    <tr className="border-b border-[#eeeeee]">
                      <td className="font-bold py-3 pr-4">出身地</td>
                      <td className="py-3">佐賀県鳥栖市</td>
                    </tr>
                    <tr className="border-b border-[#eeeeee]">
                      <td className="font-bold py-3 pr-4">現在地</td>
                      <td className="py-3">東京都荒川区</td>
                    </tr>
                    <tr className="border-b border-[#eeeeee]">
                      <td className="font-bold py-3 pr-4">家族</td>
                      <td className="py-3">妻と二女</td>
                    </tr>
                    <tr className="border-b border-[#eeeeee]">
                      <td className="font-bold py-3 pr-4">選挙区</td>
                      <td className="py-3">東京都第29区（荒川区・足立区北部）</td>
                    </tr>
                    <tr>
                      <td className="font-bold py-3 pr-4">当選回数</td>
                      <td className="py-3">6期</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Education */}
            <section className="mb-12">
              <div className="section-heading">学歴</div>
              <div className="bg-white p-8 rounded space-y-4">
                <div>
                  <p className="font-bold">創価大学卒業</p>
                  <p className="text-gray-600">1984年～1988年</p>
                </div>
                <div className="border-t border-[#eeeeee] pt-4">
                  <p className="font-bold">英国グラスゴー大学留学</p>
                  <p className="text-gray-600">1988年～1989年</p>
                </div>
                <div className="border-t border-[#eeeeee] pt-4">
                  <p className="font-bold">米国ケロッグ経営大学院修了（MBA）</p>
                  <p className="text-gray-600">2001年～2003年</p>
                </div>
              </div>
            </section>

            {/* Career */}
            <section className="mb-12">
              <div className="section-heading">職歴</div>
              <div className="bg-white p-8 rounded space-y-4">
                <div>
                  <p className="font-bold">シティバンク</p>
                  <p className="text-gray-600">1988年～1998年</p>
                  <p className="text-sm text-gray-500">東京支店、NY支店、シンガポール支店に勤務</p>
                </div>
                <div className="border-t border-[#eeeeee] pt-4">
                  <p className="font-bold">ゴールドマン・サックス証券</p>
                  <p className="text-gray-600">1998年～2003年</p>
                  <p className="text-sm text-gray-500">インベストメント・バンキング部門</p>
                </div>
              </div>
            </section>

            {/* Core Values */}
            <section className="mb-12">
              <div className="section-heading">三つの信念</div>
              <div className="space-y-6">
                {/* Value 1 */}
                <div className="bg-white rounded overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6 p-8">
                    <div className="flex-shrink-0 w-full md:w-48">
                      <img
                        src="https://www.m-okamoto.jp/wp-content/uploads/2023/11/canada-japan-3-1024x512.png"
                        alt="世界で培った国際感覚"
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2054a8] mb-3">世界で培った国際感覚</h3>
                      <p className="text-gray-700 text-sm">
                        シティバンク、ゴールドマン・サックス証券での勤務を通じて、世界の金融市場を見つめてきました。国連改革、グローバルヘルス、核融合エネルギーなど、日本と世界の繋がりを強く意識した政策を推進します。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="bg-white rounded overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6 p-8">
                    <div className="flex-shrink-0 w-full md:w-48">
                      <img
                        src="https://www.m-okamoto.jp/wp-content/uploads/2021/04/profile_career2.jpg"
                        alt="堅実な価値観"
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2054a8] mb-3">堅実な価値観</h3>
                      <p className="text-gray-700 text-sm">
                        経営大学院で学んだ論理的思考と金融現場での経験を基に、確実で持続可能な政策立案を心がけています。NISA・iDeCo拡充、最低賃金引き上げなど、庶民の安定的な資産形成と生活向上を支援します。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="bg-white rounded overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6 p-8">
                    <div className="flex-shrink-0 w-full md:w-48">
                      <div className="w-full h-32 bg-[#2054a8] rounded flex items-center justify-center text-white font-bold text-center px-4">
                        社会貢献への想い
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2054a8] mb-3">社会貢献</h3>
                      <p className="text-gray-700 text-sm">
                        政治家としての使命は、一人ひとりの人生を豊かにすること。荒川河川敷に階段を整備、聴覚障害者支援、スポーツ広場の開設など、地元での活動を大切にしています。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Timeline */}
            <section className="mb-12">
              <div className="section-heading">経歴・当選履歴</div>
              <div className="bg-white p-8 rounded">
                <div className="space-y-4 text-sm">
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">1965年</div>
                    <div>誕生</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">1988年</div>
                    <div>創価大学卒業、シティバンク入行</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2001年</div>
                    <div>ケロッグ経営大学院入学（MBA取得）</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2003年</div>
                    <div>ゴールドマン・サックス証券退職</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2005年</div>
                    <div>第1回当選（東京都第29区）</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2009年</div>
                    <div>第2回当選</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2012年</div>
                    <div>第3回当選</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2014年</div>
                    <div>第4回当選</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2017年</div>
                    <div>第5回当選</div>
                  </div>
                  <div className="flex gap-4 border-l-2 border-[#2054a8] pl-4">
                    <div className="font-bold text-[#2054a8] min-w-max">2021年</div>
                    <div>第6回当選</div>
                  </div>
                </div>
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
