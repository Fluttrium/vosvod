'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Container } from './ui/container'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronUp, Phone, MapPin } from 'lucide-react'

const MobileAccordion = ({
  label,
  items,
  onClick,
}: {
  label: string
  items: { name: string; path: string }[]
  onClick: () => void
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="px-2">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between text-sm font-medium py-2"
      >
        {label}
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && (
        <div className="flex flex-col gap-1 mt-1">
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={onClick}
              className="pl-4 pr-2 py-1 text-sm hover:bg-blue-50 rounded-md transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export const Header = ({ isFixed = true }: { isFixed?: boolean }) => {
  const pathname = usePathname()
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState<'education' | 'organization' | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
    { name: 'Яхтенный рулевой', path: '/yachtrulevoy' },
    { name: 'Спасатели', path: '/spasately' },
    { name: 'Права на спецтехнику', path: '/pravaSpecTechnika' },
    { name: 'Водолазы', path: '/vodolaz' },
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
    'flex-1 text-center px-4 py-2 rounded-md transition-colors duration-200 text-sm md:text-base font-medium'
  const activeClass = 'bg-blue-100/60 text-blue-700'
  const hoverClass = 'hover:bg-blue-100/40 hover:text-blue-700'

  return (
    <header
      className={cn(
        isFixed && 'fixed top-0 left-0',
        'w-full z-[100] bg-white backdrop-blur-md border-b border-gray-200 transition-all',
        isScrolled && 'shadow-md'
      )}
    >
      <Container className="max-w-screen-2xl px-4">
        {/* Desktop nav */}
        <nav className="hidden md:flex flex-wrap justify-center items-center h-auto py-2 md:py-4 relative gap-2">
          <div
            onMouseEnter={() => setOpenMenu('education')}
            onMouseLeave={() => setOpenMenu(null)}
            className="relative flex-1 min-w-[140px] text-center"
          >
            <div
              className={cn(
                baseMenuClass,
                openMenu === 'education' || pathname.startsWith('/sudovoditely')
                  ? activeClass
                  : hoverClass
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
                      className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-blue-50 transition text-sm"
                    >
                      {item.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            onMouseEnter={() => setOpenMenu('organization')}
            onMouseLeave={() => setOpenMenu(null)}
            className="relative flex-1 min-w-[140px] text-center"
          >
            <div
              className={cn(
                baseMenuClass,
                openMenu === 'organization' || pathname.startsWith('/osnovysveden')
                  ? activeClass
                  : hoverClass
              )}
            >
              Сведения об организации
            </div>
            <AnimatePresence>
              {openMenu === 'organization' && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 z-[999] max-h-[75vh] overflow-y-auto"
                >
                  {organizationItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => {
                        router.push(item.path)
                        setOpenMenu(null)
                      }}
                      className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-blue-50 transition text-sm"
                    >
                      {item.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                baseMenuClass,
                pathname === item.path ? activeClass : hoverClass,
                'min-w-[140px]'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center justify-between py-3">
          <a
            href="tel:+79319787378"
            className="flex items-center gap-2 hover:underline font-medium"
          >
            <Phone className="w-5 h-5 text-blue-600" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm">+7 (931) 978-73-78</span>
              <span className="text-[11px] text-blue-600">Заказать звонок</span>
            </div>
          </a>

          <div className="flex items-center gap-1 text-gray-700 text-sm">
  <MapPin className="w-4 h-4 text-blue-600" />
  <div className="flex flex-col leading-tight">
    <span>г. Санкт-Петербург, ул. Декабристов, д. 32/2</span>
    <span className="text-[11px] text-gray-500">(Театральная площадь, д. 2)</span>
  </div>
</div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-2 py-2 md:hidden overflow-hidden"
            >
              <MobileAccordion
                label="Обучение"
                items={educationItems}
                onClick={() => setMobileOpen(false)}
              />
              <MobileAccordion
                label="Сведения об организации"
                items={organizationItems}
                onClick={() => setMobileOpen(false)}
              />
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 text-sm hover:bg-blue-50 rounded-md transition"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
}
