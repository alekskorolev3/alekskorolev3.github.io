import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';


export default function  Breadcrumbs({
                                items,
                                homeLabel = 'Главная',
                                className = '',
                                showHomeIcon = true
                            }) {
    // Всегда добавляем главную страницу первой
    const allItems = [
        {
            label: homeLabel,
            href: '/',
            isCurrent: false
        },
        ...items
    ];

    return (
        <nav
            className={`mb-4 md:mb-6 ${className}`}
            aria-label="Хлебные крошки"
        >
            <ol className="flex items-center flex-wrap gap-2 text-sm md:text-base text-gray-600">
                {allItems.map((item, index) => (
                    <li key={item.href} className="flex items-center">
                        {index > 0 && (
                            <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
                        )}

                        {item.isCurrent ? (
                            <span
                                className="text-black font-medium truncate max-w-[200px]"
                                aria-current="page"
                            >
                {item.label}
              </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="hover:text-[#ffd632] transition-colors flex items-center gap-1 truncate max-w-[200px]"
                                title={item.label}
                            >
                                {index === 0 && showHomeIcon && (
                                    <Home className="w-4 h-4 flex-shrink-0" />
                                )}
                                {index === 0 && showHomeIcon ? '' : item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
