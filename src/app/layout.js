import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Toaster} from "@/components/ui/sonner";
import CookieConsent from "@/components/CookieConsent";

export const metadata = {
    title: "Flow Auto",
    description: "Подбор авто из Беларуси",
};

export default function RootLayout({children}) {
    return (
        <html lang="ru">
        <head>
            <script type="text/javascript">
                (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106160339', 'ym');

                ym(106160339, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            </script>
            <noscript><div><img src="https://mc.yandex.ru/watch/106160339" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
            />
            <title></title>
        </head>
        <body className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-1">{children}</main>
                <Footer/>
                <CookieConsent />
                <Toaster richColors position="top-center" />
            </body>
        </html>
    );
}
