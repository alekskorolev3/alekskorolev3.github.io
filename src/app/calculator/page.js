import { Suspense } from 'react'
import CalculatorClient from './CalculatorClient'

export default function CalculatorPage() {
  return (
      <Suspense fallback={<div className="p-8 text-gray-500">Загрузка калькулятора…</div>}>
        <CalculatorClient />
      </Suspense>
  )
}
