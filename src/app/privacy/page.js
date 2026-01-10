'use client'

import Breadcrumbs from "@/components/Breadcrumbs";
import Head from 'next/head';

export default function PrivacyPolicy() {
    // Комплексная структурированная разметка
    const privacyPolicyStructuredData = {
        "@context": "https://schema.org",
        "@type": "PrivacyPolicy",
        "name": "Политика конфиденциальности FlowAuto",
        "description": "Документ, регулирующий обработку персональных данных пользователей сервиса подбора автомобилей",
        "url": "https://flowauto.ru/privacy",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01",
        "publisher": {
            "@type": "Organization",
            "name": "FlowAuto",
            "url": "https://flowauto.ru"
        },
        "about": {
            "@type": "Thing",
            "name": "Защита персональных данных"
        },
        "acquireLicensePage": "https://flowauto.ru/privacy",
        "copyrightHolder": {
            "@type": "Organization",
            "name": "FlowAuto"
        },
        "copyrightNotice": "© 2024 FlowAuto. Все права защищены.",
        "creditText": "Политика конфиденциальности разработана в соответствии с требованиями законодательства",
        "inLanguage": "ru-RU",
        "keywords": "GDPR, 152-ФЗ, персональные данные, конфиденциальность, cookies",
        "license": "https://flowauto.ru/terms",
        "mentions": [
            {
                "@type": "Thing",
                "name": "Общий регламент по защите данных (GDPR)"
            },
            {
                "@type": "Thing",
                "name": "Федеральный закон № 152-ФЗ"
            }
        ]
    };

    // Дополнительная структурированная разметка для веб-страницы
    const webPageStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Политика конфиденциальности | Flow Auto",
        "description": "Политика обработки персональных данных сервиса подбора автомобилей FlowAuto",
        "url": "https://flowauto.ru/privacy",
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Главная",
                    "item": "https://flowauto.ru"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Политика конфиденциальности",
                    "item": "https://flowauto.ru/privacy"
                }
            ]
        }
    };

    // Структурированные данные для раздела
    const sectionStructuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Разделы политики конфиденциальности",
        "description": "Основные разделы политики обработки персональных данных",
        "numberOfItems": 6,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Сбор информации"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Использование информации"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Передача данных третьим лицам"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Cookies"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Права пользователя"
            },
            {
                "@type": "ListItem",
                "position": 6,
                "name": "Контактная информация"
            }
        ]
    };

    return (
        <>
            <Head>
                {/* Основная разметка PrivacyPolicy */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(privacyPolicyStructuredData)
                    }}
                />

                {/* Дополнительная разметка WebPage */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(webPageStructuredData)
                    }}
                />

                {/* Разметка для разделов */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(sectionStructuredData)
                    }}
                />
            </Head>

            <div className="bg-white text-gray-900 min-h-screen">
                <div className="container mx-auto px-4 relative z-10 pt-6">
                    <Breadcrumbs items={[{label: 'Политика конфиденциальности', href: '/privacy', isCurrent: true}]}/>
                </div>

                <div
                    className="max-w-full sm:max-w-3xl md:max-w-4xl mx-auto px-4 py-8 md:py-16"
                    itemScope
                    itemType="https://schema.org/PrivacyPolicy"
                >
                    {/* Заголовок */}
                    <h1
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
                        itemProp="headline"
                    >
                        Политика конфиденциальности
                    </h1>

                    <p
                        className="mb-6 text-gray-700 text-sm sm:text-base"
                        itemProp="description"
                    >
                        Настоящая Политика конфиденциальности описывает, как сервис <b>FlowAuto</b> собирает, использует и
                        защищает персональные данные пользователей.
                    </p>

                    {/* Сбор данных */}
                    <section
                        className="mb-6 sm:mb-8"
                        itemProp="hasPart"
                        itemScope
                        itemType="https://schema.org/WebPageElement"
                    >
                        <h2
                            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                            itemProp="name"
                        >
                            1. Сбор информации
                        </h2>

                        <div itemProp="text">
                            <p className="text-gray-700 text-sm sm:text-base mb-2">
                                Мы можем собирать следующие данные:
                            </p>

                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                                <li>Имя, контакты (телефон, email), которые вы предоставляете при заполнении форм;</li>
                                <li>Информация о посещениях сайта (IP-адрес, браузер, дата и время посещения);</li>
                                <li>Cookies и другие технологии для улучшения работы сайта.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Использование данных */}
                    <section
                        className="mb-6 sm:mb-8"
                        itemProp="hasPart"
                        itemScope
                        itemType="https://schema.org/WebPageElement"
                    >
                        <h2
                            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                            itemProp="name"
                        >
                            2. Использование информации
                        </h2>

                        <div itemProp="text">
                            <p className="text-gray-700 text-sm sm:text-base mb-2">
                                Собранные данные используются для:
                            </p>

                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                                <li>Обработки заявок и обратной связи;</li>
                                <li>Улучшения качества обслуживания и работы сервиса;</li>
                                <li>Отправки уведомлений о важных обновлениях и акциях (только при согласии пользователя).</li>
                            </ul>
                        </div>
                    </section>

                    {/* Передача третьим лицам */}
                    <section
                        className="mb-6 sm:mb-8"
                        itemProp="hasPart"
                        itemScope
                        itemType="https://schema.org/WebPageElement"
                    >
                        <h2
                            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                            itemProp="name"
                        >
                            3. Передача данных третьим лицам
                        </h2>

                        <p
                            className="text-gray-700 text-sm sm:text-base"
                            itemProp="text"
                        >
                            Мы не продаем и не передаем ваши персональные данные третьим лицам без вашего согласия, за
                            исключением случаев, предусмотренных законом или необходимостью выполнения услуг (например,
                            курьерская доставка автомобиля).
                        </p>
                    </section>

                    {/* Cookies */}
                    <section
                        className="mb-6 sm:mb-8"
                        itemProp="hasPart"
                        itemScope
                        itemType="https://schema.org/WebPageElement"
                    >
                        <h2
                            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                            itemProp="name"
                        >
                            4. Cookies
                        </h2>

                        <p
                            className="text-gray-700 text-sm sm:text-base"
                            itemProp="text"
                        >
                            Сайт использует cookies для улучшения работы сервиса и персонализации. Вы можете отказаться от
                            использования cookies через настройки браузера, но это может ограничить функциональность сайта.
                        </p>
                    </section>

                    {/* Права пользователя */}
                    <section
                        className="mb-6 sm:mb-8"
                        itemProp="hasPart"
                        itemScope
                        itemType="https://schema.org/WebPageElement"
                    >
                        <h2
                            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                            itemProp="name"
                        >
                            5. Права пользователя
                        </h2>

                        <div itemProp="text">
                            <p className="text-gray-700 text-sm sm:text-base mb-2">
                                Вы имеете право:
                            </p>

                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                                <li>Запросить информацию о своих данных, которые мы храним;</li>
                                <li>Запросить исправление или удаление ваших персональных данных;</li>
                                <li>Отозвать согласие на обработку данных в любой момент.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Контакты */}
                    <section
                        itemProp="hasPart"
                        itemScope
                        itemType="https://schema.org/WebPageElement"
                    >
                        <h2
                            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                            itemProp="name"
                        >
                            6. Контактная информация
                        </h2>

                        <p
                            className="text-gray-700 text-sm sm:text-base"
                            itemProp="text"
                        >
                            Если у вас есть вопросы о нашей Политике конфиденциальности, пожалуйста, свяжитесь с нами через
                            форму на сайте или по электронной почте: <a
                            href="mailto:info@flowauto.ru"
                            className="underline"
                            itemProp="contactPoint"
                        >
                            info@flowauto.ru
                        </a>.
                        </p>
                    </section>

                    {/* Скрытые метаданные */}
                    <div style={{ display: 'none' }}>
                        <meta itemProp="datePublished" content="2024-01-01" />
                        <meta itemProp="dateModified" content="2024-01-01" />
                        <meta itemProp="inLanguage" content="ru-RU" />
                        <meta itemProp="keywords" content="GDPR, 152-ФЗ, персональные данные, конфиденциальность, cookies" />

                        <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                            <meta itemProp="name" content="FlowAuto" />
                            <meta itemProp="url" content="https://flowauto.ru" />
                        </div>

                        <div itemProp="about" itemScope itemType="https://schema.org/Thing">
                            <meta itemProp="name" content="Защита персональных данных" />
                        </div>

                        <div itemProp="copyrightHolder" itemScope itemType="https://schema.org/Organization">
                            <meta itemProp="name" content="FlowAuto" />
                        </div>

                        <meta itemProp="copyrightNotice" content="© 2024 FlowAuto. Все права защищены." />
                        <meta itemProp="creditText" content="Политика конфиденциальности разработана в соответствии с требованиями законодательства" />
                        <meta itemProp="acquireLicensePage" content="https://flowauto.ru/privacy" />
                        <meta itemProp="license" content="https://flowauto.ru/terms" />

                        <div itemProp="mentions" itemScope itemType="https://schema.org/Thing">
                            <meta itemProp="name" content="Общий регламент по защите данных (GDPR)" />
                        </div>
                        <div itemProp="mentions" itemScope itemType="https://schema.org/Thing">
                            <meta itemProp="name" content="Федеральный закон № 152-ФЗ" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
