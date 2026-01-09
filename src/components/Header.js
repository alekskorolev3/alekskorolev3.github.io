'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../imports/Logo22221";
import HeaderClient from "./HeaderClient";
import { PHONE, PHONE_TEXT, TELEGRAM, WHATSAPP } from "@/const/contacts";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Функция для рендеринга микроразметки в JSON-LD
  const renderStructuredData = () => {
    const siteNavigationElement = [
      {
        "@type": "SiteNavigationElement",
        "name": "Услуги",
        "url": `https://flowauto.ru/services`
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Калькулятор",
        "url": `https://flowauto.ru/calculator`
      },
      {
        "@type": "SiteNavigationElement",
        "name": "О нас",
        "url": `https://flowauto.ru/about`
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Новости",
        "url": `https://flowauto.ru/news`
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Контакты",
        "url": `https://flowauto.ru/contacts`
      }
    ];

    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `https://flowauto.ru/#organization`,
      "name": "Название вашей компании", // Замените на название компании
      "url": "https://flowauto.ru",
      "logo": {
        "@type": "ImageObject",
        "url": `https://flowauto.ru/logo.png`, // Укажите путь к логотипу
        "width": "128",
        "height": "32"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": PHONE,
        "contactType": "customer service",
        "availableLanguage": ["Russian", "English"]
      },
      "sameAs": [
        WHATSAPP,
        TELEGRAM
        // Добавьте ссылки на соцсети если есть
      ]
    };

    const website = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `https://flowauto.ru/#website`,
      "url": "https://flowauto.ru",
      "name": "Flow Auto", // Замените на название сайта
      "description": "Описание вашего сайта", // Добавьте описание
      "publisher": {
        "@id": `https://flowauto.ru/#organization`
      }
    };

    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": "https://flowauto.ru"
        }
        // Остальные элементы будут добавляться динамически на каждой странице
      ]
    };

    return (
        <>
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
          />
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
          />
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
          />
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": siteNavigationElement
                })
              }}
          />
        </>
    );
  };

  return (
      <>
        {renderStructuredData()}

        <header className="bg-white shadow-sm sticky top-0 z-50" itemScope itemType="https://schema.org/WPHeader">
          {/* TOP BAR */}
          <div className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
              {/* Телефон с микроразметкой */}
              <div itemScope itemType="https://schema.org/ContactPoint">
                <meta itemProp="contactType" content="customer service" />
                <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-2 hover:text-[#ffd632] transition-colors"
                    itemProp="telephone"
                >
                  {PHONE_TEXT}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Связаться через WhatsApp"
                    itemProp="sameAs"
                >
                  <img
                      src="/whatsapp.svg"
                      alt="WhatsApp link"
                      className="w-5 h-5"
                      width="20"
                      height="20"
                  />
                </a>
                <a
                    href={TELEGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Связаться через Telegram"
                    itemProp="sameAs"
                >
                  <img
                      src="/telegram.svg"
                      alt="Telegram link"
                      className="w-5 h-5"
                      width="20"
                      height="20"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* MAIN HEADER */}
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Логотип с микроразметкой */}
              {isHomePage ? (
                  <div className="flex items-center w-32 h-8" itemScope itemType="https://schema.org/Organization">
                    <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                      <Logo />
                      <meta itemProp="url" content={`${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`} />
                      <meta itemProp="width" content="128" />
                      <meta itemProp="height" content="32" />
                    </div>
                    <meta itemProp="name" content="Название вашей компании" />
                    <meta itemProp="url" content={process.env.NEXT_PUBLIC_SITE_URL} />
                  </div>
              ) : (
                  <Link
                      href="/"
                      className="flex items-center"
                      itemScope
                      itemType="https://schema.org/Organization"
                      aria-label="На главную страницу"
                  >
                    <div className="w-32 h-8">
                      <Logo />
                    </div>
                    <meta itemProp="name" content="Название вашей компании" />
                  </Link>
              )}

              {/* Навигация с микроразметкой */}
              <nav
                  className="hidden lg:flex items-center gap-8"
                  itemScope
                  itemType="https://schema.org/SiteNavigationElement"
                  aria-label="Основная навигация"
              >
                <Link
                    href="/services"
                    itemProp="url"
                    aria-label="Перейти к услугам"
                >
                  <span itemProp="name">Услуги</span>
                </Link>
                <Link
                    href="/calculator"
                    itemProp="url"
                    aria-label="Перейти к калькулятору"
                >
                  <span itemProp="name">Калькулятор</span>
                </Link>
                <Link
                    href="/about"
                    itemProp="url"
                    aria-label="Перейти к информации о компании"
                >
                  <span itemProp="name">О нас</span>
                </Link>
                <Link
                    href="/news"
                    itemProp="url"
                    aria-label="Перейти к новостям"
                >
                  <span itemProp="name">Новости</span>
                </Link>
                <Link
                    href="/contacts"
                    itemProp="url"
                    aria-label="Перейти к контактам"
                >
                  <span itemProp="name">Контакты</span>
                </Link>
              </nav>

              {/* Кнопка с микроразметкой */}
              <Link
                  href="/contacts"
                  className="hidden lg:inline-flex bg-[#ffd632] text-black px-6 py-2 rounded-lg hover:bg-[#e6c12d] transition-colors"
                  aria-label="Связаться с нами"
                  itemProp="url"
              >
                Связаться
              </Link>

              {/* CLIENT PART */}
              <HeaderClient />
            </div>
          </div>
        </header>
      </>
  );
}
