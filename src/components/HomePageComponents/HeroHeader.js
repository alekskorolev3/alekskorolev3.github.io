import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function HeroHeader() {

    return (
        <section className="relative bg-white py-12 md:py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Текст */}
                    <div className="max-w-2xl text-center lg:text-left">
                        <h1 className="mb-6 font-bold text-[rgb(60,60,60)] text-lg md:text-xl font-[Montserrat]">
                            Подбор автомобилей из Беларуси под ключ — доставка, проверка, оформление
                        </h1>

                        <p className="text-base md:text-xl mb-8 text-gray-600">
                            Профессиональный подбор и доставка автомобилей с полным юридическим сопровождением.
                            Экономьте до 30% на покупке авто.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Link
                                href="/calculator"
                                className="bg-[#ffd632] text-black px-8 py-3 rounded-lg hover:bg-[#e6c02d] transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Калькулятор стоимости
                                <ArrowRight className="w-5 h-5"/>
                            </Link>

                            <Link
                                href="/services"
                                className="bg-white border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors text-center"
                            >
                                Услуги
                            </Link>
                        </div>
                    </div>

                    {/* Картинка */}
                    <div
                        className="
                                          relative
                                          w-full
                                          flex
                                          justify-center
                                          lg:absolute
                                          lg:right-[-12rem]
                                          lg:top-1/2
                                          lg:w-[62.5%]
                                          lg:-translate-y-1/2
                                        "
                    >
                        <img
                            src="/hero_car.avif"
                            alt="Спортивный автомобиль"
                            className="
                                            w-full
                                            max-w-[420px]
                                            sm:max-w-[520px]
                                            md:max-w-[640px]
                                            lg:max-w-[800px]
                                            h-auto
                                            object-contain
                                          "
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
