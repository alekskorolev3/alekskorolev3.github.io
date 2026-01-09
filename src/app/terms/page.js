'use client'

import Breadcrumbs from "@/components/Breadcrumbs";

export default function TermsOfService() {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            <div className="container mx-auto px-4 relative z-10 pt-6">
                <Breadcrumbs items={[{label: 'Пользовательское соглашение', href: '/terms', isCurrent: true}]}/>
            </div>
            <div className="max-w-full sm:max-w-3xl md:max-w-4xl mx-auto px-4 py-8 md:py-16">

                {/* Заголовок */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                    Пользовательское соглашение
                </h1>
                <p className="mb-6 text-gray-700 text-sm sm:text-base">
                    Настоящее Пользовательское соглашение регулирует отношения между сервисом <b>FlowAuto</b> и
                    пользователями сайта. Используя сайт, вы соглашаетесь с условиями данного соглашения.
                </p>

                {/* Общие положения */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">1. Общие положения</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                        <li>Сайт предоставляет услуги по подбору автомобилей и консультации.</li>
                        <li>Используя сайт, пользователь подтверждает согласие с условиями соглашения.</li>
                        <li>Сервис оставляет за собой право изменять условия соглашения с уведомлением пользователей.
                        </li>
                    </ul>
                </section>

                {/* Права и обязанности */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">2. Права и обязанности
                        пользователя</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                        <li>Пользователь обязуется предоставлять корректные данные при заполнении форм.</li>
                        <li>Не использовать сайт для незаконной деятельности или распространения запрещенной
                            информации.
                        </li>
                        <li>Имеет право запрашивать информацию о своих данных и их удаление.</li>
                    </ul>
                </section>

                {/* Права и обязанности сервиса */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">3. Права и обязанности сервиса</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                        <li>Сервис обязуется обеспечивать конфиденциальность персональных данных пользователей.</li>
                        <li>Обеспечивать корректное предоставление услуг в соответствии с заявленными условиями.</li>
                        <li>Имеет право вносить изменения в работу сайта и услуги при предварительном уведомлении
                            пользователей.
                        </li>
                    </ul>
                </section>

                {/* Ограничение ответственности */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">4. Ограничение ответственности</h2>
                    <p className="text-gray-700 text-sm sm:text-base mb-2">
                        Сервис не несет ответственность за любые убытки, возникшие в результате:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                        <li>Использования предоставленной информации;</li>
                        <li>Ошибок или недостоверной информации, предоставленной пользователем;</li>
                        <li>Форс-мажорных обстоятельств (стихийные бедствия, технические сбои и др.).</li>
                    </ul>
                </section>

                {/* Разрешение споров */}
                <section className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">5. Разрешение споров</h2>
                    <p className="text-gray-700 text-sm sm:text-base">
                        Все споры и разногласия решаются путем переговоров. При невозможности урегулирования — в
                        соответствии с законодательством Российской Федерации.
                    </p>
                </section>

                {/* Заключительные положения */}
                <section>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">6. Заключительные положения</h2>
                    <p className="text-gray-700 text-sm sm:text-base mb-2">
                        Использование сайта означает согласие с условиями настоящего соглашения. Пользователь имеет
                        право прекратить использование сайта в любое время.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base">
                        Все вопросы по Пользовательскому соглашению можно направлять на электронную почту: <a
                        href="mailto:info@flowauto.ru" className="underline">info@flowauto.ru</a>.
                    </p>
                </section>

            </div>
        </div>
    )
}
