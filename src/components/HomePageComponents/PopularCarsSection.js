import Slider from "@/components/Slider";
import {cars} from "@/const/cars";
import CarCard from "@/components/CarCard";

export default function PopularCarsSection() {

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="mb-2">Популярные предложения</h2>
                        <p className="text-gray-600">Самые выгодные автомобили этого месяца</p>
                    </div>
                </div>
                <Slider
                    items={cars}
                    breakpoints={{mobile: 1, tablet: 2, desktop: 3}}
                    renderItem={(car) => (
                        <CarCard car={car}/>
                    )}
                />
            </div>
        </section>
    )
}
