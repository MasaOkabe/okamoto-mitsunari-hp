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
    { title: '新年ご挨拶', date: '2026.01.15', href: '#' },
    { title: '各国大使と面談', date: '2026.04.03', href: '#' },
    { title: '予算委員会質疑', date: '2026.03.20', href: '#' },
    { title: '新代表選出', date: '2026.03.15', href: '#' },
    { title: '中道改革連合', date: '2026.03.10', href: '#' },
    { title: '御礼', date: '2021.10.20', href: '#' },
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <aside className="w-full">
      {/* Recent Articles */}
      <div className="mb-8">
        <div className="section-heading">新着記事</div>
        <div className="space-y-3">
          {displayItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
              <Link href={item.href} className="block hover:text-[#2054a8]">
                <p className="text-sm font-medium line-clamp-2">{item.title}</p>
                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* LINE Banner */}
      <div className="mb-8">
        <Link href="#line" className="block">
          <img
            src="https://www.m-okamoto.jp/wp-content/uploads/2023/08/line-bunner-side-homepage-2.png"
            alt="LINE公式アカウント"
            className="w-full rounded"
          />
        </Link>
      </div>

      {/* Twitter placeholder */}
      <div className="bg-white border border-gray-300 rounded p-4">
        <div className="aspect-square flex items-center justify-center bg-gray-100 rounded">
          <div className="text-center text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z"/>
            </svg>
            <p className="text-xs">X (Twitter)</p>
            <p className="text-xs mt-1">埋め込み</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
