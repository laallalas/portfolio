import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'   // добавьте импорт
import Footer from '@/components/Footer'   // добавьте импорт

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Портфолио | Имя Фамилия',
  description: 'Персональное портфолио разработчика с проектами, навыками и контактами.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}