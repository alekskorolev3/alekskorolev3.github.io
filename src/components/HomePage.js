import CTA from "@/components/CTA";
import HeroHeader from "@/components/HomePageComponents/HeroHeader";
import HowItWorksSection from "@/components/HomePageComponents/HowItWorksSection";
import PopularCarsSection from "@/components/HomePageComponents/PopularCarsSection";
import ServicesSection from "@/components/HomePageComponents/ServicesSection";
import AdvantagesSection from "@/components/HomePageComponents/AdvantagesSection";
import ScrollToHash from "@/components/ScrollToHash";

export default function HomePage() {
    return (
        <div>
            <ScrollToHash />

            <HeroHeader/>

            <HowItWorksSection/>

            <PopularCarsSection/>

            <ServicesSection/>

            <AdvantagesSection/>

            <CTA/>
        </div>
    );
}
