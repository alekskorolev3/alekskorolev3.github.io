'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Instagram,
  MessageCircle,
  Phone,
  Menu,
  X,
} from 'lucide-react'
import Logo from '../imports/Logo22221'
import { useEffect, useState } from 'react'

const Header = () => {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const normalize = (path) => path.replace(/\/$/, '')
  const isActive = (path) => normalize(pathname) === normalize(path)

  const closeMenu = () => setIsOpen(false)

  return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* TOP BAR */}
        <div className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <a
                href="tel:+375291234567"
                className="flex items-center gap-2 hover:text-[#ffd632] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+375 (29) 123-45-67</span>
            </a>

            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank">
                <Instagram className="w-5 h-5 hover:text-[#ffd632]" />
              </a>
              <a href="https://t.me" target="_blank">
                <MessageCircle className="w-5 h-5 hover:text-[#ffd632]" />
              </a>
            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <div className="w-32 h-8">
                <Logo />
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">
              <NavLink href="/services" active={isActive('/services')}>
                Услуги
              </NavLink>
              <NavLink href="/calculator" active={isActive('/calculator')}>
                Калькулятор
              </NavLink>
              {/*<NavLink href="/reviews" active={isActive('/reviews')}>*/}
              {/*  Отзывы*/}
              {/*</NavLink>*/}
              <NavLink href="/about" active={isActive('/about')}>
                О нас
              </NavLink>
              <NavLink href="/news" active={isActive('/news')}>
                Новости
              </NavLink>
              <NavLink href="/contacts" active={isActive('/contacts')}>
                Контакты
              </NavLink>
            </nav>

            {/* DESKTOP BUTTON */}
            <Link
                href="/contacts"
                className="hidden lg:inline-flex bg-[#ffd632] text-black px-6 py-2 rounded-lg hover:bg-[#e6c02d] transition-colors"
            >
              Связаться
            </Link>

            {/* BURGER */}
            <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2"
                aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>

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
              <MobileLink href="/services" onClick={closeMenu}>
                Услуги
              </MobileLink>
              <MobileLink href="/calculator" onClick={closeMenu}>
                Калькулятор
              </MobileLink>
              <MobileLink href="/reviews" onClick={closeMenu}>
                Отзывы
              </MobileLink>
              <MobileLink href="/news" onClick={closeMenu}>
                Новости
              </MobileLink>
              <MobileLink href="/contacts" onClick={closeMenu}>
                Контакты
              </MobileLink>
            </nav>

            <div className="mt-auto">
              <Link
                  href="/contacts"
                  onClick={closeMenu}
                  className="block text-center bg-[#ffd632] text-black py-3 rounded-lg hover:bg-[#e6c02d] transition-colors"
              >
                Связаться
              </Link>
            </div>
          </div>
        </div>
      </header>
  )
}

/* 🔹 NavLink desktop */
function NavLink({ href, active, children }) {
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

/* 🔹 NavLink mobile */
function MobileLink({ href, children, onClick }) {
  return (
      <Link
          href={href}
          onClick={onClick}
          className="text-gray-800 hover:text-black transition-colors"
      >
        {children}
      </Link>
  )
}

export default Header
