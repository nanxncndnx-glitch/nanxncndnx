import Link from 'next/link';
import { getContent } from '@/lib/content';

export default function Docs() {
  const docs = getContent('docs');

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Docs</h1>
      <p className="text-gray-600 mb-8">In-depth articles and technical documentation</p>
      
      {docs.length === 0 ? (
        <p className="text-gray-600">No documentation yet. Check back soon!</p>
      ) : (
        <div className="space-y-8">
          {docs.map((doc) => (
            <article key={doc.slug} className="border-b pb-8">
              <Link href={`/docs/${doc.slug}`}>
                <h2 className="text-2xl font-semibold hover:text-blue-600 transition">
                  {doc.title}
                </h2>
              </Link>
              <p className="text-gray-600 text-sm mt-2">{doc.date}</p>
              <p className="mt-3 text-gray-700">{doc.excerpt}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
