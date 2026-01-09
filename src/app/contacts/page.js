import {MessageCircle} from 'lucide-react';
import {PHONE, PHONE_TEXT, TELEGRAM, WHATSAPP} from "@/const/contacts";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
    title: "Контакты | Flow Auto",
    description: "Подберите автомобиль из Беларуси"
};

export default function ContactsPage() {
    return (
        <div>
            <div className="container mx-auto px-4 relative z-10 pt-6">
                <Breadcrumbs items={[{label: 'Контакты', href: '/contacts', isCurrent: true}]}/>
            </div>
            {/* Hero Section */}
            <section className="relative bg-white pb-20 pt-10 overflow-hidden">
                <div
                    className="absolute top-0 right-0 w-96 h-96 bg-[#ffd632] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
                <div
                    className="absolute bottom-0 left-0 w-72 h-72 bg-black rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="mb-6 text-[rgb(60,60,60)] text-[20px] font-bold">Контакты</h1>
                        <p className="text-xl text-gray-600">
                            Свяжитесь с нами любым удобным способом. Мы всегда рады ответить на ваши вопросы и помочь с
                            подбором автомобиля.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info and Form */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Контактная информация */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 bg-[#ffd632] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-6 h-6 text-black"/>
                                </div>
                                <div>
                                    <h3 className="mb-2">Телефон</h3>
                                    <div className="space-y-1">
                                        <p className="text-gray-600">
                                            Беларусь: <a href={`tel:${PHONE}`}
                                                         className="text-gray-600 hover:text-black transition-colors">{PHONE_TEXT}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 bg-[#ffd632] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-6 h-6 text-black"/>
                                </div>
                                <div>
                                    <h3 className="mb-2">Мессенджеры</h3>
                                    <div className="space-y-1">
                                        <p className="text-gray-600">
                                            Telegram: <a href={TELEGRAM} target="_blank"
                                                         className="text-gray-600 hover:text-black transition-colors">{PHONE}</a>
                                        </p>
                                        <p className="text-gray-600">
                                            WhatsApp: <a href={WHATSAPP}
                                                         className="text-gray-600 hover:text-black transition-colors">{PHONE}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Клиентская форма */}
                        <ContactForm/>
                    </div>
                </div>
            </section>
        </div>
    )
}
