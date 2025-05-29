"use client";

import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  const cardsData = [
    {
      title: "Судоводитель ГИМС",
      description:
        "Обучение на категории судов поднадзорных ГИМС: Моторное судно, гидроцикл. Районы плавания:МП,ВВП,ВВ",
      imageUrl: "/1pic.jpg",
      link: "/sudovoditely",
    },
    {
      title: "Судоводитель парусного судна ГИМС",
      description: "Обучение на категории судов поднадзорных ГИМС: Парусное судно. Районы плавания: МП, ВВП, ВВ",
      imageUrl: "/2pic.jpg",
      link: "/parusniesyda",
    },
    {
      title: "Судоводитель судов особой конструкции ГИМС",
      description:
        "Обучение на категории судов поднадзорных ГИМС: Аэробот, Судно на воздушной подушке. Районы плавания: МП, ВВП, ВВ",
      imageUrl: "/3pic.jpg",
      link: "/sudaosoboyconst",
    },
    {
      title: "Судоводитель коммерческих судов МИНТРАНС",
      description:
        "Обучение на Судоводителя судна, коммерческого использования МИНТРАНС. Районы плавания: МП, ВВП",
      imageUrl: "/5pic.jpg",
      link: "/commercsud",
    },
    {
      title: "Судоводитель прогулочных судов МИНТРАНС",
      description:
        "Обучение на Судоводителя прогулочного судна МИНТРАНС. Районы плавания: МП, ВВП. Судно свыше 20 м. до 18 человек вместимостью.",
      imageUrl: "/4pic.jpg",
      link: "/progulochnye",
    },
    {
      title: "Матрос спасатель/ международный спасатель ILS",
      description:
        "Матрос спасатель/ международный спасатель ILS",
      imageUrl: "/6pic.jpg",
      link: "/spasately",
    },
    {
      title: "Подводная подготовка",
      description:
        "Водалазные специалисты, дайвинг",
      imageUrl: "/7pic.jpg",
      link: "/vodolaz",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f6] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-800 mb-4">
            Программы <span className="text-blue-600">обучения</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Выберите подходящий курс и начните профессиональное обучение с опытными инструкторами центра ВОСВОД.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <CardContainer key={index} className="inter-var h-full">
              <CardBody className="bg-white hover:shadow-md transition-shadow duration-300 border border-gray-200 rounded-xl p-6 flex flex-col h-full">
                <div className="flex-1 flex flex-col">
                  <CardItem className="text-lg font-semibold text-blue-700 mb-2 line-clamp-2">
                    {card.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    className="text-sm text-gray-600 line-clamp-3 flex-grow"
                  >
                    {card.description}
                  </CardItem>

                  <CardItem className="mt-4">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="rounded-md w-full h-40 object-cover border border-gray-200"
                    />
                  </CardItem>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  {card.link ? (
                    <>
                      <Link href={card.link}>
                        <CardItem
                          as="div"
                          className="text-sm text-blue-600 hover:underline font-medium cursor-pointer"
                        >
                          Подробнее →
                        </CardItem>
                      </Link>
                      <Link href={card.link}>
                        <CardItem
                          as="div"
                          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors cursor-pointer"
                        >
                          Выбрать
                        </CardItem>
                      </Link>
                    </>
                  ) : (
                    <>
                      <CardItem className="text-sm text-gray-400">Подробнее</CardItem>
                      <CardItem className="bg-gray-300 text-white text-sm font-semibold px-4 py-2 rounded-md cursor-not-allowed">
                        Выбрать
                      </CardItem>
                    </>
                  )}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
