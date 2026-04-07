import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "衆議院議員 岡本みつなり",
  description: "衆議院議員 岡本みつなりの公式ウェブサイト。プロフィール、実績、政策についてご紹介します。",
  viewport: "width=device-width, initial-scale=1",
};

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <div className="text-[#1a3a6b] font-bold text-lg">
              衆議院議員<br />岡本みつなり
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#1a3a6b] font-medium transition">
              ホーム
            </Link>
            <Link href="/profile" className="text-gray-700 hover:text-[#1a3a6b] font-medium transition">
              プロフィール
            </Link>
            <Link href="/achievements" className="text-gray-700 hover:text-[#1a3a6b] font-medium transition">
              実績
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-[#1a3a6b] font-medium transition">
              ニュース
            </Link>
            <Link href="/policy" className="text-gray-700 hover:text-[#1a3a6b] font-medium transition">
              政策
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#1a3a6b] font-medium transition">
              お問い合わせ
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-[#1a3a6b] p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  const socialLinks = [
    { label: "X (Twitter)", url: "https://x.com/okamoto3nari" },
    { label: "Facebook", url: "https://facebook.com/okamoto.office" },
    { label: "Instagram", url: "https://instagram.com/mitsunari.okamoto" },
    { label: "YouTube", url: "https://youtube.com/@岡本みつなりチャンネル" },
  ];

  return (
    <footer className="bg-[#1a3a6b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">衆議院議員 岡本みつなり</h3>
            <p className="text-gray-300 text-sm">
              中道改革連合・共同政務調査会長
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">主なリンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/profile" className="text-gray-300 hover:text-white transition">
                  プロフィール
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-gray-300 hover:text-white transition">
                  政策
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-gray-300 hover:text-white transition">
                  実績
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition">
                  ニュース
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">ソーシャルメディア</h4>
            <ul className="space-y-2 text-sm">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 pt-8">
          <p className="text-center text-gray-300 text-sm">
            © 2026 衆議院議員 岡本みつなり. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
