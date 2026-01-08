'use client'

import Link from "next/link";
import { RefreshCcw, Home, AlertTriangle } from "lucide-react";

export default function Error({ error, reset }) {
    return (
        <div className="min-h-[65vh] flex items-center justify-center bg-white px-4">
            <div className="max-w-xl w-full text-center">

                {/* Иконка */}
                <div className="flex justify-center mb-6 text-[#ffd632]">
                    <AlertTriangle className="w-16 h-16" />
                </div>

                {/* Код */}
                <div className="text-6xl font-bold text-black mb-4">500</div>

                {/* Заголовок */}
                <h1 className="text-2xl font-semibold mb-3">
                    Что-то пошло не так
                </h1>

                {/* Описание */}
                <p className="text-gray-600 mb-8">
                    Произошла внутренняя ошибка сервера. Мы уже записали её и скоро всё починим.
                    Попробуйте обновить страницу или вернуться на главную.
                </p>

                {/* Кнопки */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                    <button
                        onClick={() => reset()}
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
                        <RefreshCcw className="w-4 h-4" />
                        Попробовать снова
                    </button>

                    <Link
                        href="/"
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
                        <Home className="w-4 h-4" />
                        На главную
                    </Link>
                </div>

                {/* Для отладки (можно удалить позже) */}
                {process.env.NODE_ENV === 'development' && (
                    <pre className="mt-8 text-left text-xs text-red-500 bg-red-50 p-4 rounded overflow-auto">
            {error.message}
          </pre>
                )}

            </div>
        </div>
    );
}
