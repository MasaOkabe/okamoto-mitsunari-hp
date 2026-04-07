import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  const newsItems = [
    { title: "各国大使と面談", date: "2026.03.26", image: "https://www.m-okamoto.jp/wp-content/uploads/2026/04/0-1-1024x768.jpg" },
    { title: "予算委員会質疑", date: "2026.02.27", image: "https://www.m-okamoto.jp/wp-content/uploads/2026/03/☆予算委員会_2-1024x683.jpeg" },
    { title: "新代表選出", date: "2026.02.13", image: "https://www.m-okamoto.jp/wp-content/uploads/2026/03/HBA69FpbsAAMsNy-1024x591.jpeg" },
    { title: "御礼", date: "2026.02.09", image: "https://www.m-okamoto.jp/wp-content/uploads/2021/10/ホームページ１枚目-中-1024x579.jpg" },
    { title: "中道改革連合", date: "2026.01.22", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/09/main-1-agenda-1-1024x579.png" },
    { title: "地元にて新年ご挨拶", date: "2026.01.06", image: "https://www.m-okamoto.jp/wp-content/uploads/2026/01/G993tijbcAQUirL.jpeg" },
  ];

  const achievementItems = [
    { title: "中小企業省力化投資補助金の創設", date: "2024.06", image: "https://www.m-okamoto.jp/wp-content/uploads/2024/09/ach_202406.jpg" },
    { title: "JR鉄道運賃割引制度の拡大", date: "2024.04", image: "https://www.m-okamoto.jp/wp-content/uploads/2024/09/ach_202404.jpg" },
    { title: "水害対策WEB会議", date: "2023.09", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/09/adachi-kikikankyouyuuwebkaigi.png" },
    { title: "スポーツ広場", date: "2023.07", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/IMG_1185-1024x768.jpeg" },
    { title: "ICカード障害者割引", date: "2023.07", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/IMG_1166.jpeg" },
    { title: "荒川河川敷に階段", date: "2023.07", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/IMG_1234-768x1024.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* Hero Section - Full width image, no overlay */}
      <section className="relative w-full overflow-hidden">
        <img
          src="https://www.m-okamoto.jp/wp-content/uploads/2026/02/header-main-visual_ver5-scaled.jpg"
          alt="日本を、もっと前へ。衆議院議員 岡本みつなり"
          className="w-full h-auto block"
        />
      </section>

      {/* Main Content - match SWELL layout: max-width 1296px, padding 48px */}
      <div className="max-w-[1296px] mx-auto px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Column - 818px equivalent */}
          <div className="flex-1 min-w-0">
            {/* Profile Section */}
            <section className="mb-16">
              <h2 className="section-heading">プロフィール</h2>
              <div className="bg-white border border-[#eeeeee] rounded overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8 p-8">
                  <div className="flex-shrink-0">
                    <img
                      src="https://www.m-okamoto.jp/wp-content/uploads/2021/08/diary_photo_default-400x400-1.jpg"
                      alt="岡本みつなり"
                      className="w-40 h-40 rounded object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-[#2054a8] mb-4">岡本みつなり</h3>
                    <div className="text-sm space-y-2 text-[#333] leading-relaxed">
                      <p><strong>生年月日：</strong> 1965年5月5日</p>
                      <p><strong>出身地：</strong> 佐賀県鳥栖市</p>
                      <p><strong>現在地：</strong> 東京都荒川区</p>
                      <p><strong>学歴：</strong> 創価大学卒業、英国グラスゴー大学留学、米国ケロッグ経営大学院修了(MBA)</p>
                      <p><strong>経歴：</strong> シティバンク、ゴールドマン・サックス証券</p>
                      <p><strong>家族：</strong> 妻と二女</p>
                    </div>
                    <Link href="/profile" className="inline-block mt-6 text-[#1176d4] font-bold hover:text-[#2054a8] transition">
                      詳細プロフィールへ →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* News Section - 3 columns on PC */}
            <section className="mb-16">
              <h2 className="section-heading">新着ニュース</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((item, idx) => (
                  <div key={idx} className="bg-white rounded overflow-hidden card-hover">
                    <div className="aspect-video overflow-hidden bg-[#f0f0f0]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-[#999] mb-2">{item.date}</p>
                      <h4 className="font-bold text-[#333] text-sm line-clamp-2">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link href="/news" className="btn-primary">
                  もっとみる
                </Link>
              </div>
            </section>

            {/* Achievements Section - 3 columns on PC */}
            <section className="mb-16">
              <h2 className="section-heading">実績</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievementItems.map((item, idx) => (
                  <div key={idx} className="bg-white rounded overflow-hidden card-hover">
                    <div className="aspect-video overflow-hidden bg-[#f0f0f0]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-[#999] mb-2">{item.date}</p>
                      <h4 className="font-bold text-[#333] text-sm line-clamp-2">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link href="/achievements" className="btn-primary">
                  もっと見る
                </Link>
              </div>
            </section>

            {/* YouTube Section */}
            <section className="mb-16">
              <h2 className="section-heading">岡本みつなりチャンネル</h2>
              <div className="bg-white border border-[#eeeeee] rounded p-8 text-center">
                <p className="text-[#666] mb-6">YouTubeで最新の活動をご覧いただけます</p>
                <a href="https://www.youtube.com/" className="inline-block bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 font-medium transition">
                  YouTubeをご覧になる
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar - 304px width */}
          <div className="w-full lg:w-[304px] flex-shrink-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
