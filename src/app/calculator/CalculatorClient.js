'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function CalculatorPage() {
    const searchParams = useSearchParams();

    // --- State ---
    const [carPrice, setCarPrice] = useState('');
    const [carYear, setCarYear] = useState('');
    const [engineVolume, setEngineVolume] = useState('');
    const [horsepower, setHorsepower] = useState('');
    const [overYearInBelarus, setOverYearInBelarus] = useState(false);
    const [result, setResult] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // --- Load cached values from localStorage or URL params ---
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlPrice = searchParams.get('price');
            const urlYear = searchParams.get('year');
            const urlEngine = searchParams.get('engine');
            const urlPower = searchParams.get('power');

            setCarPrice(urlPrice || localStorage.getItem('calc_carPrice') || '');
            setCarYear(urlYear || localStorage.getItem('calc_carYear') || '');
            setEngineVolume(urlEngine || localStorage.getItem('calc_engineVolume') || '');
            setHorsepower(urlPower || localStorage.getItem('calc_horsepower') || '');
            setOverYearInBelarus(localStorage.getItem('calc_overYear') === 'true');
        }
    }, [searchParams]);

    // --- Cache to localStorage ---
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('calc_carPrice', carPrice);
            localStorage.setItem('calc_carYear', carYear);
            localStorage.setItem('calc_engineVolume', engineVolume);
            localStorage.setItem('calc_horsepower', horsepower);
            localStorage.setItem('calc_overYear', overYearInBelarus.toString());
        }
    }, [carPrice, carYear, engineVolume, horsepower, overYearInBelarus]);

    // --- Calculation function ---
    const calculateCost = useCallback(() => {
        const price = parseFloat(carPrice) || 0;
        const hp = parseFloat(horsepower) || 0;
        const customsDuty = overYearInBelarus ? 0 : 50000;
        const recyclingFee = hp < 160 ? 5400 : 100000;
        const serviceCost = 30000;
        const totalCost = price + customsDuty + recyclingFee + serviceCost;
        setResult(totalCost);
    }, [carPrice, horsepower, overYearInBelarus]);

    // --- Auto-calculate if URL params present ---
    useEffect(() => {
        if (carPrice && horsepower) {
            calculateCost();
        }
    }, [carPrice, horsepower, calculateCost]);

    // --- Form submission ---
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://api.flowauto.ru/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, email, message }),
            });
            const data = await res.json();

            if (res.ok) {
                setIsDialogOpen(false);
                setName('');
                setPhone('');
                setEmail('');
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
        <div>
            {/* Hero Section */}
            <section className="relative bg-white py-20 overflow-hidden border-b border-gray-200">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd632] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-black rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="mb-6 text-[rgb(60,60,60)] text-[20px] font-bold">
                            Калькулятор стоимости подбора
                        </h1>
                        <p className="text-xl text-gray-600">
                            Рассчитайте примерную стоимость подбора вашего автомобиля из Беларуси в Россию с учетом всех расходов.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Car Data Card */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Данные автомобиля</CardTitle>
                            <CardDescription>Заполните информацию для расчета стоимости</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-1 space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="carPrice">Стоимость авто в РБ (₽)</Label>
                                <Input
                                    id="carPrice"
                                    type="number"
                                    placeholder="Например: 1500000"
                                    value={carPrice}
                                    onChange={(e) => setCarPrice(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="carYear">Год автомобиля</Label>
                                <Input
                                    id="carYear"
                                    type="number"
                                    placeholder="Например: 2020"
                                    value={carYear}
                                    onChange={(e) => setCarYear(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="engineVolume">Объем двигателя (л)</Label>
                                <Input
                                    id="engineVolume"
                                    type="number"
                                    step="0.1"
                                    placeholder="Например: 2.0"
                                    value={engineVolume}
                                    onChange={(e) => setEngineVolume(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="horsepower">Количество л.с.</Label>
                                <Input
                                    id="horsepower"
                                    type="number"
                                    placeholder="Например: 150"
                                    value={horsepower}
                                    onChange={(e) => setHorsepower(e.target.value)}
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="overYear"
                                    checked={overYearInBelarus}
                                    onCheckedChange={(checked) => setOverYearInBelarus(checked === true)}
                                />
                                <Label htmlFor="overYear" className="cursor-pointer">
                                    Больше года в РБ
                                </Label>
                            </div>

                            <Button
                                onClick={calculateCost}
                                className="w-full bg-[#ffd632] text-black hover:bg-[#e6c02d] mt-auto"
                            >
                                Рассчитать стоимость
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Result Card */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Результат расчета</CardTitle>
                            <CardDescription>Примерная стоимость подбора автомобиля</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-1">
                            {result !== null ? (
                                <div className="flex flex-col flex-1 space-y-6">
                                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                                        <p className="text-gray-700 mb-1">Итоговая стоимость под ключ:</p>
                                        <p className="text-black">
                                            от {result.toLocaleString('ru-RU')} ₽
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-black">Что входит в стоимость:</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>Стоимость автомобиля в РБ
                                            </li>
                                            {!overYearInBelarus && (
                                                <li className="flex items-start">
                                                    <span className="mr-2">•</span>Таможенная пошлина
                                                </li>
                                            )}
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>Утилизационный сбор ({parseFloat(horsepower) < 160 ? '5 400' : '100 000'} ₽)
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>Стоимость услуг по подбору
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                        <p className="text-gray-700">
                                            Это предварительный расчет. Для получения точной стоимости свяжитесь с нашим менеджером.
                                        </p>
                                    </div>

                                    <Button
                                        onClick={() => setIsDialogOpen(true)}
                                        className="w-full bg-[#ffd632] text-black hover:bg-[#e6c02d] mt-auto"
                                    >
                                        Получить расчет
                                    </Button>
                                </div>
                            ) : (
                                <div className="text-center py-12 text-gray-500">
                                    <p>Заполните данные автомобиля и нажмите кнопку Рассчитать стоимость</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Dialog Form */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Оставить заявку</DialogTitle>
                            <DialogDescription>
                                Заполните форму, и наш менеджер свяжется с вами для уточнения деталей.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmitForm}>
                            <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Имя *</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Ваше имя"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Телефон *</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="Ваш телефон"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="example@mail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Сообщение</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Расскажите, какой автомобиль вас интересует..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                            </div>
                            <Button type="submit" className="w-full bg-[#ffd632] text-black hover:bg-[#e6c02d]">
                                Отправить
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
