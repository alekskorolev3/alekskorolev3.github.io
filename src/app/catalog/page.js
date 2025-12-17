'use client';

import {useEffect, useState} from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import CarCard from '../../components/CarCard';

const BRANDS = ['Toyota', 'Volkswagen', 'BMW', 'Mercedes-Benz', 'Audi', 'Mazda', 'Hyundai', 'Kia'];
const BODY_TYPES = ['Седан', 'Универсал', 'Хэтчбек', 'Внедорожник', 'Купе', 'Минивэн'];
const DRIVE_TYPES = ['Передний', 'Задний', 'Полный'];
const TRANSMISSION_TYPES = ['Механика', 'Автомат', 'Робот', 'Вариатор'];

export default function CatalogPage() {
  const [cars, setCars] = useState([])
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState({
    brand: '',
    yearFrom: '',
    yearTo: '',
    engineFrom: '',
    engineTo: '',
    powerFrom: '',
    powerTo: '',
    bodyType: '',
    driveType: '',
    transmission: '',
    under160hp: false
  });

  // const fetchData = async() => {
  //   const res = await fetch('/api/cars');
  //   const cars = await res.json();
  //
  //   console.log(cars)
  //
  //   return cars
  // }
  //
  // useEffect( ()=> {
  //   fetchData()
  //       .then(data => setCars(() => data))
  // }, [])

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      brand: '',
      yearFrom: '',
      yearTo: '',
      engineFrom: '',
      engineTo: '',
      powerFrom: '',
      powerTo: '',
      bodyType: '',
      driveType: '',
      transmission: '',
      under160hp: false
    });
  };

  return (
    <div>
      {/* Filters and Search */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors lg:hidden"
            >
              <SlidersHorizontal className="w-5 h-5" />
              {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2>Фильтры</h2>
                  <button
                    onClick={resetFilters}
                    className="text-sm text-black hover:text-gray-700"
                  >
                    Сбросить
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Brand */}
                  <div>
                    <label className="block mb-2">Марка</label>
                    <select
                      value={filters.brand}
                      onChange={(e) => handleFilterChange('brand', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Все марки</option>
                      {BRANDS.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>

                  {/* Year */}
                  <div>
                    <label className="block mb-2">Год выпуска</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        placeholder="От"
                        value={filters.yearFrom}
                        onChange={(e) => handleFilterChange('yearFrom', e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="number"
                        placeholder="До"
                        value={filters.yearTo}
                        onChange={(e) => handleFilterChange('yearTo', e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Engine Volume */}
                  <div>
                    <label className="block mb-2">Объем двигателя, л</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        step="0.1"
                        placeholder="От"
                        value={filters.engineFrom}
                        onChange={(e) => handleFilterChange('engineFrom', e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="number"
                        step="0.1"
                        placeholder="До"
                        value={filters.engineTo}
                        onChange={(e) => handleFilterChange('engineTo', e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Power */}
                  <div>
                    <label className="block mb-2">Мощность, л.с.</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        placeholder="От"
                        value={filters.powerFrom}
                        onChange={(e) => handleFilterChange('powerFrom', e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd632] focus:border-transparent"
                      />
                      <input
                        type="number"
                        placeholder="До"
                        value={filters.powerTo}
                        onChange={(e) => handleFilterChange('powerTo', e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd632] focus:border-transparent"
                      />
                    </div>
                    <div className="mt-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.under160hp}
                          onChange={(e) => handleFilterChange('under160hp', e.target.checked)}
                          className="w-4 h-4 text-[#ffd632] border-gray-300 rounded focus:ring-[#ffd632]"
                        />
                        <span className="text-sm">Менее 160 л.с.</span>
                      </label>
                    </div>
                  </div>

                  {/* Body Type */}
                  <div>
                    <label className="block mb-2">Тип кузова</label>
                    <select
                      value={filters.bodyType}
                      onChange={(e) => handleFilterChange('bodyType', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Все типы</option>
                      {BODY_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Drive Type */}
                  <div>
                    <label className="block mb-2">Привод</label>
                    <select
                      value={filters.driveType}
                      onChange={(e) => handleFilterChange('driveType', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Все типы</option>
                      {DRIVE_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Transmission */}
                  <div>
                    <label className="block mb-2">Коробка передач</label>
                    <select
                      value={filters.transmission}
                      onChange={(e) => handleFilterChange('transmission', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Все типы</option>
                      {TRANSMISSION_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <button className="w-full bg-[#ffd632] text-black py-3 rounded-lg hover:bg-[#e6c02d] transition-colors flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    Применить фильтры
                  </button>
                </div>
              </div>
            </aside>

            {/* Cars Grid */}
            <div className="flex-1">
              <div className="mb-4 text-gray-600">
                Найдено автомобилей: {cars.length}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {cars.map(car => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
