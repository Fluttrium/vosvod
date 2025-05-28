'use client'

import { FlipWords } from './ui/flip-words'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const Hero = () => {
  const content = {
    title: 'Получите права на',
    words: ['катер', 'лодку', 'гидроцикл', 'водолаза'],
    description:
      'Подготовим к экзамену в ГИМС — обучение от лицензированного учебного центра в Санкт-Петербурге',
    buttonText: 'Записаться на курс',
    images: [
      '/Rectangle.png',
      '/-ГИМС-2-e1691746586214.jpeg',
      '/-ГИМС-3-e1691746560117.jpeg',
      '/-ГИМС-1-e1691746637981.jpeg',
    ],
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % content.images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Белая полоса сверху */}
      <div className="w-full h-[60px] bg-white" />

      <section className="relative w-full h-[700px] lg:h-[82vh] overflow-hidden">
        {/* Фоновое изображение на 2/3 ширины */}
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-0">
          <Image
            src={
              typeof window === 'undefined' || window.innerWidth < 1024
                ? content.images[0]
                : content.images[currentImageIndex]
            }
            alt="Картинка курса"
            fill
            quality={100}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Бэкграунд-круги */}
        <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-[#005bbb] opacity-20 rounded-full blur-[100px] z-10" />
        <div className="absolute top-1/2 left-12 w-[200px] h-[200px] bg-[#ffd500] opacity-20 rounded-full blur-[80px] z-10" />

        {/* Левая панель с текстом, поверх фонового изображения */}
        <div className="relative z-20 w-full lg:w-1/2 h-full flex flex-col justify-center items-center text-center px-6 sm:px-8 md:px-12 lg:px-20 bg-[#0072c5] text-white lg:rounded-br-[180px] backdrop-blur-md">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="w-28 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 rounded-2xl overflow-hidden border border-white/30 bg-white/10 backdrop-blur-lg shadow-[0_4px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-shadow duration-300">
              <Image
                src="/регистр.png"
                alt="регистр"
                width={256}
                height={256}
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-28 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 rounded-2xl overflow-hidden border border-white/30 bg-white/10 backdrop-blur-lg shadow-[0_4px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-shadow duration-300">
              <Image
                src="/image.png"
                alt="эмблема"
                width={256}
                height={256}
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {content.title}{' '}
            <span className="text-yellow-300">
              <FlipWords
                words={content.words}
                duration={2500}
                className="inline-block font-bold"
              />
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6">
            {content.description}
          </p>
          <a
            href="tel:+79319787378"
            className="bg-white hover:bg-gray-100 text-[#0072c5] font-medium px-6 py-3 rounded-full transition"
          >
            {content.buttonText}
          </a>
        </div>
      </section>
    </>
  )
}
