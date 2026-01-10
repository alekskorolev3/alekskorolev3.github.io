import { Car, Clock, DollarSign, Shield } from "lucide-react";
import Head from "next/head";

export default function AdvantagesSection() {
    // JSON-LD структурированные данные для преимуществ
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Преимущества подбора автомобилей из Беларуси с FlowAuto",
        "description": "Ключевые преимущества работы с нашей компанией по подбору и доставке автомобилей из Беларуси в Россию",
        "numberOfItems": 4,
        "itemListOrder": "https://schema.org/ItemListUnordered",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "PropertyValue",
                    "name": "Выгодные цены",
                    "description": "Экономия до 30% от стоимости аналогичных авто в РФ",
                    "value": "30% экономии"
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "Service",
                    "name": "Юридическая чистота",
                    "description": "Полная проверка истории автомобиля и документов",
                    "serviceType": "Юридическая проверка"
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "PropertyValue",
                    "name": "Быстрое оформление",
                    "description": "Полный цикл от подбора до регистрации за 7-14 дней",
                    "value": "7-14 дней"
                }
            },
            {
                "@type": "ListItem",
                "position": 4,
                "item": {
                    "@type": "PropertyValue",
                    "name": "Большой выбор",
                    "description": "Доступ к сотням предложений на рынке Беларуси",
                    "value": "Сотни автомобилей"
                }
            }
        ],
        "publisher": {
            "@type": "Organization",
            "name": "FlowAuto",
            "url": "https://flowauto.ru",
            "description": "Подбор автомобилей из Беларуси в Россию"
        }
    };

    const advantagesData = [
        {
            id: 1,
            icon: <DollarSign className="w-8 h-8 text-black" />,
            title: "Выгодные цены",
            description: "Экономия до 30% от стоимости аналогичных авто в РФ"
        },
        {
            id: 2,
            icon: <Shield className="w-8 h-8 text-black" />,
            title: "Юридическая чистота",
            description: "Полная проверка истории автомобиля и документов"
        },
        {
            id: 3,
            icon: <Clock className="w-8 h-8 text-black" />,
            title: "Быстрое оформление",
            description: "Полный цикл от подбора до регистрации за 7-14 дней"
        },
        {
            id: 4,
            icon: <Car className="w-8 h-8 text-black" />,
            title: "Большой выбор",
            description: "Доступ к сотням предложений на рынке Беларуси"
        }
    ];

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
                className="py-16 bg-gray-50"
                itemScope
                itemType="https://schema.org/ItemList"
            >
                <meta itemProp="name" content="Наши преимущества" />
                <meta itemProp="description" content="Ключевые преимущества подбора автомобилей из Беларуси" />
                <meta itemProp="numberOfItems" content="4" />

                <div className="container mx-auto px-4">
                    <h2
                        className="text-center mb-12 text-xl font-medium"
                        itemProp="headline"
                    >
                        Наши преимущества
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {advantagesData.map((advantage, index) => (
                            <div
                                key={advantage.id}
                                className="bg-white p-6 rounded-lg shadow-sm text-center"
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                            >
                                <meta itemProp="position" content={advantage.id.toString()} />

                                <div
                                    className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4"
                                    itemProp="image"
                                    itemScope
                                    itemType="https://schema.org/ImageObject"
                                >
                                    {advantage.icon}
                                </div>

                                <h3
                                    className="mb-2"
                                    itemProp="name"
                                >
                                    {advantage.title}
                                </h3>

                                <p
                                    className="text-gray-600"
                                    itemProp="description"
                                >
                                    {advantage.description}
                                </p>

                                {/* Скрытые метаданные для каждого преимущества */}
                                <div style={{ display: 'none' }}>
                                    <div itemProp="item" itemScope itemType="https://schema.org/PropertyValue">
                                        <meta itemProp="name" content={advantage.title} />
                                        <meta itemProp="description" content={advantage.description} />
                                        {advantage.id === 1 && <meta itemProp="value" content="30% экономии" />}
                                        {advantage.id === 3 && <meta itemProp="value" content="7-14 дней" />}
                                        {advantage.id === 4 && <meta itemProp="value" content="Сотни автомобилей" />}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
