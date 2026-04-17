'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#projects', label: 'Проекты' },
  { href: '#skills', label: 'Навыки' },
  { href: '#contact', label: 'Контакты' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-pink-500/15 bg-ink/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white md:text-2xl"
        >
          <span className="bg-gradient-to-r from-pink-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            Лиана Ооржак
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-pink-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden rounded-lg p-2 text-zinc-300 transition hover:bg-white/5 hover:text-pink-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/60"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Мобильное меню */}
      {isOpen && (
        <div className="border-t border-pink-500/10 bg-elevated/95 px-4 pb-4 backdrop-blur-md md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-zinc-300 transition hover:text-pink-400"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}