import "./globals.css";
import Header from "../components/Header";
import { Montserrat } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import Footer from "@/components/Footer";
import HeadScripts from "@/components/HeadScripts";

// Оптимизированная загрузка шрифта
const montserrat = Montserrat({
    subsets: ["cyrillic"], // Только кириллица - экономит 30-40% размера
    weight: ["400", "500", "600", "700"], // Убрали 500 если не используется
    display: "swap", // Предотвращает FOIT (Flash of Invisible Text)
    preload: true, // Предзагрузка в <head>
    adjustFontFallback: true, // Автоматический fallback
    fallback: ["system-ui", "Arial", "sans-serif"],
    variable: "--font-montserrat",
    // Оптимизация для русскоязычного контента
    // subsets: ["latin"], // Убрать если не нужна латиница
});

export const metadata = {
    metadataBase: new URL("https://flowauto.ru"),
    title: {
        default: "Flow Auto | Подбор авто из Беларуси",
        template: "%s | Flow Auto"
    },
    description: "Профессиональный подбор и доставка автомобилей из Беларуси. Надежные авто с гарантией качества.",
    keywords: ["авто из Беларуси", "подбор автомобилей", "доставка авто", "купить авто", "авто с пробегом"],

    // Open Graph для социальных сетей
    openGraph: {
        title: "Flow Auto | Подбор авто из Беларуси",
        description: "Профессиональный подбор и доставка автомобилей из Беларуси",
        type: "website",
        locale: "ru_RU",
        siteName: "Flow Auto",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Flow Auto",
            },
        ],
    },

    // Twitter Cards
    twitter: {
        card: "summary_large_image",
        title: "Flow Auto | Подбор авто из Беларуси",
        description: "Профессиональный подбор и доставка автомобилей из Беларуси",
        images: ["/twitter-image.jpg"],
    },

    // Добавляем preconnect для ускорения загрузки шрифтов
    other: {
        "font-preconnect": "https://fonts.gstatic.com",
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="ru" className={`${montserrat.variable}`}>
        <head>
            {/* Предварительное подключение к CDN шрифтов для ускорения */}
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                rel="preconnect"
                href="https://fonts.googleapis.com"
            />

            {/* Предзагрузка критических ресурсов */}
            <link
                rel="preload"
                href="/_next/static/css/app/layout.css"
                as="style"
            />

            {/* Favicon разных размеров */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            {/*<link rel="icon" href="/icon.svg" type="image/svg+xml" />*/}
            {/*<link rel="apple-touch-icon" href="/apple-touch-icon.png" />*/}
        </head>
        <body className={`${montserrat.className} flex flex-col min-h-screen`}>
        {/* Добавляем fallback контент пока грузятся шрифты */}
        <script
            dangerouslySetInnerHTML={{
                __html: `
              (function() {
                try {
                  var font = new FontFace('Montserrat', 'url("")');
                  font.load().then(function() {
                    document.documentElement.classList.add('fonts-loaded');
                  });
                } catch(e) {}
                
                // Fallback для очень старых браузеров
                var timeout = setTimeout(function() {
                  document.documentElement.classList.add('fonts-loaded');
                }, 1000);
                
                // Убираем fallback когда шрифты загрузились
                document.fonts.ready.then(function() {
                  clearTimeout(timeout);
                  document.documentElement.classList.add('fonts-loaded');
                });
              })();
            `,
            }}
        />

        <noscript>
            <style>{`
            /* Базовые стили для пользователей без JS */
            body { 
              font-family: system-ui, Arial, sans-serif;
            }
          `}</style>
        </noscript>

        <Header/>

        <main className="flex-1">
            {children}
        </main>

        <Footer className={`${montserrat.className}`}/>
        <ClientProviders/>
        <HeadScripts/>

        {/* Инлайн критического CSS для ускорения первой отрисовки */}
        <style
            dangerouslySetInnerHTML={{
                __html: `
              /* Критические стили для above-the-fold контента */
              .font-fallback {
                font-family: system-ui, Arial, sans-serif;
              }
              
              /* Показываем контент даже если шрифты еще не загрузились */
              html:not(.fonts-loaded) body {
                font-family: system-ui, Arial, sans-serif !important;
              }
              
              /* Убираем сдвиг макета при загрузке шрифтов */
              .font-smoothing {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              
              /* Минимальные стили для заголовка чтобы не было CLS */
              header {
                min-height: 80px;
              }
              
              /* Предотвращаем резкое изменение размера текста */
              html {
                font-size: 16px;
              }
            `,
            }}
        />
        </body>
        </html>
    );
}
