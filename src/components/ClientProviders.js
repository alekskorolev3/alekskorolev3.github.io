"use client";

import dynamic from "next/dynamic";
import '../app/animations.css';

const Footer = dynamic(() => import("./Footer"), { ssr: false });
const CookieConsent = dynamic(() => import("./CookieConsent"), { ssr: false });
const Toaster = dynamic(() =>
        import("./ui/sonner").then(m => m.Toaster),
    { ssr: false }
);

export default function ClientProviders() {
    return (
        <>
            <Footer />
            <CookieConsent />
            <Toaster richColors position="top-center" />
        </>
    );
}
