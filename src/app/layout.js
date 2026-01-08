import "./globals.css";
import Header from "../components/Header";
import { Montserrat } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import Footer from "@/components/Footer";
import Script from "next/script";

const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});


export const metadata = {
    title: "Flow Auto",
    description: "Подбор авто из Беларуси",
};

export default function RootLayout({children}) {
    return (
        <html lang="ru">
        <head>
            <title></title>

            <script type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `(function (e, x, pe, r, i, me, nt
            ){
                e[i] = e[i] || function () {
                    (e[i].a = e[i].a || []).push(arguments)
                },
                me=x.createElement(pe),me.async=1,me.src=r,nt=x.getElementsByTagName(pe)[0],me.addEventListener('error',function(){function cb(t){t=t[t.length-1],'function'==typeof t&&t({flags:{}})};Array.isArray(e[i].a)&&e[i].a.forEach(cb);e[i]=function(){cb(arguments)}}),nt.parentNode.insertBefore(me,nt)})
                (window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab'
            )
            ;
                ymab('metrika.106160339', 'init');`
                    }}
            >

            </script>

            <script type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `(function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106160339', 'ym');

                ym(106160339, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `
                    }}
            ></script>
            <noscript
                dangerouslySetInnerHTML={{
                    __html: `<div><img src="https://mc.yandex.ru/watch/106160339" style="position:absolute; left:-9999px;" alt="" /></div>`
                }}
            >

            </noscript>


            <script type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WHFKJJ4L');`
                    }}
            >
            </script>

            <noscript
                dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHFKJJ4L"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>`
                }}
            >

            </noscript>

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-61FJTK1WT1"></script>
            <script type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-61FJTK1WT1');`
                    }}
            >

            </script>
        </head>
        <body className={`${montserrat.className} flex flex-col min-h-screen`}>
            <Header/>
            <main className="flex-1">{children}</main>
            <Footer />
            <ClientProviders />
        </body>
        </html>
    );
}
