'use client'

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function HeaderClient() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const normalize = (path) => path.replace(/\/$/, "");
    const isActive = (path) => normalize(pathname) === normalize(path);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* BURGER */}
            <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2"
                aria-label="Open menu"
            >
                <Menu className="w-7 h-7" />
            </button>

            {/* OVERLAY */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={closeMenu}
                />
            )}

            {/* MOBILE MENU */}
            <div
                className={`
          fixed top-0 right-0 h-full w-[280px] bg-white z-50
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-lg font-semibold">Меню</span>
                        <button onClick={closeMenu}>
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6 text-lg">
                        <Link href="/services" onClick={closeMenu}>Услуги</Link>
                        <Link href="/calculator" onClick={closeMenu}>Калькулятор</Link>
                        <Link href="/about" onClick={closeMenu}>О нас</Link>
                        <Link href="/news" onClick={closeMenu}>Новости</Link>
                        <Link href="/contacts" onClick={closeMenu}>Контакты</Link>
                    </nav>

                    <div className="mt-auto">
                        <Link
                            href="/contacts"
                            onClick={closeMenu}
                            className="block text-center bg-[#ffd632] text-black py-3 rounded-lg"
                        >
                            Связаться
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
