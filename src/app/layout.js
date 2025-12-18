import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Toaster} from "@/components/ui/sonner";

export const metadata = {
    title: "Flow Auto",
    description: "Подбор авто из Беларуси",
};

export default function RootLayout({children}) {
    return (
        <html lang="ru">
            <head>
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
                <Toaster richColors position="top-center" />
            </body>
        </html>
    );
}
