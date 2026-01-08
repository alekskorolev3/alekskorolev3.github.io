import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[65vh] flex items-center justify-center bg-white px-4">
            <div className="max-w-xl w-full text-center">
                {/* 404 */}
                <div className="text-7xl font-bold text-black mb-4">404</div>

                {/* Заголовок */}
                <h1 className="text-2xl font-semibold mb-3">
                    Такой страницы не существует
                </h1>

                {/* Описание */}
                <p className="text-gray-600 mb-8">
                    Возможно, вы перешли по устаревшей ссылке или допустили ошибку в адресе.
                    Но не переживайте — мы поможем вам вернуться к выбору авто 🙂
                </p>

                {/* Кнопки */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="
              inline-flex items-center justify-center gap-2
              bg-[#ffd632]
              text-black
              px-6 py-3
              rounded-lg
              hover:bg-[#e6c02d]
              transition-colors
              font-medium
            "
                    >
                        <ArrowLeft className="w-4 h-4" />
                        На главную
                    </Link>

                    <Link
                        href="/#popular" scroll={true}
                        className="
              inline-flex items-center justify-center gap-2
              border-2 border-black
              text-black
              px-6 py-3
              rounded-lg
              hover:bg-black hover:text-white
              transition-colors
              font-medium
            "
                    >
                        <Search className="w-4 h-4" />
                        Подобрать авто
                    </Link>
                </div>

                {/* SEO текст */}
                <div className="mt-10 text-xs text-gray-400">
                    Flow Auto — подбор автомобилей из Беларуси под ключ
                </div>
            </div>
        </div>
    );
}
