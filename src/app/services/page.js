import {CheckCircle, Search, Eye, FileText, Truck, Shield, Car, Clock, ArrowRight, DollarSign} from 'lucide-react';
import Link from 'next/link';
import CTA from "@/components/CTA";

const services = [
  {
    id: 1,
    icon: Search,
    title: 'Подбор автомобиля под ключ',
    description: 'Полный цикл поиска и покупки автомобиля в Беларуси с доставкой в РФ',
    features: [
      'Поиск автомобиля по вашим критериям',
      'Проверка юридической чистоты',
      'Техническая диагностика',
      'Торг с продавцом',
      'Оформление всех документов',
      'Доставка до вашего города'
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
      'Проверка лакокрасочного покрытия',
      'Диагностика всех систем',
      'Тест-драйв',
      'Проверка по базам',
      'Подробный отчет с фото'
    ],
    price: 'от 5 000 ₽'
  },
  {
    id: 3,
    icon: FileText,
    title: 'Юридическое сопровождение',
    description: 'Полное юридическое сопровождение сделки',
    features: [
      'Проверка документов продавца',
      'Проверка истории автомобиля',
      'Составление договора',
      'Сопровождение сделки',
      'Помощь в оформлении',
      'Консультации на всех этапах'
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
      'Страхование при перевозке',
      'Растаможка',
      'Постановка на учет',
      'Доставка до вашего города',
      'Передача ключей и документов'
    ],
    price: 'от 20 000 ₽'
  },
  {
    id: 5,
    icon: Shield,
    title: 'Гарантийное обслуживание',
    description: 'Гарантия на все проведенные работы',
    features: [
      'Гарантия юридической чистоты',
      'Гарантия технического состояния',
      'Помощь при возникновении проблем',
      'Постгарантийная поддержка',
      'Консультации экспертов',
      'Помощь в решении спорных вопросов'
    ],
    price: 'Включено в пакет'
  }
];

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

export default function ServicesPage() {


  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd632] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-[rgb(60,60,60)] text-[20px] font-bold">Наши услуги</h1>
            <p className="text-xl text-gray-600">
              Полный спектр услуг по подбору автомобилей из Беларуси в Россию. 
              Профессионально, быстро, с гарантией качества.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <h2 className="mb-2">{service.title}</h2>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-black">{service.price}</span>
                    <Link 
                      href="/contacts"
                      className="bg-[#ffd632] text-black px-6 py-2 rounded-lg hover:bg-[#e6c02d] transition-colors"
                    >
                      Заказать
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
                        className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      {item.icon}
                    </div>

                    <h3 className="text-center mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-center text-sm">{item.subtitle}</p>
                  </div>
                </div>
            ))}

          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
