import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(req: NextRequest) {
    const url = req.nextUrl

    // Убираем множественные слэши
    if (url.pathname.includes('//')) {
        const cleanPath = url.pathname.replace(/\/+/g, '/')

        const newUrl = new URL(cleanPath, req.url)
        return NextResponse.redirect(newUrl, 301)
    }

    // Явные дубли
    if (
        url.pathname === '/index.html' ||
        url.pathname === '/index.php' ||
        url.pathname === '/home'
    ) {
        return NextResponse.redirect(new URL('/', req.url), 301)
    }

    return NextResponse.next()
}
