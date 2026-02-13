import Link from 'next/link';
import { getContent } from '@/lib/content';

export default function Books() {
  const books = getContent('books');

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Books</h1>
      <p className="text-gray-600 mb-8">My thoughts and reviews on books I've read</p>
      
      {books.length === 0 ? (
        <p className="text-gray-600">No book reviews yet. Check back soon!</p>
      ) : (
        <div className="space-y-8">
          {books.map((book) => (
            <article key={book.slug} className="border-b pb-8">
              <Link href={`/books/${book.slug}`}>
                <h2 className="text-2xl font-semibold hover:text-blue-600 transition">
                  {book.title}
                </h2>
              </Link>
              <p className="text-gray-600 text-sm mt-2">{book.date}</p>
              <p className="mt-3 text-gray-700">{book.excerpt}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
