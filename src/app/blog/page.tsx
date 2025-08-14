import { Metadata } from 'next';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { getPublishedBlogPosts, getAllBlogCategories, getAllBlogTags } from '@/data/blog';
import { BlogCategory } from '@/types/common';

export const metadata: Metadata = {
  title: 'Blog | WISKAIS',
  description: 'Aktuelle Neuigkeiten, Ankündigungen und Updates aus dem WISKAIS-Netzwerk. Bleiben Sie informiert über Veranstaltungen, Partnerschaften und Entwicklungen in der Anästhesiologie.',
  keywords: ['WISKAIS', 'Blog', 'News', 'Ankündigungen', 'Anästhesiologie', 'Intensivmedizin', 'Weiterbildung', 'Updates'],
};

export default function BlogPage() {
  const allPosts = getPublishedBlogPosts();
  const featuredPost = allPosts[0]; // Most recent post as featured
  const regularPosts = allPosts.slice(1);
  const categories = getAllBlogCategories();
  const tags = getAllBlogTags();

  const getCategoryLabel = (category: BlogCategory) => {
    switch (category) {
      case 'news':
        return 'Neuigkeiten';
      case 'events':
        return 'Veranstaltungen';
      case 'announcements':
        return 'Ankündigungen';
      case 'updates':
        return 'Updates';
      default:
        return 'Allgemein';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              WISKAIS Blog
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Aktuelle Neuigkeiten, Ankündigungen und Updates aus dem WISKAIS-Netzwerk. 
              Bleiben Sie informiert über Veranstaltungen, Partnerschaften und Entwicklungen 
              in der Anästhesiologie und Intensivmedizin.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                    Neuester Beitrag
                  </span>
                </div>
                <BlogCard post={featuredPost} variant="featured" />
              </div>
            )}

            {/* Regular Posts Grid */}
            {regularPosts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Weitere Beiträge
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {regularPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {allPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Noch keine Beiträge verfügbar
                </h3>
                <p className="text-gray-600">
                  Schauen Sie bald wieder vorbei für aktuelle Neuigkeiten und Updates.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Kategorien
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/blog/category/${category}`}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      {getCategoryLabel(category)}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Beliebte Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 12).map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Newsletter abonnieren
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Erhalten Sie die neuesten Blog-Beiträge und Ankündigungen direkt in Ihr Postfach.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Abonnieren
                  </button>
                </form>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Schnellzugriff
                </h3>
                <div className="space-y-2">
                  <Link
                    href="/events"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Alle Veranstaltungen
                  </Link>
                  <Link
                    href="/calendar"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Veranstaltungskalender
                  </Link>
                  <Link
                    href="/registration"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Anmeldung
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    → Kontakt
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
