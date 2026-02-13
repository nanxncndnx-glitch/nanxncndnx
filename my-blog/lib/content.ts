import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getContent(contentType: 'posts' | 'books' | 'docs') {
  const contentDirectory = path.join(process.cwd(), contentType);
  
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allContent = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content,
        type: contentType,
      };
    });

  return allContent.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getContentBySlug(contentType: 'posts' | 'books' | 'docs', slug: string) {
  const fullPath = path.join(process.cwd(), contentType, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    content,
    type: contentType,
  };
}
