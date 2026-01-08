const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-8 sm:py-12 text-center min-h-[220px]">

                {/* Название */}
                <h3 className="text-lg sm:text-xl font-semibold mb-2 leading-[1.5] min-h-[1.75rem]">
                    FlowAuto
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-6 min-h-[2.5rem]">
                    Подбор автомобилей из Беларуси в Россию. Помогаем выбрать надежную машину без переплат и рисков.
                </p>


                {/* Ссылки */}
                <div className="flex flex-col sm:flex-row justify-center text-gray-400 text-sm sm:text-base mb-4 gap-2 sm:gap-6">
                    <a href="/privacy" className="underline hover:text-[#ffd632] transition-colors">
                        Политика конфиденциальности
                    </a>
                    <a href="/terms" className="underline hover:text-[#ffd632] transition-colors">
                        Пользовательское соглашение
                    </a>
                </div>

                {/* Копирайт */}
                <p className="text-gray-500 text-xs sm:text-sm leading-[1.2] min-h-[1rem]">
                    © 2026 flowauto.ru Все права защищены.
                </p>

            </div>
        </footer>
    );
}

export default Footer;
