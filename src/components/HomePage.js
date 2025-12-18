'use client';

import Link from 'next/link';
import { Car, Shield, Clock, DollarSign, ArrowRight } from 'lucide-react';
import ImageWithFallback from '../components/figma/ImageWithFallback';

export default function HomePage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-white py-16 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="max-w-2xl">
                            <h1 className="mb-6 font-bold text-[rgb(60,60,60)] text-[20px] font-[Montserrat]">
                                Подбор автомобилей из Беларуси под ключ — доставка, проверка, оформление
                            </h1>
                            <p className="text-xl mb-[32px] text-gray-600 mt-0 mr-[110px] ml-0">
                                Профессиональный подбор и доставка автомобилей с полным юридическим сопровождением.
                                Экономьте до 30% на покупке авто.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/catalog" className="bg-[#ffd632] text-black px-8 py-3 rounded-lg hover:bg-[#e6c02d] transition-colors inline-flex items-center gap-2">
                                    Смотреть каталог
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="/calculator" className="bg-white border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors">
                                    Калькулятор
                                </Link>
                            </div>
                        </div>

                        <div className="relative lg:absolute lg:-right-48 lg:top-1/2 lg:w-[62.5%] z-10" style={{ transform: 'translateY(calc(-50% + 20px))' }}>
                            <img
                                src="/hero_car.avif"
                                alt="Спортивный автомобиль"
                                className="w-[115%] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-center mb-12">Наши преимущества</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <DollarSign className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="mb-2">Выгодные цены</h3>
                            <p className="text-gray-600">Экономия до 30% от стоимости аналогичных авто в РФ</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="mb-2">Юридическая чистота</h3>
                            <p className="text-gray-600">Полная проверка истории автомобиля и документов</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="mb-2">Быстрое оформление</h3>
                            <p className="text-gray-600">Полный цикл от подбора до регистрации за 7-14 дней</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Car className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="mb-2">Большой выбор</h3>
                            <p className="text-gray-600">Доступ к сотням предложений на рынке Беларуси</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Cars Section */}
            <section className="py-16 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h2 className="mb-2">Популярные предложения</h2>
                            <p className="text-gray-600">Самые выгодные автомобили этого месяца</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: 1,
                                image: 'https://images.unsplash.com/photo-1762949857740-8dfe34f62220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NjM3ODE3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                brand: 'Toyota Camry',
                                year: 2020,
                                price: '2 150 000',
                                engine: '2.5',
                                power: '181',
                                transmission: 'Автомат',
                                isHit: true
                            },
                            {
                                id: 2,
                                image: 'https://images.unsplash.com/photo-1763178907914-c05ca7eeeceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXIlMjBzaWRlJTIwdmlld3xlbnwxfHx8fDE3NjM4MTgwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                brand: 'Volkswagen Tiguan',
                                year: 2019,
                                price: '2 450 000',
                                engine: '2.0',
                                power: '220',
                                transmission: 'Автомат',
                                isHit: false
                            },
                            {
                                id: 3,
                                image: 'https://images.unsplash.com/photo-1696581084151-8a038c7dfc83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjByZWR8ZW58MXx8fHwxNzYzNzMzMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                                brand: 'BMW 3 Series',
                                year: 2021,
                                price: '3 200 000',
                                engine: '2.0',
                                power: '190',
                                transmission: 'Автомат',
                                isHit: true
                            }
                        ].map((car) => (
                            <div key={car.id}
                                 className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                {/* Желтая полоса сверху */}
                                <div className="h-1.5 bg-gradient-to-r from-[#ffd632] via-[#ffd632] to-[#e6c02d]"></div>

                                {/* Изображение с бейджем */}
                                <div className="relative overflow-hidden">
                                    <ImageWithFallback
                                        src={car.image}
                                        alt={car.brand}
                                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {car.isHit && (
                                        <div
                                            className="absolute top-4 right-4 bg-[#ffd632] text-black px-4 py-2 rounded-full shadow-lg">
                                            Хит продаж
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    {/* Название и год */}
                                    <div className="flex items-center justify-between mb-4">
                                        <h3>{car.brand}</h3>
                                        <span className="text-gray-500">{car.year} г.</span>
                                    </div>

                                    {/* Характеристики в виде плиток */}
                                    <div className="grid grid-cols-3 gap-2 mb-4">
                                        <div className="bg-gray-50 rounded-lg p-2 text-center">
                                            <div className="text-xs text-gray-500">Двигатель</div>
                                            <div className="text-sm text-black mt-1">{car.engine}л</div>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-2 text-center">
                                            <div className="text-xs text-gray-500">Мощность</div>
                                            <div className="text-sm text-black mt-1">{car.power} л.с.</div>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-2 text-center">
                                            <div className="text-xs text-gray-500">КПП</div>
                                            <div className="text-sm text-black mt-1">Авт</div>
                                        </div>
                                    </div>

                                    {/* Цена и кнопка */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Цена под ключ</div>
                                            <div className="text-black">{car.price.toLocaleString()} ₽</div>
                                        </div>
                                        <Link
                                            href="/catalog"
                                            className="bg-[#ffd632] text-black px-5 py-2.5 rounded-lg hover:bg-[#e6c02d] transition-colors flex items-center gap-2 group-hover:gap-3 duration-300"
                                        >
                                            Детали
                                            <ArrowRight className="w-4 h-4"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
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
                            <h2 className="mb-4 text-[22px] font-bold text-[rgb(60,60,60)]">Готовы найти свой автомобиль?</h2>
                            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto text-[18px]">
                                Оставьте заявку, и наши специалисты свяжутся с вами в течение часа
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <Link href="/contacts"
                                      className="bg-[#ffd632] text-black px-10 py-4 rounded-lg hover:bg-[#e6c02d] transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg">
                                    Оставить заявку
                                    <ArrowRight className="w-5 h-5"/>
                                </Link>
                                <Link href="/calculator"
                                      className="bg-white border-2 border-black text-black px-12 py-4 rounded-lg hover:bg-black hover:text-white transition-all inline-flex items-center justify-center gap-2">
                                    Рассчитать стоимость
                                </Link>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <div className="w-10 h-10 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-black"/>
                                    </div>
                                    <span>Гарантия качества</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <div className="w-10 h-10 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-black"/>
                                    </div>
                                    <span>Ответ в течение часа</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <div className="w-10 h-10 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center">
                                        <DollarSign className="w-5 h-5 text-black"/>
                                    </div>
                                    <span>Прозрачные цены</span>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-gray-500">
                            Более 500 довольных клиентов уже получили свои автомобили
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
