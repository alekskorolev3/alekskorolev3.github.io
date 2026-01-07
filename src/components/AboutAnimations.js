"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutAnimations() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Анимация секций
            gsap.utils.toArray("section").forEach((section) => {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });

            // Карточки принципов
            gsap.fromTo(
                ".principle-card",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".principles-section",
                        start: "top 80%",
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return null; // ничего не рендерит
}
