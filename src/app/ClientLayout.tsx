'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Header } from '@/components/header'
import Footer from '@/components/footer'
import { Header2 } from '@/components/header2'

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isTest = pathname.startsWith('/testtest')

  return (
    <html lang="ru">
      <body className="font-sans relative">
        {/* Фон */}
        {!isTest && (
          <div className="fixed inset-0 -z-10">
            
            <div className="absolute inset-0 bg-blue-900/30" />
          </div>
        )}

        {/* Фиксированная двойная шапка */}
        {!isTest && (
          <div className="fixed top-0 left-0 w-full z-50">
            <Header2 />
            <Header isFixed={false} />
          </div>
        )}

        {/* Контент под шапкой (учтён отступ вниз под оба хедера) */}
        <main className="relative pt-[180px]">
          {children}
        </main>

        {/* Подвал */}
        {!isTest && <Footer />}
      </body>
    </html>
  )
}
