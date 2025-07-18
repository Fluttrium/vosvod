"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const AboutBasicInfoPage = () => {
  const documents = [
    { title: 'Закон об образовании', url: 'http://www.consultant.ru/document/cons_doc_LAW_140174/' },
    { title: 'Правила внутреннего трудового распорядка', url: 'http://vosvod.spb.ru/wp-content/uploads/2023/02/CCE05032017_0001.pdf' },
    { title: 'Положение о защите персональных данных', url: 'http://vosvod.spb.ru/wp-content/uploads/2023/02/CCE05032017_0003.pdf' },
    { title: 'Положение о порядке подготовки и организации проведения самообследования', url: 'http://vosvod.spb.ru/wp-content/uploads/2023/02/CCE05032017_0005.pdf' },
    { title: 'Отчет о результатах самообследования', url: 'http://vosvod.spb.ru/wp-content/uploads/2023/03/Лицензия.pdf' },
    { title: 'Лицензия', url: 'http://vosvod.spb.ru/wp-content/uploads/2023/02/CCE05032017_0fhd.pdf' },
    { title: 'Положение о приеме обучающихся', url: 'https://vosvod.spb.ru/ноу-до-уцс/03-документы/UCS/Справка%20о%20реализуемых%20образовательных%20программах18032017_0000.pdf' },
    { title: 'План финансово-хозяйственной деятельности на 2017 год', url: 'http://vosvod.spb.ru/wp-content/uploads/2023/02/Правила_внутреннего_распорядка_для_обучающихся18032017_0000.pdf' },
    { title: 'Справка о реализуемых образовательных программах', url: 'http://vosvod.spb.ru/информация-о-правилах-коллективного/' },
    { title: 'Правила внутреннего распорядка для обучающихся', url: 'http://vosvod.spb.ru/wp-content/uploads/2023/03/Устав-АНО-ДПО-УЦС.pdf' },
    { title: 'Информация о правилах коллективного договора', url: 'http://vosvod.spb.ru/wp-content/uploads/2023/02/Положение-о-порядке-предоставления-платных-образователных-услуг.pdf' },
    { title: 'Устав АНО ДПО “УЦС”', url: 'http://vosvod.spb.ru/wp-content/uploads/2023/02/Образец-договора-об-оказании-платных-образователных-услуг.pdf' },
    { title: 'Положение о порядке предоставления платных образовательных услуг', url: 'http://vosvod.spb.ru/wp-content/uploads/2023/02/Приказ-об-утверждении-стоимости-обучения-и-приложение-к-нему.pdf' },
    { title: 'Образец договора об оказании платных образовательных услуг', url: 'http://vosvod.spb.ru/wp-content/uploads/2023/02/Приказ-об-утверждении-стоимости-обучения-и-приложение-к-нему.pdf' },
    { title: 'Приказ об утверждении стоимости обучения и приложение к нему', url: 'http://vosvod.spb.ru/wp-content/uploads/2023/02/Приказ-об-утверждении-стоимости-обучения-и-приложение-к-нему.pdf' },
  ];

  return (
    <div className="bg-gray-50 relative py-20">
      <div className="space-y-10 max-w-7xl mx-auto px-4 py-16">
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            03. Свод нормативных документов
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Ниже представлены ключевые нормативные документы, регламентирующие деятельность АНО ДПО “УЦС”.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <Link
                key={index}
                href={doc.url}
                target="_blank"
                className="block bg-gradient-to-br from-blue-50 to-white hover:from-blue-100 border border-blue-100 rounded-2xl p-5 text-blue-900 shadow-sm hover:shadow-md transition-all"
              >
                <span className="font-semibold text-base leading-snug">{doc.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutBasicInfoPage;