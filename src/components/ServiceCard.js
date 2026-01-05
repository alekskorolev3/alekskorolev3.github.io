import {ArrowRight, CheckCircle} from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ service }) {

    const Icon = service.icon;

    return (
        <div
            className="
                                                              flex flex-col justify-between
                                                              h-full
                                                              bg-white rounded-xl
                                                              p-5 sm:p-6
                                                              border-2 border-gray-100
                                                              hover:border-[#ffd632] hover:shadow-lg
                                                              transition-all duration-300
                                                            "
        >
            <div>
                <div
                    className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-[#ffd632] transition-colors">
                    <Icon className="w-8 h-8 text-black"/>
                </div>

                {/* Заголовок и описание */}
                <h3 className="text-center mb-3 text-base">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center min-h-[40px]">{service.description}</p>

                {/* Список возможностей */}
                <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                        <li key={index}
                            className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle
                                className="w-4 h-4 text-green-500 flex-shrink-0"/>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Цена и кнопка */}
            <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                                                        <span
                                                            className="text-black text-md font-medium">{service.price}</span>
                    <Link
                        href="/services"
                        className="text-black hover:text-[#ffd632] transition-colors flex items-center gap-1 duration-300 text-sm"
                    >
                        Подробнее
                        <ArrowRight className="w-4 h-4"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
