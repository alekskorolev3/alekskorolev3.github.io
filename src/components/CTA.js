'use client';
import {ArrowRight, Car, Clock, DollarSign, Shield} from "lucide-react";
import Link from "next/link";
import {CTAForm} from "@/components/CTAForm";
import {useState} from "react";

export default function CTA({primaryText = null, secondaryText = null}) {
    const [open, setIsOpen] = useState(false);

    return (
        <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
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
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border border-gray-200">
                        {/* Заголовок */}
                        <h2 className="mb-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                            {primaryText || "Готовы найти свой автомобиль?"}
                        </h2>
                        {/* Подзаголовок */}
                        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-600 max-w-2xl mx-auto">
                            {secondaryText || "Оставьте заявку, и наши специалисты свяжутся с вами в течение часа"}
                        </p>

                        {/* Кнопки */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8">
                            <div
                                onClick={() => setIsOpen(true)}
                                className="cursor-pointer bg-[#ffd632] text-black px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-[#e6c02d] transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-md"
                            >
                                Оставить заявку
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5"/>
                            </div>
                            <Link
                                href="/calculator"
                                className="bg-white border-2 border-black text-black px-8 sm:px-12 py-3 sm:py-4 rounded-lg hover:bg-black hover:text-white transition-all inline-flex items-center justify-center gap-2"
                            >
                                Рассчитать стоимость
                            </Link>
                        </div>

                        {/* Блок иконок */}
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-gray-200">
                            {[
                                { icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-black"/>, text: "Гарантия качества" },
                                { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-black"/>, text: "Ответ в течение часа" },
                                { icon: <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-black"/>, text: "Прозрачные цены" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-600">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ffd632]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm sm:text-base">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно */}
            <CTAForm open={open} onOpenChange={setIsOpen} />
        </section>
    );
}
