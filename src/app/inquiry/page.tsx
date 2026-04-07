'use client';

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import Link from "next/link";

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission (in production, send to backend)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", content: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Title */}
            <section className="mb-12">
              <h1 className="text-3xl font-bold text-[#2054a8] mb-2">お問合せ</h1>
              <p className="text-[#666] text-sm">ご意見・ご質問など、お気軽にお問合せください</p>
            </section>

            {/* Contact Info */}
            <section className="mb-12">
              <h2 className="section-heading">お問合せ方法</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-[#eeeeee] rounded p-6">
                  <h3 className="font-bold text-[#2054a8] mb-4 text-sm">メールでのお問合せ</h3>
                  <p className="text-xs text-[#666] mb-3 leading-relaxed">
                    下記フォームからお送りください。メールアドレスの確認を取らせていただいてからのご返信となります。
                  </p>
                </div>
                <div className="bg-white border border-[#eeeeee] rounded p-6">
                  <h3 className="font-bold text-[#2054a8] mb-4 text-sm">お電話でのお問合せ</h3>
                  <div className="text-xs text-[#666] space-y-3">
                    <div>
                      <p className="font-semibold">地元事務所</p>
                      <p>TEL: 03-5604-5923</p>
                    </div>
                    <div>
                      <p className="font-semibold">国会事務所</p>
                      <p>TEL: 03-3508-7147</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section className="mb-12">
              <h2 className="section-heading">お問合せフォーム</h2>
              <div className="bg-white border border-[#eeeeee] rounded p-8">
                {submitted ? (
                  <div className="bg-[#f0f8ff] border border-[#2054a8] rounded p-6 text-center">
                    <p className="text-[#2054a8] font-bold mb-2">送信ありがとうございました</p>
                    <p className="text-[#666] text-sm mb-6">
                      お問合せいただきありがとうございます。内容確認後、ご返信させていただきます。
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#1176d4] text-sm font-medium hover:text-[#2054a8] transition"
                    >
                      別のお問合せをする →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#333] mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="山田太郎"
                        className="w-full px-4 py-2 border border-[#eeeeee] rounded text-[#333] placeholder-[#999] focus:outline-none focus:border-[#2054a8] transition text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#333] mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="example@example.com"
                        className="w-full px-4 py-2 border border-[#eeeeee] rounded text-[#333] placeholder-[#999] focus:outline-none focus:border-[#2054a8] transition text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#333] mb-2">
                        件名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="お問合せの件名"
                        className="w-full px-4 py-2 border border-[#eeeeee] rounded text-[#333] placeholder-[#999] focus:outline-none focus:border-[#2054a8] transition text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="content" className="block text-sm font-semibold text-[#333] mb-2">
                        お問合せ内容 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                        placeholder="ご質問やご意見などをご記入ください"
                        rows={6}
                        className="w-full px-4 py-2 border border-[#eeeeee] rounded text-[#333] placeholder-[#999] focus:outline-none focus:border-[#2054a8] transition text-sm font-sans resize-none"
                      />
                    </div>

                    <div className="bg-[#fafafa] border border-[#eeeeee] rounded p-4">
                      <p className="text-xs text-[#666] mb-2">
                        <span className="text-red-500">*</span> は必須項目です。すべての項目にご入力ください。
                      </p>
                      <p className="text-xs text-[#999]">
                        送信いただいた内容は、お問い合わせへの対応のみに使用いたします。詳しくはプライバシーポリシーをご参照ください。
                      </p>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? "送信中..." : "送信する"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="section-heading">よくあるご質問</h2>
              <div className="space-y-4">
                <div className="bg-white border border-[#eeeeee] rounded p-6">
                  <h3 className="font-bold text-[#333] text-sm mb-2">Q. 返信にはどのくらい時間がかかりますか？</h3>
                  <p className="text-xs text-[#666] leading-relaxed">
                    A. お問合せいただいた内容により返信時間が異なります。通常、1～3営業日以内にご返信させていただきます。
                  </p>
                </div>
                <div className="bg-white border border-[#eeeeee] rounded p-6">
                  <h3 className="font-bold text-[#333] text-sm mb-2">Q. 取材依頼や講演会のご依頼はどこに連絡すればいいですか？</h3>
                  <p className="text-xs text-[#666] leading-relaxed">
                    A. 本フォームまたは直接事務所にお電話ください。スケジュール調整させていただきます。
                  </p>
                </div>
                <div className="bg-white border border-[#eeeeee] rounded p-6">
                  <h3 className="font-bold text-[#333] text-sm mb-2">Q. 個人情報は安全に管理されていますか？</h3>
                  <p className="text-xs text-[#666] leading-relaxed">
                    A. お預かりした個人情報は、プライバシーポリシーに従い厳重に管理いたします。
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
