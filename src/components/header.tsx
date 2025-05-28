'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'

type MenuType = 'education' | 'organization' | null

// Функция возвращает классы для кнопок с учётом лейбла и активного состояния
const getButtonClasses = (label: string, isActive: boolean) => {
  if (label === 'Обучение') {
    return cn(
      'text-white',
      'transition-colors duration-200',
      isActive
        ? 'bg-yellow-400'
        : 'bg-yellow-500 hover:bg-white hover:text-black' // фон при ховере белый, текст чёрный
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
        ? 'bg-white text-black' // активный белый фон и тёмный текст
        : 'bg-blue-700 hover:bg-white hover:text-black' // при ховере фон белый, текст чёрный
    )
  }

  return ''
}

export const Header = ({ isFixed = true }: { isFixed?: boolean }) => {
  const pathname = usePathname()
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState<MenuType>(null)
  const [isScrolled, setIsScrolled] = useState(false)

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
    { name: 'Обучение водолазов, дайверов ', path: '/vodolaz' },
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
    'flex-1 text-center px-0 py-8 rounded-none transition-colors duration-200 text-sm md:text-base font-medium cursor-pointer select-none'

  // Функция для определения активного пункта меню
  const isActivePath = (path: string) => pathname === path || pathname.startsWith(path)

  return (
    <header
      className={cn(
        isFixed && 'fixed top-0 left-0',
        'w-full z-[100] bg-white backdrop-blur-md border-b border-gray-200 transition-all',
        isScrolled && 'shadow-md'
      )}
    >
      <div className="w-full px-0">
        {/* Desktop nav */}
        <nav className="hidden md:flex p-0 flex-wrap justify-center items-center h-auto relative">
          {/* Обучение с выпадающим меню */}
          <div
            onMouseEnter={() => setOpenMenu('education')}
            onMouseLeave={() => setOpenMenu(null)}
            className="relative flex-1 min-w-[140px]"
          >
            <div
              className={cn(
                baseMenuClass,
                getButtonClasses(
                  'Обучение',
                  openMenu === 'education' || pathname.startsWith('/sudovoditely')
                )
              )}
            >
              Обучение
            </div>
            <AnimatePresence>
              {openMenu === 'education' && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 z-[999] max-h-[75vh] overflow-y-auto"
                >
                  {educationItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => {
                        router.push(item.path)
                        setOpenMenu(null)
                      }}
                      className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-white hover:text-black transition text-sm"
                    >
                      {item.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Организация с выпадающим меню */}
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
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 z-[999] max-h-[75vh] overflow-y-auto"
                >
                  {organizationItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => {
                        router.push(item.path)
                        setOpenMenu(null)
                      }}
                      className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-white hover:text-black transition text-sm"
                    >
                      {item.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Другие пункты меню */}
          {navItems.map((item) => {
            const isActive = isActivePath(item.path)
            const isBlueBtn =
              item.name === 'Контакты' ||
              item.name === 'Организация' ||
              item.name === 'Информация' ||
              item.name === 'Версия для слабовидящих'

            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  baseMenuClass,
                  isActive
                    ? (isBlueBtn ? 'bg-white text-black' : 'bg-yellow-400 text-white')
                    : (isBlueBtn
                        ? 'bg-blue-700 text-white hover:bg-white hover:text-black'
                        : 'bg-yellow-500 text-white hover:bg-white hover:text-black')
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
