import { Suspense } from 'react'
import CalculatorClient from './CalculatorClient'
import Head from "next/head";

export default function CalculatorPage() {
  return (
      <>
          <Head>
              <link rel="canonical" href="https://flowauto.ru/calculator" />
          </Head>

          <Suspense fallback={<div className="p-8 text-gray-500">Загрузка калькулятора…</div>}>
              <CalculatorClient />
          </Suspense>
      </>
  )
}
