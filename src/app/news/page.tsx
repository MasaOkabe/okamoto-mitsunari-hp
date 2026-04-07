import { Sidebar } from "@/components/Sidebar";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "ニュース一覧 - 衆議院議員 岡本みつなり",
};

const newsItems = [
  {
    title: "各国大使と面談",
    date: "2026年3月26日",
    category: "その他",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2026/04/0-1-1024x768.jpg",
    excerpt: "イラン、ヨルダン、イスラエルなど各国大使と面談をし、昨今の情勢について意見交換をしました。",
  },
  {
    title: "予算委員会質疑",
    date: "2026年2月27日",
    category: "その他",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2026/03/☆予算委員会_2-1024x683.jpeg",
    excerpt: "予算委員会で質疑に立ち、日本の課題と今後の方向性について主に三点を指摘しました。",
  },
  {
    title: "新代表選出",
    date: "2026年2月13日",
    category: "政策",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2026/03/HBA69FpbsAAMsNy-1024x591.jpeg",
    excerpt: "小川新代表のもと団結して、国民の皆様が望まれる形で社会を前に進めるために、全力で働きます。",
  },
  {
    title: "御礼",
    date: "2026年2月9日",
    category: "選挙",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2021/10/ホームページ１枚目-中-1024x579.jpg",
    excerpt: "総選挙の開票が全て終了いたしました。厳しい寒さ、また地域によっては大雪の中で、力強く支えてくださった支持者、スタッフの皆様に心より御礼申し上げます。",
  },
  {
    title: "中道改革連合",
    date: "2026年1月22日",
    category: "その他",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2023/09/main-1-agenda-1-1024x579.png",
    excerpt: "昨日、13年間お世話になりました公明党を離党いたしました。初当選以来支えて頂きました支援者の皆さん、参議院や地方自治体の議員の皆さんに感謝申し上げます。",
  },
  {
    title: "地元にて新年ご挨拶",
    date: "2026年1月6日",
    category: "地元",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2026/01/G993tijbcAQUirL.jpeg",
    excerpt: "地元、荒川区・足立区の賀詞交歓会に参加。地域リーダーの方々との連携を密にし、今年一年、住民の皆さまのお役に立てるよう全力で取り組みます。",
  },
  {
    title: "新春街頭演説会",
    date: "2026年1月2日",
    category: "政策",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2026/01/G9o5s_xaMAQQGEr-1024x683.jpeg",
    excerpt: "新春街頭演説会を、池袋駅前にて行わせていただきました。ジャパン・ファンド（政府系ファンド）創設のための、基本法制定に向けて全力で取り組みます。",
  },
  {
    title: "地元行事参加",
    date: "2025年12月21日",
    category: "地元",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2026/01/G8rPKs7bMAU4whC.jpeg",
    excerpt: "年末は、恒例の餅つきが地元各地で開催され、参加させていただきました！",
  },
  {
    title: "令和７年青森県東方沖を震源とする地震災害対策本部",
    date: "2025年12月9日",
    category: "政策",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2025/12/20251210_01.jpg",
    excerpt: "政府から被災状況や初動対応について説明を受け、万全な対策を講じるよう求めました。",
  },
  {
    title: "東京デフリンピック開幕！",
    date: "2025年11月15日",
    category: "政策",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2025/11/Fk9CORbc-1024x683.jpeg",
    excerpt: "耳の聞こえない・聞こえにくい人の国際スポーツ大会「デフリンピック」。日本初開催で100周年の記念となる「東京2025デフリンピック」が開幕しました。",
  },
  {
    title: '「私たちだって\u201Cいいふうふ\u201Dになりたい展in国会議員会館2025」',
    date: "2025年11月12日",
    category: "政策",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2025/11/S__131801109-1024x768.jpg",
    excerpt: '婚姻の平等についての理解促進のために開催された、「私たちだって\u201Cいいふうふ\u201Dになりたい展in国会議員会館2025」を見学しました。',
  },
  {
    title: "予算委員会で質問",
    date: "2025年11月11日",
    category: "政策",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2025/11/写真-2025-11-11-13-44-13-1024x768.jpg",
    excerpt: "11月11日の衆議院予算委員会で、質問に立ち、政府系ファンドの創設や物価高対策など、国民生活に直結する課題について提案しました。",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <Breadcrumb items={[{ label: 'ニュース一覧' }]} />

      <div style={{ maxWidth: '1296px', margin: '0 auto', padding: '64px 48px 0px' }}>
        <div className="flex flex-col lg:flex-row" style={{ gap: '0' }}>
          <div className="flex-1 min-w-0" style={{ marginRight: '76px' }}>
            <PageTitle title="ニュース一覧" />

            {/* Post List - 3 column card layout matching SWELL */}
            <div className="flex flex-wrap" style={{ gap: '0', justifyContent: 'flex-start' }}>
              {newsItems.map((item, idx) => (
                <div key={idx} style={{ width: 'calc(33.333% - 16px)', marginRight: idx % 3 === 2 ? '0' : '24px', marginBottom: '40px' }}>
                  <a href="#" className="block group">
                    {/* Thumbnail */}
                    <div className="overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full object-cover group-hover:opacity-80 transition"
                        style={{ height: '221px' }}
                      />
                      {/* Category badge */}
                      <span style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        backgroundColor: '#2054a8',
                        color: '#fff',
                        fontSize: '11px',
                        padding: '0px 8px',
                        lineHeight: '24px',
                      }}>
                        {item.category}
                      </span>
                    </div>
                    {/* Body */}
                    <div style={{ padding: '16px 0 0' }}>
                      <h2 style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        lineHeight: '24px',
                        color: '#333',
                        marginBottom: '0',
                      }} className="group-hover:text-[#2054a8] transition">
                        {item.title}
                      </h2>
                      <p style={{
                        fontSize: '13px',
                        lineHeight: '19.5px',
                        color: '#333',
                        marginTop: '8px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical' as const,
                        overflow: 'hidden',
                      }}>
                        {item.excerpt}
                      </p>
                      <div style={{ marginTop: '8px' }}>
                        <time style={{ fontSize: '11px', color: '#333' }}>{item.date}</time>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
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
