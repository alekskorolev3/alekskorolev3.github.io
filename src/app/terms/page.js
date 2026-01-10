'use client'

import Breadcrumbs from "@/components/Breadcrumbs";
import Head from 'next/head';

export default function TermsOfService() {
    // Основная структурированная разметка для пользовательского соглашения
    const termsOfServiceStructuredData = {
        "@context": "https://schema.org",
        "@type": "TermsOfService",
        "name": "Пользовательское соглашение FlowAuto",
        "description": "Условия использования сервиса подбора автомобилей FlowAuto",
        "url": "https://flowauto.ru/terms",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01",
        "publisher": {
            "@type": "Organization",
            "name": "FlowAuto",
            "url": "https://flowauto.ru",
            "logo": "https://flowauto.ru/logo.png"
        },
        "about": {
            "@type": "Service",
            "name": "Подбор автомобилей из Беларуси",
            "description": "Сервис подбора и доставки автомобилей из Беларуси в Россию"
        },
        "copyrightHolder": {
            "@type": "Organization",
            "name": "FlowAuto"
        },
        "copyrightNotice": "© 2024 FlowAuto. Все права защищены.",
        "creditText": "Пользовательское соглашение разработано в соответствии с требованиями законодательства",
        "inLanguage": "ru-RU",
        "keywords": "пользовательское соглашение, условия использования, сервис подбора авто, FlowAuto",
        "license": "https://flowauto.ru/terms",
        "mentions": [
            {
                "@type": "Thing",
                "name": "Гражданский кодекс Российской Федерации"
            },
            {
                "@type": "Thing",
                "name": "Закон о защите прав потребителей"
            }
        ],
        "hasPart": [
            {
                "@type": "CreativeWork",
                "name": "Общие положения",
                "description": "Основные условия использования сервиса"
            },
            {
                "@type": "CreativeWork",
                "name": "Права и обязанности пользователя",
                "description": "Обязанности и права пользователей сервиса"
            },
            {
                "@type": "CreativeWork",
                "name": "Права и обязанности сервиса",
                "description": "Обязанности и права сервиса FlowAuto"
            },
            {
                "@type": "CreativeWork",
                "name": "Ограничение ответственности",
                "description": "Ограничения ответственности сервиса"
            },
            {
                "@type": "CreativeWork",
                "name": "Разрешение споров",
                "description": "Процедура разрешения споров"
            },
            {
                "@type": "CreativeWork",
                "name": "Заключительные положения",
                "description": "Заключительные условия соглашения"
            }
        ]
    };

    // Структурированные данные для веб-страницы
    const webPageStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Пользовательское соглашение | Flow Auto",
        "description": "Условия использования сервиса подбора автомобилей FlowAuto",
        "url": "https://flowauto.ru/terms",
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
                    "name": "Пользовательское соглашение",
                    "item": "https://flowauto.ru/terms"
                }
            ]
        }
    };

    // Структурированные данные для списка разделов
    const sectionsStructuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Разделы пользовательского соглашения",
        "description": "Основные разделы условий использования сервиса",
        "numberOfItems": 6,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Общие положения"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Права и обязанности пользователя"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Права и обязанности сервиса"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Ограничение ответственности"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Разрешение споров"
            },
            {
                "@type": "ListItem",
                "position": 6,
                "name": "Заключительные положения"
            }
        ]
    };

    return (
        <>
            <Head>
                {/* Основная разметка TermsOfService */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(termsOfServiceStructuredData)
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
                        __html: JSON.stringify(sectionsStructuredData)
                    }}
                />
            </Head>

            <div className="bg-white text-gray-900 min-h-screen">
                <div className="container mx-auto px-4 relative z-10 pt-6">
                    <Breadcrumbs items={[{label: 'Пользовательское соглашение', href: '/terms', isCurrent: true}]}/>
                </div>

                <div
                    className="max-w-full sm:max-w-3xl md:max-w-4xl mx-auto px-4 py-8 md:py-16"
                    itemScope
                    itemType="https://schema.org/TermsOfService"
                >
                    {/* Заголовок */}
                    <h1
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
                        itemProp="headline"
                    >
                        Пользовательское соглашение
                    </h1>

                    <p
                        className="mb-6 text-gray-700 text-sm sm:text-base"
                        itemProp="description"
                    >
                        Настоящее Пользовательское соглашение регулирует отношения между сервисом <b>FlowAuto</b> и
                        пользователями сайта. Используя сайт, вы соглашаетесь с условиями данного соглашения.
                    </p>

                    {/* Общие положения */}
                    <section
                        className="mb-6 sm:mb-8"
                        itemProp="hasPart"
                        itemScope
                        itemType="https://schema.org/CreativeWork"
                    >
                        <h2
                            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                            itemProp="name"
                        >
                            1. Общие положения
                        </h2>

                        <ul
                            className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base"
                            itemProp="text"
                        >
                            <li>Сайт предоставляет услуги по подбору автомобилей и консультации.</li>
                            <li>Используя сайт, пользователь подтверждает согласие с условиями соглашения.</li>
                            <li>Сервис оставляет за собой право изменять условия соглашения с уведомлением пользователей.</li>
                        </ul>
                    </section>

                    {/* Права и обязанности */}
                    <section
                        className="mb-6 sm:mb-8"
                        itemProp="hasPart"
                        itemScope
                        itemType="https://schema.org/CreativeWork"
                    >
                        <h2
                            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                            itemProp="name"
                        >
                            2. Права и обязанности пользователя
                        </h2>

                        <ul
                            className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base"
                            itemProp="text"
                        >
                            <li>Пользователь обязуется предоставлять корректные данные при заполнении форм.</li>
                            <li>Не использовать сайт для незаконной деятельности или распространения запрещенной информации.</li>
                            <li>Имеет право запрашивать информацию о своих данных и их удаление.</li>
                        </ul>
                    </section>

                    {/* Права и обязанности сервиса */}
                    <section
                        className="mb-6 sm:mb-8"
                        itemProp="hasPart"
                        itemScope
                        itemType="https://schema.org/CreativeWork"
                    >
                        <h2
                            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                            itemProp="name"
                        >
                            3. Права и обязанности сервиса
                        </h2>

                        <ul
                            className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base"
                            itemProp="text"
                        >
                            <li>Сервис обязуется обеспечивать конфиденциальность персональных данных пользователей.</li>
                            <li>Обеспечивать корректное предоставление услуг в соответствии с заявленными условиями.</li>
                            <li>Имеет право вносить изменения в работу сайта и услуги при предварительном уведомлении пользователей.</li>
                        </ul>
                    </section>

                    {/* Ограничение ответственности */}
                    <section
                        className="mb-6 sm:mb-8"
                        itemProp="hasPart"
                        itemScope
                        itemType="https://schema.org/CreativeWork"
                    >
                        <h2
                            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                            itemProp="name"
                        >
                            4. Ограничение ответственности
                        </h2>

                        <div itemProp="text">
                            <p className="text-gray-700 text-sm sm:text-base mb-2">
                                Сервис не несет ответственность за любые убытки, возникшие в результате:
                            </p>

                            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                                <li>Использования предоставленной информации;</li>
                                <li>Ошибок или недостоверной информации, предоставленной пользователем;</li>
                                <li>Форс-мажорных обстоятельств (стихийные бедствия, технические сбои и др.).</li>
                            </ul>
                        </div>
                    </section>

                    {/* Разрешение споров */}
                    <section
                        className="mb-6 sm:mb-8"
                        itemProp="hasPart"
                        itemScope
                        itemType="https://schema.org/CreativeWork"
                    >
                        <h2
                            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                            itemProp="name"
                        >
                            5. Разрешение споров
                        </h2>

                        <p
                            className="text-gray-700 text-sm sm:text-base"
                            itemProp="text"
                        >
                            Все споры и разногласия решаются путем переговоров. При невозможности урегулирования — в
                            соответствии с законодательством Российской Федерации.
                        </p>
                    </section>

                    {/* Заключительные положения */}
                    <section
                        itemProp="hasPart"
                        itemScope
                        itemType="https://schema.org/CreativeWork"
                    >
                        <h2
                            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3"
                            itemProp="name"
                        >
                            6. Заключительные положения
                        </h2>

                        <div itemProp="text">
                            <p className="text-gray-700 text-sm sm:text-base mb-2">
                                Использование сайта означает согласие с условиями настоящего соглашения. Пользователь имеет
                                право прекратить использование сайта в любое время.
                            </p>

                            <p className="text-gray-700 text-sm sm:text-base">
                                Все вопросы по Пользовательскому соглашению можно направлять на электронную почту: <a
                                href="mailto:info@flowauto.ru"
                                className="underline"
                                itemProp="contactPoint"
                            >
                                info@flowauto.ru
                            </a>.
                            </p>
                        </div>
                    </section>

                    {/* Скрытые метаданные */}
                    <div style={{ display: 'none' }}>
                        <meta itemProp="datePublished" content="2024-01-01" />
                        <meta itemProp="dateModified" content="2024-01-01" />
                        <meta itemProp="inLanguage" content="ru-RU" />
                        <meta itemProp="keywords" content="пользовательское соглашение, условия использования, сервис подбора авто, FlowAuto" />
                        <meta itemProp="copyrightNotice" content="© 2024 FlowAuto. Все права защищены." />
                        <meta itemProp="creditText" content="Пользовательское соглашение разработано в соответствии с требованиями законодательства" />
                        <meta itemProp="license" content="https://flowauto.ru/terms" />

                        <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                            <meta itemProp="name" content="FlowAuto" />
                            <meta itemProp="url" content="https://flowauto.ru" />
                            <meta itemProp="logo" content="https://flowauto.ru/logo.png" />
                        </div>

                        <div itemProp="about" itemScope itemType="https://schema.org/Service">
                            <meta itemProp="name" content="Подбор автомобилей из Беларуси" />
                            <meta itemProp="description" content="Сервис подбора и доставки автомобилей из Беларуси в Россию" />
                        </div>

                        <div itemProp="copyrightHolder" itemScope itemType="https://schema.org/Organization">
                            <meta itemProp="name" content="FlowAuto" />
                        </div>

                        <div itemProp="mentions" itemScope itemType="https://schema.org/Thing">
                            <meta itemProp="name" content="Гражданский кодекс Российской Федерации" />
                        </div>
                        <div itemProp="mentions" itemScope itemType="https://schema.org/Thing">
                            <meta itemProp="name" content="Закон о защите прав потребителей" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
