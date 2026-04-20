import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  const newsItems = [
    { title: "各国大使と面談", date: "2026年3月26日", image: "https://www.m-okamoto.jp/wp-content/uploads/2026/04/0-1-1024x768.jpg" },
    { title: "予算委員会質疑", date: "2026年2月27日", image: "https://www.m-okamoto.jp/wp-content/uploads/2026/03/☆予算委員会_2-1024x683.jpeg" },
    { title: "新代表選出", date: "2026年2月13日", image: "https://www.m-okamoto.jp/wp-content/uploads/2026/03/HBA69FpbsAAMsNy-1024x591.jpeg" },
    { title: "御礼", date: "2026年2月9日", image: "https://www.m-okamoto.jp/wp-content/uploads/2021/10/ホームページ１枚目-中-1024x579.jpg" },
    { title: "中道改革連合", date: "2026年1月22日", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/09/main-1-agenda-1-1024x579.png" },
    { title: "地元にて新年ご挨拶", date: "2026年1月6日", image: "https://www.m-okamoto.jp/wp-content/uploads/2026/01/G993tijbcAQUirL.jpeg" },
  ];

  const achievementItems = [
    { title: "「中小企業省力化投資補助金」の創設を実現", date: "2024年6月25日", image: "https://www.m-okamoto.jp/wp-content/uploads/2024/09/ach_202406.jpg" },
    { title: "JRなど鉄道各社の運賃割引制度を精神障がい者までの拡大を実現", date: "2024年4月11日", image: "https://www.m-okamoto.jp/wp-content/uploads/2024/09/ach_202404.jpg" },
    { title: "安心して暮らせる地域づくり。足立区の水害対策で危機感共有WEB会議を導入", date: "2023年12月7日", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/09/adachi-kikikankyouyuuwebkaigi.png" },
    { title: "河川敷を活用したスポーツ広場開設を推進", date: "2023年7月14日", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/IMG_1185-1024x768.jpeg" },
    { title: "交通系ICカード（Suica、PASMO）の障害者割引適用を実現", date: "2023年3月14日", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/IMG_1166.jpeg" },
    { title: "板橋区新河岸地域の荒川河川敷に階段設置", date: "2023年1月15日", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/IMG_1234-768x1024.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* Hero Section - Full width image */}
      <section className="relative w-full overflow-hidden">
        <img
          src="https://www.m-okamoto.jp/wp-content/uploads/2026/02/header-main-visual_ver5-scaled.jpg"
          alt="日本を、もっと前へ。衆議院議員 岡本みつなり"
          className="w-full h-auto block"
        />
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: '1296px', margin: '0 auto', padding: '64px 48px 0px' }}>
        <div className="flex flex-col lg:flex-row" style={{ gap: '0' }}>
          {/* Main Column */}
          <div className="flex-1 min-w-0" style={{ marginRight: '76px' }}>

            {/* Profile Section */}
            <section style={{ marginBottom: '64px' }}>
              <h2 className="section-heading">プロフィール</h2>

              {/* Profile Card - 2 columns: photo left 33%, text right */}
              <div className="flex flex-col md:flex-row" style={{ backgroundColor: '#f3f8fd', padding: '25.5px', gap: '25.5px', marginBottom: '0' }}>
                {/* Photo column - 33% */}
                <div style={{ flexBasis: '33.33%', flexShrink: 0 }}>
                  <img
                    src="https://www.m-okamoto.jp/wp-content/uploads/2021/08/diary_photo_default-400x400-1.jpg"
                    alt="岡本みつなり"
                    className="w-full h-auto block"
                    style={{ border: '1px solid #ddd' }}
                  />
                </div>
                {/* Text column */}
                <div className="flex-1">
                  <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333', marginBottom: '8px' }}>
                    <strong>岡本みつなり</strong>
                  </p>
                  <p style={{ fontSize: '15.4px', lineHeight: 2, color: '#333' }}>
                    誕生日：1965年5月5日<br />
                    最終学歴：米国・ケロッグ経営大学院（経営学修士）<br />
                    出身：佐賀県鳥栖市<br />
                    家族：妻と二女
                  </p>
                </div>
              </div>

              {/* Career section */}
              <div style={{ marginTop: '24px', marginBottom: '24px' }}>
                <p style={{ fontSize: '15.4px', lineHeight: 1.8, color: '#333', marginBottom: '8px' }}>
                  <strong>略歴</strong>
                </p>
                <div style={{ fontSize: '15.4px', lineHeight: 2.2, color: '#333' }}>
                  <p>1965年　5月5日生まれ</p>
                  <p>1988年　英国グラスゴー大学留学</p>
                  <p>1989年　創価大学卒業</p>
                  <p>1989年　シティバンク勤務</p>
                  <p>1998年　米国ケロッグ経営大学院修了 経営学修士号取得</p>
                  <p>1998年　ゴールドマン・サックス証券勤務</p>
                  <p>2012年　衆議院議員に初当選（比例北関東ブロック）</p>
                  <p>2017年　外務大臣政務官（～2018年9月）</p>
                  <p>2019年　党国土交通部会長、衆議院国土交通委員会理事（〜2021年10月）</p>
                  <p>2020年　党新型コロナウイルス感染症　対策本部副本部長</p>
                  <p>2021年　衆議院議員4期目に当選（東京12区）</p>
                  <p>2021年　財務副大臣（〜2022年8月）</p>
                  <p>2023年　衆議院経済産業委員長（〜2024年9月）</p>
                  <p>2024年　党政務調査会長、党東京都本部代表（9月〜2026年1月）</p>
                  <p>2024年　衆議院議員5期目に当選（東京29区）</p>
                  <p>2026年1月　中道改革連合の結成に参加</p>
                </div>
              </div>

              {/* Profile button */}
              <div className="text-center" style={{ marginTop: '32px' }}>
                <Link href="/profile" className="swell-block-btn">
                  詳細プロフィールへ
                </Link>
              </div>
            </section>

            {/* News Section */}
            <section style={{ marginBottom: '64px' }}>
              <h2 className="section-heading">新着ニュース</h2>
              <div className="flex flex-wrap" style={{ margin: '0 -10px' }}>
                {newsItems.map((item, idx) => (
                  <div key={idx} style={{ width: 'calc(33.333% - 20px)', margin: '0 10px 42px' }}>
                    <Link href="/news" className="block group">
                      <div className="overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full object-cover group-hover:opacity-80 transition"
                          style={{ height: '211px' }}
                        />
                      </div>
                      <div style={{ padding: '17px 0 0' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: 700, lineHeight: '24px', color: '#333', marginBottom: '0' }} className="group-hover:text-[#2054a8] transition">
                          {item.title}
                        </h3>
                        <div style={{ marginTop: '8px' }}>
                          <time style={{ fontSize: '11px', color: '#333' }}>{item.date}</time>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="text-center" style={{ marginTop: '0px' }}>
                <Link href="/news" className="more-btn">
                  もっとみる
                </Link>
              </div>
            </section>

            {/* Achievements Section */}
            <section style={{ marginBottom: '64px' }}>
              <h2 className="section-heading">実績</h2>
              <div className="flex flex-wrap" style={{ margin: '0 -10px' }}>
                {achievementItems.map((item, idx) => (
                  <div key={idx} style={{ width: 'calc(33.333% - 20px)', margin: '0 10px 42px' }}>
                    <Link href="/achievements" className="block group">
                      <div className="overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full object-cover group-hover:opacity-80 transition"
                          style={{ height: '211px' }}
                        />
                      </div>
                      <div style={{ padding: '17px 0 0' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: 700, lineHeight: '24px', color: '#333', marginBottom: '0' }} className="group-hover:text-[#2054a8] transition">
                          {item.title}
                        </h3>
                        <div style={{ marginTop: '8px' }}>
                          <time style={{ fontSize: '11px', color: '#333' }}>{item.date}</time>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="text-center" style={{ marginTop: '0px' }}>
                <Link href="/achievements" className="more-btn">
                  もっと見る
                </Link>
              </div>
            </section>

            {/* 深夜ライブ Banner Section */}
            <section style={{ marginBottom: '64px' }}>
              <h2 className="section-heading">岡本みつなりチャンネル</h2>
              {/* Live Thumbnail Banner */}
              <a
                href="https://www.youtube.com/@TheOfficeMO"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                style={{ marginBottom: '24px' }}
              >
                <div className="overflow-hidden" style={{ borderRadius: '4px' }}>
                  <img
                    src="/okamoto-live.jpg"
                    alt="岡本みつなりの深夜ライブ Vol.1 - 2026/4/24(金) 22:00 ON AIR"
                    className="w-full h-auto block group-hover:opacity-90 transition"
                  />
                </div>
                <p style={{
                  fontSize: '15.4px',
                  color: '#333',
                  marginTop: '12px',
                  lineHeight: 1.6,
                }}>
                  <span style={{ fontWeight: 700, color: '#2054a8' }}>元ゴールドマンサックス 衆議院議員</span>
                  <span style={{ marginLeft: '8px' }}>岡本みつなりの深夜ライブ</span>
                </p>
              </a>
              <div className="text-center" style={{ padding: '16px 0' }}>
                <a
                  href="https://www.youtube.com/@TheOfficeMO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swell-block-btn"
                >
                  岡本みつなりチャンネル
                </a>
              </div>
            </section>
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
