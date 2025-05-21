'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import GalleryBlock from '@/components/slideimg'
import WhyVOSVOD from '@/components/ui/education'

const SailingCoursePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="bg-gray-50 relative">
      {/* Fullscreen video section with overlay text */}
      <div className="relative w-full h-screen">
        <video
          src="/Практика-на-парусном-судне.mp4"
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
          Курсы на управление парусным судном ГИМС.
          </h1>
          <p className="text-lg text-white mb-4 max-w-2xl drop-shadow">
            Учебный Центр ВОСВОД — обучение управлению парусным судном и получение удостоверения ГИМС без ограничения площади парусов
          </p>
          <Button
            onClick={openModal}
            className="bg-blue-800 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl"
          >
            Смотреть видео
          </Button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-red-500"
            >
              ✕
            </button>
            <video controls autoPlay className="w-full h-auto rounded-xl shadow-lg">
              <source src="/Практика-на-парусном-судне.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      <div className="space-y-10 max-w-7xl mx-auto px-4 py-16">
      <section className="bg-white p-6 rounded-2xl shadow-md">
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">О курсе</h3>
  <div className="text-gray-700 space-y-4 text-base leading-relaxed">
    <p>
      <strong className="text-gray-900 font-semibold">
        Учебный Центр ВОСВОД предлагает пройти обучение на парусное судно с возможностью получения удостоверения ГИМС на парусное судно без ограничения площади парусов.
      </strong>
    </p>
    <p>
      Время прохождения курса – 4 недели. Обучение производится по очно-заочной программе через личный кабинет на нашем сайте. Вам необходимо прочитать методический материал и пройти тестирование.
    </p>
    <p>
      После успешного прохождения тестирования требуется прибыть на школьный экзамен, донести недостающие документы (медсправку и госпошлину). После школьного экзамена проводится практическое занятие с отработкой навыков управления парусным судном и назначается экзамен в ГИМС, где проходит теоретический и практический экзамены.
    </p>
    <p>
      Также приглашаем пройти курс <strong>Яхтенный рулевой</strong>, после которого можно получить права на управление парусным судном с площадью парусности до 80 кв.м.
    </p>
    <p className="text-blue-700 underline font-medium">
      <a href="/courses/motornoye">Курс на маломерное моторное судно</a><br />
      <a href="/courses/yacht">Курс яхтенный рулевой</a>
    </p>
  </div>
</section>
        <section className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Приглашаем на день открытых дверей</h3>
  <p className="text-gray-700 text-lg mb-6 text-center leading-relaxed">
    Приглашаем Вас на <strong>день открытых дверей каждую субботу с 12:00 до 15:00</strong>.<br />
    Запись по телефону: <strong>+7 (931) 978-73-78</strong>.<br />
    Код домофона: <strong>#9898</strong>
  </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Программа обучения</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-gray-800">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top w-1/3">Программа обучения</td>
                  <td className="p-4">Парусное судно для всех районов плавания (МП, ВП, ВВП)</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top">Форма обучения</td>
                  <td className="p-4">Очно-заочная. Через личный кабинет и очные встречи, занятия 2–3 раза в неделю</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top">Длительность</td>
                  <td className="p-4">4 недели</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top">Стоимость</td>
                  <td className="p-4">26 000 рублей</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top">Документы для записи</td>
                  <td className="p-4">Паспорт или копия с пропиской</td>
                </tr>
                <tr>
                  <td className="font-bold underline border-r border-gray-300 p-4 align-top">Документы для ГИМС</td>
                  <td className="p-4">Медсправка №003-В/у с пометкой «Годен для управления маломерным судном», можно донести позже</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-blue-800 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
              Записаться на курс
            </Button>
          </div>
        </section>

        <GalleryBlock
          images={[
            '/Техника/1.jpg',
            '/Техника/2.jpg',
            '/Техника/3.jpg',
            '/Техника/4.jpg'
          ]}
        />
<section className="bg-white p-6 rounded-2xl shadow-md mt-10">
  <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
    Видеообзор обучения
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.01] transition-transform duration-300">
      <video
        muted
        autoPlay
        loop
        playsInline
        className="w-full h-[300px] object-cover rounded-2xl"
      >
        <source src="/Практика-на-парусном-судне.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
    <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.01] transition-transform duration-300">
      <video
        muted
        autoPlay
        loop
        playsInline
        className="w-full h-[300px] object-cover rounded-2xl"
      >
        <source src="/Практика-на-парусном-судне2.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  </div>
</section>
        <WhyVOSVOD />
      </div>
    </div>
  )
}

export default SailingCoursePage
