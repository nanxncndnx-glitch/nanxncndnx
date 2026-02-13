import { getContentBySlug, getContent } from '@/lib/content';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

export async function generateStaticParams() {
  const docs = getContent('docs');
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function Doc({ params }: { params: { slug: string } }) {
  const doc = getContentBySlug('docs', params.slug);
  const processedContent = await remark().use(html).process(doc.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <Link href="/docs" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to Docs
      </Link>
      
      <article>
        <h1 className="text-4xl font-bold mb-2">{doc.title}</h1>
        <p className="text-gray-600 mb-8">{doc.date}</p>
        <div 
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}
