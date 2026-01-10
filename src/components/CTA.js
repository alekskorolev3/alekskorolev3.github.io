'use client';
import { ArrowRight, Car, Clock, DollarSign, Shield } from "lucide-react";
import Link from "next/link";
import { CTAForm } from "@/components/CTAForm";
import { useState } from "react";
import Head from "next/head";

export default function CTA({ primaryText = null, secondaryText = null }) {
    const [open, setIsOpen] = useState(false);

    // JSON-LD структурированные данные для CTA
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Offer",
        "name": "Консультация по подбору автомобиля из Беларуси",
        "description": "Оставьте заявку, и наши специалисты свяжутся с вами в течение часа для консультации по подбору автомобиля",
        "url": "https://flowauto.ru",
        "availability": "https://schema.org/InStock",
        "price": "0",
        "priceCurrency": "RUB",
        "eligibleCustomerType": "https://schema.org/Business",
        "eligibleRegion": {
            "@type": "Country",
            "name": "Россия"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Россия"
        },
        "seller": {
            "@type": "Organization",
            "name": "FlowAuto",
            "url": "https://flowauto.ru"
        },
        "offeredBy": {
            "@type": "Service",
            "name": "Подбор автомобилей из Беларуси",
            "description": "Профессиональный подбор и доставка автомобилей из Беларуси в Россию"
        }
    };

    // Структурированные данные для гарантий
    const guaranteeStructuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Гарантии и преимущества",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "PropertyValue",
                    "name": "Гарантия качества",
                    "description": "Полная проверка и гарантия качества автомобилей"
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "PropertyValue",
                    "name": "Ответ в течение часа",
                    "description": "Наши специалисты свяжутся с вами в течение часа"
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "PropertyValue",
                    "name": "Прозрачные цены",
                    "description": "Никаких скрытых платежей и комиссий"
                }
            }
        ]
    };

    const guarantees = [
        {
            icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-black"/>,
            text: "Гарантия качества"
        },
        {
            icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-black"/>,
            text: "Ответ в течение часа"
        },
        {
            icon: <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-black"/>,
            text: "Прозрачные цены"
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(guaranteeStructuredData)
                    }}
                />
            </Head>

            <section
                className="py-16 md:py-20 bg-gray-50 relative overflow-hidden"
                itemScope
                itemType="https://schema.org/Offer"
            >
                {/* Декоративные иконки */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute top-8 right-8 md:top-10 md:right-10">
                        <Car className="w-24 h-24 md:w-32 md:h-32 transform rotate-12"/>
                    </div>
                    <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10">
                        <Car className="w-28 h-28 md:w-40 md:h-40 transform -rotate-12"/>
                    </div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div
                            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border border-gray-200"
                            itemScope
                            itemType="https://schema.org/CreativeWork"
                        >
                            {/* Заголовок */}
                            <h2
                                className="mb-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-800"
                                itemProp="headline"
                            >
                                <span itemProp="name">
                                    {primaryText || "Готовы найти свой автомобиль?"}
                                </span>
                            </h2>

                            {/* Подзаголовок */}
                            <p
                                className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-600 max-w-2xl mx-auto"
                                itemProp="description"
                            >
                                {secondaryText || "Оставьте заявку, и наши специалисты свяжутся с вами в течение часа"}
                            </p>

                            {/* Кнопки */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8">
                                <div
                                    onClick={() => setIsOpen(true)}
                                    className="cursor-pointer bg-[#ffd632] text-black px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-[#e6c02d] transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-md"
                                    itemProp="url"
                                    itemScope
                                    itemType="https://schema.org/Action"
                                >
                                    <meta itemProp="name" content="Оставить заявку" />
                                    <meta itemProp="actionStatus" content="https://schema.org/PotentialActionStatus" />
                                    <span>Оставить заявку</span>
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5"/>
                                </div>

                                <Link
                                    href="/calculator"
                                    className="bg-white border-2 border-black text-black px-8 sm:px-12 py-3 sm:py-4 rounded-lg hover:bg-black hover:text-white transition-all inline-flex items-center justify-center gap-2"
                                    itemProp="url"
                                    itemScope
                                    itemType="https://schema.org/Action"
                                >
                                    <meta itemProp="name" content="Рассчитать стоимость" />
                                    Рассчитать стоимость
                                </Link>
                            </div>

                            {/* Блок иконок с микроразметкой */}
                            <div
                                className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-gray-200"
                                itemScope
                                itemType="https://schema.org/ItemList"
                            >
                                <meta itemProp="name" content="Наши гарантии" />
                                <meta itemProp="numberOfItems" content="3" />

                                {guarantees.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 text-gray-600"
                                        itemProp="itemListElement"
                                        itemScope
                                        itemType="https://schema.org/ListItem"
                                    >
                                        <meta itemProp="position" content={(index + 1).toString()} />

                                        <div
                                            className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ffd632]/20 rounded-full flex items-center justify-center flex-shrink-0"
                                            itemProp="image"
                                        >
                                            {item.icon}
                                        </div>

                                        <span
                                            className="text-sm sm:text-base"
                                            itemProp="name"
                                        >
                                            {item.text}
                                        </span>

                                        {/* Скрытые метаданные для каждого элемента */}
                                        <div style={{ display: 'none' }}>
                                            <div itemProp="item" itemScope itemType="https://schema.org/PropertyValue">
                                                <meta itemProp="name" content={item.text} />
                                                <meta itemProp="description" content={`${item.text} при подборе автомобиля`} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Скрытые метаданные для предложения */}
                <div style={{ display: 'none' }}>
                    <meta itemProp="price" content="0" />
                    <meta itemProp="priceCurrency" content="RUB" />
                    <meta itemProp="availability" content="https://schema.org/InStock" />
                    <meta itemProp="validFrom" content={new Date().toISOString()} />

                    <div itemProp="seller" itemScope itemType="https://schema.org/Organization">
                        <meta itemProp="name" content="FlowAuto" />
                        <meta itemProp="url" content="https://flowauto.ru" />
                    </div>

                    <div itemProp="eligibleRegion" itemScope itemType="https://schema.org/Country">
                        <meta itemProp="name" content="Россия" />
                    </div>

                    <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
                        <meta itemProp="name" content="Россия" />
                    </div>
                </div>

                {/* Модальное окно */}
                <CTAForm open={open} onOpenChange={setIsOpen} />
            </section>
        </>
    );
}
