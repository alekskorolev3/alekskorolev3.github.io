import Link from 'next/link';
import ImageWithFallback from './figma/ImageWithFallback';
import { Calendar, Gauge, Fuel, Settings } from 'lucide-react';

export default function CarCard({ car }) {

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <ImageWithFallback 
        src={car.image} 
        alt={`${car.brand} ${car.model}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="mb-1">{car.brand} {car.model}</h3>
        <p className="text-gray-600 mb-4">{car.bodyType}</p>
        
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{car.year} г.</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Fuel className="w-4 h-4" />
            <span>{car.engine} л</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Gauge className="w-4 h-4" />
            <span>{car.power} л.с.</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Settings className="w-4 h-4" />
            <span>{car.transmission}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-black">{car.price} ₽</span>
          <Link href={`/car/${car.id}`} passHref>
            <button className="bg-[#ffd632] text-black px-4 py-2 rounded-lg hover:bg-[#e6c02d] transition-colors">
              Подробнее
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
