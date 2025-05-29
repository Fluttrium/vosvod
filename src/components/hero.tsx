'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export const Hero = () => {
  const content = {
    slides: [
      'Основные направления работы учебного центра: обеспечение безаварийной эксплуатации маломерных судов и безопасности людей на водных объектах, охрана труда, пожарная безопасность, водолазная подготовка.',
      'Обучение проводится как очно, так и с применением дистанционных образовательных технологий с использованием системы дистанционного обучения.',
    ],
    images: [
      '/Rectangle.png',
      '/-ГИМС-2-e1691746586214.jpeg',
      '/-ГИМС-3-e1691746560117.jpeg',
      '/-ГИМС-1-e1691746637981.jpeg',
    ],
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % content.images.length)
    }, 5000)

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.slides.length)
    }, 8000)

    return () => {
      clearInterval(imageInterval)
      clearInterval(slideInterval)
    }
  }, [])

  // Правая часть — анимация быстрее, сдвиг по Y и прозрачность
  const imageVariants = {
    initial: { y: '-100%', opacity: 0 },
    animate: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: {
      y: '100%',
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeIn' },
    },
  }

  // Левая часть — не исчезает, а чуть поднимается вверх и становится чуть прозрачнее, потом возвращается
  const slideVariants = {
    initial: { opacity: 1, y: 0 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    exit: {
      opacity: 0.8,
      y: -15,
      transition: { duration: 0.5, ease: 'easeIn' },
    },
  }

  return (
    <section className="relative w-full h-[700px] lg:h-[79vh] overflow-hidden">
      {/* Правая часть — фоновое изображение */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
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
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Левая часть — текст и кнопка */}
      <motion.div
        key={currentSlide}
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-20 w-full lg:w-1/2 h-full flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20 bg-white text-black lg:rounded-br-[180px] shadow-md py-10"
      >
        {/* Логотипы */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-28 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 rounded-md overflow-hidden border border-gray-200 bg-white shadow hover:shadow-md transition-shadow duration-300">
            <Image
              src="/регистр.png"
              alt="регистр"
              width={256}
              height={256}
              quality={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-28 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 rounded-md overflow-hidden border border-gray-200 bg-white shadow hover:shadow-md transition-shadow duration-300">
            <Image
              src="/image.png"
              alt="эмблема"
              width={256}
              height={256}
              quality={100}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Текст */}
        <div className="mt-8 mb-6 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-center max-w-xl">
          {content.slides[currentSlide]}
        </div>

        {/* Кнопка */}
        <a
          href="tel:+79319787378"
          className="bg-[#0072c5] hover:bg-[#005fa7] text-white font-medium px-6 py-3 rounded-full transition"
        >
          Записаться на курс
        </a>
      </motion.div>
    </section>
  )
}
