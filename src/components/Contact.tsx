'use client'

import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    const formData = new FormData(e.currentTarget)
    try {
      const response = await fetch('https://formspree.io/f/ваш_ключ', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
          Контакты
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-3xl font-bold text-white md:text-4xl">
          Напишите — отвечу
        </p>
        <div className="mx-auto max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-pink-500/15 bg-elevated/60 p-8 shadow-xl shadow-black/40 backdrop-blur-sm"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                Имя
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full rounded-xl border border-zinc-700 bg-black/50 px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-pink-500/60 focus:ring-2 focus:ring-pink-500/30"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full rounded-xl border border-zinc-700 bg-black/50 px-4 py-3 text-zinc-100 outline-none transition focus:border-pink-500/60 focus:ring-2 focus:ring-pink-500/30"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                Сообщение
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="w-full resize-y rounded-xl border border-zinc-700 bg-black/50 px-4 py-3 text-zinc-100 outline-none transition focus:border-pink-500/60 focus:ring-2 focus:ring-pink-500/30"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-600 py-3 font-semibold text-black shadow-lg shadow-pink-500/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'loading' ? 'Отправка...' : 'Отправить'}
            </button>
            {status === 'success' && (
              <p className="text-center text-emerald-400">Сообщение отправлено!</p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-400">Ошибка. Попробуйте позже.</p>
            )}
          </form>
          <div className="mt-10 text-center text-zinc-400">
            <p className="text-zinc-500">Или напрямую:</p>
            <p className="mt-2">
              Email:{' '}
              <a
                href="mailto:lianaoorzhak@icloud.com"
                className="font-medium text-pink-400 transition hover:text-pink-300"
              >
                lianaoorzhak@icloud.com
              </a>
            </p>
            <div className="mt-6 flex justify-center gap-6 text-sm font-medium">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition hover:text-pink-400"
              >
                GitHub
              </a>
              <a
                href="https://vk.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition hover:text-pink-400"
              >
                VK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}