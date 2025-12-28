import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import ImageWithFallback from '@/components/figma/ImageWithFallback';

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
]


const categories = ['Все', 'Законодательство', 'Аналитика', 'Советы', 'Компания'];

export default function NewsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd632] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-[rgb(60,60,60)] text-[20px] font-bold">Новости и статьи</h1>
            <p className="text-xl text-gray-600">
              Следите за последними новостями рынка, изменениями в законодательстве и полезными советами от наших экспертов.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-[73px] z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  category === 'Все'
                    ? 'bg-[#ffd632] text-black'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ImageWithFallback 
                src={news[0].image}
                alt={news[0].title}
                className="w-full h-full object-cover min-h-[300px]"
              />
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#ffd632] bg-opacity-20 text-black px-3 py-1 rounded-full text-sm">
                    {news[0].category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {news[0].date}
                  </span>
                </div>
                <h2 className="mb-4">{news[0].title}</h2>
                <p className="text-gray-600 mb-6">{news[0].excerpt}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(1).map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <ImageWithFallback 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-[#ffd632] bg-opacity-20 text-black px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="mb-3">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <Link href={`/news/${article.slug}`} className="text-black hover:text-gray-700 flex items-center gap-2">
                    Читать далее
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
            <h2 className="mb-4">Подпишитесь на новости</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Получайте актуальную информацию о рынке автомобилей и специальные предложения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ffd632]"
              />
              <button className="bg-[#ffd632] text-black px-6 py-3 rounded-lg hover:bg-[#e6c02d] transition-colors whitespace-nowrap">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
