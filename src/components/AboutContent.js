import CTA from "@/components/CTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";

export default function AboutContent() {
    const team = [
        {
            title: "Александр — подбор и диагностика",
            text: "Отвечает за поиск автомобилей, осмотры и техническую проверку. Разбирается в рынке, слабых местах популярных моделей и умеет отличать живую машину от хорошо замаскированной проблемы."
        },
        {
            title: "Артём — сервис и организация",
            text: "Отвечает за сайт, продвижение, коммуникацию с клиентами и контроль всего процесса. Чтобы подбор проходил прозрачно, понятно и без хаоса."
        }
    ];

    const processSteps = [
        "Обсуждаем задачу и требования",
        "Формируем список подходящих моделей",
        "Отсеиваем хлам ещё до осмотров",
        "Проводим осмотры и диагностику",
        "Проверяем историю и документы",
        "Сопровождаем сделку и помогаем с торгом"
    ];

    const principles = [
        "Работаем только в интересах клиента",
        "Не берём в работу сомнительные автомобили",
        "Всегда честно говорим о плюсах и минусах",
        "Лучше не купить ничего, чем купить плохую машину",
        "Опираемся на факты и диагностику, а не эмоции",
        "Работаем «как для себя»"
    ];

    const trustText = [
        "Сейчас сервис находится на этапе запуска, поэтому на сайте ещё нет отзывов клиентов — и мы принципиально не публикуем выдуманные.",
        "Зато у нас есть реальный практический опыт подбора и покупки автомобилей, понимание рынка, десятки просмотренных и отсеянных проблемных вариантов и честный подход к работе.",
        "Первые клиенты получают максимальное внимание к деталям и особые условия. По завершённым проектам мы начнём публиковать реальные кейсы и отзывы."
    ];

    // Основная структурированная разметка для страницы "О нас"
    const aboutStructuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "О сервисе подбора автомобилей FlowAuto",
        "description": "Мы — небольшой специализированный сервис подбора автомобилей в Минске. Помогаем найти действительно живую машину — без скрытых проблем, юридических рисков и переплат.",
        "url": "https://flowauto.ru/about",
        "mainEntity": {
            "@type": "Organization",
            "name": "FlowAuto",
            "alternateName": "FlowAuto",
            "description": "Сервис подбора автомобилей из Беларуси в Россию",
            "url": "https://flowauto.ru",
            "logo": "https://flowauto.ru/logo.png",
            "foundingDate": "2024",
            "founders": [
                {
                    "@type": "Person",
                    "name": "Александр",
                    "jobTitle": "Специалист по подбору и диагностике автомобилей"
                },
                {
                    "@type": "Person",
                    "name": "Артём",
                    "jobTitle": "Специалист по сервису и организации"
                }
            ],
            "numberOfEmployees": 2,
            "knowsAbout": ["Подбор автомобилей", "Диагностика автомобилей", "Проверка документов", "Доставка авто из Беларуси"],
            "serviceArea": {
                "@type": "Place",
                "name": "Минск, Беларусь - Россия"
            },
            "ethicsPolicy": "https://flowauto.ru/principles"
        },
        "publisher": {
            "@type": "Organization",
            "name": "FlowAuto",
            "url": "https://flowauto.ru"
        }
    };

    // Структурированные данные для команды
    const teamStructuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Наша команда",
        "description": "Специалисты сервиса подбора автомобилей FlowAuto",
        "numberOfItems": team.length,
        "itemListElement": team.map((member, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Person",
                "name": member.title.split(" — ")[0],
                "jobTitle": member.title.split(" — ")[1],
                "description": member.text,
                "worksFor": {
                    "@type": "Organization",
                    "name": "FlowAuto"
                }
            }
        }))
    };

    // Структурированные данные для процесса работы
    const processStructuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Как проходит подбор автомобиля",
        "description": "Пошаговый процесс подбора автомобилей в сервисе FlowAuto",
        "step": processSteps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": `Шаг ${index + 1}`,
            "text": step
        }))
    };

    // Структурированные данные для принципов работы
    const principlesStructuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Принципы работы FlowAuto",
        "description": "Ключевые принципы и ценности нашего сервиса",
        "numberOfItems": principles.length,
        "itemListElement": principles.map((principle, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Thing",
                "name": `Принцип ${index + 1}`,
                "description": principle
            }
        }))
    };

    return (
        <>
            <Head>
                {/* Основная разметка страницы "О нас" */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(aboutStructuredData)
                    }}
                />

                {/* Разметка для команды */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(teamStructuredData)
                    }}
                />

                {/* Разметка для процесса работы */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(processStructuredData)
                    }}
                />

                {/* Разметка для принципов */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(principlesStructuredData)
                    }}
                />

                {/* Breadcrumbs разметка */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
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
                                    "name": "О нас",
                                    "item": "https://flowauto.ru/about"
                                }
                            ]
                        })
                    }}
                />
            </Head>

            <div
                className="bg-white text-gray-900"
                itemScope
                itemType="https://schema.org/AboutPage"
            >
                <div className="container mx-auto px-4 relative z-10 pt-6">
                    <Breadcrumbs items={[{label: 'О нас', href: '/about', isCurrent: true}]}/>
                </div>

                {/* Hero секция с микроразметкой */}
                <section
                    className="max-w-6xl mx-auto px-4 py-12 md:py-20"
                    itemScope
                    itemType="https://schema.org/Organization"
                >
                    <meta itemProp="name" content="FlowAuto" />
                    <meta itemProp="description" content="Сервис подбора автомобилей из Беларуси в Россию" />
                    <meta itemProp="url" content="https://flowauto.ru" />

                    <div className="max-w-3xl">
                        <div className="w-16 md:w-20 h-1.5 bg-[#ffd632] mb-4 md:mb-6 rounded-full"/>
                        <h1
                            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
                            itemProp="headline"
                        >
                            О сервисе подбора автомобилей
                        </h1>
                        <p
                            className="text-base md:text-lg text-gray-600"
                            itemProp="description"
                        >
                            Мы — небольшой специализированный сервис подбора автомобилей в Минске. Помогаем найти
                            действительно живую машину — без скрытых проблем, юридических рисков и переплат.
                        </p>
                    </div>
                </section>

                {/* Команда с микроразметкой */}
                <section
                    className="max-w-6xl mx-auto px-4 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
                    itemScope
                    itemType="https://schema.org/ItemList"
                >
                    <meta itemProp="name" content="Наша команда" />
                    <meta itemProp="description" content="Специалисты сервиса подбора автомобилей" />

                    {team.map((item, i) => (
                        <div
                            key={i}
                            className="cursor-pointer bg-white rounded-xl border-2 border-gray-100 p-5 md:p-8 hover:border-[#ffd632] hover:shadow-lg transition-all"
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ListItem"
                        >
                            <meta itemProp="position" content={(i + 1).toString()} />

                            <h3
                                className="text-lg md:text-xl font-semibold mb-2 md:mb-3"
                                itemProp="name"
                            >
                                {item.title}
                            </h3>
                            <p
                                className="text-sm md:text-base text-gray-600"
                                itemProp="description"
                            >
                                {item.text}
                            </p>

                            <div style={{ display: 'none' }}>
                                <div itemProp="item" itemScope itemType="https://schema.org/Person">
                                    <meta itemProp="name" content={item.title.split(" — ")[0]} />
                                    <meta itemProp="jobTitle" content={item.title.split(" — ")[1]} />
                                    <meta itemProp="description" content={item.text} />
                                    <div itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                                        <meta itemProp="name" content="FlowAuto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Философия компании */}
                <section
                    className="bg-gradient-to-b from-white to-gray-50"
                    itemScope
                    itemType="https://schema.org/CreativeWork"
                >
                    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
                        <h2
                            className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
                            itemProp="headline"
                        >
                            Наш подход
                        </h2>
                        <div
                            className="max-w-3xl text-gray-700 text-base md:text-lg"
                            itemProp="text"
                        >
                            <p>
                                Мы не продаём автомобили и не связаны с автосалонами или перекупщиками.
                                Мы работаем <b>только в интересах клиента</b>. Наша задача — не «найти хоть что-то»,
                                а защитить тебя от плохой покупки и довести до действительно достойного варианта.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Процесс работы с микроразметкой */}
                <section
                    className="max-w-6xl mx-auto px-4 py-12 md:py-20"
                    itemScope
                    itemType="https://schema.org/HowTo"
                >
                    <h2
                        className="text-2xl md:text-3xl font-bold mb-6 md:mb-12"
                        itemProp="name"
                    >
                        Как проходит подбор
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {processSteps.map((step, i) => (
                            <div
                                key={i}
                                className="cursor-pointer bg-white rounded-xl border-2 border-gray-100 p-4 md:p-6 hover:border-[#ffd632] hover:shadow-lg transition-all"
                                itemProp="step"
                                itemScope
                                itemType="https://schema.org/HowToStep"
                            >
                                <meta itemProp="position" content={(i + 1).toString()} />

                                <div className="text-xl md:text-2xl font-bold text-[#ffd632] mb-1 md:mb-2">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <p
                                    className="text-sm md:text-base font-medium"
                                    itemProp="text"
                                >
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Принципы с микроразметкой */}
                <section
                    className="bg-gray-50 principles-section"
                    itemScope
                    itemType="https://schema.org/ItemList"
                >
                    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
                        <h2
                            className="text-2xl md:text-3xl font-bold mb-8 md:mb-10"
                            itemProp="name"
                        >
                            Наши принципы
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            {principles.map((item, i) => (
                                <div
                                    key={i}
                                    className="cursor-pointer principle-card group bg-white rounded-xl border-2 border-gray-100 p-6 transition-all hover:border-[#ffd632] hover:shadow-lg"
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="https://schema.org/ListItem"
                                >
                                    <meta itemProp="position" content={(i + 1).toString()} />

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[#ffd632]/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-3 h-3 bg-[#ffd632] rounded-full" />
                                        </div>
                                        <p
                                            className="font-medium text-gray-800 leading-snug"
                                            itemProp="name"
                                        >
                                            {item}
                                        </p>
                                    </div>

                                    <div style={{ display: 'none' }}>
                                        <div itemProp="item" itemScope itemType="https://schema.org/Thing">
                                            <meta itemProp="name" content={`Принцип ${i + 1}`} />
                                            <meta itemProp="description" content={item} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Доверие с микроразметкой */}
                <section
                    className="max-w-6xl mx-auto px-4 py-12 md:py-20"
                    itemScope
                    itemType="https://schema.org/Article"
                >
                    <h2
                        className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
                        itemProp="headline"
                    >
                        Почему нам можно доверять
                    </h2>
                    <div
                        className="max-w-3xl space-y-3 md:space-y-4 text-gray-700 text-base md:text-lg"
                        itemProp="articleBody"
                    >
                        {trustText.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>
                </section>

                {/* CTA секция */}
                <CTA
                    primaryText="Хотите купить машину без риска и сюрпризов?"
                    secondaryText="Мы поможем пройти этот путь спокойно, безопасно и с понятным результатом."
                />

                {/* Скрытая микроразметка для дополнительной информации */}
                <div style={{ display: 'none' }}>
                    <div itemScope itemType="https://schema.org/Organization">
                        <meta itemProp="name" content="FlowAuto" />
                        <meta itemProp="foundingDate" content="2025" />
                        <meta itemProp="numberOfEmployees" content="2" />
                        <meta itemProp="knowsAbout" content="Подбор автомобилей, Диагностика автомобилей, Проверка документов, Доставка авто из Беларуси" />
                        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                            <meta itemProp="addressLocality" content="Россия" />
                            <meta itemProp="addressCountry" content="RU" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
