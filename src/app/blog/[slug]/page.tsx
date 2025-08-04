'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

import { getBlogPost, getRelatedPosts } from '@/data/blog';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const post = getBlogPost(slug);
  const relatedPosts = getRelatedPosts(slug, 3);

  if (!post) {
    return (
      <main className='min-h-screen bg-black text-white flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Post Not Found</h1>
          <p className='text-[#cccccc] mb-8'>
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href='/blog'
            className='bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-[#f0f0f0] transition-colors'
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className='min-h-screen bg-black text-white'>
      {/* Hero Section */}
      <section className='w-full max-w-[1320px] mx-auto px-4 py-12'>
        <Link
          href='/blog'
          className='inline-flex items-center text-[#cccccc] hover:text-white transition-colors mb-8'
        >
          <svg
            className='w-4 h-4 mr-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
          Back to Blog
        </Link>

        <div className='max-w-4xl mx-auto'>
          {/* Article Header */}
          <header className='mb-12'>
            <Badge className='bg-[#131315] text-white font-medium px-4 py-2 rounded-full border border-[rgba(255,255,255,.4)] mb-6'>
              {post.category}
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 [font-family:'Inter',Helvetica]">
              {post.title}
            </h1>

            <div className='flex flex-wrap items-center gap-4 text-[#cccccc] mb-8'>
              <div className='flex items-center gap-2'>
                <div className='w-8 h-8 bg-[#333] rounded-full flex items-center justify-center'>
                  <span className='text-xs font-medium'>RB</span>
                </div>
                <span className='font-medium'>{post.author}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Featured Image Placeholder */}
            <div className='w-full h-64 md:h-80 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl flex items-center justify-center mb-8'>
              <div className='text-[#666] text-lg'>Featured Image</div>
            </div>
          </header>

          {/* Article Content */}
          <article className='prose prose-invert prose-lg max-w-none'>
            <div
              className="text-[#cccccc] leading-relaxed [font-family:'Instrument_Sans',Helvetica]"
              style={{
                lineHeight: '1.8',
              }}
            >
              {/* Convert markdown-like content to JSX */}
              {(() => {
                const lines = post.content.split('\n');
                const elements: React.ReactNode[] = [];
                let i = 0;
                let inCodeBlock = false;
                let codeBlockContent: string[] = [];
                let codeBlockLanguage = '';

                while (i < lines.length) {
                  const line = lines[i];

                  if (line.startsWith('```')) {
                    if (!inCodeBlock) {
                      // Starting a code block
                      inCodeBlock = true;
                      codeBlockLanguage = line.slice(3).trim();
                      codeBlockContent = [];
                    } else {
                      // Ending a code block
                      inCodeBlock = false;
                      elements.push(
                        <div
                          key={i}
                          className='bg-[#0a0a0a] border border-[#333] rounded-lg p-4 my-6 overflow-x-auto'
                        >
                          <pre className='text-[#4ade80] text-sm font-mono whitespace-pre-wrap'>
                            <code>{codeBlockContent.join('\n')}</code>
                          </pre>
                        </div>
                      );
                      codeBlockContent = [];
                      codeBlockLanguage = '';
                    }
                  } else if (inCodeBlock) {
                    // Inside a code block
                    codeBlockContent.push(line);
                  } else {
                    // Regular content
                    if (line.startsWith('# ')) {
                      elements.push(
                        <h1
                          key={i}
                          className="text-3xl font-bold text-white mt-12 mb-6 [font-family:'Inter',Helvetica]"
                        >
                          {line.slice(2)}
                        </h1>
                      );
                    } else if (line.startsWith('## ')) {
                      elements.push(
                        <h2
                          key={i}
                          className="text-2xl font-bold text-white mt-10 mb-4 [font-family:'Inter',Helvetica]"
                        >
                          {line.slice(3)}
                        </h2>
                      );
                    } else if (line.startsWith('### ')) {
                      elements.push(
                        <h3
                          key={i}
                          className="text-xl font-bold text-white mt-8 mb-3 [font-family:'Inter',Helvetica]"
                        >
                          {line.slice(4)}
                        </h3>
                      );
                    } else if (line.startsWith('- ')) {
                      elements.push(
                        <li key={i} className='ml-4 mb-2 text-[#cccccc]'>
                          {line.slice(2)}
                        </li>
                      );
                    } else if (line.trim() === '') {
                      elements.push(<br key={i} />);
                    } else {
                      elements.push(
                        <p
                          key={i}
                          className='mb-4 text-[#cccccc] leading-relaxed'
                        >
                          {line}
                        </p>
                      );
                    }
                  }
                  i++;
                }

                return elements;
              })()}
            </div>
          </article>

          {/* Tags */}
          <div className='flex flex-wrap gap-2 mt-12 pt-8 border-t border-[#333]'>
            <span className='text-[#888] font-medium mr-4'>Tags:</span>
            {post.tags.map((tag, index) => (
              <Badge
                key={index}
                className='bg-[#131315] text-[#cccccc] border border-[#333] hover:bg-[#1a1a1a] transition-colors'
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className='w-full max-w-[1320px] mx-auto px-4 py-16 border-t border-[#333]'>
        <h2 className="text-2xl font-bold text-white mb-8 [font-family:'Inter',Helvetica]">
          Related Posts
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {relatedPosts.map((relatedPost) => (
            <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
              <Card className='bg-[#111111] border border-[#333] rounded-xl overflow-hidden group hover:border-[#555] transition-all duration-300 h-full cursor-pointer hover:scale-[1.02]'>
                <div className='relative h-40 w-full overflow-hidden'>
                  <div className='w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center'>
                    <div className='text-[#666] text-sm'>Blog Image</div>
                  </div>
                  <Badge className='absolute top-3 left-3 bg-[#232326] text-white text-xs font-semibold px-3 py-1 rounded-full border border-[#444]'>
                    {relatedPost.category}
                  </Badge>
                </div>

                <CardContent className='p-4'>
                  <div className='flex items-center gap-2 text-xs text-[#888] mb-2'>
                    <span>{relatedPost.date}</span>
                    <span>•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>

                  <h3 className='text-lg font-bold text-white mb-2 group-hover:text-[#ddd] transition-colors line-clamp-2'>
                    {relatedPost.title}
                  </h3>

                  <p className='text-[#cccccc] text-sm line-clamp-2'>
                    {relatedPost.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
