'use client'

import ImageWithFallback from './figma/ImageWithFallback';
import { car360Sets } from "@/const/cars";
import Car360Viewer from "@/components/Car360Viewer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CTAForm } from "@/components/CTAForm";

export default function CarCard({ car }) {
  const [open, setOpen] = useState(false);
  const [view360, setView360] = useState(false); // true = 360, false = обычная фото

  const has360 = car360Sets[car.brand] && car360Sets[car.brand].length > 0;

  return (
      <>
        <div
            className="
          bg-white
          cursor-pointer
          relative
          rounded-xl
          border-2 border-gray-100
          hover:border-[#ffd632]
          hover:shadow-lg
          transition-all duration-300
          overflow-hidden
        "
        >
          <div className="absolute top-3 right-3 z-10 flex gap-2">
            <div
                className="
              bg-[#ffd632]
              text-black
              text-xs
              font-medium
              px-3 py-1
              rounded-md
              border border-black/10
            "
            >
              Выгода ${car.savings}
            </div>
          </div>

          {/* Верхняя полоса */}
          <div className="h-1.5 bg-[#ffd632]"/>

          {/* Изображение */}
          <div className="relative overflow-hidden">
            {view360 && has360 ? (
                <Car360Viewer images={car360Sets[car.brand]} />
            ) : (
                <ImageWithFallback
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full aspect-[1.55/1] object-cover transition-transform duration-500"
                />
            )}

            {has360 && (
                <button
                    onClick={() => setView360(!view360)}
                    className="cursor-pointer absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded"
                >
                  {view360 ? 'Вкл. Фото' : 'Вкл. 360°'}
                </button>
            )}
          </div>

          <div className="p-6">
            {/* Название */}
            <h3 className="text-center mb-3 text-base font-medium">
              {car.brand} {car.model}
            </h3>

            {/* Характеристики */}
            <div className="mb-4 flex justify-center gap-4 text-sm text-gray-600">
              <span>{car.year} г.</span>
              <span>{car.power} л.с.</span>
              <span>{car.mileage} тыс. км</span>
            </div>

            {/* Цены */}
            <div className="mb-5 bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Цена в РБ:</span>
                <span className="font-medium">${car.priceBy}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-gray-600">Цена в РФ:</span>
                <span className="font-medium">${car.priceRu}</span>
              </div>
            </div>

            {/* Кнопки */}
            <div className="space-y-3">
              <Link
                  href={`/calculator?brand=${encodeURIComponent(`${car.brand} ${car.model}`)}&price=${car.priceBy}`}
                  className="
                w-full
                bg-[#ffd632]
                text-black
                py-3
                rounded-lg
                hover:bg-[#e6c02d]
                transition-colors
                text-sm font-medium
                flex items-center justify-center
              "
              >
                Рассчитать стоимость
              </Link>

              <Button
                  onClick={() => setOpen(true)}
                  className="
                w-full
                bg-white
                cursor-pointer
                border-2 border-black
                text-black
                py-5
                rounded-lg
                hover:bg-black
                hover:text-white
                transition-colors
                text-sm font-medium
                flex items-center justify-center
              "
              >
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>

        <CTAForm open={open} onOpenChange={setOpen} />
      </>
  );
}
