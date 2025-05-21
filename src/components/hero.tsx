'use client'

import { FlipWords } from './ui/flip-words'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    <section className="w-full min-h-[700px] sm:min-h-[500px] lg:h-[82vh] flex flex-col lg:flex-row relative overflow-hidden bg-[#005bbb]/10">
      {/* Стилизованные круги */}
      <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-[#005bbb] opacity-20 rounded-full blur-[100px] z-0" />
      <div className="absolute top-1/2 left-12 w-[200px] h-[200px] bg-[#ffd500] opacity-20 rounded-full blur-[80px] z-0" />

      {/* Левая часть */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full relative z-10">
        <div className="w-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-24 py-10 bg-white shadow-[0px_10px_60px_-15px_rgba(0,91,187,0.5)] relative z-10">
          {/* Карточки */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 z-10">
            <div className="w-28 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 rounded-2xl overflow-hidden border border-blue-500/30 bg-white/20 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,91,187,0.2)] hover:shadow-[0_0_20px_rgba(0,91,187,0.5)] transition-shadow duration-300">
              <Image
                src="/регистр.png"
                alt="регистр"
                width={256}
                height={256}
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-28 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 rounded-2xl overflow-hidden border border-blue-500/30 bg-white/20 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,91,187,0.2)] hover:shadow-[0_0_20px_rgba(0,91,187,0.5)] transition-shadow duration-300">
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

          {/* Заголовок и текст */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 z-10">
            {content.title}{' '}
            <span className="text-blue-600">
              <FlipWords
                words={content.words}
                duration={2500}
                className="inline-block font-bold"
              />
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 z-10">
            {content.description}
          </p>
          <button className="mx-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full w-fit transition z-10">
            {content.buttonText}
          </button>
        </div>
      </div>

      {/* Правая часть — мобилка: статика, десктоп: слайдер */}
      <div className="block lg:hidden w-full h-[50vh] relative z-0">
  <Image
    src={content.images[0]}
    alt="Изображение курса"
    fill
    quality={100}
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/20" />
</div>
      <div className="hidden lg:block w-full lg:w-1/2 h-full relative overflow-hidden z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={content.images[currentImageIndex]}
              alt="Картинка курса"
              fill
              quality={100}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
