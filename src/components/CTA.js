'use client';
import {ArrowRight, Car, Clock, DollarSign, Shield} from "lucide-react";
import Link from "next/link";
import {CTAForm} from "@/components/CTAForm";
import {useState} from "react";

export default function CTA({primaryText = null, secondaryText = null}) {

    const [open, setIsOpen] = useState(false)

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10">
                    <Car className="w-32 h-32 transform rotate-12"/>
                </div>
                <div className="absolute bottom-10 left-10">
                    <Car className="w-40 h-40 transform -rotate-12"/>
                </div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
                        <h2 className="mb-4 text-[22px] font-bold text-[rgb(60,60,60)]">
                            {primaryText || "Готовы найти свой автомобиль?"}
                        </h2>
                        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto text-[18px]">
                            {secondaryText || "Оставьте заявку, и наши специалисты свяжутся с вами в течение часа"}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <div
                                onClick={() => setIsOpen(true)}
                                className="cursor-pointer bg-[#ffd632] text-black px-10 py-4 rounded-lg hover:bg-[#e6c02d] transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg">
                                Оставить заявку
                                <ArrowRight className="w-5 h-5"/>
                            </div>
                            <Link href="/calculator"
                                  className="bg-white border-2 border-black text-black px-12 py-4 rounded-lg hover:bg-black hover:text-white transition-all inline-flex items-center justify-center gap-2">
                                Рассчитать стоимость
                            </Link>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-gray-200">
                            <div className="flex items-center gap-2 text-gray-600">
                                <div
                                    className="w-10 h-10 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-black"/>
                                </div>
                                <span>Гарантия качества</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <div
                                    className="w-10 h-10 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-black"/>
                                </div>
                                <span>Ответ в течение часа</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <div
                                    className="w-10 h-10 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center">
                                    <DollarSign className="w-5 h-5 text-black"/>
                                </div>
                                <span>Прозрачные цены</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CTAForm open={open} onOpenChange={setIsOpen} />
        </section>
    )
}
