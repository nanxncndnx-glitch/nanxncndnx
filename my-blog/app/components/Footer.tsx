export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              GitHub
            </a>
            <a 
              href="mailto:your@email.com"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
