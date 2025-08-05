'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use, useEffect, useRef } from 'react';

import { getProjectBySlug, getRelatedProjects } from '@/data/portfolio';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function PortfolioItemPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const project = getProjectBySlug(resolvedParams.slug);
  const relatedProjects = getRelatedProjects(resolvedParams.slug);

  // Refs for animations
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLDivElement>(null);

  if (!project) {
    notFound();
  }

  useEffect(() => {
    // Check if device is mobile
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      return; // Skip animations on mobile
    }

    // Hero section animations
    const heroTl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    // Set initial states
    gsap.set([heroRef.current, imageRef.current], { opacity: 0 });
    gsap.set(heroRef.current, { y: 100 });
    gsap.set(imageRef.current, { scale: 0.8, y: 50 });

    // Animate hero elements
    heroTl
      .to(heroRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
      })
      .to(
        imageRef.current,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
        },
        '-=0.6'
      );

    // Content sections scroll animations
    const sections = [
      contentRef.current,
      featuresRef.current,
      testimonialRef.current,
      relatedRef.current,
    ];

    sections.forEach((section, index) => {
      if (section) {
        gsap.set(section, { opacity: 0, y: 50 });

        ScrollTrigger.create({
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          onEnter: () => {
            gsap.to(section, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: 'expo.out',
            });
          },
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Hero Section */}
      <section className='relative pt-20 pb-12 px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Back Button */}
          <Link
            href='/portfolio'
            className='inline-flex items-center gap-2 text-[#cccccc] hover:text-white transition-colors mb-8'
          >
            <ArrowLeft className='w-4 h-4' />
            Back to Portfolio
          </Link>

          <div ref={heroRef} className='text-center mb-12'>
            <Badge className='bg-[#131315] text-white font-medium px-6 py-2 rounded-[100px] border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-6'>
              {project.category}
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight md:leading-[76.8px] [font-family:'Inter',Helvetica] mb-6">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl font-medium text-[#cccccc] leading-relaxed [font-family:'Instrument_Sans',Helvetica] max-w-4xl mx-auto mb-8">
              {project.description}
            </p>

            <div className='flex flex-wrap justify-center gap-2 mb-8'>
              {project.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant='outline'
                  className='bg-[#1a1a1a] text-[#cccccc] border-[#333] px-3 py-1.5 hover:bg-[#2a2a2a] hover:border-[#555] transition-all duration-300'
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className='flex flex-wrap justify-center gap-4'>
              {project.liveUrl && (
                <Button
                  asChild
                  className='bg-white text-black hover:bg-gray-200 transition-colors'
                >
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ExternalLink className='w-4 h-4 mr-2' />
                    View Live Project
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  asChild
                  variant='outline'
                  className='border-[#333] text-white hover:bg-[#1a1a1a] hover:border-[#555] transition-all'
                >
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className='w-4 h-4 mr-2' />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div ref={imageRef} className='relative'>
            <div className='relative rounded-xl overflow-hidden bg-white'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-auto object-contain'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      {project.detailedDescription && (
        <section ref={contentRef} className='py-16 px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 [font-family:'Inter',Helvetica]">
              About This Project
            </h2>
            <p className="text-lg text-[#cccccc] leading-relaxed [font-family:'Instrument_Sans',Helvetica]">
              {project.detailedDescription}
            </p>
          </div>
        </section>
      )}

      {/* Features, Challenges, Results */}
      {(project.features || project.challenges || project.results) && (
        <section ref={featuresRef} className='py-16 px-4 bg-[#0a0a0a]'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* Features */}
              {project.features && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 [font-family:'Inter',Helvetica]">
                    Key Features
                  </h3>
                  <ul className='space-y-3'>
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-[#cccccc] leading-relaxed [font-family:'Instrument_Sans',Helvetica] flex items-start"
                      >
                        <span className='w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 [font-family:'Inter',Helvetica]">
                    Challenges Solved
                  </h3>
                  <ul className='space-y-3'>
                    {project.challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="text-[#cccccc] leading-relaxed [font-family:'Instrument_Sans',Helvetica] flex items-start"
                      >
                        <span className='w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0' />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Results */}
              {project.results && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 [font-family:'Inter',Helvetica]">
                    Results Achieved
                  </h3>
                  <ul className='space-y-3'>
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="text-[#cccccc] leading-relaxed [font-family:'Instrument_Sans',Helvetica] flex items-start"
                      >
                        <span className='w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0' />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section ref={testimonialRef} className='py-16 px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 [font-family:'Inter',Helvetica]">
              Client Testimonial
            </h2>
            <Card className='bg-[#111111] border border-[#333] rounded-xl p-8'>
              <CardContent className='p-0'>
                <blockquote className="text-lg md:text-xl text-[#cccccc] leading-relaxed [font-family:'Instrument_Sans',Helvetica] mb-6 italic">
                  "{project.testimonial.message}"
                </blockquote>
                <div className='flex items-center justify-center gap-4'>
                  {project.testimonial.image && (
                    <img
                      src={project.testimonial.image}
                      alt={project.testimonial.name}
                      className='w-12 h-12 rounded-full object-cover'
                    />
                  )}
                  <div className='text-left'>
                    <div className="font-semibold text-white [font-family:'Inter',Helvetica]">
                      {project.testimonial.name}
                    </div>
                    <div className="text-[#888] [font-family:'Instrument_Sans',Helvetica]">
                      {project.testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section ref={relatedRef} className='py-16 px-4 bg-[#0a0a0a]'>
          <div className='max-w-6xl mx-auto'>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center [font-family:'Inter',Helvetica]">
              Related Projects
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {relatedProjects.map((relatedProject, index) => (
                <Link key={index} href={`/portfolio/${relatedProject.slug}`}>
                  <Card className='bg-[#111111] border border-[#333] rounded-xl overflow-hidden group hover:border-[#555] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]'>
                    <div className='relative h-48 overflow-hidden'>
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className='w-full h-full object-contain bg-white group-hover:scale-110 transition-transform duration-500'
                      />
                      <Badge className='absolute top-3 left-3 bg-white text-black text-xs px-2 py-1'>
                        {relatedProject.category}
                      </Badge>
                    </div>
                    <CardContent className='p-4'>
                      <h3 className="text-lg font-bold text-white mb-2 [font-family:'Inter',Helvetica] group-hover:text-[#f8f8f8] transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className='text-sm text-[#cccccc] leading-relaxed line-clamp-2'>
                        {relatedProject.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
