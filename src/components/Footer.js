const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white" itemScope itemType="https://schema.org/WPFooter">
            <div className="container mx-auto px-4 py-8 sm:py-12 text-center min-h-[220px]">

                {/* Название с микроразметкой */}
                <div itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="FlowAuto" />
                    <meta itemProp="url" content="https://flowauto.ru" />

                    <h3 className="text-lg sm:text-xl font-semibold mb-2 leading-[1.5] min-h-[1.75rem]">
                        <span itemProp="name">FlowAuto</span>
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-6 min-h-[2.5rem]"
                       itemProp="description">
                        Подбор автомобилей из Беларуси в Россию. Помогаем выбрать надежную машину без переплат и рисков.
                    </p>
                </div>

                {/* Ссылки */}
                <div className="flex flex-col sm:flex-row justify-center text-gray-400 text-sm sm:text-base mb-4 gap-2 sm:gap-6"
                     itemScope itemType="https://schema.org/SiteNavigationElement">
                    <a href="/privacy"
                       className="underline hover:text-[#ffd632] transition-colors"
                       itemProp="url">
                        <span itemProp="name">Политика конфиденциальности</span>
                    </a>
                    <a href="/terms"
                       className="underline hover:text-[#ffd632] transition-colors"
                       itemProp="url">
                        <span itemProp="name">Пользовательское соглашение</span>
                    </a>
                </div>

                {/* Копирайт */}
                <div itemScope itemType="https://schema.org/CreativeWork">
                    <meta itemProp="copyrightYear" content="2026" />
                    <meta itemProp="copyrightHolder" content="flowauto.ru" />

                    <p className="text-gray-500 text-xs sm:text-sm leading-[1.2] min-h-[1rem]"
                       itemProp="copyrightNotice">
                        © 2026 flowauto.ru Все права защищены.
                    </p>
                </div>

                {/* Скрытая микроразметка для SEO */}
                <div style={{ display: 'none' }} itemScope itemType="https://schema.org/WebSite">
                    <meta itemProp="name" content="FlowAuto" />
                    <meta itemProp="url" content="https://flowauto.ru" />
                    <meta itemProp="description" content="Подбор автомобилей из Беларуси в Россию" />
                    <meta itemProp="inLanguage" content="ru-RU" />
                </div>

            </div>
        </footer>
    );
}

export default Footer;
