import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#fdfdfd] text-[#333] border-t border-[#eeeeee]" style={{ fontSize: '14px' }}>
      {/* Widget Area - 2 column layout */}
      <div style={{ maxWidth: '1296px', margin: '0 auto', padding: '16px 48px' }}>
        <div className="flex flex-col lg:flex-row" style={{ gap: '48px' }}>
          {/* Left Column - Logo + Office Info + Google Maps */}
          <div className="flex-1">
            {/* Logo */}
            <div style={{ marginBottom: '24px' }}>
              <img
                src="https://www.m-okamoto.jp/wp-content/uploads/2024/03/header_logo.svg"
                alt="岡本みつなり"
                style={{ height: '40px' }}
              />
            </div>

            {/* Office Information with Google Maps */}
            <div className="flex flex-col md:flex-row" style={{ gap: '32px' }}>
              {/* 国会事務所 */}
              <div className="flex-1">
                <div className="text-[#666]" style={{ fontSize: '13px', lineHeight: '1.8' }}>
                  <p>〒100-8981</p>
                  <p>東京都千代田区永田町2-2-1</p>
                  <p>衆議院議員第一議員会館1005号室</p>
                  <p>電話：03-3508-7147</p>
                  <p>FAX：03-3508-3637</p>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8281!2d139.7428!3d35.6764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b879c34f931%3A0xa9b8bc166ee10!2z6KGG6K2w6Zmi56ys5LiA6K2w5ZOh5Lya6aSo!5e0!3m2!1sja!2sjp!4v1"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="国会事務所"
                  ></iframe>
                </div>
              </div>

              {/* 地元事務所 */}
              <div className="flex-1">
                <p className="font-bold text-[#333]" style={{ marginBottom: '8px' }}>地元事務所</p>
                <div className="text-[#666]" style={{ fontSize: '13px', lineHeight: '1.8' }}>
                  <p>〒116-0013</p>
                  <p>東京都荒川区西日暮里5-32-5</p>
                  <p>ウシオビル2階</p>
                  <p>電話：03-5604-5923</p>
                  <p>FAX：03-5604-5924</p>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5!2d139.7714!3d35.7316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6c0fba7b3f%3A0x3e2e7d7a5e2e7d7a!2z5p2x5Lqs6YO96I2S5bed5Yy66KW_5pel5pq56YeM!5e0!3m2!1sja!2sjp!4v1"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="地元事務所"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="flex-shrink-0" style={{ width: '200px' }}>
            <nav>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { label: 'HOME', href: '/' },
                  { label: 'プロフィール', href: '/profile' },
                  { label: 'ニュース', href: '/news' },
                  { label: '実績', href: '/achievements' },
                  { label: '目指す政策', href: '/policy' },
                  { label: 'プライバシーポリシー', href: '#' },
                  { label: 'English', href: '#' },
                ].map((item, idx) => (
                  <li key={idx} style={{ borderBottom: '1px solid #eeeeee' }}>
                    <Link
                      href={item.href}
                      className="block text-[#333] hover:text-[#2054a8] transition"
                      style={{ padding: '12px 0', fontSize: '14px' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Foot - social icons + copyright */}
      <div style={{ borderTop: '1px solid #eeeeee' }}>
        <div style={{ maxWidth: '1296px', margin: '0 auto', padding: '24px 48px' }}>
          <div className="flex flex-col md:flex-row items-center justify-between" style={{ gap: '16px' }}>
            {/* Social icons */}
            <div className="flex items-center" style={{ gap: '16px' }}>
              <a href="https://www.facebook.com/okamoto.office" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[#2054a8] transition" title="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/mitsunari.okamoto/" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[#2054a8] transition" title="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.278 2.579.07 7.052.012 8.331 0 8.756 0 12s.012 3.669.07 4.948c.208 4.474 2.626 6.875 7.052 7.083 1.279.058 1.704.07 4.948.07s3.669-.012 4.948-.07c4.426-.208 6.844-2.609 7.052-7.083.058-1.279.07-1.704.07-4.948s-.012-3.669-.07-4.948c-.208-4.474-2.626-6.875-7.052-7.083C15.669.012 15.244 0 12 0z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
                </svg>
              </a>
              <a href="https://line.me/R/ti/p/@977xeyth" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[#2054a8] transition" title="LINE">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.383 0 0 4.477 0 10.038c0 3.067 1.805 5.77 4.668 7.456.191.108.457.091.614-.191l.559-1.419c.095-.255.056-.465-.159-.639-.904-.654-1.648-1.525-2.113-2.526-.447-.975-.697-2.024-.697-3.126 0-4.202 3.9-7.617 8.688-7.617s8.688 3.415 8.688 7.617c0 1.102-.25 2.151-.697 3.126-.465 1.001-1.209 1.872-2.113 2.526-.215.174-.254.384-.159.639l.559 1.419c.157.282.423.299.614.191 2.863-1.686 4.668-4.389 4.668-7.456C24 4.477 18.617 0 12 0z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCU09evAyoTH4HYC4e1S5qtA" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[#2054a8] transition" title="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="/feed" className="text-[#999] hover:text-[#2054a8] transition" title="RSS">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-8.18v4.819c11.271.062 20.356 9.213 20.418 20.414h4.817c-.045-13.888-11.34-25.261-25.235-25.233z"/>
                </svg>
              </a>
            </div>

            {/* Footer links + Copyright */}
            <div className="flex items-center" style={{ gap: '24px', fontSize: '13px' }}>
              <Link href="#" className="text-[#666] hover:text-[#2054a8] transition">プライバシーポリシー</Link>
              <Link href="/inquiry" className="text-[#666] hover:text-[#2054a8] transition">お問合せ</Link>
              <span className="text-[#999]">© 衆議院議員 岡本みつなり 公式ホームページ</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
