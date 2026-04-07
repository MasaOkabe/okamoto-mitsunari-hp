import Link from 'next/link';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div style={{ backgroundColor: '#f7f7f7', fontSize: '13px' }}>
      <div style={{ maxWidth: '1296px', margin: '0 auto', padding: '8px 48px' }}>
        <ol className="flex items-center" style={{ gap: '8px', listStyle: 'none' }}>
          <li>
            <Link href="/" className="text-[#666] hover:text-[#2054a8]">
              <span>🏠 ホーム</span>
            </Link>
          </li>
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center" style={{ gap: '8px' }}>
              <span className="text-[#999]">＞</span>
              {item.href ? (
                <Link href={item.href} className="text-[#666] hover:text-[#2054a8]">{item.label}</Link>
              ) : (
                <span className="text-[#333]">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
