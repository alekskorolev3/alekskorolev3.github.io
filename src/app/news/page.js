import { Calendar, ArrowRight } from 'lucide-react';
import ImageWithFallback from '@/components/figma/ImageWithFallback';

const news = [
  {
    id: 1,
    title: 'Новые правила ввоза автомобилей из Беларуси в 2025 году',
    date: '20 ноября 2024',
    category: 'Законодательство',
    image: 'https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjM4MTgwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'С 1 января 2025 года вступают в силу обновленные правила растаможки автомобилей. Разбираем все изменения и их влияние на стоимость подбора.',
    content: 'Правительство РФ объявило о новых правилах ввоза автомобилей...'
  },
  {
    id: 2,
    title: 'Топ-5 самых популярных моделей для подбора в ноябре',
    date: '15 ноября 2024',
    category: 'Аналитика',
    image: 'https://images.unsplash.com/photo-1762949857740-8dfe34f62220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NjM3ODE3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'Проанализировали запросы клиентов за ноябрь и составили рейтинг самых востребованных автомобилей для подбора из Беларуси.',
    content: 'В ноябре лидером по запросам стала Toyota Camry...'
  },
  {
    id: 3,
    title: 'Как сэкономить на подборе автомобиля: 7 советов экспертов',
    date: '10 ноября 2024',
    category: 'Советы',
    image: 'https://images.unsplash.com/photo-1763178907914-c05ca7eeeceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXIlMjBzaWRlJTIwdmlld3xlbnwxfHx8fDE3NjM4MTgwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'Наши эксперты поделились проверенными способами снизить затраты на покупку и доставку автомобиля из Беларуси.',
    content: 'Подбор автомобиля - это уже выгодное решение...'
  },
  {
    id: 4,
    title: 'Открытие нового офиса в Санкт-Петербурге',
    date: '5 ноября 2024',
    category: 'Компания',
    image: 'https://images.unsplash.com/photo-1696581084151-8a038c7dfc83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjByZWR8ZW58MXx8fHwxNzYzNzMzMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'Рады сообщить об открытии нашего нового офиса в Санкт-Петербурге. Теперь мы еще ближе к нашим клиентам из северной столицы.',
    content: 'Мы продолжаем расширяться и развиваться...'
  },
  {
    id: 5,
    title: 'Электромобили из Беларуси: особенности подбора',
    date: '1 ноября 2024',
    category: 'Советы',
    image: 'https://images.unsplash.com/photo-1762949857740-8dfe34f62220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NjM3ODE3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'Все больше клиентов интересуются электромобилями. Рассказываем о нюансах покупки и подбора электрокаров из Беларуси.',
    content: 'Рынок электромобилей активно развивается...'
  },
  {
    id: 6,
    title: 'Успешно завершили 500-ю сделку!',
    date: '25 октября 2024',
    category: 'Компания',
    image: 'https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NjM4MTgwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'Мы гордимся тем, что помогли 500 клиентам приобрести автомобили их мечты. Спасибо за доверие!',
    content: 'Это важная веха в истории нашей компании...'
  }
];

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
                <button className="text-black hover:text-gray-700 flex items-center gap-2 w-fit">
                  Читать полностью
                  <ArrowRight className="w-5 h-5" />
                </button>
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
                  <button className="text-black hover:text-gray-700 flex items-center gap-2 text-sm">
                    Читать далее
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
