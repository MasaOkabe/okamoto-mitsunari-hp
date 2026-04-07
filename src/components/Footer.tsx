import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Logo and office info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <img
              src="https://www.m-okamoto.jp/wp-content/uploads/2024/03/header_logo.svg"
              alt="岡本みつなり"
              className="h-10 mb-6"
            />
            <div className="text-sm space-y-6">
              <div>
                <p className="font-semibold mb-2">衆議院議員会館</p>
                <p>〒100-8981 東京都千代田区永田町2-2-1</p>
                <p>衆議院議員第一議員会館1005号室</p>
                <p className="mt-2">電話：03-3508-7147</p>
                <p>FAX：03-3508-3637</p>
              </div>
              <div>
                <p className="font-semibold mb-2">地元事務所</p>
                <p>〒116-0013 東京都荒川区西日暮里5-32-5</p>
                <p>ウシオビル2階</p>
                <p className="mt-2">電話：03-5604-5923</p>
                <p>FAX：03-5604-5924</p>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="font-semibold mb-4">ナビゲーション</h3>
            <nav className="text-sm space-y-2">
              <div className="flex flex-wrap gap-4">
                <Link href="/" className="hover:text-white">
                  HOME
                </Link>
                <Link href="/profile" className="hover:text-white">
                  プロフィール
                </Link>
                <Link href="/news" className="hover:text-white">
                  ニュース
                </Link>
                <Link href="/achievements" className="hover:text-white">
                  実績
                </Link>
                <Link href="/policy" className="hover:text-white">
                  目指す政策
                </Link>
                <Link href="/privacy" className="hover:text-white">
                  プライバシーポリシー
                </Link>
                <Link href="/english" className="hover:text-white">
                  English
                </Link>
              </div>
            </nav>

            {/* Social icons */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">フォローする</h3>
              <div className="flex gap-4">
                <a href="#facebook" className="hover:text-white" title="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#instagram" className="hover:text-white" title="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.278 2.579.07 7.052.012 8.331 0 8.756 0 12s.012 3.669.07 4.948c.208 4.474 2.626 6.875 7.052 7.083 1.279.058 1.704.07 4.948.07s3.669-.012 4.948-.07c4.426-.208 6.844-2.609 7.052-7.083.058-1.279.07-1.704.07-4.948s-.012-3.669-.07-4.948c-.208-4.474-2.626-6.875-7.052-7.083C15.669.012 15.244 0 12 0z"/>
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
                  </svg>
                </a>
                <a href="#youtube" className="hover:text-white" title="YouTube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm">
          <p>衆議院議員 岡本みつなり 公式ホームページ</p>
          <p className="mt-2">© 2024 Okamoto Mitsunari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
