'use client'

import Breadcrumbs from "@/components/Breadcrumbs";

export default function PrivacyPolicy() {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            <div className="container mx-auto px-4 relative z-10 pt-6">
                <Breadcrumbs items={[{label: 'Политика конфиденциальности', href: '/privacy', isCurrent: true}]}/>
            </div>
            <div className="max-w-full sm:max-w-3xl md:max-w-4xl mx-auto px-4 py-8 md:py-16">

                {/* Заголовок */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                    Политика конфиденциальности
                </h1>
                <p className="mb-6 text-gray-700 text-sm sm:text-base">
                    Настоящая Политика конфиденциальности описывает, как сервис <b>FlowAuto</b> собирает, использует и
                    защищает персональные данные пользователей.
                </p>

                {/* Сбор данных */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">1. Сбор информации</h2>
                    <p className="text-gray-700 text-sm sm:text-base mb-2">
                        Мы можем собирать следующие данные:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                        <li>Имя, контакты (телефон, email), которые вы предоставляете при заполнении форм;</li>
                        <li>Информация о посещениях сайта (IP-адрес, браузер, дата и время посещения);</li>
                        <li>Cookies и другие технологии для улучшения работы сайта.</li>
                    </ul>
                </section>

                {/* Использование данных */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">2. Использование информации</h2>
                    <p className="text-gray-700 text-sm sm:text-base mb-2">
                        Собранные данные используются для:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                        <li>Обработки заявок и обратной связи;</li>
                        <li>Улучшения качества обслуживания и работы сервиса;</li>
                        <li>Отправки уведомлений о важных обновлениях и акциях (только при согласии пользователя).</li>
                    </ul>
                </section>

                {/* Передача третьим лицам */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">3. Передача данных третьим лицам</h2>
                    <p className="text-gray-700 text-sm sm:text-base">
                        Мы не продаем и не передаем ваши персональные данные третьим лицам без вашего согласия, за
                        исключением случаев, предусмотренных законом или необходимостью выполнения услуг (например,
                        курьерская доставка автомобиля).
                    </p>
                </section>

                {/* Cookies */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">4. Cookies</h2>
                    <p className="text-gray-700 text-sm sm:text-base">
                        Сайт использует cookies для улучшения работы сервиса и персонализации. Вы можете отказаться от
                        использования cookies через настройки браузера, но это может ограничить функциональность сайта.
                    </p>
                </section>

                {/* Права пользователя */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">5. Права пользователя</h2>
                    <p className="text-gray-700 text-sm sm:text-base mb-2">
                        Вы имеете право:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                        <li>Запросить информацию о своих данных, которые мы храним;</li>
                        <li>Запросить исправление или удаление ваших персональных данных;</li>
                        <li>Отозвать согласие на обработку данных в любой момент.</li>
                    </ul>
                </section>

                {/* Контакты */}
                <section>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">6. Контактная информация</h2>
                    <p className="text-gray-700 text-sm sm:text-base">
                        Если у вас есть вопросы о нашей Политике конфиденциальности, пожалуйста, свяжитесь с нами через
                        форму на сайте или по электронной почте: <a href="mailto:info@flowauto.ru"
                                                                    className="underline">info@flowauto.ru</a>.
                    </p>
                </section>

            </div>
        </div>
    );
}
