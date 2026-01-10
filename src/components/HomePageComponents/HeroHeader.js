'use client';

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";
import Head from "next/head";

export default function HeroHeader() {
    const carRef = useRef(null);

    useEffect(() => {
        if (!carRef.current) return;

        gsap.fromTo(
            carRef.current,
            { x: 200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
        );
    }, []);

    return (
        <>
            <Head>
                {/* Структурированные данные для Hero секции */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Подбор автомобилей из Беларуси под ключ",
                            "description": "Профессиональный подбор и доставка автомобилей из Беларуси в Россию с полным юридическим сопровождением. Экономьте до 30% на покупке авто.",
                            "url": "https://flowauto.ru",
                            "mainEntity": {
                                "@type": "Service",
                                "name": "Подбор автомобилей из Беларуси",
                                "serviceType": "Подбор и доставка автомобилей",
                                "description": "Полный комплекс услуг по подбору, проверке, доставке и оформлению автомобилей из Беларуси в Россию",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "FlowAuto",
                                    "url": "https://flowauto.ru"
                                },
                                "areaServed": {
                                    "@type": "Country",
                                    "name": "Россия, Беларусь"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "priceSpecification": {
                                        "@type": "PriceSpecification",
                                        "priceCurrency": "RUB",
                                        "description": "Экономия до 30% по сравнению с покупкой в России"
                                    }
                                }
                            },
                            "primaryImageOfPage": {
                                "@type": "ImageObject",
                                "url": "https://flowauto.ru/audi-rs-5-crop.webp",
                                "width": 700,
                                "height": 400,
                                "caption": "Спортивный автомобиль"
                            }
                        })
                    }}
                />
            </Head>

            <section
                className="relative bg-white py-12 md:py-20 overflow-hidden"
                itemScope
                itemType="https://schema.org/Service"
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Текст с микроразметкой */}
                        <div className="max-w-2xl text-center lg:text-left">
                            <h1
                                className="mb-6 font-bold text-[rgb(60,60,60)] text-lg md:text-xl font-[Montserrat]"
                                itemProp="name"
                            >
                                Подбор автомобилей из Беларуси под ключ — доставка, проверка, оформление
                            </h1>

                            <p
                                className="text-base md:text-xl mb-8 text-gray-600"
                                itemProp="description"
                            >
                                Профессиональный подбор и доставка автомобилей с полным юридическим сопровождением.
                                Экономьте до 30% на покупке авто.
                            </p>

                            <div
                                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                                itemScope
                                itemType="https://schema.org/Action"
                            >
                                <Link
                                    href="/calculator"
                                    className="bg-[#ffd632] text-black px-8 py-3 rounded-lg hover:bg-[#e6c02d] transition-colors inline-flex items-center justify-center gap-2"
                                    itemProp="url"
                                >
                                    <span itemProp="name">Калькулятор стоимости</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>

                                <Link
                                    href="/services"
                                    className="bg-white border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors text-center"
                                    itemProp="url"
                                >
                                    <span itemProp="name">Услуги</span>
                                </Link>
                            </div>

                            {/* Скрытые метаданные */}
                            <meta itemProp="serviceType" content="Подбор и доставка автомобилей" />
                            <meta itemProp="provider" content="FlowAuto" />
                        </div>

                        {/* Картинка с микроразметкой */}
                        <div className="relative w-full flex justify-center lg:absolute lg:right-[-4rem] lg:w-[62.5%]">
                            <div itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                                <meta itemProp="url" content="https://flowauto.ru/audi-rs-5-crop.webp" />
                                <meta itemProp="width" content="700" />
                                <meta itemProp="height" content="400" />
                                <meta itemProp="caption" content="Спортивный автомобиль" />

                                <Image
                                    priority
                                    fetchPriority="high"
                                    loading="eager"
                                    src="/audi-rs-5-crop.webp"
                                    alt="Спортивный автомобиль - пример автомобилей, которые мы подбираем"
                                    width={700}
                                    height={400}
                                    className="w-full max-w-[420px] sm:max-w-[420px] md:max-w-[540px] lg:max-w-[700px] h-auto object-contain"
                                    itemProp="contentUrl"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Скрытая микроразметка для предложения */}
                <div style={{ display: 'none' }}>
                    <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                        <meta itemProp="priceCurrency" content="RUB" />
                        <meta itemProp="description" content="Экономия до 30% по сравнению с покупкой в России" />
                        <link itemProp="availability" href="https://schema.org/InStock" />
                        <link itemProp="itemCondition" href="https://schema.org/NewCondition" />
                    </div>

                    <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
                        <meta itemProp="name" content="Россия" />
                    </div>
                    <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
                        <meta itemProp="name" content="Беларусь" />
                    </div>
                </div>
            </section>
        </>
    );
}
