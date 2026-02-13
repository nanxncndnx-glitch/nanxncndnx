import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition">
            <img src="/logo.png" alt="nanxncndnx" className="h-8" />
          </Link>
          
          <ul className="flex gap-8">
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/books" className="hover:text-blue-600 transition">
                Books
              </Link>
            </li>
            <li>
              <Link href="/docs" className="hover:text-blue-600 transition">
                Docs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
