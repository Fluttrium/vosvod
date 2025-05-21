'use client'

import { Container } from './ui/container'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { Phone, MapPin } from 'lucide-react'

export const Header2 = () => {
  const router = useRouter()

  return (
    <div className="w-full bg-white text-black border-b border-gray-200">
      <Container className="px-4 py-3 flex justify-between items-center max-w-screen-2xl flex-wrap gap-4">
        {/* Левая часть — логотип и название + Личный кабинет */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
        <Link href="/" className="flex items-center gap-4 group">
  <div className="w-12 h-12 sm:w-20 sm:h-20 min-w-[48px] min-h-[48px] sm:min-w-[80px] sm:min-h-[80px] rounded-full border-2 border-blue-600/30 group-hover:border-blue-600 transition-all flex items-center justify-center bg-gray-50">
    <Image
      src="/logo-vosvod.png"
      alt="Логотип"
      width={80}
      height={80}
      className="rounded-full object-contain"
      priority
    />
  </div>
  <div className="flex flex-col leading-tight">
    <span className="text-xs sm:text-lg text-gray-700">АНО ДПО "Учебный центр Судовождения"</span>
    <span className="text-sm sm:text-2xl font-bold text-black uppercase tracking-tight">Учебный центр ВОСВОД</span>
  </div>
</Link>
          <div className="sm:hidden">
            <Button
              onClick={() => router.push('/cabinet')}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 h-9 text-xs"
            >
              Личный кабинет
            </Button>
          </div>
        </div>

        {/* Центр — адрес и телефон */}
        <div className="hidden sm:flex items-center gap-4 sm:gap-10 text-xs sm:text-lg text-gray-800 flex-wrap justify-end flex-grow">
          {/* Адрес с иконкой */}
          <div className="hidden xl:flex flex-col text-right text-gray-700 leading-snug">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>г. Санкт-Петербург, ул. Декабристов, д. 32/2</span>
            </div>
            <span className="text-[11px] sm:text-base text-gray-500">(Театральная площадь, д. 2)</span>
          </div>

          {/* Телефон */}
          <a href="tel:+79319787378" className="flex items-center gap-2 hover:underline font-medium">
            <Phone className="w-5 h-5 text-blue-600" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm">+7 (931) 978-73-78</span>
              <span className="text-[11px] text-blue-600">Заказать звонок</span>
            </div>
          </a>
        </div>

        {/* Кнопка — Личный кабинет для десктопа */}
        <div className="hidden sm:flex items-center">
          <Button
            onClick={() => router.push('/cabinet')}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 sm:px-8 h-9 sm:h-12 text-xs sm:text-lg"
          >
            Личный кабинет
          </Button>
        </div>
      </Container>
    </div>
  )
}
