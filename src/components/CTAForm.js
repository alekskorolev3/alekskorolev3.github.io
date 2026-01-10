import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import Head from "next/head";

export const CTAForm = ({ open, onOpenChange }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // JSON-LD структурированные данные для формы
    const formStructuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Форма заявки на подбор автомобиля из Беларуси",
        "description": "Оставьте заявку на консультацию по подбору и доставке автомобиля из Беларуси в Россию",
        "url": "https://flowauto.ru/contact",
        "mainEntity": {
            "@type": "WebPageElement",
            "name": "Форма обратной связи",
            "description": "Форма для связи с консультантом по подбору автомобилей",
            "potentialAction": {
                "@type": "ReserveAction",
                "name": "Оставить заявку",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://api.flowauto.ru/api/requests",
                    "httpMethod": "POST",
                    "contentType": "application/json"
                },
                "result": {
                    "@type": "Reservation",
                    "reservationStatus": "https://schema.org/ReservationConfirmed"
                }
            }
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "telephone": "+7 (XXX) XXX-XX-XX", // Замените на реальный номер
            "email": "info@flowauto.ru", // Замените на реальный email
            "areaServed": ["RU", "BY"],
            "availableLanguage": ["Russian"],
            "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "20:00"
            },
            "serviceArea": {
                "@type": "Place",
                "name": "Россия и Беларусь"
            }
        },
        "publisher": {
            "@type": "Organization",
            "name": "FlowAuto",
            "url": "https://flowauto.ru",
            "logo": "https://flowauto.ru/logo.png",
            "description": "Подбор автомобилей из Беларуси в Россию"
        }
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://api.flowauto.ru/api/requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, message }),
            });
            const data = await res.json();

            if (res.ok) {
                onOpenChange(false);
                setName('');
                setPhone('');
                setMessage('');
                toast.success('Заявка успешно отправлена!');
            } else {
                toast.error(data.error || 'Ошибка при отправке заявки');
            }
        } catch (err) {
            console.error(err);
            toast.error('Ошибка при отправке заявки');
        }
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(formStructuredData)
                    }}
                />
            </Head>

            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent
                    className="sm:max-w-[425px]"
                    itemScope
                    itemType="https://schema.org/ContactPage"
                >
                    <meta itemProp="name" content="Форма заявки на подбор автомобиля" />

                    <DialogHeader>
                        <DialogTitle
                            itemProp="headline"
                        >
                            Оставить заявку
                        </DialogTitle>
                        <DialogDescription
                            itemProp="description"
                        >
                            Заполните форму, и наш менеджер свяжется с вами для уточнения деталей.
                        </DialogDescription>
                    </DialogHeader>

                    <form
                        onSubmit={handleSubmitForm}
                        itemProp="mainEntity"
                        itemScope
                        itemType="https://schema.org/WebPageElement"
                    >
                        <div className="grid gap-4 py-4">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="name"
                                    itemProp="name"
                                >
                                    Имя *
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    className="text-base"
                                    placeholder="Ваше имя"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    itemProp="identifier"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="phone"
                                    itemProp="name"
                                >
                                    Телефон *
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="Ваш телефон"
                                    className="text-base"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    itemProp="contactPoint"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="message"
                                    itemProp="name"
                                >
                                    Сообщение
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Расскажите, какой автомобиль вас интересует..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    itemProp="text"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-[#ffd632] text-black hover:bg-[#e6c02d]"
                            itemProp="potentialAction"
                            itemScope
                            itemType="https://schema.org/ReserveAction"
                        >
                            <meta itemProp="name" content="Отправить заявку" />
                            <meta itemProp="actionStatus" content="https://schema.org/ActiveActionStatus" />
                            Отправить
                        </Button>
                    </form>

                    {/* Скрытая микроразметка для контактной информации */}
                    <div style={{ display: 'none' }}>
                        <div itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                            <meta itemProp="contactType" content="customer service" />
                            <meta itemProp="telephone" content="+7 (XXX) XXX-XX-XX" /> {/* Замените на реальный */}
                            <meta itemProp="email" content="info@flowauto.ru" /> {/* Замените на реальный */}
                            <meta itemProp="areaServed" content="RU" />
                            <meta itemProp="availableLanguage" content="Russian" />

                            <div itemProp="hoursAvailable" itemScope itemType="https://schema.org/OpeningHoursSpecification">
                                <meta itemProp="dayOfWeek" content="Monday, Tuesday, Wednesday, Thursday, Friday, Saturday" />
                                <meta itemProp="opens" content="09:00" />
                                <meta itemProp="closes" content="20:00" />
                            </div>
                        </div>

                        <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                            <meta itemProp="name" content="FlowAuto" />
                            <meta itemProp="url" content="https://flowauto.ru" />
                            <meta itemProp="description" content="Подбор автомобилей из Беларуси в Россию" />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
