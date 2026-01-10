import { CheckCircle, Search, FileText, Car, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import CTA from "@/components/CTA";
import { services } from "@/const/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from 'next/head';

const stepsData = [
  {
    id: 1,
    icon: <Search />,
    title: "Заявка и консультация",
    subtitle: "Вы оставляете заявку или звоните нам. Обсуждаем ваши пожелания, бюджет и подбираем оптимальные варианты."
  },
  {
    id: 2,
    icon: <Car />,
    title: "Поиск и проверка",
    subtitle: "Находим автомобиль по вашим критериям. Проводим полную диагностику, проверяем юридическую чистоту и историю."
  },
  {
    id: 3,
    icon: <FileText />,
    title: "Оформление",
    subtitle: "Оформляем все документы, растаможиваем автомобиль. Держим вас в курсе на каждом этапе."
  },
  {
    id: 4,
    icon: <CheckCircle />,
    title: "Доставка и передача",
    subtitle: "Доставляем автомобиль в ваш город, помогаем с постановкой на учёт. Вы получаете ключи и документы!"
  },
];

export const metadata = {
  title: "Услуги | Flow Auto",
  description: "Подберите автомобиль из Беларуси"
};

export default function ServicesPage() {
  // Основная структурированная разметка для страницы услуг
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Услуги подбора автомобилей из Беларуси",
    "description": "Полный спектр услуг по подбору, проверке и доставке автомобилей из Беларуси в Россию",
    "url": "https://flowauto.ru/services",
    "provider": {
      "@type": "Organization",
      "name": "FlowAuto",
      "url": "https://flowauto.ru",
      "logo": "https://flowauto.ru/logo.png"
    },
    "serviceType": [
      "Подбор автомобилей",
      "Диагностика автомобилей",
      "Юридическая проверка",
      "Доставка автомобилей",
      "Оформление документов"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Россия"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Пакеты услуг",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "serviceType": service.title,
          "provider": {
            "@type": "Organization",
            "name": "FlowAuto"
          }
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": service.price,
          "priceCurrency": "RUB"
        },
        "url": "https://flowauto.ru/services"
      }))
    }
  };

  // Структурированные данные для процесса работы
  const processStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Как мы работаем - процесс подбора автомобиля",
    "description": "Простой и прозрачный процесс подбора автомобиля из Беларуси",
    "step": stepsData.map((step, index) => ({
      "@type": "HowToStep",
      "position": step.id,
      "name": step.title,
      "text": step.subtitle
    }))
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://flowauto.ru"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Услуги",
        "item": "https://flowauto.ru/services"
      }
    ]
  };

  return (
      <>
        <Head>
          {/* Основная разметка страницы услуг */}
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(servicesStructuredData)
              }}
          />

          {/* Разметка для процесса работы */}
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(processStructuredData)
              }}
          />

          {/* Breadcrumb разметка */}
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbStructuredData)
              }}
          />

          {/* Дополнительная разметка для каждой услуги */}
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "ItemList",
                  "name": "Список услуг FlowAuto",
                  "description": "Все доступные услуги по подбору автомобилей",
                  "numberOfItems": services.length,
                  "itemListElement": services.map((service, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                      "@type": "Service",
                      "name": service.title,
                      "description": service.description,
                      "provider": {
                        "@type": "Organization",
                        "name": "FlowAuto"
                      }
                    }
                  }))
                })
              }}
          />
        </Head>

        <div
            className="bg-white text-gray-900 overflow-x-hidden"
            itemScope
            itemType="https://schema.org/Service"
        >
          {/* Hero Section с микроразметкой */}
          <section
              className="relative pb-16 md:pb-20 overflow-hidden"
              itemScope
              itemType="https://schema.org/CreativeWork"
          >
            <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-[#ffd632] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-t56 h-56 md:w-72 md:h-72 bg-black rounded-full opacity-5 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 pt-6">
              <Breadcrumbs items={[{label: 'Услуги', href: '/services', isCurrent: true}]} className="mb-6"/>
              <div className="text-center pt-8">
                <h1
                    className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800"
                    itemProp="headline"
                >
                  Наши услуги
                </h1>
                <p
                    className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
                    itemProp="description"
                >
                  Полный спектр услуг по подбору автомобилей из Беларуси в Россию.
                  Профессионально, быстро, с гарантией качества.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid с микроразметкой */}
          <section
              className="py-12 md:py-16"
              itemScope
              itemType="https://schema.org/OfferCatalog"
          >
            <meta itemProp="name" content="Пакеты услуг" />
            <meta itemProp="description" content="Услуги по подбору автомобилей из Беларуси" />

            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                      <div
                          key={service.id}
                          className="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow flex flex-col h-full"
                          itemProp="itemListElement"
                          itemScope
                          itemType="https://schema.org/ListItem"
                      >
                        <meta itemProp="position" content={(index + 1).toString()} />

                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-14 h-14 md:w-16 md:h-16 bg-[#ffd632]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 md:w-8 md:h-8 text-black"/>
                          </div>
                          <div>
                            <h2
                                className="text-lg md:text-xl font-semibold mb-1"
                                itemProp="name"
                            >
                              {service.title}
                            </h2>
                            <p
                                className="text-gray-600 text-sm md:text-base"
                                itemProp="description"
                            >
                              {service.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2 mb-6 flex-1">
                          {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5"/>
                                <span
                                    className="text-gray-700 text-sm md:text-base"
                                    itemProp="itemOffered"
                                >
                            {feature}
                          </span>
                              </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-gray-100 gap-2 sm:gap-0">
                      <span
                          className="text-black font-semibold"
                          itemProp="priceSpecification"
                          itemScope
                          itemType="https://schema.org/PriceSpecification"
                      >
                        <meta itemProp="price" content={service.price} />
                        <meta itemProp="priceCurrency" content="RUB" />
                        {service.price}
                      </span>

                          <Link
                              href="/contacts"
                              className="bg-[#ffd632] text-black px-6 py-2 rounded-lg hover:bg-[#e6c02d] transition-colors w-full sm:w-auto text-center"
                              itemProp="url"
                              itemScope
                              itemType="https://schema.org/Action"
                          >
                            <meta itemProp="name" content="Заказать услугу" />
                            Заказать
                          </Link>
                        </div>

                        {/* Скрытые метаданные для каждой услуги */}
                        <div style={{ display: 'none' }}>
                          <div itemProp="item" itemScope itemType="https://schema.org/Service">
                            <meta itemProp="name" content={service.title} />
                            <meta itemProp="description" content={service.description} />
                            <meta itemProp="serviceType" content={service.title} />
                            <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
                              <meta itemProp="name" content="FlowAuto" />
                              <meta itemProp="url" content="https://flowauto.ru" />
                            </div>
                          </div>
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* How It Works с микроразметкой */}
          <section
              className="py-12 md:py-16 bg-gray-50"
              itemScope
              itemType="https://schema.org/HowTo"
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2
                    className="text-2xl md:text-3xl font-bold mb-2"
                    itemProp="name"
                >
                  Как мы работаем
                </h2>
                <p
                    className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
                    itemProp="description"
                >
                  Простой и прозрачный процесс подбора автомобиля из Беларуси. Мы берем на себя все заботы — от поиска до регистрации.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {stepsData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#ffd632] hover:shadow-lg transition-all text-center flex flex-col items-center"
                        itemProp="step"
                        itemScope
                        itemType="https://schema.org/HowToStep"
                    >
                      <meta itemProp="position" content={item.id.toString()} />

                      <div className="w-16 h-16 bg-[#ffd632]/20 rounded-full flex items-center justify-center mb-4">
                        {item.icon}
                      </div>

                      <h3
                          className="font-semibold text-base md:text-lg mb-2"
                          itemProp="name"
                      >
                        {item.title}
                      </h3>

                      <p
                          className="text-gray-600 text-sm md:text-base"
                          itemProp="text"
                      >
                        {item.subtitle}
                      </p>
                    </div>
                ))}
              </div>
            </div>

            {/* Скрытые метаданные для времени выполнения */}
            <div style={{ display: 'none' }}>
              <meta itemProp="totalTime" content="P28D" />
              <meta itemProp="estimatedCost" content="Зависит от выбранной услуги" />
            </div>
          </section>

          {/* Скрытая микроразметка для организации */}
          <div style={{ display: 'none' }}>
            <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content="FlowAuto" />
              <meta itemProp="url" content="https://flowauto.ru" />
              <meta itemProp="logo" content="https://flowauto.ru/logo.png" />
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <meta itemProp="addressCountry" content="RU" />
              </div>
            </div>

            <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
              <meta itemProp="name" content="Россия" />
            </div>
          </div>

          <CTA />
        </div>
      </>
  );
}
