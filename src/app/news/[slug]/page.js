import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { news } from '@/app/news/page'
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from 'next/head';

// helper
function getArticle(slug) {
    return news.find(article => article.slug === slug)
}

export function generateStaticParams() {
    return news.map(article => ({
        slug: article.slug,
    }))
}

// SEO
export async function generateMetadata({ params }) {
    const { slug } = await params

    const article = getArticle(slug)
    if (!article) return {}

    return {
        title: article.title,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            images: [article.image],
            type: 'article',
        },
        alternates: {
            canonical: `/news/${slug}`
        }
    }
}

// page
export default async function ArticlePage({ params }) {
    const { slug } = await params

    const article = getArticle(slug)
    if (!article) notFound()

    // Структурированные данные для статьи
    const articleStructuredData = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": article.title,
        "description": article.description,
        "image": {
            "@type": "ImageObject",
            "url": article.image,
            "width": 1200,
            "height": 800
        },
        "datePublished": article.date,
        "dateModified": article.date,
        "author": {
            "@type": "Organization",
            "name": "FlowAuto",
            "url": "https://flowauto.ru",
            "logo": {
                "@type": "ImageObject",
                "url": "https://flowauto.ru/logo.png"
            }
        },
        "publisher": {
            "@type": "Organization",
            "name": "FlowAuto",
            "url": "https://flowauto.ru",
            "logo": {
                "@type": "ImageObject",
                "url": "https://flowauto.ru/logo.png",
                "width": 600,
                "height": 400
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://flowauto.ru/news/${article.slug}`,
            "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Главная",
                        "item": "https://flowauto.ru"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Новости",
                        "item": "https://flowauto.ru/news"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": article.title,
                        "item": `https://flowauto.ru/news/${article.slug}`
                    }
                ]
            }
        },
        "articleSection": article.category,
        "articleBody": article.content.replace(/<[^>]*>/g, ''),
        "keywords": `автомобили из Беларуси, подбор авто, ${article.category}, FlowAuto`,
        "wordCount": article.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
        "timeRequired": "PT5M",
        "speakable": {
            "@type": "SpeakableSpecification",
            "xpath": [
                "/html/head/title",
                "/html/body/article/h1",
                "/html/body/article/div[@class='prose']"
            ]
        }
    };

    // Breadcrumb structured data
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://flowauto.ru"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Новости",
                "item": "https://flowauto.ru/news"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": article.title,
                "item": `https://flowauto.ru/news/${article.slug}`
            }
        ]
    };

    // BlogPosting structured data (альтернативный тип)
    const blogPostingStructuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.description,
        "image": article.image,
        "datePublished": article.date,
        "dateModified": article.date,
        "author": {
            "@type": "Organization",
            "name": "FlowAuto"
        },
        "publisher": {
            "@type": "Organization",
            "name": "FlowAuto",
            "logo": {
                "@type": "ImageObject",
                "url": "https://flowauto.ru/logo.png"
            }
        },
        "mainEntityOfPage": `https://flowauto.ru/news/${article.slug}`,
        "articleSection": article.category
    };

    return (
        <>
            <Head>
                {/* Основная разметка статьи */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(articleStructuredData)
                    }}
                />

                {/* Breadcrumb разметка */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbStructuredData)
                    }}
                />

                {/* Альтернативная разметка для блога */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(blogPostingStructuredData)
                    }}
                />
            </Head>

            <article
                className="container mx-auto px-4 py-12 max-w-4xl"
                itemScope
                itemType="https://schema.org/NewsArticle"
            >
                <div className="container mx-auto relative z-10 pt-6">
                    <Breadcrumbs items={[
                        {label: 'Новости', href: `/news`},
                        {label: article.title, href: `/news/${slug}`, isCurrent: true}
                    ]}/>
                </div>

                <h1
                    className="mb-4"
                    itemProp="headline"
                >
                    {article.title}
                </h1>

                <div className="flex items-center gap-4 text-gray-500 mb-6">
                    <span
                        className="bg-[#ffd632] bg-opacity-20 text-black px-3 py-1 rounded-full text-sm"
                        itemProp="articleSection"
                    >
                        {article.category}
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4"/>
                        <time
                            itemProp="datePublished"
                            dateTime={article.date}
                        >
                            {article.date}
                        </time>
                    </span>
                </div>

                <div className="relative w-full h-[400px] mb-8">
                    <div itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                        <meta itemProp="url" content={article.image} />
                        <meta itemProp="width" content="1200" />
                        <meta itemProp="height" content="800" />
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            unoptimized
                            className="object-cover rounded-lg"
                            priority
                            itemProp="contentUrl"
                        />
                    </div>
                </div>

                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{__html: article.content}}
                    itemProp="articleBody"
                />

                {/* Скрытые метаданные */}
                <div style={{ display: 'none' }}>
                    <meta itemProp="dateModified" content={article.date} />
                    <meta itemProp="description" content={article.description} />

                    <div itemProp="author" itemScope itemType="https://schema.org/Organization">
                        <meta itemProp="name" content="FlowAuto" />
                        <meta itemProp="url" content="https://flowauto.ru" />
                    </div>

                    <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                        <meta itemProp="name" content="FlowAuto" />
                        <meta itemProp="url" content="https://flowauto.ru" />
                        <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                            <meta itemProp="url" content="https://flowauto.ru/logo.png" />
                        </div>
                    </div>

                    <div itemProp="mainEntityOfPage" itemScope itemType="https://schema.org/WebPage">
                        <meta itemProp="@id" content={`https://flowauto.ru/news/${article.slug}`} />
                    </div>
                </div>
            </article>
        </>
    )
}
