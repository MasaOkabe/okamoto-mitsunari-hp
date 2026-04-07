import Link from 'next/link';

export function Sidebar() {
  const recentArticles = [
    { title: '各国大使と面談', date: '2026.03.26', href: '#' },
    { title: '予算委員会質疑', date: '2026.02.27', href: '#' },
    { title: '新代表選出', date: '2026.02.13', href: '#' },
    { title: '御礼', date: '2026.02.09', href: '#' },
    { title: '中道改革連合', date: '2026.01.22', href: '#' },
    { title: '地元にて新年ご挨拶', date: '2026.01.06', href: '#' },
  ];

  return (
    <aside className="w-full space-y-8">
      {/* Twitter/X Embed */}
      <div className="bg-white border border-[#eeeeee] rounded overflow-hidden">
        <a
          className="twitter-timeline"
          href="https://twitter.com/okamoto3nari"
          data-height="400"
          data-chrome="noheader nofooter noborders"
        >
          @okamoto3nari のツイート
        </a>
        <div className="p-4 text-center text-[#999] text-xs">
          <p>岡本みつなり／中道改革連合</p>
          <p className="mt-1">@okamoto3nari</p>
        </div>
      </div>

      {/* Recent Articles */}
      <div>
        <h3 className="font-bold text-[#333] text-base mb-4 pb-2 border-b-2 border-[#2054a8]">新着記事</h3>
        <div className="bg-white border border-[#eeeeee] rounded">
          {recentArticles.map((item, index) => (
            <div
              key={index}
              className={`px-4 py-3 border-b border-[#eeeeee] last:border-b-0 hover:bg-[#f9f9f9] transition ${
                index % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'
              }`}
            >
              <Link href={item.href} className="block hover:text-[#1176d4]">
                <p className="text-sm font-medium line-clamp-2 text-[#333]">{item.title}</p>
                <p className="text-xs text-[#999] mt-1">{item.date}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* LINE Banner */}
      <div>
        <Link href="#line" className="block">
          <img
            src="https://www.m-okamoto.jp/wp-content/uploads/2023/08/line-bunner-side-homepage-2.png"
            alt="LINE公式アカウント"
            className="w-full rounded border border-[#eeeeee]"
          />
        </Link>
      </div>
    </aside>
  );
}
