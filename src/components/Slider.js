'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Slider({
                                   items,
                                   renderItem,
                                   breakpoints = { mobile: 1, tablet: 2, desktop: 3 },
                               }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(breakpoints.mobile);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(breakpoints.tablet);
            } else {
                setSlidesPerView(breakpoints.desktop);
            }
        };

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [breakpoints]);

    const maxSlide = Math.max(0, items.length - slidesPerView);

    const next = () =>
        setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));

    const prev = () =>
        setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));

    if (items.length === 0) return null;

    return (
        <div className="relative">
            {items.length > slidesPerView && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-1 top-1/2 -translate-y-1/2 z-10
                                   w-10 h-10 bg-[#ffd632] rounded-full flex items-center justify-center
                                   hover:bg-[#e6c02d] shadow-lg"
                    >
                        <ChevronLeft className="w-5 h-5 text-black" />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-1 top-1/2 -translate-y-1/2 z-10
                                   w-10 h-10 bg-[#ffd632] rounded-full flex items-center justify-center
                                   hover:bg-[#e6c02d] shadow-lg"
                    >
                        <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                </>
            )}

            {/* track */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform:
                            slidesPerView === 1
                                ? `translateX(-${currentSlide * 100}%)`
                                : `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
                    }}
                >
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 px-2 sm:px-4"
                            style={{
                                width:
                                    slidesPerView === 1
                                        ? '100%'
                                        : `${100 / slidesPerView}%`,
                            }}
                        >
                            {renderItem(item)}
                        </div>
                    ))}
                </div>
            </div>

            {/* dots */}
            {items.length > slidesPerView && (
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`h-3 rounded-full transition-all ${
                                currentSlide === i
                                    ? 'bg-[#ffd632] w-8'
                                    : 'bg-gray-300 w-3'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
