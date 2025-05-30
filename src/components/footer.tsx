"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
  DocumentTextIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('2024');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-blue-50 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Логотип и контакты */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
            <img 
                src="/logo-vosvod.png" 
                alt="Логотип ВОСВОД" 
                className="w-12 h-12 object-contain" // Настраиваем размеры
              />
              <span className="text-xl font-bold text-blue-900">ВОСВОД</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <PhoneIcon className="w-5 h-5 mt-1 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">+7-931-978-73-78</p>
                  <p className="font-medium text-blue-900">8(812)944-46-49</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <EnvelopeIcon className="w-5 h-5 mt-1 text-blue-600" />
                <a href="mailto:vosvodcenter@mail.ru" className="text-blue-600 hover:text-blue-800">
                  vosvodcenter@mail.ru
                </a>
              </div>
            </div>
          </div>

          {/* Документация */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-900">День открытых дверей и выдача документов <br/>
            Каждую субботу с 12:00 - 15:00</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/payment-rules" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  Образовательная лицензия №Л035-01271-78/00176691 от 28.01.2022 года
                </Link>
              </li>
            </ul>
          </div>

          {/* Обучение */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-900">АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ДОПОЛНИТЕЛЬНОГО ПРОФЕССИОНПЛЬНОГО ОБРАЗОВАНИЯ "УЧЕБНЫЙ ЦЕНТР СУДОВОЖДНИЯ"</h4>
            <ul className="space-y-2">
              <li>
                ИНН\КПП 7838099880\783801001
              </li>
            </ul>
          </div>
          
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-blue-100 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-blue-600 text-sm">
                Лицензия №Л035-01271-78/00755931 от 2 ноября 2023 года
              </p>
              <p className="text-blue-600 text-sm mt-2">
                © {currentYear} ВОСВОД. Все права защищены
              </p>
            </div>
            
            <div className="flex space-x-6">
              <button 
                onClick={() => setIsOfferModalOpen(true)} 
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Договор оферты
              </button>
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Пользовательское соглашение
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Модальные окна (аналогичные вашему исходному коду с измененными реквизитами) */}
      {isOfferModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Содержимое модального окна оферты с реквизитами ВОСВОД */}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Содержимое модального окна соглашения */}
        </div>
      )}
    </footer>
  );
};

export default Footer;