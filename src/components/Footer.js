import { MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4">О компании</h3>
            <p className="text-gray-400">
              Профессиональный подбор автомобилей из Беларуси в Россию. 
              Полное юридическое сопровождение и гарантия качества.
            </p>
            <div className="mt-4">
              <p className="text-gray-400">УНП: 123456789</p>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              График работы
            </h3>
            <div className="space-y-2 text-gray-400">
              <p>Понедельник - Пятница: 9:00 - 18:00</p>
              <p>Суббота: 10:00 - 15:00</p>
              <p>Воскресенье: Выходной</p>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Адреса офисов
            </h3>
            <div className="space-y-3 text-gray-400">
              <div>
                <p>Минск, Беларусь</p>
                <p className="text-sm">ул. Примерная, д. 1, офис 101</p>
              </div>
              <div>
                <p>Москва, Россия</p>
                <p className="text-sm">ул. Примерная, д. 2, офис 202</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 АвтоПодбор.РФ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
