const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white relative z-10">
          <div className="container mx-auto px-4 py-8 sm:py-12 text-center min-h-[220px]">

              {/* Название */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 min-h-[28px]" itemProp="name">
                  FlowAuto
              </h3>

              {/* Описание */}
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 min-h-[40px]" itemProp="description">
                  Подбор автомобилей из Беларуси в Россию. Помогаем выбрать надежную машину без переплат и рисков.
              </p>

              {/* Ссылки */}
              <div className="flex flex-col sm:flex-row justify-center text-gray-400 text-sm sm:text-base mb-4">
                  <a href="/privacy" className="underline hover:text-[#ffd632] transition-colors mb-2 sm:mb-0 sm:mr-6">
                      Политика конфиденциальности
                  </a>
                  <a href="/terms" className="underline hover:text-[#ffd632] transition-colors">
                      Пользовательское соглашение
                  </a>
              </div>

              {/* Копирайт */}
              <p className="text-gray-500 text-xs sm:text-sm min-h-[16px]">© 2026 flowauto.ru Все права защищены.</p>
          </div>
      </footer>
  );
}

export default Footer
