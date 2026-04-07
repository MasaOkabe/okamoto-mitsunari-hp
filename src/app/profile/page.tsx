import { Sidebar } from "@/components/Sidebar";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "プロフィール - 衆議院議員 岡本みつなり",
};

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <Breadcrumb items={[{ label: 'プロフィール' }]} />

      <div style={{ maxWidth: '1296px', margin: '0 auto', padding: '64px 48px 0px' }}>
        <div className="flex flex-col lg:flex-row" style={{ gap: '0' }}>
          <div className="flex-1 min-w-0" style={{ marginRight: '76px' }}>
            <PageTitle title="プロフィール" />

            {/* Profile Card - matching original layout: name+info left, photo right */}
            <div className="bg-[#f7f7f7] rounded" style={{ padding: '40px', marginBottom: '64px' }}>
              <div className="flex flex-col md:flex-row" style={{ gap: '32px' }}>
                {/* Text info */}
                <div className="flex-1">
                  <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#333', marginBottom: '24px' }}>岡本みつなり</h2>
                  <div style={{ fontSize: '16px', lineHeight: 2, color: '#333' }}>
                    <p>誕生日：1965年5月5日</p>
                    <p>最終学歴：米国・ケロッグ経営大学院（経営学修士）</p>
                    <p>出身：佐賀県鳥栖市</p>
                    <p>住まい：東京都荒川区</p>
                    <p>家族：妻と二女</p>
                  </div>
                </div>
                {/* Photo */}
                <div className="flex-shrink-0">
                  <img
                    src="http://www.m-okamoto.jp/wp-content/uploads/2023/11/profile.jpg"
                    alt="岡本みつなり"
                    style={{ width: '270px', height: '270px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                </div>
              </div>
            </div>

            {/* 三要素 */}
            <h2 className="section-heading">岡本みつなりの三要素</h2>

            {/* Element I */}
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                paddingBottom: '11px',
                borderBottom: '2px solid #2054a8',
                marginBottom: '24px',
                color: '#333',
              }}>
                Ⅰ．鋭敏な国際感覚
              </h3>

              {/* Image */}
              <div style={{ marginBottom: '24px' }}>
                <img
                  src="http://www.m-okamoto.jp/wp-content/uploads/2023/11/canada-japan-3-1024x512.png"
                  alt="国際感覚"
                  className="w-full"
                  style={{ height: 'auto' }}
                />
              </div>

              <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333', marginBottom: '16px' }}>
                幼少期の夢は、「世界をまたにかける男になる」― 佐賀県に生まれ育った岡本は、大学時代に英国へ留学。卒業後、シティバンクに就職したのち、米国の大学院へ進学。経営学修士号を取得後に、ゴールドマン・サックス証券に就職しました。
              </p>
              <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333', marginBottom: '16px' }}>
                金融マンとして、ニューヨークやロンドンなど海外の諸都市に勤務し、公的セクターの財務アドバイザーなどとして活躍。
              </p>
              <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333' }}>
                国際金融の最前線で培った鋭敏な知識・経験・ネットワークは、国会議員になった今、これまで以上に役立っています。
              </p>
            </div>

            {/* Element II */}
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                paddingBottom: '11px',
                borderBottom: '2px solid #2054a8',
                marginBottom: '24px',
                color: '#333',
              }}>
                Ⅱ．堅実、そして公正な価値観
              </h3>

              <div style={{ marginBottom: '24px' }}>
                <img
                  src="http://www.m-okamoto.jp/wp-content/uploads/2023/11/yosaniinkai-1024x555.png"
                  alt="堅実な価値観"
                  className="w-full"
                  style={{ height: 'auto' }}
                />
              </div>

              <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333', marginBottom: '16px' }}>
                実家は小さな建設会社。岡本の土台となっている堅実な経済感覚は、少年時代から、岡本の根幹に培われてきました。
              </p>
              <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333', marginBottom: '16px' }}>
                社会人として、会社で責任ある立場になってからは、「多様性こそが成功のカギ」との信条で、性別や人種の違いにとらわれることなく、有能な人材を積極的に登用。常に業界随一の業績を叩き出しました。
              </p>
              <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333' }}>
                地に足の着いた価値観――それが岡本の魅力です。
              </p>
            </div>

            {/* Element III */}
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                paddingBottom: '11px',
                borderBottom: '2px solid #2054a8',
                marginBottom: '24px',
                color: '#333',
              }}>
                Ⅲ．社会貢献への決意
              </h3>

              <div style={{ marginBottom: '24px' }}>
                <img
                  src="http://www.m-okamoto.jp/wp-content/uploads/2021/04/profile_career2.jpg"
                  alt="社会貢献への決意"
                  className="w-full"
                  style={{ height: 'auto' }}
                />
              </div>

              <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333', marginBottom: '16px' }}>
                なぜ、日本の国政に取り組むのか――それは、平和の党・公明党の立党精神「大衆とともに」に、心から賛同したからです。
              </p>
              <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333', marginBottom: '16px' }}>
                生まれ育った佐賀から、世界へ活躍の場を広げ、国際金融の最前線で活躍していた岡本は、米国同時多発テロ等も経験し、日本の明るい未来と、世界平和の構築のため、国会議員になる事を決意しました。
              </p>
              <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333' }}>
                2012年12月の衆議院議員選挙に公明党（比例区北関東ブロック）候補として立候補し、初当選し、現在4期目です。
              </p>
            </div>

            {/* 経歴 */}
            <h2 className="section-heading">経歴</h2>
            <div style={{ fontSize: '15.4px', lineHeight: 2.2, color: '#333', marginBottom: '64px' }}>
              <p>1965年　5月5日生まれ</p>
              <p>1988年　英国グラスゴー大学留学</p>
              <p>1989年　創価大学卒業</p>
              <p>1989年　シティバンク勤務</p>
              <p>1998年　米国ケロッグ経営大学院修了 経営学修士号取得</p>
              <p>1998年　ゴールドマン・サックス証券勤務</p>
              <p>2012年　衆議院議員に初当選（比例北関東ブロック）</p>
              <p>2017年　外務大臣政務官（～2018年9月）</p>
              <p>2019年　党国土交通部会長、衆議院国土交通委員会理事（〜2021年10月）</p>
              <p>2021年　衆議院議員に4期目の当選（東京29区）</p>
              <p>2021年　衆議院財務金融委員会理事（～2024年10月）</p>
              <p>2024年　衆議院議院運営委員会理事</p>
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
