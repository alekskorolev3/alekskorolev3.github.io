import { MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
      <footer
          className="bg-gray-900 text-white relative z-10"
          itemScope
          itemType="https://schema.org/Organization"
      >
          <div className="container mx-auto px-4 py-8 sm:py-12 text-center">

              {/* Название */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4" itemProp="name">
                  FlowAuto
              </h3>

              {/* Описание */}
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6" itemProp="description">
                  Онлайн-сервис подбора автомобилей из Беларуси в Россию. Помогаем выбрать надежную машину без переплат
                  и
                  рисков.
              </p>

              {/* Ссылки на политику и соглашение */}
              <div
                  className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-gray-400 text-sm sm:text-base mb-4">
                  <a href="/privacy" className="underline hover:text-[#ffd632] transition-colors">
                      Политика конфиденциальности
                  </a>
                  <a href="/terms" className="underline hover:text-[#ffd632] transition-colors">
                      Пользовательское соглашение
                  </a>
              </div>

              {/* Копирайт */}
              <p className="text-gray-500 text-xs sm:text-sm">
                  &copy; 2026 flowauto.ru Все права защищены.
              </p>

          </div>
      </footer>

  );
}

export default Footer
