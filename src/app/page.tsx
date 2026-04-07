import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  const newsItems = [
    { title: "各国大使と面談", date: "2026.04.03", image: "https://www.m-okamoto.jp/wp-content/uploads/2026/04/0-1-1024x768.jpg" },
    { title: "予算委員会質疑", date: "2026.03.20", image: "https://www.m-okamoto.jp/wp-content/uploads/2026/03/☆予算委員会_2-1024x683.jpeg" },
    { title: "新代表選出", date: "2026.03.15", image: "https://www.m-okamoto.jp/wp-content/uploads/2026/03/HBA69FpbsAAMsNy-1024x591.jpeg" },
    { title: "御礼", date: "2021.10.20", image: "https://www.m-okamoto.jp/wp-content/uploads/2021/10/ホームページ１枚目-中-1024x579.jpg" },
    { title: "中道改革連合", date: "2023.09.10", image: "https://www.m-okamoto.jp/wp-content/uploads/2023/09/main-1-agenda-1-1024x579.png" },
    { title: "地元にて新年ご挨拶", date: "2026.01.15", image: "https://www.m-okamoto.jp/wp-content/uploads/2026/01/G993tijbcAQUirL.jpeg" },
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
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
        <img
          src="https://www.m-okamoto.jp/wp-content/uploads/2026/02/header-main-visual_ver5-scaled.jpg"
          alt="日本を、もっと前へ。"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">日本を、もっと前へ。</h1>
            <p className="text-xl md:text-2xl">衆議院議員 岡本みつなり</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2">
            {/* Profile Section */}
            <section className="mb-12">
              <div className="section-heading">プロフィール</div>
              <div className="bg-white p-8 rounded">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <img
                      src="https://www.m-okamoto.jp/wp-content/uploads/2021/08/diary_photo_default-400x400-1.jpg"
                      alt="岡本みつなり"
                      className="w-40 h-40 rounded object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-[#2054a8] mb-4">岡本みつなり</h3>
                    <div className="text-sm space-y-2 text-[#333]">
                      <p><strong>生年月日：</strong> 1965年5月5日</p>
                      <p><strong>出身地：</strong> 佐賀県鳥栖市</p>
                      <p><strong>現在地：</strong> 東京都荒川区</p>
                      <p><strong>学歴：</strong> 創価大学卒業、英国グラスゴー大学留学、米国ケロッグ経営大学院修了(MBA)</p>
                      <p><strong>経歴：</strong> シティバンク、ゴールドマン・サックス証券</p>
                      <p><strong>家族：</strong> 妻と二女</p>
                    </div>
                    <Link href="/profile" className="inline-block mt-6 text-[#2054a8] font-bold hover:opacity-80">
                      詳細プロフィールへ →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* News Section */}
            <section className="mb-12">
              <div className="section-heading">新着ニュース</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsItems.map((item, idx) => (
                  <div key={idx} className="bg-white rounded overflow-hidden card-hover border border-[#eeeeee]">
                    <div className="aspect-video overflow-hidden bg-gray-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                      <h4 className="font-bold text-[#333] line-clamp-2 mb-2">{item.title}</h4>
                      <Link href="#" className="text-[#2054a8] text-sm font-medium hover:opacity-80">
                        詳しく読む →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/news" className="inline-block bg-[#2054a8] text-white px-6 py-2 rounded hover:opacity-90 font-medium">
                  もっとみる
                </Link>
              </div>
            </section>

            {/* Achievements Section */}
            <section className="mb-12">
              <div className="section-heading">実績</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievementItems.map((item, idx) => (
                  <div key={idx} className="bg-white rounded overflow-hidden card-hover border border-[#eeeeee]">
                    <div className="aspect-video overflow-hidden bg-gray-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                      <h4 className="font-bold text-[#333] line-clamp-2 mb-2">{item.title}</h4>
                      <Link href="#" className="text-[#2054a8] text-sm font-medium hover:opacity-80">
                        詳しく見る →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/achievements" className="inline-block bg-[#2054a8] text-white px-6 py-2 rounded hover:opacity-90 font-medium">
                  もっと見る
                </Link>
              </div>
            </section>

            {/* YouTube Section */}
            <section className="mb-12">
              <div className="section-heading">岡本みつなりチャンネル</div>
              <div className="bg-white p-8 rounded text-center">
                <p className="text-gray-600 mb-4">YouTubeで最新の活動をご覧いただけます</p>
                <a href="#" className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:opacity-90 font-medium">
                  YouTubeをご覧になる
                </a>
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
