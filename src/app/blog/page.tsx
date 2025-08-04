'use client';

import Link from 'next/link';
import React from 'react';

import { blogPosts, categories, getBlogPostsByCategory } from '@/data/blog';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [filteredPosts, setFilteredPosts] = React.useState(blogPosts);

  React.useEffect(() => {
    setFilteredPosts(getBlogPostsByCategory(selectedCategory));
  }, [selectedCategory]);

  return (
    <main className='min-h-screen bg-black text-white'>
      <section className='w-full max-w-[1320px] mx-auto px-4 py-20'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <Badge className='bg-[#131315] text-white font-medium px-6 md:px-9 py-3 rounded-[100px] border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-6'>
            <div className='w-5 h-5 mr-2 bg-[url(/blog-icon.png)] bg-contain' />
            Blog
          </Badge>

          <h1 className="text-4xl md:text-[54.4px] font-bold text-white leading-tight md:leading-[69.6px] [font-family:'Inter',Helvetica] mb-6">
            Insights & Innovation
          </h1>

          <p className="text-lg md:text-xl font-medium text-[#cccccc] leading-relaxed [font-family:'Instrument_Sans',Helvetica] max-w-3xl mx-auto">
            Stay ahead with the latest trends, best practices, and insights from
            our development experts. Learn how to build better software, faster.
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap gap-3 mb-12 justify-center'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-[#131315] text-white border border-[rgba(255,255,255,.4)] hover:bg-[#1a1a1a]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className='bg-[#111111] border border-[#333] rounded-xl overflow-hidden group hover:border-[#555] transition-all duration-300 h-full cursor-pointer hover:scale-[1.02]'>
                <div className='relative h-48 w-full overflow-hidden'>
                  <div className='w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center'>
                    <div className='text-[#666] text-sm'>Blog Image</div>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                  <Badge className='absolute top-3 left-3 bg-[#232326] text-white text-xs font-semibold px-3 py-1 rounded-full border border-[#444]'>
                    {post.category}
                  </Badge>
                </div>

                <CardContent className='p-6'>
                  <div className='flex items-center gap-2 text-sm text-[#888] mb-3'>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>

                  <h3 className='text-xl font-bold text-white mb-3 group-hover:text-[#ddd] transition-colors line-clamp-2'>
                    {post.title}
                  </h3>

                  <p className='text-[#cccccc] leading-relaxed mb-4 text-sm line-clamp-3'>
                    {post.excerpt}
                  </p>

                  <div className='flex flex-wrap gap-2'>
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className='bg-[#232326] text-[#cccccc] border border-[#333] rounded px-2 py-1 text-xs'
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className='text-[#888] text-xs flex items-center'>
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className='text-center mt-12'>
          <button className='bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-[#f0f0f0] transition-colors duration-300'>
            Load More Posts
          </button>
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
