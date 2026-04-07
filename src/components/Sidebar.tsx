import Link from 'next/link';

interface SidebarItem {
  title: string;
  date: string;
  href: string;
}

interface SidebarProps {
  items?: SidebarItem[];
}

export function Sidebar({ items = [] }: SidebarProps) {
  const defaultItems: SidebarItem[] = [
    { title: '各国大使と面談', date: '2026.03.26', href: '#' },
    { title: '予算委員会質疑', date: '2026.02.27', href: '#' },
    { title: '新代表選出', date: '2026.02.13', href: '#' },
    { title: '御礼', date: '2026.02.09', href: '#' },
    { title: '中道改革連合', date: '2026.01.22', href: '#' },
    { title: '地元にて新年ご挨拶', date: '2026.01.06', href: '#' },
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <aside className="w-full space-y-8">
      {/* Recent Articles */}
      <div>
        <h3 className="section-heading text-base">最近の投稿</h3>
        <div className="bg-white border border-[#eeeeee] rounded">
          <div className="space-y-0">
            {displayItems.map((item, index) => (
              <div
                key={index}
                className={`px-4 py-3 border-b border-[#eeeeee] last:border-b-0 hover:bg-[#f9f9f9] transition ${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'
                }`}
              >
                <Link href={item.href} className="block hover:text-[#1176d4]">
                  <p className="text-xs font-medium line-clamp-2 text-[#333]">{item.title}</p>
                  <p className="text-xs text-[#999] mt-1">{item.date}</p>
                </Link>
              </div>
            ))}
          </div>
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

      {/* Twitter/X placeholder */}
      <div className="bg-white border border-[#eeeeee] rounded overflow-hidden">
        <div className="bg-[#f5f5f5] px-4 py-3 border-b border-[#eeeeee]">
          <p className="text-xs font-semibold text-[#333]">X (Twitter)</p>
        </div>
        <div className="aspect-square flex items-center justify-center bg-[#fafafa] p-4">
          <div className="text-center text-[#999]">
            <svg className="w-10 h-10 mx-auto mb-2 opacity-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z"/>
            </svg>
            <p className="text-xs mt-1">ツイートを表示中...</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
