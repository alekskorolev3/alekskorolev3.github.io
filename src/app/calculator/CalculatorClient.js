'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { NumericFormat } from 'react-number-format';
import CalcTable, {commercialData, personalData} from "@/components/CalcTable";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info, FileText } from "lucide-react"

export default function CalculatorPage() {
    const [carPrice, setCarPrice] = useState('');
    const [carYear, setCarYear] = useState('');
    const [engineVolume, setEngineVolume] = useState('');
    const [horsepower, setHorsepower] = useState('');
    const [overYearInBelarus, setOverYearInBelarus] = useState(true);
    const [isEV, setIsEV] = useState(false);
    const [result, setResult] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const parseHpRange = (hpString) => {
        if (hpString.includes('более')) {
            const min = Number(hpString.match(/\d+/)?.[0] ?? 0);
            return [min, Infinity];
        }

        return hpString.split('-').map(Number);
    };

    const getFeeByAge = (car, age) => {
        return age <= 3
            ? car['С 1 января 2026 года 0-3 лет']
            : car['С 1 января 2026 года 3-5 лет'];
    };

    const getCategoryByEngine = (engine, isEV) => {
        if (isEV) return 'EV и последовательные гибриды';
        if (engine >= 0 && engine <= 1000) return 'Объем 0 - 1.0';
        if (engine > 1000 && engine <= 2000) return 'Объем 1.0 - 2.0';
        if (engine > 2000 && engine <= 3000) return 'Объем 2.0 - 3.0';
        if (engine > 3000 && engine <= 3500) return 'Объем 3.0 - 3.5';
        if (engine > 3500) return 'Объем свыше 3.5';
        return null;
    };

     const getCarData = (engine, hp, age, isEV, overYearInBelarus) => {

        const data = overYearInBelarus ? personalData : commercialData
        const category = getCategoryByEngine(engine, isEV);
        if (!category || !data[category]) return null;

        for (const car of data[category]) {
            const [minHp, maxHp] = parseHpRange(car['ЛС']);

            if (hp >= minHp && hp <= maxHp) {
                console.log(getFeeByAge(car, age))
                return getFeeByAge(car, age);
            }
        }

        return null;
    };


    const calculateCost = useCallback(() => {
        const price = parseFloat(carPrice) || 0;
        const hp = parseFloat(horsepower) || 0;
        const engine = parseFloat(engineVolume) || 0;
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - parseInt(carYear);


        const recyclingFee = getCarData(engine, hp, carAge, isEV, overYearInBelarus)?.replaceAll(' ', '');


        const serviceCost = 30000;
        const totalCost = parseInt(price) + parseInt(recyclingFee) + serviceCost;
        setResult({
            totalCost,
            recyclingFee,
            serviceCost,
            price
        });

    }, [carPrice, horsepower, engineVolume, carYear, overYearInBelarus, isEV]);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://api.flowauto.ru/api/requests', {
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

    useEffect(() => {
        calculateCost()
    }, [carPrice, horsepower, engineVolume, carYear, overYearInBelarus, isEV])

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-white py-20 overflow-hidden border-b border-gray-200">
                <div
                    className="absolute top-0 right-0 w-96 h-96 bg-[#ffd632] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
                <div
                    className="absolute bottom-0 left-0 w-72 h-72 bg-black rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"></div>
                <div className="container flex row gap-6 mx-auto px-4 relative z-10 max-w-4xl">
                    <img
                        className="max-h-[110px]"
                        src="/calculator.webp" alt="Калькулятор утилизационного сбора"/>
                    <div className="max-w-3xl">
                        <h1 className="mb-6 text-[rgb(60,60,60)] text-[20px] font-bold">
                            Калькулятор стоимости автомобиля
                        </h1>
                        <p className="text-xl text-gray-600">
                            Рассчитайте примерную стоимость подбора вашего автомобиля из Беларуси в Россию с учетом
                            утильсбора.
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
                                <NumericFormat
                                    id="carPrice"
                                    value={carPrice}
                                    onValueChange={(values) => setCarPrice(values.value)} // Получаем отформатированное значение
                                    thousandSeparator=" " // Используем пробел в качестве разделителя тысяч
                                    prefix="" // Можно добавить символ валюты, например, "₽"
                                    customInput={Input} // Используем компонент Input от Shadcn
                                    placeholder="Например: 1 500 000"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="carYear">Год автомобиля</Label>
                                <Input
                                    id="carYear"
                                    type="number"
                                    placeholder="Например: 2020"
                                    value={carYear}
                                    max={2026}
                                    min={1980}
                                    onChange={(e) => setCarYear(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="engineVolume">Объем двигателя (см³)</Label>
                                <Input
                                    id="engineVolume"
                                    type="number"
                                    placeholder="Например: 2000"
                                    value={engineVolume}
                                    min={0}
                                    max={10000}
                                    onChange={(e) => setEngineVolume(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="horsepower">Количество л.с.</Label>
                                <Input
                                    id="horsepower"
                                    type="number"
                                    placeholder="Например: 150"
                                    min={0}
                                    max={5000}
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

                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Info className="h-4 w-4 text-muted-foreground cursor-pointer"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="max-w-xs text-sm">
                                                Автомобиль находился на территории Республики Беларусь более 1 года
                                                до ввоза в РФ
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="isEV"
                                    checked={isEV}
                                    onCheckedChange={(checked) => setIsEV(checked === true)}
                                />
                                <Label htmlFor="isEV" className="cursor-pointer">
                                    Электромобиль или последовательный гибрид
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
                                            от {result.totalCost.toLocaleString('ru-RU')} ₽
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-black">Что входит в стоимость:</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>Стоимость автомобиля в РБ
                                                <span>&nbsp;({parseInt(result.price).toLocaleString('ru-RU')} ₽)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>Утилизационный сбор
                                                <span>&nbsp;({parseInt(result.recyclingFee).toLocaleString('ru-RU')} ₽)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>Стоимость услуг по подбору
                                                <span>&nbsp;(30 000 ₽)</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                        <p className="text-gray-700">
                                            Это предварительный расчет. Для получения точной стоимости свяжитесь с нашим
                                            менеджером.
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

            <CalcTable/>
        </div>
    );
}
