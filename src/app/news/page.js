import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import ImageWithFallback from '@/components/figma/ImageWithFallback';
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from 'next/head';

export const news = [
  {
    id: 1,
    slug: 'novye-pravila-vvoza-avto-2025',
    title: 'Новые правила ввоза автомобилей из Беларуси в 2025 году',
    description: 'Обновленные правила растаможки автомобилей из Беларуси в 2025 году и их влияние на стоимость подбора.',
    date: '2024-11-20',
    category: 'Законодательство',
    image: 'https://images.unsplash.com/photo-1705747401901-28363172fe7e',
    excerpt:
        'С 1 января 2025 года вступают в силу обновленные правила растаможки автомобилей. Разбираем ключевые изменения.',
    content: `
      <p>С 1 января 2025 года вступают в силу обновленные правила ввоза автомобилей из Беларуси на территорию РФ.</p>
      <p>Основные изменения касаются порядка растаможки, расчета пошлин и экологических требований.</p>
      <p>Эти нововведения могут существенно повлиять на конечную стоимость подбора автомобиля.</p>
    `,
  },

  {
    id: 2,
    slug: 'top-5-populyarnyh-avto-noyabr',
    title: 'Топ-5 самых популярных моделей для подбора в ноябре',
    description: 'Рейтинг самых востребованных автомобилей для подбора из Беларуси по итогам ноября.',
    date: '2024-11-15',
    category: 'Аналитика',
    image: 'https://images.unsplash.com/photo-1762949857740-8dfe34f62220',
    excerpt:
        'Проанализировали запросы клиентов за ноябрь и составили рейтинг самых популярных автомобилей.',
    content: `
      <p>В ноябре спрос на автомобили из Беларуси заметно сместился в сторону надежных и ликвидных моделей.</p>
      <p>Лидером по количеству запросов стала Toyota Camry, за ней следуют Volkswagen Passat и Skoda Octavia.</p>
      <p>Также в рейтинг вошли два кроссовера, которые показали рост интереса.</p>
    `,
  },

  {
    id: 3,
    slug: 'kak-sekonomit-na-podbore-avto',
    title: 'Как сэкономить на подборе автомобиля: 7 советов экспертов',
    description: 'Практические советы экспертов, как снизить затраты на подбор и доставку автомобиля.',
    date: '2024-11-10',
    category: 'Советы',
    image: 'https://images.unsplash.com/photo-1763178907914-c05ca7eeeceb',
    excerpt:
        'Наши эксперты поделились проверенными способами снизить затраты на покупку автомобиля из Беларуси.',
    content: `
      <p>Подбор автомобиля — это уже выгодное решение, но есть способы сделать его еще дешевле.</p>
      <p>Мы собрали 7 практических советов, которые помогут избежать лишних расходов.</p>
      <p>От выбора комплектации до оптимизации логистики — рассказываем по шагам.</p>
    `,
  },

  {
    id: 4,
    slug: 'otkrytie-ofisa-v-sankt-peterburge',
    title: 'Открытие нового офиса в Санкт-Петербурге',
    description: 'Мы открыли новый офис в Санкт-Петербурге, чтобы быть ближе к клиентам.',
    date: '2024-11-05',
    category: 'Компания',
    image: 'https://images.unsplash.com/photo-1696581084151-8a038c7dfc83',
    excerpt:
        'Рады сообщить об открытии нового офиса в Санкт-Петербурге для клиентов из северной столицы.',
    content: `
      <p>Мы продолжаем расширяться и рады сообщить об открытии нового офиса в Санкт-Петербурге.</p>
      <p>Теперь клиенты из северо-западного региона смогут получать консультации еще быстрее.</p>
      <p>Адрес и график работы доступны на странице контактов.</p>
    `,
  },

  {
    id: 5,
    slug: 'elektromobili-iz-belarusi',
    title: 'Электромобили из Беларуси: особенности подбора',
    description: 'Особенности подбора и покупки электромобилей из Беларуси.',
    date: '2024-11-01',
    category: 'Советы',
    image: 'https://images.unsplash.com/photo-1762949857740-8dfe34f62220',
    excerpt:
        'Все больше клиентов интересуются электромобилями. Рассказываем о ключевых нюансах подбора.',
    content: `
      <p>Рынок электромобилей активно развивается, и Беларусь не является исключением.</p>
      <p>При подборе электрокара важно учитывать состояние батареи, запас хода и инфраструктуру зарядок.</p>
      <p>Мы рассказываем, на что обратить внимание при покупке.</p>
    `,
  },

  {
    id: 6,
    slug: '500-uspeshnyh-sdelok',
    title: 'Успешно завершили 500-ю сделку!',
    description: 'Наша компания успешно завершила 500-ю сделку по подбору автомобилей.',
    date: '2024-10-25',
    category: 'Компания',
    image: 'https://images.unsplash.com/photo-1705747401901-28363172fe7e',
    excerpt:
        'Мы гордимся тем, что помогли 500 клиентам приобрести автомобили их мечты.',
    content: `
      <p>Для нас это важная веха и показатель доверия со стороны клиентов.</p>
      <p>Каждая сделка — это индивидуальный подход и ответственность за результат.</p>
      <p>Спасибо всем, кто выбрал нас!</p>
    `,
  },
];

export const metadata = {
  title: "Новости | Flow Auto",
  description: "Подберите автомобиль из Беларуси"
};

export default function NewsPage() {
  // Структурированные данные для страницы новостей
  const newsPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Новости и статьи о подборе автомобилей из Беларуси",
    "description": "Последние новости рынка, изменения в законодательстве и полезные советы по подбору автомобилей из Беларуси в Россию",
    "url": "https://flowauto.ru/news",
    "publisher": {
      "@type": "Organization",
      "name": "FlowAuto",
      "url": "https://flowauto.ru",
      "logo": "https://flowauto.ru/logo.png"
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": news.length,
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "itemListElement": news.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "NewsArticle",
          "headline": article.title,
          "description": article.description,
          "datePublished": article.date,
          "dateModified": article.date,
          "author": {
            "@type": "Organization",
            "name": "FlowAuto"
          },
          "publisher": {
            "@type": "Organization",
            "name": "FlowAuto",
            "logo": {
              "@type": "ImageObject",
              "url": "https://flowauto.ru/logo.png"
            }
          },
          "articleSection": article.category,
          "articleBody": article.content.replace(/<[^>]*>/g, '').substring(0, 200),
          "image": {
            "@type": "ImageObject",
            "url": article.image,
            "height": 400,
            "width": 600
          },
          "url": `https://flowauto.ru/news/${article.slug}`,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://flowauto.ru/news/${article.slug}`
          }
        }
      }))
    }
  };

  // Структурированные данные для блога
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://flowauto.ru/news/#blog",
    "name": "Блог FlowAuto",
    "description": "Новости и статьи о подборе автомобилей из Беларуси",
    "publisher": {
      "@type": "Organization",
      "name": "FlowAuto",
      "url": "https://flowauto.ru"
    },
    "blogPost": news.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.description,
      "datePublished": article.date,
      "dateModified": article.date,
      "author": {
        "@type": "Organization",
        "name": "FlowAuto"
      },
      "url": `https://flowauto.ru/news/${article.slug}`
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
        "name": "Новости",
        "item": "https://flowauto.ru/news"
      }
    ]
  };

  return (
      <>
        <Head>
          {/* Основная разметка страницы новостей */}
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(newsPageStructuredData)
              }}
          />

          {/* Разметка для блога */}
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(blogStructuredData)
              }}
          />

          {/* Breadcrumb разметка */}
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbStructuredData)
              }}
          />
        </Head>

        <div itemScope itemType="https://schema.org/CollectionPage">
          <div className="container mx-auto px-4 relative z-10 pt-6">
            <Breadcrumbs items={[{label: 'Новости', href: '/news', isCurrent: true}]}/>
          </div>

          {/* Hero Section с микроразметкой */}
          <section
              className="relative bg-white pb-20 pt-10 overflow-hidden"
              itemScope
              itemType="https://schema.org/CreativeWork"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd632] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-black rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl">
                <h1
                    className="mb-6 text-[rgb(60,60,60)] text-[20px] font-bold"
                    itemProp="headline"
                >
                  Новости и статьи
                </h1>
                <p
                    className="text-xl text-gray-600"
                    itemProp="description"
                >
                  Следите за последними новостями рынка, изменениями в законодательстве и полезными советами.
                </p>
              </div>
            </div>
          </section>

          {/* News Grid с микроразметкой */}
          <section
              className="py-12 bg-gray-50"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/ItemList"
          >
            <meta itemProp="numberOfItems" content={news.length.toString()} />
            <meta itemProp="itemListOrder" content="https://schema.org/ItemListOrderDescending" />

            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((article, index) => (
                    <div
                        key={article.id}
                        className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                    >
                      <meta itemProp="position" content={(index + 1).toString()} />

                      <div itemProp="item" itemScope itemType="https://schema.org/NewsArticle">
                        {/* Изображение */}
                        <div itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                          <meta itemProp="url" content={article.image} />
                          <meta itemProp="width" content="600" />
                          <meta itemProp="height" content="400" />
                          <ImageWithFallback
                              src={article.image}
                              alt={article.title}
                              className="w-full h-48 object-cover"
                          />
                        </div>

                        {/* Контент статьи */}
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                        <span
                            className="bg-[#ffd632] bg-opacity-20 text-black px-3 py-1 rounded-full text-sm"
                            itemProp="articleSection"
                        >
                          {article.category}
                        </span>
                            <span className="text-gray-500 text-sm flex items-center gap-1">
                          <Calendar className="w-4 h-4"/>
                          <time
                              itemProp="datePublished"
                              dateTime={article.date}
                          >
                            {article.date}
                          </time>
                        </span>
                          </div>

                          <h3
                              className="mb-3"
                              itemProp="headline"
                          >
                            {article.title}
                          </h3>

                          <p
                              className="text-gray-600 text-sm mb-4"
                              itemProp="description"
                          >
                            {article.excerpt}
                          </p>

                          <Link
                              href={`/news/${article.slug}`}
                              className="text-black hover:text-gray-700 flex items-center gap-2"
                              itemProp="url"
                          >
                            Читать далее
                            <ArrowRight className="w-4 h-4"/>
                          </Link>
                        </div>

                        {/* Скрытые метаданные для статьи */}
                        <div style={{ display: 'none' }}>
                          <div itemProp="author" itemScope itemType="https://schema.org/Organization">
                            <meta itemProp="name" content="FlowAuto" />
                          </div>

                          <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                            <meta itemProp="name" content="FlowAuto" />
                            <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                              <meta itemProp="url" content="https://flowauto.ru/logo.png" />
                            </div>
                          </div>

                          <meta itemProp="dateModified" content={article.date} />
                          <meta itemProp="mainEntityOfPage" content={`https://flowauto.ru/news/${article.slug}`} />
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* Скрытые метаданные для публикатора */}
          <div style={{ display: 'none' }}>
            <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content="FlowAuto" />
              <meta itemProp="url" content="https://flowauto.ru" />
              <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                <meta itemProp="url" content="https://flowauto.ru/logo.png" />
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
