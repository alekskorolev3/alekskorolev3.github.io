import CalculatorClient from './CalculatorClient'
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";

export const metadata = {
    title: "Калькулятор | Flow Auto",
    description: "Подберите автомобиль из Беларуси с помощью калькулятора",
    alternates: {
        canonical: '/calculator'
    }
};

export default function CalculatorPage() {
    // Структурированные данные для калькулятора
    const calculatorStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Калькулятор стоимости автомобиля из Беларуси",
        "description": "Рассчитайте примерную стоимость подбора вашего автомобиля из Беларуси в Россию с учетом утильсбора",
        "url": "https://flowauto.ru/calculator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "browserRequirements": "Requires JavaScript",
        "featureList": [
            "Расчет стоимости автомобиля",
            "Учет утилизационного сбора",
            "Расчет таможенных платежей",
            "Оценка доставки из Беларуси"
        ],
        "offers": {
            "@type": "Offer",
            "category": "Calculator",
            "description": "Бесплатный калькулятор стоимости автомобиля"
        },
        "author": {
            "@type": "Organization",
            "name": "FlowAuto",
            "url": "https://flowauto.ru"
        },
        "potentialAction": {
            "@type": "CalculateAction",
            "name": "Рассчитать стоимость",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://flowauto.ru/calculator#result",
                "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                ]
            },
            "result": {
                "@type": "PriceSpecification",
                "description": "Примерная стоимость автомобиля с учетом всех платежей"
            }
        }
    };

    // Структурированные данные для документа
    const documentStructuredData = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": "Постановление Правительства РФ «Об утилизационном сборе»",
        "description": "Официальный документ, регулирующий утилизационный сбор на автомобили",
        "url": "https://flowauto.ru/Постановление Правительства РФ от 26.12.2013 № 1291 Об утилизационном сборе.pdf",
        "datePublished": "2013-12-26",
        "publisher": {
            "@type": "GovernmentOrganization",
            "name": "Правительство Российской Федерации"
        },
        "encodingFormat": "application/pdf"
    };

    // Breadcrumb structured data
    const breadcrumbStructuredData = {
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
                "name": "Калькулятор",
                "item": "https://flowauto.ru/calculator"
            }
        ]
    };

    return (
        <>
            <Head>
                {/* Основная разметка калькулятора */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(calculatorStructuredData)
                    }}
                />

                {/* Разметка для документа */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(documentStructuredData)
                    }}
                />

                {/* Breadcrumb разметка */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbStructuredData)
                    }}
                />

                {/* Дополнительная разметка */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "HowToTool",
                            "name": "Калькулятор утилизационного сбора",
                            "description": "Инструмент для расчета утилизационного сбора на автомобили",
                            "url": "https://flowauto.ru/calculator"
                        })
                    }}
                />
            </Head>

            <section
                className="relative bg-white pb-16 md:pb-20 overflow-hidden border-b border-gray-200"
                itemScope
                itemType="https://schema.org/WebApplication"
            >
                {/* декор */}
                <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-[#ffd632] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"/>
                <div className="absolute bottom-0 left-0 w-56 h-56 md:w-72 md:h-72 bg-black rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"/>

                <div className="container mx-auto px-4 relative z-10 pt-6 pb-8">
                    <Breadcrumbs items={[{label: 'Калькулятор', href: '/calculator', isCurrent: true}]}
                                 className="mb-6"/>
                </div>

                <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div
                            itemProp="screenshot"
                            itemScope
                            itemType="https://schema.org/ImageObject"
                        >
                            <meta itemProp="name" content="Калькулятор стоимости автомобиля" />
                            <Image
                                width={200}
                                height={110}
                                className="w-20 md:w-auto md:max-h-[110px]"
                                src="/calculator.webp"
                                alt="Калькулятор утилизационного сбора"
                                itemProp="contentUrl"
                            />
                        </div>

                        {/* текст */}
                        <div className="text-center md:text-left">
                            <h1
                                className="mb-4 text-[18px] md:text-[20px] font-bold text-[rgb(60,60,60)]"
                                itemProp="headline"
                            >
                                Калькулятор стоимости автомобиля
                            </h1>

                            <p
                                className="text-base md:text-xl text-gray-600"
                                itemProp="description"
                            >
                                Рассчитайте примерную стоимость подбора вашего автомобиля из Беларуси в Россию
                                с учетом утильсбора.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Скрытые метаданные */}
                <div style={{ display: 'none' }}>
                    <meta itemProp="applicationCategory" content="BusinessApplication" />
                    <meta itemProp="operatingSystem" content="Any" />
                    <meta itemProp="browserRequirements" content="Requires JavaScript" />

                    <div itemProp="author" itemScope itemType="https://schema.org/Organization">
                        <meta itemProp="name" content="FlowAuto" />
                        <meta itemProp="url" content="https://flowauto.ru" />
                    </div>

                    <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                        <meta itemProp="category" content="Calculator" />
                        <meta itemProp="description" content="Бесплатный калькулятор стоимости автомобиля" />
                        <meta itemProp="price" content="0" />
                        <meta itemProp="priceCurrency" content="RUB" />
                    </div>
                </div>
            </section>

            {/* Калькулятор с микроразметкой */}
            <div itemProp="potentialAction" itemScope itemType="https://schema.org/CalculateAction">
                <meta itemProp="name" content="Рассчитать стоимость автомобиля" />
                <CalculatorClient />
            </div>

            {/* Документ с микроразметкой */}
            <div className="max-w-4xl mx-auto mb-12 px-4">
                <div className="mt-4">
                    <Button variant="link" asChild className="px-0">
                        <a
                            href="/Постановление Правительства РФ от 26.12.2013 № 1291 Об утилизационном сборе.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-2 text-sm"
                            itemProp="hasPart"
                            itemScope
                            itemType="https://schema.org/CreativeWork"
                        >
                            <meta itemProp="name" content="Постановление Правительства РФ «Об утилизационном сборе»" />
                            <meta itemProp="description" content="Официальный документ об утилизационном сборе" />
                            <meta itemProp="datePublished" content="2013-12-26" />

                            <FileText className="h-4 w-4 mt-0.5 shrink-0" />
                            <span>
                                Постановление Правительства РФ&nbsp;
                                <br className="sm:hidden"/>
                                «Об утилизационном сборе»
                            </span>

                            <div style={{ display: 'none' }}>
                                <div itemProp="publisher" itemScope itemType="https://schema.org/GovernmentOrganization">
                                    <meta itemProp="name" content="Правительство Российской Федерации" />
                                </div>
                                <meta itemProp="encodingFormat" content="application/pdf" />
                            </div>
                        </a>
                    </Button>
                </div>
            </div>
        </>
    )
}
