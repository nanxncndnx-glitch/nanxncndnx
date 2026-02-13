import { getContentBySlug, getAllPosts } from '@/lib/content';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const posts = getContent('posts');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getContentBySlug('posts', params.slug);
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <article>
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-600 mb-8">{post.date}</p>
        <div 
          className="prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  );
}
