import Link from 'next/link';
import { getContent } from '@/lib/content';

export default function Blog() {
  const posts = getContent('posts');

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      {posts.length === 0 ? (
        <p className="text-gray-600">No blog posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-8">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold hover:text-blue-600 transition">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 text-sm mt-2">{post.date}</p>
              <p className="mt-3 text-gray-700">{post.excerpt}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
