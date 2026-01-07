import CTA from "@/components/CTA";

export default function AboutContent() {
    const team = [
        {
            title: "Александр — подбор и диагностика",
            text: "Отвечает за поиск автомобилей, осмотры и техническую проверку. Разбирается в рынке, слабых местах популярных моделей и умеет отличать живую машину от хорошо замаскированной проблемы."
        },
        {
            title: "Артём — сервис и организация",
            text: "Отвечает за сайт, продвижение, коммуникацию с клиентами и контроль всего процесса. Чтобы подбор проходил прозрачно, понятно и без хаоса."
        }
    ];

    const processSteps = [
        "Обсуждаем задачу и требования",
        "Формируем список подходящих моделей",
        "Отсеиваем хлам ещё до осмотров",
        "Проводим осмотры и диагностику",
        "Проверяем историю и документы",
        "Сопровождаем сделку и помогаем с торгом"
    ];

    const principles = [
        "Работаем только в интересах клиента",
        "Не берём в работу сомнительные автомобили",
        "Всегда честно говорим о плюсах и минусах",
        "Лучше не купить ничего, чем купить плохую машину",
        "Опираемся на факты и диагностику, а не эмоции",
        "Работаем «как для себя»"
    ];

    const trustText = [
        "Сейчас сервис находится на этапе запуска, поэтому на сайте ещё нет отзывов клиентов — и мы принципиально не публикуем выдуманные.",
        "Зато у нас есть реальный практический опыт подбора и покупки автомобилей, понимание рынка, десятки просмотренных и отсеянных проблемных вариантов и честный подход к работе.",
        "Первые клиенты получают максимальное внимание к деталям и особые условия. По завершённым проектам мы начнём публиковать реальные кейсы и отзывы."
    ];

    return (
        <div className="bg-white text-gray-900">

            {/* Hero */}
            <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
                <div className="max-w-3xl">
                    <div className="w-16 md:w-20 h-1.5 bg-[#ffd632] mb-4 md:mb-6 rounded-full" />
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                        О сервисе подбора автомобилей
                    </h1>
                    <p className="text-base md:text-lg text-gray-600">
                        Мы — небольшой специализированный сервис подбора автомобилей в Минске. Помогаем найти действительно живую машину — без скрытых проблем, юридических рисков и переплат.
                    </p>
                </div>
            </section>

            {/* Who we are */}
            <section className="max-w-6xl mx-auto px-4 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {team.map((item, i) => (
                    <div
                        key={i}
                        className="cursor-pointer bg-white rounded-xl border-2 border-gray-100 p-5 md:p-8 hover:border-[#ffd632] hover:shadow-lg transition-all"
                    >
                        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{item.title}</h3>
                        <p className="text-sm md:text-base text-gray-600">{item.text}</p>
                    </div>
                ))}
            </section>

            {/* Philosophy */}
            <section className="bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Наш подход</h2>
                    <div className="max-w-3xl text-gray-700 text-base md:text-lg">
                        <p>
                            Мы не продаём автомобили и не связаны с автосалонами или перекупщиками.
                            Мы работаем <b>только в интересах клиента</b>. Наша задача — не «найти хоть что-то»,
                            а защитить тебя от плохой покупки и довести до действительно достойного варианта.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12">Как проходит подбор</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {processSteps.map((step, i) => (
                        <div
                            key={i}
                            className="cursor-pointer bg-white rounded-xl border-2 border-gray-100 p-4 md:p-6 hover:border-[#ffd632] hover:shadow-lg transition-all"
                        >
                            <div className="text-xl md:text-2xl font-bold text-[#ffd632] mb-1 md:mb-2">
                                {String(i + 1).padStart(2, "0")}
                            </div>
                            <p className="text-sm md:text-base font-medium">{step}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Principles */}
            <section className="bg-gray-50 principles-section">
                <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">Наши принципы</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {principles.map((item, i) => (
                            <div
                                key={i}
                                className="cursor-pointer principle-card group bg-white rounded-xl border-2 border-gray-100 p-6 transition-all hover:border-[#ffd632] hover:shadow-lg"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#ffd632]/20 flex items-center justify-center flex-shrink-0">
                                        <div className="w-3 h-3 bg-[#ffd632] rounded-full" />
                                    </div>
                                    <p className="font-medium text-gray-800 leading-snug">{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why trust */}
            <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Почему нам можно доверять</h2>
                <div className="max-w-3xl space-y-3 md:space-y-4 text-gray-700 text-base md:text-lg">
                    {trustText.map((text, i) => (
                        <p key={i}>{text}</p>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <CTA
                primaryText="Хотите купить машину без риска и сюрпризов?"
                secondaryText="Мы поможем пройти этот путь спокойно, безопасно и с понятным результатом."
            />

        </div>
    );
}
