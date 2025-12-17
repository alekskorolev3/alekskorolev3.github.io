import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Дмитрий Иванов',
    city: 'Москва',
    rating: 5,
    date: '15 ноября 2024',
    car: 'Toyota Camry 2020',
    text: 'Отличный сервис! Ребята помогли подобрать автомобиль мечты, провели полную диагностику и доставили в Москву. Все документы оформили быстро и профессионально. Очень доволен покупкой!',
    avatar: 'ДИ'
  },
  {
    id: 2,
    name: 'Александра Петрова',
    city: 'Санкт-Петербург',
    rating: 5,
    date: '3 ноября 2024',
    car: 'Volkswagen Tiguan 2019',
    text: 'Спасибо за профессиональную работу! Изначально были сомнения, но после консультации все страхи развеялись. Автомобиль привезли в отличном состоянии, экономия по сравнению с покупкой в России составила более 400 тысяч рублей.',
    avatar: 'АП'
  },
  {
    id: 3,
    name: 'Михаил Сергеев',
    city: 'Казань',
    rating: 5,
    date: '28 октября 2024',
    car: 'BMW 3 Series 2021',
    text: 'Рекомендую! Очень ответственный подход к делу. Сделали разовый осмотр автомобиля, который я нашел сам - предоставили подробный отчет с фотографиями и рекомендациями. В итоге сэкономил время и деньги.',
    avatar: 'МС'
  },
  {
    id: 4,
    name: 'Елена Соколова',
    city: 'Нижний Новгород',
    rating: 5,
    date: '20 октября 2024',
    car: 'Mazda CX-5 2019',
    text: 'Превосходный сервис от начала до конца! Помогли с выбором, организовали осмотр, провели все через таможню. Машина в идеальном состоянии, все документы в порядке. Буду рекомендовать друзьям!',
    avatar: 'ЕС'
  },
  {
    id: 5,
    name: 'Владимир Кузнецов',
    city: 'Екатеринбург',
    rating: 5,
    date: '12 октября 2024',
    car: 'Audi Q5 2020',
    text: 'Профессионалы своего дела! Весь процесс занял две недели - от первого звонка до получения ключей. Очень понравилась опертивность и внимание к деталям. Автомобиль полностью соответствует описанию.',
    avatar: 'ВК'
  },
  {
    id: 6,
    name: 'Ирина Морозова',
    city: 'Краснодар',
    rating: 5,
    date: '5 октября 2024',
    car: 'Hyundai Tucson 2020',
    text: 'Огромное спасибо команде! Это был мой первый опыт покупки авто из-за границы, и я очень переживала. Но ребята все подробно объяснили, сопровождали на каждом этапе, отвечали на все вопросы. Результат превзошел ожидания!',
    avatar: 'ИМ'
  }
];

export default function ReviewsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd632] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-[rgb(60,60,60)] text-[20px] font-bold">Отзывы клиентов</h1>
            <p className="text-xl text-gray-600">
              Мы гордимся доверием наших клиентов. Читайте реальные отзывы людей, которые уже воспользовались нашими услугами.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-black mb-2">500+</div>
              <p className="text-gray-600">Довольных клиентов</p>
            </div>
            <div>
              <div className="text-black mb-2">4.9/5</div>
              <p className="text-gray-600">Средняя оценка</p>
            </div>
            <div>
              <div className="text-black mb-2">98%</div>
              <p className="text-gray-600">Рекомендуют нас</p>
            </div>
            <div>
              <div className="text-black mb-2">3 года</div>
              <p className="text-gray-600">На рынке</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#ffd632] bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black">{review.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="mb-1">{review.name}</h3>
                        <p className="text-sm text-gray-600">{review.city}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-black mb-2">{review.car}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-100" />
                  <p className="text-gray-700 relative z-10 pl-6">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
            <h2 className="mb-4">Присоединяйтесь к довольным клиентам</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Станьте частью нашей истории успеха. Мы поможем вам найти и привезти автомобиль вашей мечты.
            </p>
            <a 
              href="/contacts"
              className="bg-[#ffd632] text-black px-8 py-3 rounded-lg hover:bg-[#e6c02d] transition-colors inline-block"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
