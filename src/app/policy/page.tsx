import { Sidebar } from "@/components/Sidebar";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "目指す政策 - 衆議院議員 岡本みつなり",
};

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <Breadcrumb items={[{ label: '目指す政策' }]} />

      <div style={{ maxWidth: '1296px', margin: '0 auto', padding: '64px 48px 0px' }}>
        <div className="flex flex-col lg:flex-row" style={{ gap: '0' }}>
          {/* Main Column */}
          <div className="flex-1 min-w-0" style={{ marginRight: '76px' }}>
            <PageTitle title="目指す政策" />

            {/* 3つの挑戦 */}
            <h2 className="section-heading">岡本みつなり「3つの挑戦」</h2>

            {/* Challenge 1 */}
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                paddingBottom: '11px',
                borderBottom: '2px solid #2054a8',
                marginBottom: '24px',
                color: '#333',
              }}>
                1. あなたを、もっと笑顔に！全世代型社会保障への転換！
              </h3>
              <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333', marginBottom: '16px' }}>
                高齢者数がピークを迎える2040年を見据え、子育て支援の大幅な拡充をはじめ、子どもから高齢者まで誰もが安心して暮らせる「持続可能な全世代型社会保障」の構築を目指します。
              </p>
              <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333' }}>
                また、多様性を尊重する社会の実現に向け、若者支援や女性の視点での働き方改革、公共施設等の更なるバリアフリー化などを推進します。
              </p>
            </div>

            {/* Challenge 2 */}
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                paddingBottom: '11px',
                borderBottom: '2px solid #2054a8',
                marginBottom: '24px',
                color: '#333',
              }}>
                2. 地域に、もっと安心を！日本を「防災先進国」に！
              </h3>
              <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333' }}>
                防災先進国を築くため、防災・減災を社会の主流に押し上げます。大規模水害から首都圏を守るため、荒川調節池の整備事業に力を注ぎ、国や自治体と連携して水害対策、電柱地中化などに全力をあげます。また、延焼リスクの高い木密地域の火災対策にも取り組みます。
              </p>
            </div>

            {/* Challenge 3 */}
            <div style={{ marginBottom: '64px' }}>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                paddingBottom: '11px',
                borderBottom: '2px solid #2054a8',
                marginBottom: '24px',
                color: '#333',
              }}>
                3. 暮らしを、もっと豊かに！地域の潜在力を引き出し経済再生！
              </h3>
              <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333' }}>
                党・新型コロナ対策本部副本部長として、一律10万円の給付の実現やコロナ禍での持続化給付金（最大200万円）などを実現。引き続き、物価高対策や、日本の中小企業を元気にする取り組みを加速させます。
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex-shrink-0" style={{ width: '304px' }}>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
