import { getContentBySlug, getContent } from '@/lib/content';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

export async function generateStaticParams() {
  const books = getContent('books');
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export default async function Book({ params }: { params: { slug: string } }) {
  const book = getContentBySlug('books', params.slug);
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
