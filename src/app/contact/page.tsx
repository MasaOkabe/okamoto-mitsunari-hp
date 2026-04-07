"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a3a6b] to-[#2d5fa8] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-xl text-blue-100">皆様からのご意見・ご質問をお聞かせください</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#1a3a6b] mb-4">事務所</h3>
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-6 border-l-4 border-[#1a3a6b]">
                  <p className="font-bold text-gray-800 mb-2">岡本みつなり事務所</p>
                  <p className="text-sm text-gray-700">東京都足立区</p>
                  <p className="text-sm text-gray-700">第29区域</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1a3a6b] mb-4">ソーシャルメディア</h3>
                <div className="space-y-3">
                  {[
                    { name: "X (Twitter)", icon: "𝕏", handle: "@okamoto3nari" },
                    { name: "Facebook", icon: "f", handle: "okamoto.office" },
                    { name: "Instagram", icon: "📷", handle: "mitsunari.okamoto" },
                    { name: "YouTube", icon: "▶️", handle: "岡本みつなりチャンネル" },
                  ].map((social, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-4 border-l-4 border-[#1a3a6b]"
                    >
                      <p className="font-bold text-gray-800 text-sm">{social.name}</p>
                      <p className="text-xs text-gray-600">{social.handle}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1a3a6b] mb-4">営業時間</h3>
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-6 border-l-4 border-[#1a3a6b]">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>月〜金：</strong> 9:00〜18:00
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>土日祝：</strong> 原則休休
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg p-8 border border-blue-200">
                <h2 className="text-2xl font-bold text-[#1a3a6b] mb-6">お問い合わせフォーム</h2>

                {submitted ? (
                  <div className="bg-green-100 border border-green-400 rounded-lg p-6 text-center">
                    <p className="text-green-800 font-semibold mb-2">
                      ✓ ご送信ありがとうございました
                    </p>
                    <p className="text-green-700 text-sm">
                      お問い合わせいただきありがとうございます。
                      お返事までお時間をいただく場合がございます。
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
                        placeholder="例：山田太郎"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                        お電話番号
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
                        placeholder="09X-XXXX-XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-800 mb-2">
                        件名 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
                      >
                        <option value="">選択してください</option>
                        <option value="政策について">政策について</option>
                        <option value="地域の課題">地域の課題</option>
                        <option value="陳情・要望">陳情・要望</option>
                        <option value="イベント参加">イベント参加</option>
                        <option value="その他">その他</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                        メッセージ <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a6b]"
                        placeholder="ご意見・ご質問をお聞かせください"
                      />
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <p className="text-xs text-gray-700">
                        <strong>注意：</strong> 送信いただいた情報は、お問い合わせへの回答に使用させていただきます。
                        詳細はプライバシーポリシーをご確認ください。
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1a3a6b] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#2d5fa8] transition"
                    >
                      送信する
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a6b] mb-12 text-center">よくあるご質問</h2>

          <div className="space-y-6">
            {[
              {
                q: "どのような内容でも相談できますか？",
                a: "はい、政策についてのご質問から地域の課題まで、幅広いご相談をお受けしています。個人的なご意見やご提案も大歓迎です。",
              },
              {
                q: "回答にはどのくらい時間がかかりますか？",
                a: "通常、お問い合わせをいただいてから1週間以内にご回答させていただいています。お急ぎの場合は、お電話でお気軽にご連絡ください。",
              },
              {
                q: "匿名での相談は可能ですか？",
                a: "お返事をさせていただくため、できればお名前とメールアドレスをお知らせいただきたく存じます。ご不安な点がございましたら、お気軽にお電話でお問い合わせください。",
              },
              {
                q: "イベントに参加したいのですが？",
                a: "岡本の活動予定やイベント情報は、SNSや事務所からお知らせしています。SNSのフォローをいただくか、事務所までお気軽にお問い合わせください。",
              },
              {
                q: "個人情報はどのように扱われますか？",
                a: "お客様の個人情報は、適切な管理下で保護されます。詳細はプライバシーポリシーをご確認ください。",
              },
              {
                q: "取材や出演のご依頼は？",
                a: "メディア関係のご依頼につきましては、お問い合わせフォームで『その他』をお選びいただき、詳細をお知らせください。",
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg p-6 border border-gray-200 cursor-pointer group">
                <summary className="font-semibold text-[#1a3a6b] text-lg hover:text-[#2d5fa8] transition">
                  Q: {faq.q}
                </summary>
                <p className="text-gray-700 mt-4 text-base leading-relaxed">
                  A: {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1a3a6b] to-[#2d5fa8] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">皆様のご意見をお聞かせください</h2>
          <p className="text-xl text-blue-100 mb-10">
            国民の皆様からのご意見、ご提案、ご批判のすべてが、
            より良い政策立案の源となります。
          </p>
          <p className="text-blue-100 mb-8">
            どんなことでも構いません。<br />
            お気軽にお問い合わせください。
          </p>
        </div>
      </section>
    </>
  );
}
