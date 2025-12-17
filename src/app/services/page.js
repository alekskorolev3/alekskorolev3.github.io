import { CheckCircle, Search, Eye, FileText, Truck, Shield } from 'lucide-react';
import Link from 'next/link';

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
        <div className="container mx-auto px-4">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Заявка', description: 'Оставляете заявку на сайте или по телефону' },
              { step: '02', title: 'Консультация', description: 'Обсуждаем ваши требования и бюджет' },
              { step: '03', title: 'Подбор', description: 'Находим подходящие варианты автомобилей' },
              { step: '04', title: 'Доставка', description: 'Оформляем и доставляем авто��обиль' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
            <h2 className="mb-4">Не нашли нужную услугу?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами, и мы подберем индивидуальное решение под ваши потребности
            </p>
            <Link 
              href="/contacts"
              className="bg-[#ffd632] text-black px-8 py-3 rounded-lg hover:bg-[#e6c02d] transition-colors inline-block"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
