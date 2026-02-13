export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Who am I</h1>
      
      <div className="prose lg:prose-xl">
        <p className="text-lg leading-relaxed mb-6">
          Hi! I'm [Your Name]. Welcome to my personal space on the internet.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What I do</h2>
        <p className="leading-relaxed mb-6">
          Write about yourself here - your background, interests, what you're working on, etc.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What you'll find here</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Blog:</strong> My thoughts and experiences on various topics</li>
          <li><strong>Books:</strong> Reviews and reflections on books I've read</li>
          <li><strong>Docs:</strong> More serious, in-depth articles and documentation</li>
        </ul>
      </div>
    </div>
  );
}
