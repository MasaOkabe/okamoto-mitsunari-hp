import { Sidebar } from "@/components/Sidebar";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageTitle } from "@/components/PageTitle";

export const metadata = {
  title: "実績 - 衆議院議員 岡本みつなり",
};

const achievementItems = [
  {
    title: "「中小企業省力化投資補助金」の創設を実現",
    date: "2024年6月25日",
    category: "実績",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2024/09/ach_202406.jpg",
    excerpt: "中小企業の人手不足を解消し、売り上げの拡大や生産性を向上するための設備投資に対して費用の最大2分の1が補助される、「中小企業省力化投資補助金」の創設を推進。",
  },
  {
    title: "JRなど鉄道各社の運賃割引制度を精神障がい者までの拡大を実現",
    date: "2024年4月11日",
    category: "実績",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2024/09/ach_202404.jpg",
    excerpt: "身体・知的障がい者が対象とされていたJRなど鉄道各社の運賃割引制度が、精神障がい者まで拡大されることになりました。",
  },
  {
    title: "安心して暮らせる地域づくり。足立区の水害対策で危機感共有WEB会議を導入",
    date: "2023年12月7日",
    category: "実績",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2023/09/adachi-kikikankyouyuuwebkaigi.png",
    excerpt: "足立区には中川、綾瀬川、荒川、毛長川、隅田川といくつもの河川があり、私たちの生活に必要な水を提供してくれています。",
  },
  {
    title: "河川敷を活用したスポーツ広場開設を推進",
    date: "2023年7月14日",
    category: "実績",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/IMG_1185-1024x768.jpeg",
    excerpt: "国が管理する荒川河川敷のうち、東京都北区に属するエリアの有効活用を推進。この度、2023年9月にスポーツ広場としてオープンする事となりました。",
  },
  {
    title: "交通系ICカード（Suica、PASMO）の障害者割引適用を実現",
    date: "2023年3月14日",
    category: "実績",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/IMG_1166.jpeg",
    excerpt: "2023年3月から、JR東日本と、PASMOを導入している鉄道・バス各社で、障がい者割引が適用されるサービスが開始しました。",
  },
  {
    title: "板橋区新河岸地域の荒川河川敷に階段設置",
    date: "2023年1月15日",
    category: "実績",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/IMG_1234-768x1024.jpeg",
    excerpt: "荒川の河川敷は、地域住民の方々にとって、スポーツや散策、水遊びで通える、大切な憩いの場です。",
  },
  {
    title: "2025年デフリンピック東京大会誘致を実現",
    date: "2022年9月14日",
    category: "実績",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/全日本ろうあ連盟_1_クロップ-1024x791.jpeg",
    excerpt: "聴覚障がい者の国際スポーツ大会「デフリンピック」の東京招致を目指し、2020年2月3日衆議院予算委員会において安倍総理（当時）に政府としての後押しを要請。",
  },
  {
    title: "JR北赤羽駅「浮間口」周辺に駐輪場を大幅整備",
    date: "2022年8月14日",
    category: "実績",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2022/08/IMG_1212-1024x768.jpeg",
    excerpt: "以前から、駅周辺の広場や団地への無断駐輪が後を立たず、「早急に駐輪場を整備してほしい」との要望が近隣住民から上がっていました。",
  },
  {
    title: "実質無利子無担保融資を拡充",
    date: "2022年8月14日",
    category: "実績",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/line_album_220428_3-1024x768.jpeg",
    excerpt: "財務副大臣として、コロナ禍でダメージを受けた中小企業の資金繰りを支援するための、政府系金融機関などによる実質無利子・無担保融資による（ゼロ・ゼロ）融資を拡充。",
  },
  {
    title: "NISA・iDeCo制度の改正を推進",
    date: "2022年8月14日",
    category: "実績",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/line_album_220726_6-1024x768.jpeg",
    excerpt: "財務副大臣として将来不安解消のためNISA・iDeCo制度の大幅拡充を推進。",
  },
  {
    title: "日暮里・舎人ライナーの早期復旧に尽力",
    date: "2021年10月14日",
    category: "実績",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2023/07/IMG_1209-1024x683.jpeg",
    excerpt: "10月7日(木)夜に足立区を襲った震度５強の地震により、日暮里・舎人ライナーの車両脱輪事故が発生。運転見合わせとなりました。",
  },
  {
    title: "荒川第一調節池内の貯水湖事前放流を提案",
    date: "2020年11月1日",
    category: "実績",
    image: "https://www.m-okamoto.jp/wp-content/uploads/2021/04/achv_post_photo_04.jpg",
    excerpt: "さらに、荒川第一調節池内の貯水池（彩湖）の水を事前放流することで、河の氾濫を防止できることを指摘し、事前放流を提案。",
  },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <Breadcrumb items={[{ label: '実績' }]} />

      <div style={{ maxWidth: '1296px', margin: '0 auto', padding: '64px 48px 0px' }}>
        <div className="flex flex-col lg:flex-row" style={{ gap: '0' }}>
          <div className="flex-1 min-w-0" style={{ marginRight: '76px' }}>
            <PageTitle title="実績" subtitle="– category –" />

            {/* Post List - 3 column card layout matching SWELL */}
            <div className="flex flex-wrap" style={{ gap: '0', justifyContent: 'flex-start' }}>
              {achievementItems.map((item, idx) => (
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
