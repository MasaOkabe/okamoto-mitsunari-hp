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
    { title: "「中小企業省力化投資補助金」の創設を実現", date: "2024年6月", image: "https://www.m-okamoto.jp/wp-content/uploads/2024/06/IMG_4614-1024x768.jpeg" },
    { title: "JRなど鉄道各社の運賃割引制度を精神障がい者までの拡大を実現", date: "2024年4月", image: "https://www.m-okamoto.jp/wp-content/uploads/2024/04/IMG_3655-1024x768.jpeg" },
    { title: "安心して暮らせる地域づくり。足立区の水害対策で危機感共有WEB会議を導入", date: "2023年12月", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/09/adachi-kikikankyouyuuwebkaigi.png" },
    { title: "河川敷を活用したスポーツ広場開設を推進", date: "2023年7月", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/IMG_1185-1024x768.jpeg" },
    { title: "交通系ICカード（Suica、PASMO）の障害者割引適用を実現", date: "2023年3月", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/IMG_1166.jpeg" },
    { title: "板橋区新河岸地域の荒川河川敷に階段設置", date: "2023年1月", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/IMG_1234-768x1024.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* Hero Section - Full width image (text is part of the image) */}
      <section className="relative w-full overflow-hidden">
        <img
          src="https://www.m-okamoto.jp/wp-content/uploads/2026/02/header-main-visual_ver5-scaled.jpg"
          alt="日本を、もっと前へ。衆議院議員 岡本みつなり"
          className="w-full h-auto block"
        />
      </section>

      {/* Main Content - match SWELL layout: padding 64px 48px 0px */}
      <div style={{ maxWidth: '1296px', margin: '0 auto', padding: '64px 48px 0px' }}>
        <div className="flex flex-col lg:flex-row" style={{ gap: '0' }}>
          {/* Main Column - 818px equivalent */}
          <div className="flex-1 min-w-0" style={{ marginRight: '76px' }}>
            {/* Profile Section */}
            <section style={{ marginBottom: '64px' }}>
              <h2 className="section-heading">プロフィール</h2>
              <div className="bg-white border border-[#eeeeee] rounded overflow-hidden">
                <div className="flex flex-col md:flex-row" style={{ gap: '32px', padding: '32px' }}>
                  <div className="flex-shrink-0">
                    <img
                      src="https://www.m-okamoto.jp/wp-content/uploads/2021/08/diary_photo_default-400x400-1.jpg"
                      alt="岡本みつなり"
                      className="object-cover rounded"
                      style={{ width: '160px', height: '160px' }}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-[#2054a8]" style={{ fontSize: '20px', marginBottom: '16px' }}>岡本みつなり</h3>
                    <div className="text-[#333] leading-relaxed" style={{ fontSize: '14px' }}>
                      <p style={{ marginBottom: '8px' }}><strong>生年月日：</strong> 1965年5月5日</p>
                      <p style={{ marginBottom: '8px' }}><strong>出身地：</strong> 佐賀県鳥栖市</p>
                      <p style={{ marginBottom: '8px' }}><strong>現在地：</strong> 東京都荒川区</p>
                      <p style={{ marginBottom: '8px' }}><strong>学歴：</strong> 創価大学卒業、英国グラスゴー大学留学、米国ケロッグ経営大学院修了(MBA)</p>
                      <p style={{ marginBottom: '8px' }}><strong>経歴：</strong> シティバンク、ゴールドマン・サックス証券</p>
                      <p><strong>家族：</strong> 妻と二女</p>
                    </div>
                    <div style={{ marginTop: '24px' }}>
                      <Link href="/profile" className="swell-btn">
                        詳細プロフィールへ
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* News Section - SWELL flex layout with 3 columns */}
            <section style={{ marginBottom: '64px' }}>
              <h2 className="section-heading">新着ニュース</h2>
              <div className="flex flex-wrap" style={{ margin: '0 -10px' }}>
                {newsItems.map((item, idx) => (
                  <div key={idx} style={{ width: 'calc(33.333% - 20px)', margin: '0 10px 20px' }}>
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
                        <h3 className="font-bold text-[#333] group-hover:text-[#2054a8] transition" style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '8px' }}>{item.title}</h3>
                        <time className="text-[#999]" style={{ fontSize: '13px' }}>{item.date}</time>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="text-center" style={{ marginTop: '40px' }}>
                <Link href="/news" className="swell-btn">
                  もっとみる
                </Link>
              </div>
            </section>

            {/* Achievements Section - Same 3-column layout */}
            <section style={{ marginBottom: '64px' }}>
              <h2 className="section-heading">実績</h2>
              <div className="flex flex-wrap" style={{ margin: '0 -10px' }}>
                {achievementItems.map((item, idx) => (
                  <div key={idx} style={{ width: 'calc(33.333% - 20px)', margin: '0 10px 20px' }}>
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
                        <h3 className="font-bold text-[#333] group-hover:text-[#2054a8] transition" style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '8px' }}>{item.title}</h3>
                        <time className="text-[#999]" style={{ fontSize: '13px' }}>{item.date}</time>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="text-center" style={{ marginTop: '40px' }}>
                <Link href="/achievements" className="swell-btn">
                  もっと見る
                </Link>
              </div>
            </section>

            {/* YouTube Section */}
            <section style={{ marginBottom: '64px' }}>
              <h2 className="section-heading">岡本みつなりチャンネル</h2>
              <div className="text-center" style={{ padding: '32px 0' }}>
                <a href="https://www.youtube.com/channel/UCU09evAyoTH4HYC4e1S5qtA" target="_blank" rel="noopener noreferrer" className="swell-btn" style={{ backgroundColor: '#c00', borderColor: '#c00' }}>
                  岡本みつなりチャンネル
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar - 304px width */}
          <div className="flex-shrink-0" style={{ width: '304px' }}>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
