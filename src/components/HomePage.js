'use client';

import Link from 'next/link';
import {
    ArrowRight,
    Car,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Clock,
    DollarSign,
    Eye,
    FileText,
    Search,
    Shield,
    Truck
} from 'lucide-react';
import ImageWithFallback from '../components/figma/ImageWithFallback';
import {useEffect, useState} from "react";

export default function HomePage() {

    const stepsData = [
        {
            id: 1,
            icon: <Search/>,
            title: "Заявка и консультация",
            subtitle: "Вы оставляете заявку или звоните нам. Обсуждаем ваши пожелания, бюджет и подбираем оптимальные варианты."
        },
        {
            id: 2,
            icon: <Car/>,
            title: "Поиск и проверка",
            subtitle: "Находим автомобиль по вашим критериям. Проводим полную диагностику, проверяем юридическую чистоту и историю."
        },
        {
            id: 3,
            icon: <FileText/>,
            title: "Оформление",
            subtitle: "Оформляем все документы, растаможиваем автомобиль. Держим вас в курсе на каждом этапе."
        },
        {
            id: 4,
            icon: <CheckCircle/>,
            title: "Доставка и передача",
            subtitle: "Доставляем автомобиль в ваш город, помогаем с постановкой на учёт. Вы получаете ключи и документы!"
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const updateSlides = () => {
            setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
        };

        updateSlides();
        window.addEventListener('resize', updateSlides);
        return () => window.removeEventListener('resize', updateSlides);
    }, []);

    const services = [
        {
            id: 1,
            icon: Search,
            title: 'Подбор автомобиля под ключ',
            description: 'Полный цикл поиска и покупки автомобиля в Беларуси',
            features: [
                'Поиск по критериям',
                'Проверка чистоты',
                'Диагностика',
                'Оформление'
            ],
            price: 'от 30 000 ₽'
        },
        {
            id: 2,
            icon: Eye,
            title: 'Разовый осмотр автомобиля',
            description: 'Профессиональный осмотр выбранного вами автомобиля',
            features: [
                'Визуальный осмотр кузова',
                'Проверка ЛКП',
                'Диагностика систем',
                'Подробный отчет'
            ],
            price: 'от 5 000 ₽'
        },
        {
            id: 3,
            icon: FileText,
            title: 'Юридическое сопровождение',
            description: 'Полное юридическое сопровождение сделки',
            features: [
                'Проверка документов',
                'Проверка истории',
                'Составление договора',
                'Консультации'
            ],
            price: 'от 15 000 ₽'
        },
        {
            id: 4,
            icon: Truck,
            title: 'Доставка автомобиля',
            description: 'Транспортировка автомобиля из Беларуси в Россию',
            features: [
                'Доставка автопоездом',
                'Растаможка',
                'Постановка на учёт',
                'Передача документов'
            ],
            price: 'от 20 000 ₽'
        },
        {
            id: 5,
            icon: Shield,
            title: 'Гарантийное обслуживание',
            description: 'Гарантия на все проведенные работы',
            features: [
                'Гарантия чистоты',
                'Гарантия состояния',
                'Помощь при проблемах',
                'Постгарантийная поддержка'
            ],
            price: 'Включено в пакет'
        }
    ];

    const maxSlide = services.length - slidesPerView;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    };

    return (
        <div>
            {/* Hero Section */}
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


            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="mb-4">Как мы работаем</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Простой и прозрачный процесс подбора автомобиля из Беларуси.
                            Мы берем на себя все заботы — от поиска до регистрации.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        <div
                            className="hidden lg:block absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                            style={{top: '80px'}}></div>

                        {stepsData.map(item => (
                            <div key={item.id} className="relative">
                                <div
                                    className="cursor-pointer h-100 max-h-[270px] bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#ffd632] transition-all duration-300 hover:shadow-lg relative z-10">
                                    <div
                                        className="absolute -top-4 -left-4 w-12 h-12 bg-[#ffd632] rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-black font-medium">{item.id}</span>
                                    </div>

                                    <div
                                        className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-center mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-center text-sm">{item.subtitle}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Информационный блок внизу */}
                    <div className="mt-12 bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 border border-gray-200">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-16 h-16 bg-[#ffd632] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-8 h-8 text-black"/>
                                </div>
                                <div>
                                    <h3 className="mb-1">Средний срок подбора</h3>
                                    <p className="text-gray-600">От 7 до 14 дней под ключ</p>
                                </div>
                            </div>
                            <Link
                                href="/services"
                                className="bg-[#ffd632] text-black px-8 py-3 rounded-lg hover:bg-[#e6c02d] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                            >
                                Узнать подробнее
                                <ArrowRight className="w-5 h-5"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">Наши услуги</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Полный спектр услуг по подбору автомобилей из Беларуси.
                            От поиска до постановки на учёт — мы берём всё на себя.
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto px-2 sm:px-0">
                        <button
                            onClick={prevSlide}
                            className="
                                        absolute left-1 sm:left-0
                                        top-1/2 -translate-y-1/2
                                        z-10
                                        w-9 h-9 sm:w-12 sm:h-12
                                        bg-[#ffd632] hover:bg-[#e6c02d]
                                        rounded-full flex items-center justify-center
                                        shadow-lg transition-all
                                      "
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black"/>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="
                                        absolute right-1 sm:right-0
                                        top-1/2 -translate-y-1/2
                                        z-10
                                        w-9 h-9 sm:w-12 sm:h-12
                                        bg-[#ffd632] hover:bg-[#e6c02d]
                                        rounded-full flex items-center justify-center
                                        shadow-lg transition-all
                                      "
                            aria-label="Next"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black"/>
                        </button>

                        {/* Slider */}
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                    transform:
                                        slidesPerView === 1
                                            ? `translateX(-${currentSlide * 100}%)`
                                            : `translateX(-${currentSlide * (100 / slidesPerView)}%)`
                                }}
                            >
                                {services.map((service) => {
                                    const Icon = service.icon;
                                    return (
                                        <div key={service.id} className="flex-shrink-0 px-2 sm:px-4"
                                             style={{
                                                 width: slidesPerView === 1 ? '100%' : `${100 / slidesPerView}%`
                                             }}
                                        >
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
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Dots indicator */}
                        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                            {Array.from({length: services.length - slidesPerView + 1}).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        currentSlide === index
                                            ? 'bg-[#ffd632] w-8'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/services"
                            className="bg-white border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-all inline-flex items-center gap-2"
                        >
                            Все услуги
                            <ArrowRight className="w-5 h-5"/>
                        </Link>
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

            {/* Advantages Section */}
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
                            <h2 className="mb-4 text-[22px] font-bold text-[rgb(60,60,60)]">Готовы найти свой
                                автомобиль?</h2>
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
                        <p className="mt-6 text-sm text-gray-500">
                            Более 500 довольных клиентов уже получили свои автомобили
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
