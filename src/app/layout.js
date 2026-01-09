import "./globals.css";
import Header from "../components/Header";
import { Montserrat } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import Footer from "@/components/Footer";
import HeadScripts from "@/components/HeadScripts";

const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    fallback: ["Arial", "sans-serif"],
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
        </head>
        <body className={`${montserrat.className} flex flex-col`}>
        <Header/>
        <main className="flex-1">{children}</main>
        <Footer className={`${montserrat.className}`}/>
        <ClientProviders/>
        <HeadScripts/>
        </body>
        </html>
    );
}
