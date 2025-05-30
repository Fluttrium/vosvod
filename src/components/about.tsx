"use client";

import React from "react";
import { useRouter } from "next/navigation"; // <-- Импорт хука
import { LifeBuoy, BookOpen, Clock, Award, Users, ListChecks } from "lucide-react";

export function VOSVODCards() {
  const router = useRouter(); // <-- Инициализация

  const iconsData = [
    { title: "20 лет опыта", icon: <Award className="w-8 h-8 text-blue-600" /> },
    { title: "Предоставляем свои суда на государственный экзамен", icon: <ListChecks className="w-8 h-8 text-blue-600" /> },
    { title: "24/7 личный кабинет", icon: <Clock className="w-8 h-8 text-blue-600" /> },
    { title: "Лекции в очно и дистанционных форматах", icon: <Users className="w-8 h-8 text-blue-600" /> },
    { title: "Сопровождение до получения удостоверения", icon: <BookOpen className="w-8 h-8 text-blue-600" /> },
    { title: "Современные тренажеры", icon: <LifeBuoy className="w-8 h-8 text-blue-600" /> },
  ];

  return (
    <section className="bg-[#f5f5f6] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок и описание */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-800 mb-4">
            Учебный центр <span className="text-blue-600">ВОСВОД</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            АНО ДПО «УЦС» является структурным подразделением ВОСВОД и осуществляет образовательную деятельность, направленную, прежде всего, на обеспечение безаварийной эксплуатации маломерных судов и безопасности людей на водных объектах с 2002 г., являясь продолжателем традиций преподавания советских морских школ ВОСВОД.
          </p>

          {/* Призыв и кнопка */}
          <div className="mt-16 text-center space-y-4">
            <button
              onClick={() => router.push("/information")} // <-- переход
              className="mt-2 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium rounded-md transition-colors"
            >
              Узнать подробнее
            </button>
          </div>
        </div>

        {/* Иконки преимуществ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {iconsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white text-center p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="mb-3 p-3 bg-blue-50 rounded-full">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-blue-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Призыв */}
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-blue-700">
            Будь с нами – будь среди лучших!
          </p>
        </div>
      </div>
    </section>
  );
}
