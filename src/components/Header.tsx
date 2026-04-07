'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top announcement bar */}
      <div className="w-full bg-[#2054a8] text-white text-xs py-2.5 px-4">
        <div className="max-w-[1296px] mx-auto px-8 flex items-center justify-between">
          <span className="text-white text-xs">衆議院議員　岡本みつなりの公式ホームページです。</span>
          {/* Social icons */}
          <div className="flex gap-3 items-center">
            <a href="https://www.facebook.com/" className="hover:opacity-80 transition" title="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/" className="hover:opacity-80 transition" title="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.278 2.579.07 7.052.012 8.331 0 8.756 0 12s.012 3.669.07 4.948c.208 4.474 2.626 6.875 7.052 7.083 1.279.058 1.704.07 4.948.07s3.669-.012 4.948-.07c4.426-.208 6.844-2.609 7.052-7.083.058-1.279.07-1.704.07-4.948s-.012-3.669-.07-4.948c-.208-4.474-2.626-6.875-7.052-7.083C15.669.012 15.244 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
              </svg>
            </a>
            <a href="https://line.me/" className="hover:opacity-80 transition" title="LINE">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63-.272.63-.643V7.15c0-.371-.281-.643-.63-.643h-7.192c-.349 0-.63.272-.63.643v2.07c0 .371.281.643.63.643h7.192zm-.349-2.251h.699v.85h-.699v-.85zm-3.29 2.251c.349 0 .63-.272.63-.643V7.15c0-.371-.281-.643-.63-.643h-.697v2.706h.697zm0-2.251h.699v.85h-.699v-.85zm3.994 6.511c.349 0 .63-.272.63-.643v-2.07c0-.371-.281-.643-.63-.643h-7.192c-.349 0-.63.272-.63.643v2.07c0 .371.281.643.63.643h7.192zm-.349-2.251h.699v.85h-.699v-.85zm-3.29 2.251c.349 0 .63-.272.63-.643v-2.07c0-.371-.281-.643-.63-.643h-.697v2.706h.697zm0-2.251h.699v.85h-.699v-.85zM12 0C5.383 0 0 4.477 0 10.038c0 3.067 1.805 5.77 4.668 7.456.191.108.457.091.614-.191l.559-1.419c.095-.255.056-.465-.159-.639-.904-.654-1.648-1.525-2.113-2.526-.447-.975-.697-2.024-.697-3.126 0-4.202 3.9-7.617 8.688-7.617s8.688 3.415 8.688 7.617c0 1.102-.25 2.151-.697 3.126-.465 1.001-1.209 1.872-2.113 2.526-.215.174-.254.384-.159.639l.559 1.419c.157.282.423.299.614.191 2.863-1.686 4.668-4.389 4.668-7.456C24 4.477 18.617 0 12 0z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/" className="hover:opacity-80 transition" title="YouTube">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition" title="RSS">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-8.18v4.819c11.271.062 20.356 9.213 20.418 20.414h4.817c-.045-13.888-11.34-25.261-25.235-25.233z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-[#fdfdfd] border-b border-[#eeeeee]" style={{ height: '94px' }}>
        <div className="max-w-[1296px] mx-auto px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://www.m-okamoto.jp/wp-content/uploads/2024/03/header_logo.svg"
              alt="岡本みつなり"
              className="h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-[#333] hover:text-[#2054a8] font-medium text-[15px] transition">
              HOME
            </Link>
            <Link href="/profile" className="text-[#333] hover:text-[#2054a8] font-medium text-[15px] transition">
              プロフィール
            </Link>
            <Link href="/achievements" className="text-[#333] hover:text-[#2054a8] font-medium text-[15px] transition">
              実績
            </Link>
            <Link href="/news" className="text-[#333] hover:text-[#2054a8] font-medium text-[15px] transition">
              ニュース一覧
            </Link>
            <Link href="/policy" className="text-[#333] hover:text-[#2054a8] font-medium text-[15px] transition">
              目指す政策
            </Link>
            {/* Search icon */}
            <button className="text-[#333] hover:text-[#2054a8] transition p-1" aria-label="検索">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6 text-[#333]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-[#eeeeee]">
            <div className="max-w-[1296px] mx-auto px-8 py-4 flex flex-col gap-2">
              <Link href="/" className="text-[#333] hover:text-[#2054a8] font-medium text-sm py-2 transition" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
              <Link href="/profile" className="text-[#333] hover:text-[#2054a8] font-medium text-sm py-2 transition" onClick={() => setMobileMenuOpen(false)}>プロフィール</Link>
              <Link href="/achievements" className="text-[#333] hover:text-[#2054a8] font-medium text-sm py-2 transition" onClick={() => setMobileMenuOpen(false)}>実績</Link>
              <Link href="/news" className="text-[#333] hover:text-[#2054a8] font-medium text-sm py-2 transition" onClick={() => setMobileMenuOpen(false)}>ニュース一覧</Link>
              <Link href="/policy" className="text-[#333] hover:text-[#2054a8] font-medium text-sm py-2 transition" onClick={() => setMobileMenuOpen(false)}>目指す政策</Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
