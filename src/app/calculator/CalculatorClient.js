'use client';

import {useCallback, useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Checkbox} from '@/components/ui/checkbox';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {toast} from 'sonner';
import {NumericFormat} from 'react-number-format';
import CalcTable, {commercialData, personalData} from "@/components/CalcTable";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import {Info} from "lucide-react"
import {useIsMobile} from "@/hooks/useIsMobile";
import {cn} from "@/lib/utils";
import {CTAForm} from "@/components/CTAForm";

export default function CalculatorPage() {
    const [carPrice, setCarPrice] = useState('');
    const [carYear, setCarYear] = useState('');
    const [engineVolume, setEngineVolume] = useState('');
    const [horsepower, setHorsepower] = useState('');
    const [overYearInBelarus, setOverYearInBelarus] = useState(true);
    const [isEV, setIsEV] = useState(false);
    const [result, setResult] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [tooltipOpen, setTooltipOpen] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false);
    const isMobile = useIsMobile();
    const [mobileView, setMobileView] = useState('form');


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

    const isFormValid =
        carPrice &&
        carYear &&
        horsepower &&
        (isEV || engineVolume);

    return (
        <div>
            <section className="relative bg-white py-12 md:py-20 overflow-hidden border-b border-gray-200">
                {/* декор */}
                <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-[#ffd632] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"/>
                <div className="absolute bottom-0 left-0 w-56 h-56 md:w-72 md:h-72 bg-black rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"/>

                <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* картинка */}
                        <img
                            className="w-20 md:w-auto md:max-h-[110px]"
                            src="/calculator.webp"
                            alt="Калькулятор утилизационного сбора"
                        />

                        {/* текст */}
                        <div className="text-center md:text-left">
                            <h1 className="mb-4 text-[18px] md:text-[20px] font-bold text-[rgb(60,60,60)]">
                                Калькулятор стоимости автомобиля
                            </h1>

                            <p className="text-base md:text-xl text-gray-600">
                                Рассчитайте примерную стоимость подбора вашего автомобиля из Беларуси в Россию
                                с учетом утильсбора.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mx-auto px-4 py-4 md:py-12">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {isMobile ? (
                        <div className="relative perspective-1000 min-h-[625px]" style={{perspective: '1000px'}}>
                            <div
                                className="relative transition-transform duration-500"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: mobileView === 'result' ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                }}
                            >
                                <div className="absolute inset-0"
                                     style={{
                                         backfaceVisibility: 'hidden',
                                         transform: 'rotateY(0deg)',
                                     }}>
                                    <Card className="flex flex-col">
                                        <CardHeader className="px-4 md:px-6">
                                            <CardTitle className="text-base md:text-lg">
                                                Данные автомобиля
                                            </CardTitle>
                                            <CardDescription className="text-sm md:text-base">
                                                Заполните информацию для расчета стоимости
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent
                                            className="flex flex-col flex-1 space-y-5 md:space-y-6 px-4 md:px-6">
                                            {/* цена */}
                                            <div className="space-y-2">
                                                <Label htmlFor="carPrice" className="text-sm md:text-base">
                                                    Стоимость авто в РБ (₽)
                                                </Label>
                                                <NumericFormat
                                                    id="carPrice"
                                                    value={carPrice}
                                                    onValueChange={(values) => setCarPrice(values.value)}
                                                    thousandSeparator=" "
                                                    customInput={Input}
                                                    placeholder="Например: 1 500 000"
                                                    className="text-base"
                                                    required
                                                />
                                            </div>

                                            {/* год */}
                                            <div className="space-y-2">
                                                <Label htmlFor="carYear" className="text-sm md:text-base">
                                                    Год автомобиля
                                                </Label>
                                                <Input
                                                    id="carYear"
                                                    type="number"
                                                    placeholder="Например: 2020"
                                                    value={carYear}
                                                    max={2026}
                                                    min={1980}
                                                    onChange={(e) => setCarYear(e.target.value)}
                                                    className="text-base"
                                                    required
                                                />
                                            </div>

                                            {/* объем */}
                                            <div className="space-y-2">
                                                <Label htmlFor="engineVolume" className="text-sm md:text-base">
                                                    Объем двигателя (см³)
                                                </Label>
                                                <Input
                                                    id="engineVolume"
                                                    type="number"
                                                    placeholder="Например: 2000"
                                                    value={engineVolume}
                                                    min={0}
                                                    max={10000}
                                                    disabled={isEV}
                                                    onChange={(e) => setEngineVolume(isEV ? 0 : e.target.value)}
                                                    className="text-base"
                                                />
                                            </div>

                                            {/* л.с. */}
                                            <div className="space-y-2">
                                                <Label htmlFor="horsepower" className="text-sm md:text-base">
                                                    Количество л.с.
                                                </Label>
                                                <Input
                                                    id="horsepower"
                                                    type="number"
                                                    placeholder="Например: 150"
                                                    min={0}
                                                    max={5000}
                                                    value={horsepower}
                                                    onChange={(e) => setHorsepower(e.target.value)}
                                                    className="text-base"
                                                />
                                            </div>

                                            <div className="flex gap-2 items-center">
                                                <Checkbox
                                                    id="overYear"
                                                    checked={overYearInBelarus}
                                                    onCheckedChange={(checked) => setOverYearInBelarus(checked === true)}
                                                    className="mt-0.5 h-5 w-5 md:h-4 md:w-4"
                                                />

                                                <Label
                                                    htmlFor="overYear"
                                                    className="cursor-pointer text-sm md:text-base leading-snug"
                                                >
                                                    Больше года в РБ
                                                </Label>

                                                <TooltipProvider delayDuration={0}>
                                                    <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
                                                        <TooltipTrigger asChild>
                                                            <button
                                                                type="button"
                                                                onClick={() => setTooltipOpen((v) => !v)}
                                                                className="mt-0.5 shrink-0"
                                                            >
                                                                <Info className="h-4 w-4 text-muted-foreground"/>
                                                            </button>
                                                        </TooltipTrigger>

                                                        <TooltipContent className="max-w-xs">
                                                            <p className="text-sm">
                                                                Автомобиль находился на территории Республики Беларусь
                                                                более 1 года
                                                                до ввоза в РФ
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </div>


                                            <div className="flex items-start gap-2">
                                                <Checkbox
                                                    id="isEV"
                                                    checked={isEV}
                                                    onCheckedChange={(checked) => setIsEV(checked === true)}
                                                    className="mt-1 h-5 w-5 md:h-4 md:w-4"
                                                />
                                                <Label
                                                    htmlFor="isEV"
                                                    className="cursor-pointer text-sm md:text-base leading-snug"
                                                >
                                                    Электромобиль или последовательный гибрид
                                                </Label>
                                            </div>

                                            <Button
                                                disabled={!isFormValid}
                                                onClick={() => {
                                                    setIsSubmitted(true);
                                                    if (!isFormValid) return;

                                                    calculateCost();
                                                    if (isMobile) {
                                                        setMobileView('result');
                                                    }
                                                }}
                                                className="w-full bg-[#ffd632] text-black hover:bg-[#e6c02d] mt-auto"
                                            >
                                                Рассчитать стоимость
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="absolute inset-0"
                                     style={{
                                         backfaceVisibility: 'hidden',
                                         transform: 'rotateY(180deg)',
                                     }}>
                                    <Card className="flex flex-col">
                                        <CardHeader className="px-4 md:px-6">
                                            <CardTitle className="text-base md:text-lg">
                                                Результат расчета
                                            </CardTitle>
                                            <CardDescription className="text-sm md:text-base">
                                                Примерная стоимость подбора автомобиля
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="flex flex-col flex-1 px-4 md:px-6">
                                            {result !== null ? (
                                                <div className="flex flex-col flex-1 space-y-5 md:space-y-6">
                                                    {/* итог */}
                                                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                                                        <p className="text-sm md:text-base text-gray-700 mb-1">
                                                            Итоговая стоимость под ключ:
                                                        </p>
                                                        <p className="text-lg md:text-xl font-semibold text-black">
                                                            от {result.totalCost.toLocaleString('ru-RU')} ₽
                                                        </p>
                                                    </div>

                                                    {/* состав стоимости */}
                                                    <div className="space-y-3">
                                                        <h3 className="text-sm md:text-base font-medium text-black">
                                                            Что входит в стоимость:
                                                        </h3>

                                                        <ul className="space-y-2 text-sm md:text-base text-gray-700">
                                                            <li className="flex items-start">
                                                                <span className="mr-2">•</span>
                                                                <span>
                Стоимость автомобиля в РБ (
                                                                    {parseInt(result.price).toLocaleString('ru-RU')} ₽)
              </span>
                                                            </li>

                                                            <li className="flex items-start">
                                                                <span className="mr-2">•</span>
                                                                <span>
                Утилизационный сбор (
                                                                    {parseInt(result.recyclingFee).toLocaleString('ru-RU')} ₽)
              </span>
                                                            </li>

                                                            <li className="flex items-start">
                                                                <span className="mr-2">•</span>
                                                                <span>Стоимость услуг по подбору (30 000 ₽)</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    {/* предупреждение */}
                                                    <div
                                                        className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                                        <p className="text-sm md:text-base text-gray-700">
                                                            Это предварительный расчет. Для получения точной стоимости
                                                            свяжитесь
                                                            с нашим менеджером.
                                                        </p>
                                                    </div>

                                                    {isMobile && (
                                                        <Button
                                                            variant="outline"
                                                            onClick={() => setMobileView('form')}
                                                            className="w-full mt-2"
                                                        >
                                                            ← Изменить данные
                                                        </Button>
                                                    )}

                                                    {/* кнопка */}
                                                    <Button
                                                        onClick={() => setIsDialogOpen(true)}
                                                        className="w-full bg-[#ffd632] text-black hover:bg-[#e6c02d] mt-auto text-sm md:text-base"
                                                    >
                                                        Получить расчет
                                                    </Button>
                                                </div>
                                            ) : (
                                                <div
                                                    className="text-center py-10 md:py-12 text-gray-500 text-sm md:text-base">
                                                    <p>
                                                        Заполните данные автомобиля и нажмите кнопку
                                                        <br className="md:hidden"/>
                                                        «Рассчитать стоимость»
                                                    </p>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Card className="flex flex-col">
                                <CardHeader className="px-4 md:px-6">
                                    <CardTitle className="text-base md:text-lg">
                                        Данные автомобиля
                                    </CardTitle>
                                    <CardDescription className="text-sm md:text-base">
                                        Заполните информацию для расчета стоимости
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex flex-col flex-1 space-y-5 md:space-y-6 px-4 md:px-6">
                                    {/* цена */}
                                    <div className="space-y-2">
                                        <Label htmlFor="carPrice" className="text-sm md:text-base">
                                            Стоимость авто в РБ (₽)
                                        </Label>
                                        <NumericFormat
                                            id="carPrice"
                                            value={carPrice}
                                            onValueChange={(values) => setCarPrice(values.value)}
                                            thousandSeparator=" "
                                            customInput={Input}
                                            placeholder="Например: 1 500 000"
                                            className={cn(
                                                "text-base",
                                                isSubmitted && !carPrice && "border-red-500 focus-visible:ring-red-500"
                                            )}
                                        />
                                    </div>

                                    {/* год */}
                                    <div className="space-y-2">
                                        <Label htmlFor="carYear" className="text-sm md:text-base">
                                            Год автомобиля
                                        </Label>
                                        <Input
                                            id="carYear"
                                            type="number"
                                            placeholder="Например: 2020"
                                            value={carYear}
                                            max={2026}
                                            min={1980}
                                            onChange={(e) => setCarYear(e.target.value)}
                                            className={cn(
                                                "text-base",
                                                isSubmitted && !carYear && "border-red-500 focus-visible:ring-red-500"
                                            )}
                                        />
                                    </div>

                                    {/* объем */}
                                    <div className="space-y-2">
                                        <Label htmlFor="engineVolume" className="text-sm md:text-base">
                                            Объем двигателя (см³)
                                        </Label>
                                        <Input
                                            id="engineVolume"
                                            type="number"
                                            placeholder="Например: 2000"
                                            value={engineVolume}
                                            min={0}
                                            max={10000}
                                            onChange={(e) => setEngineVolume(isEV ? 0 : e.target.value)}
                                            className={cn(
                                                "text-base",
                                                isSubmitted && !engineVolume && "border-red-500 focus-visible:ring-red-500"
                                            )}
                                            disabled={isEV}
                                        />
                                    </div>

                                    {/* л.с. */}
                                    <div className="space-y-2">
                                        <Label htmlFor="horsepower" className="text-sm md:text-base">
                                            Количество л.с.
                                        </Label>
                                        <Input
                                            id="horsepower"
                                            type="number"
                                            placeholder="Например: 150"
                                            min={0}
                                            max={5000}
                                            value={horsepower}
                                            onChange={(e) => setHorsepower(e.target.value)}
                                            className={cn(
                                                "text-base",
                                                isSubmitted && !horsepower && "border-red-500 focus-visible:ring-red-500"
                                            )}
                                        />
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <Checkbox
                                            id="overYear"
                                            checked={overYearInBelarus}
                                            onCheckedChange={(checked) => setOverYearInBelarus(checked === true)}
                                            className="mt-0.5 h-5 w-5 md:h-4 md:w-4"
                                        />

                                        <Label
                                            htmlFor="overYear"
                                            className="cursor-pointer text-sm md:text-base leading-snug"
                                        >
                                            Больше года в РБ
                                        </Label>

                                        <TooltipProvider delayDuration={0}>
                                            <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
                                                <TooltipTrigger asChild>
                                                    <button
                                                        type="button"
                                                        onClick={() => setTooltipOpen((v) => !v)}
                                                        className="mt-0.5 shrink-0"
                                                    >
                                                        <Info className="h-4 w-4 text-muted-foreground"/>
                                                    </button>
                                                </TooltipTrigger>

                                                <TooltipContent className="max-w-xs">
                                                    <p className="text-sm">
                                                        Автомобиль находился на территории Республики Беларусь более 1
                                                        года
                                                        до ввоза в РФ
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>


                                    <div className="flex items-start gap-2">
                                        <Checkbox
                                            id="isEV"
                                            checked={isEV}
                                            onCheckedChange={(checked) => setIsEV(checked === true)}
                                            className="mt-1 h-5 w-5 md:h-4 md:w-4"
                                        />
                                        <Label
                                            htmlFor="isEV"
                                            className="cursor-pointer text-sm md:text-base leading-snug"
                                        >
                                            Электромобиль или последовательный гибрид
                                        </Label>
                                    </div>

                                    <Button
                                        disabled={!isFormValid}
                                        onClick={() => {
                                            setIsSubmitted(true);
                                            if (!isFormValid) return;

                                            calculateCost();
                                            if (isMobile) {
                                                setMobileView('result');
                                            }
                                        }}
                                        className="w-full bg-[#ffd632] text-black hover:bg-[#e6c02d] mt-auto"
                                    >
                                        Рассчитать стоимость
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card className="flex flex-col">
                                <CardHeader className="px-4 md:px-6">
                                    <CardTitle className="text-base md:text-lg">
                                        Результат расчета
                                    </CardTitle>
                                    <CardDescription className="text-sm md:text-base">
                                        Примерная стоимость подбора автомобиля
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex flex-col flex-1 px-4 md:px-6">
                                    {result !== null ? (
                                        <div className="flex flex-col flex-1 space-y-5 md:space-y-6">
                                            {/* итог */}
                                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                                <p className="text-sm md:text-base text-gray-700 mb-1">
                                                    Итоговая стоимость под ключ:
                                                </p>
                                                <p className="text-lg md:text-xl font-semibold text-black">
                                                    от {result.totalCost.toLocaleString('ru-RU')} ₽
                                                </p>
                                            </div>

                                            {/* состав стоимости */}
                                            <div className="space-y-3">
                                                <h3 className="text-sm md:text-base font-medium text-black">
                                                    Что входит в стоимость:
                                                </h3>

                                                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                                                    <li className="flex items-start">
                                                        <span className="mr-2">•</span>
                                                        <span>
                Стоимость автомобиля в РБ (
                                                            {parseInt(result.price).toLocaleString('ru-RU')} ₽)
              </span>
                                                    </li>

                                                    <li className="flex items-start">
                                                        <span className="mr-2">•</span>
                                                        <span>
                Утилизационный сбор (
                                                            {parseInt(result.recyclingFee).toLocaleString('ru-RU')} ₽)
              </span>
                                                    </li>

                                                    <li className="flex items-start">
                                                        <span className="mr-2">•</span>
                                                        <span>Стоимость услуг по подбору (30 000 ₽)</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* предупреждение */}
                                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                                <p className="text-sm md:text-base text-gray-700">
                                                    Это предварительный расчет. Для получения точной стоимости свяжитесь
                                                    с нашим менеджером.
                                                </p>
                                            </div>

                                            {/* кнопка */}
                                            <Button
                                                onClick={() => setIsDialogOpen(true)}
                                                className="w-full bg-[#ffd632] text-black hover:bg-[#e6c02d] mt-auto text-base md:text-sm"
                                            >
                                                Получить полный расчет
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="text-center py-10 md:py-12 text-gray-500 text-sm md:text-base">
                                            <p>
                                                Заполните данные автомобиля и нажмите кнопку&nbsp;
                                                <br className="md:hidden"/>
                                                «Рассчитать стоимость»
                                            </p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </>
                    )}
                </div>
            </div>
            <CalcTable/>
            <CTAForm open={isDialogOpen} onOpenChange={setIsDialogOpen} />
        </div>
    );
}
