'use client';

import { useEffect, useRef, useState } from 'react';

export default function Car360Viewer({ images }) {
    const containerRef = useRef(null);
    const [frame, setFrame] = useState(0);
    const [loadedCount, setLoadedCount] = useState(0);
    const dragging = useRef(false);
    const lastX = useRef(0);

    const isLoaded = loadedCount === images.length;

    useEffect(() => {
        let cancelled = false;

        images.forEach((img) => {
            const image = new Image();
            image.src = img.small;
            image.onload = () => {
                if (!cancelled) {
                    setLoadedCount((c) => c + 1);
                }
            };
        });

        return () => {
            cancelled = true;
        };
    }, [images]);

    useEffect(() => {
        if (!isLoaded) return;

        const el = containerRef.current;
        if (!el) return;

        const onDown = (e) => {
            dragging.current = true;
            lastX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
        };

        const onMove = (e) => {
            if (!dragging.current) return;

            const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const delta = x - lastX.current;

            if (Math.abs(delta) > 10) {
                setFrame((prev) =>
                    delta > 0
                        ? (prev - 1 + images.length) % images.length
                        : (prev + 1) % images.length
                );
                lastX.current = x;
            }
        };

        const onUp = () => (dragging.current = false);

        el.addEventListener('mousedown', onDown);
        el.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);

        el.addEventListener('touchstart', onDown);
        el.addEventListener('touchmove', onMove);
        window.addEventListener('touchend', onUp);

        return () => {
            el.removeEventListener('mousedown', onDown);
            el.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);

            el.removeEventListener('touchstart', onDown);
            el.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', onUp);
        };
    }, [isLoaded, images.length]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[1.55/1] bg-black overflow-hidden"
        >
            {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-gray-300">
                    <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mb-2" />
                    <span className="text-xs opacity-70">Загрузка {loadedCount}/{images.length}</span>
                </div>
            )}

            {isLoaded && (
                <img
                    src={images[frame].small}
                    alt="360 view"
                    className="w-full h-full object-cover select-none"
                    draggable={false}
                />
            )}
        </div>
    );
}
