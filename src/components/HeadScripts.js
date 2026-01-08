import Script from "next/script";

export default function HeadScripts() {
    return (
        <>
            {/* Яндекс A/B тесты */}
            <Script id="_ym" strategy="afterInteractive">
                {`
          (function (e, x, pe, r, i, me, nt){
            e[i] = e[i] || function () {
              (e[i].a = e[i].a || []).push(arguments)
            },
            me = x.createElement(pe),
            me.async = 1,
            me.src = r,
            nt = x.getElementsByTagName(pe)[0],
            me.addEventListener('error', function() {
              function cb(t){t = t[t.length-1]; 'function'==typeof t && t({flags:{}});}
              Array.isArray(e[i].a) && e[i].a.forEach(cb);
              e[i] = function(){ cb(arguments); }
            }),
            nt.parentNode.insertBefore(me, nt)
          })(window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
          
          ymab('metrika.106160339', 'init');
        `}
            </Script>

            {/* Яндекс.Метрика */}
            <Script id="ym2" strategy="afterInteractive">
                {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0];
            k.async=1;
            k.src=r;
            a.parentNode.insertBefore(k,a);
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106160339','ym');

          ym(106160339, 'init', {
            ssr:true,
            webvisor:true,
            clickmap:true,
            ecommerce:"dataLayer",
            accurateTrackBounce:true,
            trackLinks:true
          });
        `}
            </Script>

            <noscript dangerouslySetInnerHTML={{
                __html: `<div>
                    <img
                        src="https://mc.yandex.ru/watch/106160339"
                        style={{position:'absolute', left:'-9999px'}}
                        alt=""
                    />
                </div>`
            }}>
            </noscript>

            {/* Google Tag Manager */}
            <Script id="gtm" strategy="afterInteractive">
                {`
          (function(w,d,s,l,i){
            w[l] = w[l] || [];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WHFKJJ4L');
        `}
            </Script>

            <noscript dangerouslySetInnerHTML={{
                __html: `<iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-WHFKJJ4L"
                    height="0" width="0"
                    style={{display:'none',visibility:'hidden'}}
                ></iframe>`
            }}>
            </noscript>

            {/* Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-61FJTK1WT1"
                strategy="afterInteractive"
            />
            <Script id="gtag" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-61FJTK1WT1');
        `}
            </Script>
        </>
    );
}
