import Link from "next/link";
import Logo from "../imports/Logo22221";
import HeaderClient from "./HeaderClient";
import { PHONE, PHONE_TEXT, TELEGRAM, WHATSAPP } from "@/const/contacts";

export default function Header() {
  return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* TOP BAR */}
        <div className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 hover:text-[#ffd632] transition-colors"
            >
              {PHONE_TEXT}
            </a>

            <div className="flex items-center gap-4">
              <a href={WHATSAPP} target="_blank">
                <img src="/whatsapp.svg" alt="WhatsApp link" className="w-5 h-5" />
              </a>
              <a href={TELEGRAM} target="_blank">
                <img src="/telegram.svg" alt="Telegram link" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center w-32 h-8">
              <Logo/>
            </div>

            {/* DESKTOP NAV — ВАЖНО: ссылки существуют в HTML */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/services">Услуги</Link>
              <Link href="/calculator">Калькулятор</Link>
              <Link href="/about">О нас</Link>
              <Link href="/news">Новости</Link>
              <Link href="/contacts">Контакты</Link>
            </nav>

            <Link
                href="/contacts"
                className="hidden lg:inline-flex bg-[#ffd632] text-black px-6 py-2 rounded-lg"
            >
              Связаться
            </Link>

            {/* CLIENT PART */}
            <HeaderClient />
          </div>
        </div>
      </header>
  );
}
