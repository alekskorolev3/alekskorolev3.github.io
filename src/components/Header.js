'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Facebook, Instagram, MessageCircle, Phone } from 'lucide-react'
import Logo from '../imports/Logo22221'

const Header = () => {
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* TOP BAR */}
        <div className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <a
                  href="tel:+375291234567"
                  className="flex items-center gap-2 hover:text-[#ffd632] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+375 (29) 123-45-67</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffd632] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffd632] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffd632] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="w-32 h-8">
                <Logo />
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="/catalog" active={isActive('/catalog')}>
                Каталог
              </NavLink>
              <NavLink href="/services" active={isActive('/services')}>
                Услуги
              </NavLink>
              <NavLink href="/calculator" active={isActive('/calculator')}>
                Калькулятор
              </NavLink>
              <NavLink href="/reviews" active={isActive('/reviews')}>
                Отзывы
              </NavLink>
              <NavLink href="/news" active={isActive('/news')}>
                Новости
              </NavLink>
              <NavLink href="/contacts" active={isActive('/contacts')}>
                Контакты
              </NavLink>
            </nav>

            <Link
                href="/contacts"
                className="bg-[#ffd632] text-black px-6 py-2 rounded-lg hover:bg-[#e6c02d] transition-colors"
            >
              Связаться
            </Link>
          </div>
        </div>
      </header>
  )
}

/* 🔹 Вспомогательный компонент */
function NavLink({
                   href,
                   active,
                   children,
                 }) {
  return (
      <Link
          href={href}
          className={`transition-colors ${
              active ? 'text-black' : 'text-gray-700 hover:text-black'
          }`}
      >
        {children}
      </Link>
  )
}

export default Header;
