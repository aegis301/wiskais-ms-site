import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { getRecentBlogPosts } from '@/data/blog';
import Button from '@/components/Button';

interface BlogSectionProps {
  className?: string;
}

const BlogSection = ({ className = '' }: BlogSectionProps) => {
  const recentPosts = getRecentBlogPosts(3);

  if (recentPosts.length === 0) {
    return null; // Don't render anything if no posts
  }

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Aktuelle Neuigkeiten
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bleiben Sie informiert über die neuesten Entwicklungen, Ankündigungen 
            und Updates aus dem WISKAIS-Netzwerk.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post, index) => (
            <div 
              key={post.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            href="/blog"
            variant="primary"
            size="lg"
          >
            Alle Blog-Beiträge ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
