"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import GalleryBlock from '@/components/slideimg'
import WhyVOSVOD from '@/components/ui/education'

export default function ManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="bg-gray-50 relative">
      {/* Hero video block */}
      <div className="relative w-full h-screen">
        <video
          src="/Добро-пожаловать.mp4"
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
            Органы управления АНО ДПО “УЦС”
          </h1>
          <p className="text-lg text-white mb-4 max-w-2xl drop-shadow">
            Структура, полномочия и принципы деятельности руководящих органов
          </p>
          <Button
            onClick={openModal}
            className="bg-blue-800 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl"
          >
            Смотреть видео
          </Button>
        </div>
      </div>

      {/* Modal video */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-red-500"
            >✕</button>
            <video controls autoPlay className="w-full h-auto rounded-xl shadow-lg">
              <source src="/Добро-пожаловать.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        </div>
      )}

      <div className="space-y-10 max-w-7xl mx-auto px-4 py-16">
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Состав органов управления</h2>
          <p className="text-gray-700 mb-4">
            Органами управления АНО ДПО “УЦС” являются:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Единственный Собственник АНО ДПО “УЦС”</li>
            <li>Директор АНО ДПО “УЦС”</li>
          </ul>

          <p className="text-gray-700 mt-4">
            Высшим органом управления является Собственник, принимающий решения единолично.
          </p>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Компетенция Собственника</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Изменение устава, утверждение символики</li>
            <li>Определение направлений и принципов деятельности</li>
            <li>Назначение и увольнение Директора</li>
            <li>Решения по ликвидации/реорганизации</li>
            <li>Финансовые документы: отчёты, планы, балансы</li>
            <li>Утверждение цен на обучение</li>
            <li>Принятие локальных актов</li>
            <li>Создание филиалов, участие в объединениях</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Полномочия Директора</h3>
          <p className="text-gray-700 mb-4">
            Директор избирается сроком на 5 лет и выполняет функции постоянного руководителя.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Организация работы Собственника и реализация решений</li>
            <li>Формирование комиссий, структуры и штатов</li>
            <li>Финансовое планирование, отчётность, приказы</li>
            <li>Представление интересов АНО ДПО “УЦС”</li>
            <li>Подписание договоров, выдача доверенностей</li>
            <li>Назначение сотрудников, утверждение регламентов</li>
            <li>Открытие банковских счетов, распоряжение средствами</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Структурные подразделения: <strong>нет</strong><br />
            Объекты инфраструктуры: <strong>нет</strong>
          </p>
        </section>
        <GalleryBlock
          images={[
            '/Техника/1.jpg',
            '/Техника/2.jpg',
            '/Техника/3.jpg',
            '/Техника/4.jpg'
          ]}
        />
        <WhyVOSVOD />
      </div>
    </div>
  )
}