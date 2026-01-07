'use client';

import ImageWithFallback from './figma/ImageWithFallback';
import Car360Viewer from "@/components/Car360Viewer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CTAForm } from "@/components/CTAForm";

export default function CarCard({ car }) {
  const [open, setOpen] = useState(false);
  const [view360, setView360] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = car.images ?? [];
  const hasPhotos = photos.length > 1;
  const has360 = Array.isArray(car.images360) && car.images360.length > 0;

  const nextPhoto = () => setPhotoIndex((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));

  useEffect(() => { if (view360) setPhotoIndex(0); }, [view360]);

  return (
      <>
        <div className="bg-white cursor-pointer relative rounded-xl border-2 border-gray-100 hover:border-[#ffd632] hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="absolute top-3 right-3 z-10 flex gap-2">
            <div className="bg-[#ffd632] text-black text-xs font-medium px-3 py-1 rounded-md border border-black/10">
              Выгода {parseInt(car.savings).toLocaleString('ru-RU')} ₽
            </div>
          </div>

          <div className="h-1.5 bg-[#ffd632]"/>

          <div className="relative overflow-hidden group">
            {view360 && has360 ? (
                <Car360Viewer images={car.images360}/>
            ) : (
                <>
                  <ImageWithFallback
                      src={photos[photoIndex]}
                      alt={`${car.brand}`}
                      className="w-full aspect-[1.55/1] object-cover transition-transform duration-500"
                  />

                  {hasPhotos && (
                      <>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                        <button type="button" onClick={prevPhoto} className="absolute left-0 top-0 h-full w-1/5 flex items-center justify-start px-3 text-white text-3xl opacity-0 hover:opacity-100 transition-opacity cursor-pointer">‹</button>
                        <button type="button" onClick={nextPhoto} className="absolute right-0 top-0 h-full w-1/5 flex items-center justify-end px-3 text-white text-3xl opacity-0 hover:opacity-100 transition-opacity cursor-pointer">›</button>
                      </>
                  )}
                </>
            )}

            {has360 && (
                <button type="button" onClick={() => setView360((prev) => !prev)} className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {view360 ? 'Вкл. Фото' : 'Вкл. 360°'}
                </button>
            )}
          </div>

          <div className="p-6">
            <h3 className="text-center mb-3 text-base font-medium">{car.brand} {car.year}</h3>

            <div className="mb-4 flex justify-center gap-4 text-sm text-gray-600">
              <span>{car.engine} л.</span>
              <span>{car.power} л.с.</span>
              <span>{car.mileage} тыс. км</span>
            </div>

            <div className="mb-5 bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Цена в РБ:</span>
                <span className="font-medium">от {parseInt(car.priceBy).toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-gray-600">Цена в РФ:</span>
                <span className="font-medium">от {parseInt(car.priceRu).toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>

            <div className="space-y-3">
              <Link href={`/calculator?price=${car.priceBy}&year=${car.year}&engine=${parseInt(car.engine)*1000}&horsepower=${car.power}`} className="w-full bg-[#ffd632] text-black py-3 rounded-lg hover:bg-[#e6c02d] transition-colors text-sm font-medium flex items-center justify-center">
                Рассчитать стоимость
              </Link>

              <Button onClick={() => setOpen(true)} className="w-full bg-white cursor-pointer border-2 border-black text-black py-5 rounded-lg hover:bg-black hover:text-white transition-colors text-sm font-medium flex items-center justify-center">
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>

        <CTAForm open={open} onOpenChange={setOpen} />
      </>
  );
}
