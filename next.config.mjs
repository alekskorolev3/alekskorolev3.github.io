/** @type {import('next').NextConfig} */
const nextConfig = {
  // === ОСНОВНЫЕ НАСТРОЙКИ ===
  reactStrictMode: true,
  trailingSlash: false,

  // === БЕЗОПАСНОСТЬ ===
  poweredByHeader: false,
  generateEtags: true,

  // === ПРОИЗВОДИТЕЛЬНОСТЬ ===
  compress: true,
  crossOrigin: 'anonymous',

  // === ИЗОБРАЖЕНИЯ ===
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 7,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: false,
    // contentSecurityPolicy не поддерживается в images в Next.js 16
    unoptimized: false,
  },

  // === КОМПИЛЯТОР ===
  // React Compiler доступен с Next.js 15+
  // В Next.js 16 можно использовать эти опции:
  compiler: {
    // reactCompiler: true, // Убрать - требует Next.js 15+
    removeConsole: process.env.NODE_ENV === 'production',
    // Другие доступные в Next.js 16 опции:
    styledComponents: true,
  },

  // === ЭКСПЕРИМЕНТАЛЬНЫЕ ОПТИМИЗАЦИИ ===
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    // turbo не работает в обычном режиме сборки, только в dev с Turbopack
    // legacyBrowsers и browsersListForSwc - убрать для Next.js 16
  },

  // === HEADERS ДЛЯ БЕЗОПАСНОСТИ ===
  async headers() {
    const securityHeaders = [
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin',
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },
    ];

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  // === ESLINT И TYPESCRIPT ===
  eslint: {
    ignoreDuringBuilds: true, // Ускоряет сборку
  },
  typescript: {
    ignoreBuildErrors: false, // Остановка при ошибках TypeScript
  },
};

export default nextConfig;
