import { MessageCircle } from 'lucide-react';
import { PHONE, PHONE_TEXT, TELEGRAM, WHATSAPP } from "@/const/contacts";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from 'next/head';

export const metadata = {
    title: "Контакты | Flow Auto",
    description: "Подберите автомобиль из Беларуси"
};

export default function ContactsPage() {
    // Основная структурированная разметка для страницы контактов
    const contactsStructuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Контакты FlowAuto",
        "description": "Свяжитесь с нами для консультации по подбору автомобилей из Беларуси",
        "url": "https://flowauto.ru/contacts",
        "mainEntity": {
            "@type": "Organization",
            "name": "FlowAuto",
            "description": "Сервис подбора автомобилей из Беларуси в Россию",
            "url": "https://flowauto.ru",
            "logo": "https://flowauto.ru/logo.png",
            "telephone": PHONE,
            "email": "info@flowauto.ru", // Замените на реальный email
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "telephone": PHONE,
                "email": "info@flowauto.ru",
                "availableLanguage": ["Russian"],
                "areaServed": {
                    "@type": "Country",
                    "name": ["Россия", "Беларусь"]
                },
                "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "09:00",
                    "closes": "20:00"
                }
            },
            "sameAs": [
                TELEGRAM,
                WHATSAPP
            ]
        },
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
                    "name": "Контакты",
                    "item": "https://flowauto.ru/contacts"
                }
            ]
        }
    };

    // Структурированные данные для организации
    const organizationStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FlowAuto",
        "url": "https://flowauto.ru",
        "logo": "https://flowauto.ru/logo.png",
        "description": "Сервис подбора автомобилей из Беларуси в Россию",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "BY", // Укажите реальную страну
            "addressLocality": "Минск", // Укажите реальный город
            "postalCode": "220000", // Укажите реальный индекс
            "streetAddress": "ул. Примерная, д. 1" // Укажите реальный адрес
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "telephone": PHONE,
                "email": "info@flowauto.ru",
                "contactOption": "TollFree",
                "areaServed": ["RU", "BY"],
                "availableLanguage": ["Russian"],
                "hoursAvailable": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "09:00",
                        "closes": "18:00"
                    },
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Saturday"],
                        "opens": "10:00",
                        "closes": "16:00"
                    }
                ]
            }
        ]
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
                "name": "Контакты",
                "item": "https://flowauto.ru/contacts"
            }
        ]
    };

    return (
        <>
            <Head>
                {/* Основная разметка страницы контактов */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(contactsStructuredData)
                    }}
                />

                {/* Разметка для организации */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationStructuredData)
                    }}
                />

                {/* Breadcrumb разметка */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbStructuredData)
                    }}
                />
            </Head>

            <div itemScope itemType="https://schema.org/ContactPage">
                <div className="container mx-auto px-4 relative z-10 pt-6">
                    <Breadcrumbs items={[{label: 'Контакты', href: '/contacts', isCurrent: true}]}/>
                </div>

                {/* Hero Section с микроразметкой */}
                <section
                    className="relative bg-white pb-20 pt-10 overflow-hidden"
                    itemScope
                    itemType="https://schema.org/CreativeWork"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd632] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-black rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <h1
                                className="mb-6 text-[rgb(60,60,60)] text-[20px] font-bold"
                                itemProp="headline"
                            >
                                Контакты
                            </h1>
                            <p
                                className="text-xl text-gray-600"
                                itemProp="description"
                            >
                                Свяжитесь с нами любым удобным способом. Мы всегда рады ответить на ваши вопросы и помочь с
                                подбором автомобиля.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Info and Form с микроразметкой */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Контактная информация с микроразметкой */}
                            <div
                                className="space-y-6"
                                itemScope
                                itemType="https://schema.org/Organization"
                            >
                                <meta itemProp="name" content="FlowAuto" />
                                <meta itemProp="url" content="https://flowauto.ru" />

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#ffd632] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="w-6 h-6 text-black"/>
                                    </div>
                                    <div>
                                        <h3 className="mb-2">Телефон</h3>
                                        <div className="space-y-1">
                                            <p className="text-gray-600">
                                                Беларусь: <a
                                                href={`tel:${PHONE}`}
                                                className="text-gray-600 hover:text-black transition-colors"
                                                itemProp="telephone"
                                            >
                                                {PHONE_TEXT}
                                            </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#ffd632] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="w-6 h-6 text-black"/>
                                    </div>
                                    <div>
                                        <h3 className="mb-2">Мессенджеры</h3>
                                        <div className="space-y-1">
                                            <p className="text-gray-600">
                                                Telegram: <a
                                                href={TELEGRAM}
                                                target="_blank"
                                                className="text-gray-600 hover:text-black transition-colors"
                                                itemProp="sameAs"
                                            >
                                                {PHONE}
                                            </a>
                                            </p>
                                            <p className="text-gray-600">
                                                WhatsApp: <a
                                                href={WHATSAPP}
                                                className="text-gray-600 hover:text-black transition-colors"
                                                itemProp="sameAs"
                                            >
                                                {PHONE}
                                            </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Скрытая микроразметка для контактной информации */}
                                <div style={{ display: 'none' }}>
                                    <div itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                                        <meta itemProp="contactType" content="customer service" />
                                        <meta itemProp="telephone" content={PHONE} />
                                        <meta itemProp="email" content="info@flowauto.ru" />
                                        <meta itemProp="availableLanguage" content="Russian" />

                                        <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
                                            <meta itemProp="name" content="Россия" />
                                        </div>
                                        <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
                                            <meta itemProp="name" content="Беларусь" />
                                        </div>

                                        <div itemProp="hoursAvailable" itemScope itemType="https://schema.org/OpeningHoursSpecification">
                                            <meta itemProp="dayOfWeek" content="Monday,Tuesday,Wednesday,Thursday,Friday,Saturday" />
                                            <meta itemProp="opens" content="09:00" />
                                            <meta itemProp="closes" content="20:00" />
                                        </div>
                                    </div>

                                    <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                        <meta itemProp="addressCountry" content="BY" />
                                        <meta itemProp="addressLocality" content="Минск" />
                                        <meta itemProp="postalCode" content="220000" />
                                        <meta itemProp="streetAddress" content="ул. Примерная, д. 1" />
                                    </div>
                                </div>
                            </div>

                            {/* Клиентская форма с микроразметкой */}
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
