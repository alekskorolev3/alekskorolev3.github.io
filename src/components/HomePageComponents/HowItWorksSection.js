import { ArrowRight, Car, CheckCircle, Clock, FileText, Search } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

export default function HowItWorksSection() {
    const stepsData = [
        {
            id: 1,
            icon: <Search />,
            title: "Заявка и консультация",
            subtitle: "Вы оставляете заявку или звоните нам. Обсуждаем ваши пожелания, бюджет и подбираем оптимальные варианты."
        },
        {
            id: 2,
            icon: <Car />,
            title: "Поиск и проверка",
            subtitle: "Находим автомобиль по вашим критериям. Проводим полную диагностику, проверяем юридическую чистоту и историю."
        },
        {
            id: 3,
            icon: <FileText />,
            title: "Оформление",
            subtitle: "Оформляем все документы, растаможиваем автомобиль. Держим вас в курсе на каждом этапе."
        },
        {
            id: 4,
            icon: <CheckCircle />,
            title: "Доставка и передача",
            subtitle: "Доставляем автомобиль в ваш город, помогаем с постановкой на учёт. Вы получаете ключи и документы!"
        },
    ]

    // JSON-LD структурированные данные
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Как работает подбор автомобилей из Беларуси в Россию",
        "description": "Простой и прозрачный процесс подбора автомобиля из Беларуси. От поиска до регистрации.",
        "totalTime": "P28D",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "RUB",
            "value": "Зависит от автомобиля"
        },
        "step": [
            {
                "@type": "HowToStep",
                "position": "1",
                "name": "Заявка и консультация",
                "text": "Вы оставляете заявку или звоните нам. Обсуждаем ваши пожелания, бюджет и подбираем оптимальные варианты.",
                "image": "https://flowauto.ru/images/consultation-icon.svg"
            },
            {
                "@type": "HowToStep",
                "position": "2",
                "name": "Поиск и проверка",
                "text": "Находим автомобиль по вашим критериям. Проводим полную диагностику, проверяем юридическую чистоту и историю.",
                "image": "https://flowauto.ru/images/search-icon.svg"
            },
            {
                "@type": "HowToStep",
                "position": "3",
                "name": "Оформление",
                "text": "Оформляем все документы, растаможиваем автомобиль. Держим вас в курсе на каждом этапе.",
                "image": "https://flowauto.ru/images/document-icon.svg"
            },
            {
                "@type": "HowToStep",
                "position": "4",
                "name": "Доставка и передача",
                "text": "Доставляем автомобиль в ваш город, помогаем с постановкой на учёт. Вы получаете ключи и документы!",
                "image": "https://flowauto.ru/images/delivery-icon.svg"
            }
        ],
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "Ваши пожелания и бюджет"
            },
            {
                "@type": "HowToSupply",
                "name": "Паспорт для оформления"
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "База данных автомобилей"
            },
            {
                "@type": "HowToTool",
                "name": "Диагностическое оборудование"
            },
            {
                "@type": "HowToTool",
                "name": "Юридическая экспертиза"
            }
        ]
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />
            </Head>

            <section
                className="py-16 bg-white"
                itemScope
                itemType="https://schema.org/HowTo"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2
                            className="mb-4"
                            itemProp="name"
                        >
                            Как мы работаем
                        </h2>
                        <p
                            className="text-gray-600 max-w-2xl mx-auto"
                            itemProp="description"
                        >
                            Простой и прозрачный процесс подбора автомобиля из Беларуси.
                            Мы берем на себя все заботы — от поиска до регистрации.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        <div
                            className="hidden lg:block absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                            style={{ top: '80px' }}
                        ></div>

                        {stepsData.map(item => (
                            <div
                                key={item.id}
                                className="relative"
                                itemProp="step"
                                itemScope
                                itemType="https://schema.org/HowToStep"
                            >
                                <meta itemProp="position" content={item.id.toString()} />

                                <div
                                    className="cursor-pointer h-100 max-h-[270px] bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#ffd632] transition-all duration-300 hover:shadow-lg relative z-10"
                                >
                                    <div
                                        className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                                        itemProp="image"
                                    >
                                        {item.icon}
                                    </div>

                                    <h3
                                        className="text-center mb-3"
                                        itemProp="name"
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="text-gray-600 text-center text-sm"
                                        itemProp="text"
                                    >
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Информационный блок внизу */}
                    <div
                        className="mt-12 bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border border-gray-200"
                        itemScope
                        itemType="https://schema.org/Duration"
                    >
                        <meta itemProp="name" content="Средний срок подбора" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-16 h-16 bg-[#ffd632] rounded-full flex items-center justify-center flex-shrink-0"
                                >
                                    <Clock className="w-8 h-8 text-black" />
                                </div>
                                <div>
                                    <h3 className="mb-1">Средний срок подбора</h3>
                                    <p
                                        className="text-gray-600"
                                        itemProp="description"
                                    >
                                        От 7 до 28 дней под ключ
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="/services"
                                className="bg-[#ffd632] text-black px-8 py-3 rounded-lg hover:bg-[#e6c02d] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                                itemProp="url"
                            >
                                Узнать подробнее
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Скрытые метаданные для времени */}
                        <div style={{ display: 'none' }}>
                            <meta itemProp="minimumDuration" content="P7D" />
                            <meta itemProp="maximumDuration" content="P28D" />
                        </div>
                    </div>
                </div>

                {/* Скрытая микроразметка для инструментов и ресурсов */}
                <div style={{ display: 'none' }}>
                    <div itemProp="supply" itemScope itemType="https://schema.org/HowToSupply">
                        <meta itemProp="name" content="Ваши пожелания и бюджет" />
                    </div>
                    <div itemProp="supply" itemScope itemType="https://schema.org/HowToSupply">
                        <meta itemProp="name" content="Паспорт для оформления" />
                    </div>
                    <div itemProp="tool" itemScope itemType="https://schema.org/HowToTool">
                        <meta itemProp="name" content="База данных автомобилей" />
                    </div>
                    <div itemProp="tool" itemScope itemType="https://schema.org/HowToTool">
                        <meta itemProp="name" content="Диагностическое оборудование" />
                    </div>
                    <div itemProp="tool" itemScope itemType="https://schema.org/HowToTool">
                        <meta itemProp="name" content="Юридическая экспертиза" />
                    </div>
                </div>
            </section>
        </>
    )
}
