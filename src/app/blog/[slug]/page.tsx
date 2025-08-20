import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPostBySlug, getPublishedBlogPosts, getRecentBlogPosts } from '@/data/blog';
import BlogCard from '@/components/BlogCard';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for the blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog-Beitrag nicht gefunden | WISKAIS',
    };
  }

  return {
    title: `${post.title} | WISKAIS Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: post.featuredImage ? [{ url: post.featuredImage, alt: post.title }] : [],
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getPublishedBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  const recentPosts = getRecentBlogPosts(3);

  if (!post || post.status !== 'published') {
    notFound();
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'news':
        return 'bg-blue-100 text-blue-800';
      case 'events':
        return 'bg-green-100 text-green-800';
      case 'announcements':
        return 'bg-yellow-100 text-yellow-800';
      case 'updates':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Simple markdown-like content renderer
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={index} className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            {paragraph.replace(/\*\*/g, '')}
          </h3>
        );
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('- '));
        return (
          <ul key={index} className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-1">
            {items.map((item, itemIndex) => (
              <li key={itemIndex}>{item.replace('- ', '')}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-6">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-gray-700">
                  Blog
                </Link>
              </li>
              <li>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-gray-900 font-medium" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Featured Image */}
              {post.featuredImage && (
                <div className="relative h-64 md:h-80">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              )}

              <div className="p-8">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {getCategoryLabel(post.category)}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {post.readingTime} Min. Lesezeit
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>

                {/* Author */}
                <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {post.author.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{post.author.name}</div>
                    <div className="text-sm text-gray-600">{post.author.role}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  {renderContent(post.content)}
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/blog/tag/${tag.toLowerCase()}`}
                        className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Related Events */}
                {post.relatedEvents && post.relatedEvents.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Verwandte Veranstaltungen</h3>
                    <div className="space-y-2">
                      {post.relatedEvents.map((eventId, index) => (
                        <Link
                          key={index}
                          href={`/events/${eventId}`}
                          className="block text-blue-600 hover:text-blue-800 text-sm transition-colors"
                        >
                          → Mehr zur Veranstaltung
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Recent Posts */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Weitere Beiträge
                </h3>
                <div className="space-y-4">
                  {recentPosts
                    .filter(p => p.id !== post.id)
                    .slice(0, 3)
                    .map((recentPost) => (
                      <BlogCard
                        key={recentPost.id}
                        post={recentPost}
                        variant="compact"
                      />
                    ))}
                </div>
              </div>

              {/* Back to Blog */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Zurück zum Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
