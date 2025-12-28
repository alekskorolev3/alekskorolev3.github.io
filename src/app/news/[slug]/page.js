import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { news } from '@/app/news/page'

// helper
function getArticle(slug) {
    return news.find(article => article.slug === slug)
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
    }
}

// page
export default async function ArticlePage({ params }) {
    const { slug } = await params

    const article = getArticle(slug)
    if (!article) notFound()

    return (
        <article className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="mb-4">{article.title}</h1>

            <div className="flex items-center gap-4 text-gray-500 mb-6">
        <span className="bg-[#ffd632] bg-opacity-20 text-black px-3 py-1 rounded-full text-sm">
          {article.category}
        </span>
                <span className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4" />
                    {article.date}
        </span>
            </div>

            <div className="relative w-full h-[400px] mb-8">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>

            <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </article>
    )
}
