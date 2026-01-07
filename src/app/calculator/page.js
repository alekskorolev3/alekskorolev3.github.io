import { Suspense } from 'react'
import CalculatorClient from './CalculatorClient'

export const metadata = {
    title: "Flow Auto | Калькулятор",
    description: "Подберите автомобиль из Беларуси с помощью калькулятора",
    alternates: {
        canonical: '/calculator'
    }
};

export default function CalculatorPage() {
  return (
      <Suspense fallback={<div className="p-8 text-gray-500">Загрузка калькулятора…</div>}>
          <CalculatorClient />
      </Suspense>
  )
}
