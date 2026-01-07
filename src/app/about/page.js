import AboutAnimations from "@/components/AboutAnimations";
import AboutContent from "@/components/AboutContent";

export const metadata = {
    title: "О нас | Flow Auto",
    description: "Подберите автомобиль из Беларуси с помощью калькулятора"
};

export default function AboutPage() {
    return (
        <>
            <AboutContent />
            <AboutAnimations />
        </>
    );
}
