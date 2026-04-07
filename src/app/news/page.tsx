import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";

export default function NewsPage() {
  const newsItems = [
    {
      date: "2026年3月26日",
      title: "各国大使と面談",
      category: "国際交流",
      content: "複数国の駐日大使と面談し、国際関係と経済協力について意見交換を行いました。グローバルな視点での課題解決に向け、建設的な対話を進めています。",
    },
    {
      date: "2026年2月27日",
      title: "予算委員会質疑",
      category: "議会活動",
      content: "衆議院予算委員会において、中小企業支援と福祉政策の充実について質疑を行いました。経済成長と生活基盤の両立を目指した提案を実施しています。",
    },
    {
      date: "2026年2月13日",
      title: "新代表選出",
      category: "党務",
      content: "中道改革連合の新代表が選出されました。より一層の改革推進に向け、全力で取り組む所存です。",
    },
    {
      date: "2026年2月9日",
      title: "御礼",
      category: "お知らせ",
      content: "先日の選挙投票にご協力いただき、ありがとうございました。皆様の温かいご支持により、6期目の当選を果たすことができました。",
    },
    {
      date: "2026年1月22日",
      title: "中道改革連合の方針説明会",
      category: "党務",
      content: "中道改革連合の2026年の方針説明会を開催しました。経済再生、社会保障改革、防災対策について、全員で一致団結して取り組むことで合意しました。",
    },
    {
      date: "2026年1月6日",
      title: "地元にて新年ご挨拶",
      category: "地域活動",
      content: "東京29区内の各地で新年の挨拶回りを行いました。地域の皆様からのご意見を丹念にお聞きし、今年の活動に活かしてまいります。",
    },
    {
      date: "2025年12月20日",
      title: "年末地域活動報告会",
      category: "地域活動",
      content: "地元足立区、板橋区での一年間の活動成果を報告いたしました。皆様からの貴重なご指摘をいただき、来年に向けた課題を整理いたしました。",
    },
    {
      date: "2025年12月5日",
      title: "防災対策ワークショップ開催",
      category: "地域活動",
      content: "首都直下地震対策のためのワークショップを開催しました。地域の防災力向上に向け、関係機関と連携して対策を推進しています。",
    },
    {
      date: "2025年11月28日",
      title: "中小企業との懇談会",
      category: "地域活動",
      content: "東京29区内の中小企業経営者との懇談会を実施しました。省力化投資補助金や新しい支援制度についての説明と、皆様のご要望をお聞かしました。",
    },
    {
      date: "2025年10月15日",
      title: "福祉施設視察",
      category: "地域活動",
      content: "足立区内の福祉施設を視察し、障害者支援の現状と課題についてご説明いただきました。さらなる支援充実に向け、取り組みを強化いたします。",
    },
    {
      date: "2025年9月30日",
      title: "新政策発表会",
      category: "政策",
      content: "経済・金融、社会保障、外交・地域振興の4つの政策柱について、新たな施策を発表いたしました。",
    },
    {
      date: "2025年8月10日",
      title: "河川敷施設開場式",
      category: "地域活動",
      content: "荒川河川敷に開設した新しいスポーツ広場の開場式を挙行いたしました。地域コミュニティの活性化に向け、今後も施設の充実を図ります。",
    },
  ];

  const categories = ["すべて", "国際交流", "議会活動", "党務", "お知らせ", "地域活動", "政策"];

  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <div className="max-w-[1296px] mx-auto px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 min-w-0">
            {/* Title */}
            <section className="mb-12">
              <h1 className="text-3xl font-bold text-[#2054a8] mb-2">ニュース一覧</h1>
              <p className="text-[#666] text-sm">最新の活動報告とお知らせ</p>
            </section>

            {/* News List */}
            <div className="space-y-6">
              {newsItems.map((news, idx) => (
                <article
                  key={idx}
                  className="border border-[#eeeeee] rounded card-hover bg-white overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3 gap-4">
                      <div>
                        <p className="text-xs text-[#999] mb-2">{news.date}</p>
                        <h2 className="text-base font-bold text-[#333]">{news.title}</h2>
                      </div>
                      <span className="category-badge flex-shrink-0">
                        {news.category}
                      </span>
                    </div>
                    <p className="text-[#666] text-sm mb-4 leading-relaxed">{news.content}</p>
                    <Link href="#" className="text-[#1176d4] text-sm font-medium hover:text-[#2054a8] transition">
                      詳細を読む →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
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
