'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ImageWithFallback from '@/components/figma/ImageWithFallback';
import {
    Calendar,
    Gauge,
    Fuel,
    Settings,
    MapPin,
    Phone,
    Mail,
    ChevronLeft,
    Palette,
    Wrench,
    Car,
    Droplet,
    Zap,
    Shield,
    Eye
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const mockCars = [
    {
        id: 1,
        images: [
            'https://images.unsplash.com/photo-1762949857740-8dfe34f62220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NjM3ODE3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1710083521061-c1b1701c5d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ0NjAzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1626373854476-47bd65362b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBlbmdpbmV8ZW58MXx8fHwxNzY0NDQ0MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        brand: 'Toyota',
        model: 'Camry',
        year: 2020,
        price: 'от 2 150 000',
        engine: '2.5',
        power: 181,
        transmission: 'Автомат',
        bodyType: 'Седан',
        driveType: 'Передний',
        color: 'Серебристый металлик',
        mileage: '45 000',
        fuelType: 'Бензин',
        fuelConsumption: '7.8',
        location: 'Минск, Беларусь',
        vin: 'JTD***********234',
        description: 'Автомобиль в отличном состоянии. Полная сервисная история, один владелец. Регулярное техническое обслуживание у официального дилера. Все ТО пройдены вовремя.',
        equipment: [
            'Кожаный салон',
            'Климат-контроль (2 зоны)',
            'Камера заднего вида',
            'Датчики парковки',
            'Подогрев сидений',
            'Круиз-контроль',
            'Мультимедийная система',
            'Электропривод сидений',
            'Светодиодные фары',
            'Легкосплавные диски R18'
        ],
        safety: [
            'ABS',
            'ESP',
            'Поду��ки безопасности (8 шт)',
            'Система контроля полосы',
            'Автоматическое торможение'
        ]
    },
    {
        id: 2,
        images: [
            'https://images.unsplash.com/photo-1763178907914-c05ca7eeeceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXIlMjBzaWRlJTIwdmlld3xlbnwxfHx8fDE3NjM4MTgwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1710083521061-c1b1701c5d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ0NjAzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1626373854476-47bd65362b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBlbmdpbmV8ZW58MXx8fHwxNzY0NDQ0MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        brand: 'Volkswagen',
        model: 'Tiguan',
        year: 2019,
        price: 'от 2 450 000',
        engine: '2.0',
        power: 220,
        transmission: 'Автомат',
        bodyType: 'Внедорожник',
        driveType: 'Полный',
        color: 'Черный',
        mileage: '62 000',
        fuelType: 'Бензин',
        fuelConsumption: '8.9',
        location: 'Минск, Беларусь',
        vin: 'WVW***********567',
        description: 'Полностью обслуженный автомобиль с документальной историей. Комплектация Highline с максимальным набором опций.',
        equipment: [
            'Панорамная крыша',
            'Кожаный салон',
            'Адаптивный круиз-контроль',
            'Камера 360°',
            'Электропривод багажника',
            'Подогрев руля',
            'Вентиляция сидений',
            'Цифровая приборная панель',
            'Система навигации',
            'Беспроводная зарядка'
        ],
        safety: [
            'ABS',
            'ESP',
            'Подушки безопасности (9 шт)',
            'Система контроля слепых зон',
            'Автопарковка',
            'Система помощи при спуске'
        ]
    },
    {
        id: 3,
        images: [
            'https://images.unsplash.com/photo-1696581084151-8a038c7dfc83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjByZWR8ZW58MXx8fHwxNzYzNzMzMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1710083521061-c1b1701c5d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ0NjAzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1626373854476-47bd65362b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBlbmdpbmV8ZW58MXx8fHwxNzY0NDQ0MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        brand: 'BMW',
        model: '3 Series',
        year: 2021,
        price: 'от 3 200 000',
        engine: '2.0',
        power: 190,
        transmission: 'Автомат',
        bodyType: 'Седан',
        driveType: 'Задний',
        color: 'Синий металлик',
        mileage: '28 000',
        fuelType: 'Бензин',
        fuelConsumption: '6.9',
        location: 'Минск, Беларусь',
        vin: 'WBA***********890',
        description: 'Спортивный седан в идеальном состоянии. M-пакет, расширенная комплектация, все опции. Первый владелец.',
        equipment: [
            'M Sport пакет',
            'Кожаный салон Dakota',
            'Адаптивная подвеска',
            'Harman Kardon аудиосистема',
            'Head-Up дисплей',
            'Беспроводной CarPlay',
            'Ambient освещение',
            'Спортивные сиденья',
            'Легкосплавные диски M R19',
            'Адаптивные LED фары'
        ],
        safety: [
            'ABS',
            'DSC',
            'Подушки безопасности (8 шт)',
            'Активный круиз-контроль',
            'Система предотвращения столкновений',
            'Распознавание дорожных знаков'
        ]
    },
    {
        id: 4,
        images: [
            'https://images.unsplash.com/photo-1762949857740-8dfe34f62220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NjM3ODE3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1710083521061-c1b1701c5d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ0NjAzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1626373854476-47bd65362b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBlbmdpbmV8ZW58MXx8fHwxNzY0NDQ0MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        brand: 'Mazda',
        model: '6',
        year: 2018,
        price: 'от 1 850 000',
        engine: '2.5',
        power: 194,
        transmission: 'Автомат',
        bodyType: 'Сед��н',
        driveType: 'Передний',
        color: 'Красный',
        mileage: '78 000',
        fuelType: 'Бензин',
        fuelConsumption: '7.5',
        location: 'Минск, Беларусь',
        vin: 'JM1***********123',
        description: 'Надежный седан с динамичным дизайном. Регулярное обслуживание, все ТО в срок. Отличное техническое состояние.',
        equipment: [
            'Кожаный салон',
            'Климат-контроль',
            'Подогрев сидений',
            'Датчики дождя и света',
            'Мультимедиа с сенсорным экраном',
            'Bluetooth',
            'USB-порты',
            'Складывающиеся зеркала',
            'Легкосплавные диски R19',
            'Ксеноновые фары'
        ],
        safety: [
            'ABS',
            'DSC',
            'Подушки безопасности (6 шт)',
            'Система контроля давления в шинах',
            'Система стабилизации'
        ]
    },
    {
        id: 5,
        images: [
            'https://images.unsplash.com/photo-1763178907914-c05ca7eeeceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXIlMjBzaWRlJTIwdmlld3xlbnwxfHx8fDE3NjM4MTgwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1710083521061-c1b1701c5d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ0NjAzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1626373854476-47bd65362b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBlbmdpbmV8ZW58MXx8fHwxNzY0NDQ0MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        brand: 'Audi',
        model: 'Q5',
        year: 2020,
        price: 'от 3 500 000',
        engine: '2.0',
        power: 249,
        transmission: 'Автомат',
        bodyType: 'Внедорожник',
        driveType: 'Полный',
        color: 'Белый',
        mileage: '35 000',
        fuelType: 'Бензин',
        fuelConsumption: '8.3',
        location: 'Минск, Беларусь',
        vin: 'WAU***********456',
        description: 'Премиальный кроссовер в максимальной комплектации. Виртуальная кабина, матричные фары, все системы помощи водителю.',
        equipment: [
            'Quattro полный привод',
            'Virtual Cockpit',
            'Панорамная крыша',
            'Bang & Olufsen аудио',
            'Кожаный салон Valcona',
            'Массаж сидений',
            'Матричные LED фары',
            'Электропривод двери багажника',
            'Камера 360°',
            'Беспроводная зарядка'
        ],
        safety: [
            'Pre Sense система',
            'Адаптивный круиз-контроль',
            'Подушки безопасности (8 шт)',
            'Система контроля слепых зон',
            'Ассистент движения в пробке',
            'Система ночного видения'
        ]
    },
    {
        id: 6,
        images: [
            'https://images.unsplash.com/photo-1696581084151-8a038c7dfc83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjByZWR8ZW58MXx8fHwxNzYzNzMzMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1710083521061-c1b1701c5d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjQ0NjAzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1626373854476-47bd65362b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBlbmdpbmV8ZW58MXx8fHwxNzY0NDQ0MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ],
        brand: 'Hyundai',
        model: 'Sonata',
        year: 2019,
        price: 'от 1 650 000',
        engine: '2.0',
        power: 150,
        transmission: 'Автомат',
        bodyType: 'Седан',
        driveType: 'Передний',
        color: 'Серый',
        mileage: '55 000',
        fuelType: 'Бензин',
        fuelConsumption: '7.2',
        location: 'Минск, Беларусь',
        vin: 'KMH***********789',
        description: 'Комфортный седан бизнес-класса. Надежный двигатель, экономичный расход топлива. Идеальный вариант для города и трассы.',
        equipment: [
            'Кожаный салон',
            'Климат-контроль',
            'Подогрев сидений',
            'Камера заднего вида',
            'Датчики парковки',
            'Мультимедийная система',
            'Bluetooth',
            'Круиз-контроль',
            'Легкосплавные диски R17',
            'Светодиодная оптика'
        ],
        safety: [
            'ABS',
            'ESC',
            'Подушки безопасности (6 шт)',
            'Система помощи при старте на подъеме',
            'ISOFIX'
        ]
    }
];

export default function CarDetailPage({ id }) {
    const router = useRouter();

    const [selectedImage, setSelectedImage] = useState(0);
    const [showContactDialog, setShowContactDialog] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const car = mockCars.find(c => c.id === Number(id));

    if (!car) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="mb-4">Автомобиль не найден</h2>
                <Link href="/catalog" className="text-black underline hover:text-gray-700">
                    Вернуться в каталог
                </Link>
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // В реальном приложении здесь будет отправка данных
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
        setShowContactDialog(false);
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <div className="bg-white">
            <div className="bg-gray-50 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-black">Главна</Link>
                        <span>/</span>
                        <Link href="/catalog" className="hover:text-black">Каталог</Link>
                        <span>/</span>
                        <span className="text-black">{car.brand} {car.model}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                {/* Back Button */}
                <button
                    onClick={() => router.push('/catalog')}
                    className="flex items-center gap-2 text-gray-600 hover:text-black mb-6"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Вернуться к каталогу
                </button>

                {/* Title and Price */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                    <div>
                        <h1 className="mb-2">{car.brand} {car.model}</h1>
                        <div className="flex items-center gap-4 text-gray-600">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                  {car.year} год
              </span>
                            <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                                {car.location}
              </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Images */}
                    <div className="lg:col-span-2">
                        {/* Main Image */}
                        <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                            <ImageWithFallback
                                src={car.images[selectedImage]}
                                alt={`${car.brand} ${car.model}`}
                                className="w-full h-[400px] lg:h-[500px] object-cover"
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {car.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                                        selectedImage === index ? 'border-[#ffd632]' : 'border-transparent'
                                    }`}
                                >
                                    <ImageWithFallback
                                        src={image}
                                        alt={`${car.brand} ${car.model} - фото ${index + 1}`}
                                        className="w-full h-24 object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h2 className="mb-4">Описание</h2>
                            <p className="text-gray-700">{car.description}</p>
                        </div>

                        {/* Main Specifications */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h2 className="mb-6">Основные характеристики</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        <Calendar className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Год выпуска</p>
                                        <p className="text-black">{car.year}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        <Eye className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Пробег</p>
                                        <p className="text-black">{car.mileage} км</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        <Fuel className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Объем двигателя</p>
                                        <p className="text-black">{car.engine} л</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        <Gauge className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Мощность</p>
                                        <p className="text-black">{car.power} л.с.</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        <Settings className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Коробка передач</p>
                                        <p className="text-black">{car.transmission}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        <Wrench className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Привод</p>
                                        <p className="text-black">{car.driveType}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        <Car className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Тип кузова</p>
                                        <p className="text-black">{car.bodyType}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        <Palette className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Цвет</p>
                                        <p className="text-black">{car.color}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        <Droplet className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Тип топлива</p>
                                        <p className="text-black">{car.fuelType}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Расход (смеш.)</p>
                                        <p className="text-black">{car.fuelConsumption} л/100км</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600">VIN-номер</p>
                                <p className="text-black">{car.vin}</p>
                            </div>
                        </div>

                        {/* Equipment */}
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <h2 className="mb-4">Комплектация и опции</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {car.equipment.map((item, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-[#ffd632] rounded-full mt-2"></div>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Safety */}
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="w-5 h-5 text-gray-700" />
                                <h2>Системы безопасности</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {car.safety.map((item, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-[#ffd632] rounded-full mt-2"></div>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                            <div className="mb-6 pb-6 border-b border-gray-200">
                                <p className="text-gray-600 mb-2">Стоимость подбора и доставки</p>
                                <p className="text-black">{car.price} ₽</p>
                            </div>

                            <h3 className="mb-4">Заинтересовал автомобиль?</h3>
                            <p className="text-gray-600 mb-6">
                                Оставьте заявку, и наш менеджер свяжется с вами для консультации
                            </p>

                            <div className="space-y-4 mb-6">
                                <button
                                    onClick={() => setShowContactDialog(true)}
                                    className="w-full bg-[#ffd632] text-black py-3 rounded-lg hover:bg-[#e6c02d] transition-colors flex items-center justify-center gap-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    Заказать звонок
                                </button>

                                <Link
                                    href={`/calculator?year=${car.year}&engine=${car.engine}&power=${car.power}&price=${car.price.replace(/\D/g, '')}`}
                                    className="w-full bg-white text-black border-2 border-gray-300 py-3 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
                                >
                                    Рассчитать стоимость
                                </Link>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <h4 className="mb-4">Свяжитесь с нами</h4>
                                <div className="space-y-3">
                                    <a
                                        href="tel:+375291234567"
                                        className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
                                    >
                                        <Phone className="w-5 h-5" />
                                        <span>+375 (29) 123-45-67</span>
                                    </a>
                                    <a
                                        href="mailto:info@flowautoru.com"
                                        className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
                                    >
                                        <Mail className="w-5 h-5" />
                                        <span>info@flowautoru.com</span>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <p className="text-sm text-gray-700">
                                    <strong>Важно:</strong> Указанная цена включает стоимость подбора автомобиля и его доставки из Беларуси в Россию с учетом всех таможенных платежей.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Dialog */}
            <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Заказать звонок</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div>
                            <label className="block mb-2">Ваше имя</label>
                            <Input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Иван Иванов"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Телефон</label>
                            <Input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+7 (___) ___-__-__"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Email</label>
                            <Input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="example@mail.ru"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2">Комментарий</label>
                            <Textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Укажите удобное время для звонка"
                                rows={3}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#ffd632] text-black py-3 rounded-lg hover:bg-[#e6c02d] transition-colors"
                        >
                            Отправить заявку
                        </button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
