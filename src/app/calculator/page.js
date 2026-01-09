import CalculatorClient from './CalculatorClient'
import {Button} from "@/components/ui/button";
import {FileText} from "lucide-react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
    title: "Калькулятор | Flow Auto",
    description: "Подберите автомобиль из Беларуси с помощью калькулятора",
    alternates: {
        canonical: '/calculator'
    }
};

export default function CalculatorPage() {
    return (
        <>
            <section className="relative bg-white pb-16 md:pb-20 overflow-hidden border-b border-gray-200">
                {/* декор */}
                <div
                    className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-[#ffd632] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"/>
                <div
                    className="absolute bottom-0 left-0 w-56 h-56 md:w-72 md:h-72 bg-black rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"/>


                <div className="container mx-auto px-4 relative z-10 pt-6 pb-8">
                    <Breadcrumbs items={[{label: 'Калькулятор', href: '/calculator', isCurrent: true}]}
                                 className="mb-6"/>
                </div>

                <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <Image
                            width={200}
                            height={110}
                            className="w-20 md:w-auto md:max-h-[110px]"
                            src="/calculator.webp"
                            alt="Калькулятор утилизационного сбора"
                        />

                        {/* текст */}
                        <div className="text-center md:text-left">
                            <h1 className="mb-4 text-[18px] md:text-[20px] font-bold text-[rgb(60,60,60)]">
                                Калькулятор стоимости автомобиля
                            </h1>

                            <p className="text-base md:text-xl text-gray-600">
                                Рассчитайте примерную стоимость подбора вашего автомобиля из Беларуси в Россию
                                с учетом утильсбора.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CalculatorClient/>
            <div className="max-w-4xl mx-auto mb-12 px-4">
                <div className="mt-4">
                    <Button variant="link" asChild className="px-0">
                        <a
                            href="/Постановление Правительства РФ от 26.12.2013 № 1291 Об утилизационном сборе.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-2 text-sm"
                        >
                            <FileText className="h-4 w-4 mt-0.5 shrink-0"/>
                            <span>
                          Постановление Правительства РФ&nbsp;
                                <br className="sm:hidden"/>
                          «Об утилизационном сборе»
                        </span>
                        </a>
                    </Button>
                </div>
            </div>
        </>
    )
}
