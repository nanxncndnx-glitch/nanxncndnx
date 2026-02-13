import { getContentBySlug, getContent } from '@/lib/content';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

export async function generateStaticParams() {
  try {
    const books = getContent('books');
    const validBooks = books.filter(book => book && book.slug);
    return validBooks.map((book) => ({
      slug: book.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for books:', error);
    return [];
  }
}

export default async function Book({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;  // <-- AWAIT params here!
  const book = getContentBySlug('books', slug);
  const processedContent = await remark().use(html).process(book.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <Link href="/books" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to Books
      </Link>
      
      <article>
        <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
        <p className="text-gray-600 mb-8">{book.date}</p>
        <div 
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}
