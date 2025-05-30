'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

type MenuType = 'education' | 'organization' | null

const getButtonClasses = (label: string, isActive: boolean) => {
  if (label === 'Обучение') {
    return cn(
      'text-white',
      'transition-colors duration-200',
      isActive
        ? 'bg-white text-blue-700'
        : 'bg-yellow-500 hover:bg-white hover:text-blue-700'
    )
  }

  if (
    label === 'Контакты' ||
    label === 'Организация' ||
    label === 'Информация' ||
    label === 'Версия для слабовидящих'
  ) {
    return cn(
      'text-white',
      'transition-colors duration-200',
      isActive
        ? 'bg-white text-blue-700'
        : 'bg-blue-700 hover:bg-white hover:text-blue-700'
    )
  }

  return ''
}

export const Header = ({ isFixed = true }: { isFixed?: boolean }) => {
  const pathname = usePathname()
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState<MenuType>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { name: 'Информация', path: '/information' },
    { name: 'Версия для слабовидящих', path: '/accessibility' },
    { name: 'Контакты', path: '/contacts' },
  ]

  const educationItems = [
    { name: 'Судоводители ГИМС', path: '/sudovoditely' },
    { name: 'Парусные суда', path: '/parusniesyda' },
    { name: 'Суда особой конструкции', path: '/sudaosoboyconst' },
    { name: 'Коммерческие суда', path: '/commercsud' },
    { name: 'Прогулочные суда', path: '/progulochnye' },
    { name: 'Спасатели', path: '/spasately' },
    { name: 'Обучение водолазов, дайверов', path: '/vodolaz' },
  ]

  const organizationItems = [
    { name: '01. Основные сведения', path: '/osnovysveden' },
    { name: '02. Структура и органы управления', path: '/structura' },
    { name: '03. Документы', path: '/document' },
    { name: '04. Образование', path: '/education' },
    { name: '05. Образовательные стандарты', path: '/obrazstandart' },
    { name: '06. Руководство и Педагогический состав', path: '/rukovodstvo' },
    { name: '07. Материально-техническое обеспечение', path: '/material' },
    { name: '08. Стипендии', path: '/support' },
    { name: '09. Платные услуги', path: '/plateducation' },
    { name: '10. Финансы', path: '/finplan' },
    { name: '11. Вакантные места', path: '/perevod' },
    { name: '12. Доступная среда', path: '/sreda' },
    { name: '13. Международная деятельность', path: '/intern' },
  ]

  const baseMenuClass =
    'flex-1 text-center px-0 py-8 rounded-none transition-colors duration-200 text-sm md:text-lg font-medium cursor-pointer select-none'

  return (
    <header
      className={cn(
        isFixed && 'fixed top-0 left-0',
        'w-full z-[100] bg-white backdrop-blur-md border-b border-gray-200 transition-all',
        isScrolled && 'shadow-md'
      )}
    >
      <div className="w-full px-4 md:px-0">
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-wrap justify-center items-center h-auto relative">
          {/* Обучение */}
          <div
            onMouseEnter={() => setOpenMenu('education')}
            onMouseLeave={() => setOpenMenu(null)}
            className="relative flex-1 min-w-[140px] flex items-center justify-center"
          >
            <div
              className={cn(
                baseMenuClass,
                'flex items-center justify-center gap-2',
                getButtonClasses(
                  'Обучение',
                  openMenu === 'education' || pathname.startsWith('/sudovoditely')
                )
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white group-hover:text-blue-700 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>Обучение</span>
            </div>
            <AnimatePresence>
              {openMenu === 'education' && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white shadow-2xl border z-[999] max-h-[75vh] overflow-y-auto"
                >
                  {educationItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => {
                        router.push(item.path)
                        setOpenMenu(null)
                      }}
                      className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 transition text-lg"
                    >
                      {item.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Организация */}
          <div
            onMouseEnter={() => setOpenMenu('organization')}
            onMouseLeave={() => setOpenMenu(null)}
            className="relative flex-1 min-w-[140px]"
          >
            <div
              className={cn(
                baseMenuClass,
                getButtonClasses(
                  'Организация',
                  openMenu === 'organization' || pathname.startsWith('/osnovysveden')
                )
              )}
            >
              Организация
            </div>
            <AnimatePresence>
              {openMenu === 'organization' && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white shadow-2xl border z-[999] max-h-[75vh] overflow-y-auto"
                >
                  {organizationItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => {
                        router.push(item.path)
                        setOpenMenu(null)
                      }}
                      className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 transition text-lg"
                    >
                      {item.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Остальные элементы */}
          {navItems.map((item) => (
            <div key={item.path} className="flex-1 min-w-[140px]">
              <Link href={item.path}>
                <div
                  className={cn(
                    baseMenuClass,
                    getButtonClasses(item.name, pathname === item.path)
                  )}
                >
                  {item.name}
                </div>
              </Link>
            </div>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center justify-between p-4">
          <span className="font-bold text-lg">Меню</span>
          <button onClick={() => setMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden bg-white border-t border-gray-200"
            >
              <div className="flex flex-col gap-2 px-4 py-2">
                <details>
                  <summary className="cursor-pointer font-semibold py-2">Обучение</summary>
                  <div className="pl-4 flex flex-col gap-1">
                    {educationItems.map((item) => (
                      <Link key={item.path} href={item.path} onClick={() => setMobileMenuOpen(false)}>
                        <span className="text-blue-700 hover:underline">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </details>

                <details>
                  <summary className="cursor-pointer font-semibold py-2">Организация</summary>
                  <div className="pl-4 flex flex-col gap-1">
                    {organizationItems.map((item) => (
                      <Link key={item.path} href={item.path} onClick={() => setMobileMenuOpen(false)}>
                        <span className="text-blue-700 hover:underline">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </details>

                {navItems.map((item) => (
                  <Link key={item.path} href={item.path} onClick={() => setMobileMenuOpen(false)}>
                    <span className="py-2 text-blue-700 hover:underline">{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
