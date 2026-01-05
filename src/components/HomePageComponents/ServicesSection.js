import Slider from "@/components/Slider";
import {services} from "@/const/services";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesSection() {


    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="mb-4">Наши услуги</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Полный спектр услуг по подбору автомобилей из Беларуси.
                        От поиска до постановки на учёт — мы берём всё на себя.
                    </p>
                </div>

                <Slider
                    items={services}
                    breakpoints={{mobile: 1, tablet: 2, desktop: 3}}
                    renderItem={(service) => (
                        <ServiceCard service={service}/>
                    )}
                />
            </div>
        </section>
    )
}
