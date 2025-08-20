import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/common';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

const BlogCard = ({ post, variant = 'default', className = '' }: BlogCardProps) => {
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

  if (variant === 'compact') {
    return (
      <Link 
        href={`/blog/${post.slug}`}
        className={`group block p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 ${className}`}
      >
        <div className="flex items-start gap-4">
          {post.featuredImage && (
            <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                {getCategoryLabel(post.category)}
              </span>
              <span className="text-xs text-gray-500">{formatDate(post.publishedAt)}</span>
            </div>
            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              <span className="line-clamp-2">{post.title}</span>
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              <span className="line-clamp-2">{post.excerpt}</span>
            </p>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link 
        href={`/blog/${post.slug}`}
        className={`group block bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
      >
        {post.featuredImage && (
          <div className="relative h-64 w-full">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)} mb-2`}>
                {getCategoryLabel(post.category)}
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                <span className="line-clamp-2">{post.title}</span>
              </h2>
            </div>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span>{post.author.name}</span>
            </div>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readingTime} Min. Lesezeit</span>
          </div>
          <p className="text-gray-700">
            <span className="line-clamp-3">{post.excerpt}</span>
          </p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700 flex items-center">
              Weiterlesen
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className={`group block bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden ${className}`}
    >
      {post.featuredImage && (
        <div className="relative h-48 w-full">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
              {getCategoryLabel(post.category)}
            </span>
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-gray-600">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <span>{post.author.name}</span>
          </div>
          <span>•</span>
          <span>{formatDate(post.publishedAt)}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          <span className="line-clamp-2">{post.title}</span>
        </h3>
        <p className="text-gray-600 mb-4">
          <span className="line-clamp-3">{post.excerpt}</span>
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="inline-block bg-gray-100 text-gray-500 px-2 py-1 rounded-md text-xs">
                +{post.tags.length - 2}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-500">{post.readingTime} Min.</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
