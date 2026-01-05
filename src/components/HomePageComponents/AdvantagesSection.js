import {Car, Clock, DollarSign, Shield} from "lucide-react";

export default function AdvantagesSection() {

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-center mb-12 text-xl font-medium">Наши преимущества</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div
                            className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <DollarSign className="w-8 h-8 text-black"/>
                        </div>
                        <h3 className="mb-2">Выгодные цены</h3>
                        <p className="text-gray-600">Экономия до 30% от стоимости аналогичных авто в РФ</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div
                            className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-8 h-8 text-black"/>
                        </div>
                        <h3 className="mb-2">Юридическая чистота</h3>
                        <p className="text-gray-600">Полная проверка истории автомобиля и документов</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div
                            className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-8 h-8 text-black"/>
                        </div>
                        <h3 className="mb-2">Быстрое оформление</h3>
                        <p className="text-gray-600">Полный цикл от подбора до регистрации за 7-14 дней</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div
                            className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Car className="w-8 h-8 text-black"/>
                        </div>
                        <h3 className="mb-2">Большой выбор</h3>
                        <p className="text-gray-600">Доступ к сотням предложений на рынке Беларуси</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
