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
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {status === 'loading' ? 'Отправка...' : 'Отправить'}
            </button>
            {status === 'success' && <p className="text-green-600 text-center">Сообщение отправлено!</p>}
            {status === 'error' && <p className="text-red-600 text-center">Ошибка. Попробуйте позже.</p>}
          </form>
          <div className="mt-8 text-center">
            <p>Или свяжитесь со мной напрямую:</p>
            <p>Email: <a href="mailto:lianaoorzhak@icloud.com" className="text-blue-600">mail@example.com</a></p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://vk.com/username" target="_blank" rel="noopener noreferrer">VK</a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}