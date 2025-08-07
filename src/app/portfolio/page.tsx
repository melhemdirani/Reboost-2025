'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { processedPortfolioProjects } from '@/data/portfolio';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  // Refs for enhanced GSAP animations
  const portfolioCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const portfolioSectionRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  const services = [
    'Custom Web Development',
    'Mobile App Development',
    'SaaS Platform Development',
    'AI & Machine Learning Integration',
    'UI/UX Design',
    'DevOps & Cloud Infrastructure',
  ];

  useEffect(() => {
    // Check if device is mobile (screen width < 768px)
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // On mobile, just show elements without animation
      // gsap.set([titleRef.current, subtitleRef.current, badgesRef.current], {
      //   opacity: 1,
      //   y: 0,
      //   scale: 1,
      //   rotationX: 0,
      // });

      // // Set portfolio cards to visible state on mobile
      // portfolioCardRefs.current.forEach((card) => {
      //   if (card) {
      //     gsap.set(card, {
      //       opacity: 1,
      //       x: 0,
      //       y: 0,
      //       scale: 1,
      //       rotate: 0,
      //       skewX: 0,
      //       filter: 'blur(0px) brightness(1)',
      //     });
      //   }
      // });

      return; // Exit early for mobile
    }

    // Desktop animations only
    // Enhanced hero section animation
    const heroTl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    // Initial states
    gsap.set([titleRef.current, subtitleRef.current, badgesRef.current], {
      opacity: 0,
    });
    gsap.set(titleRef.current, { y: 100, scale: 0.8, rotationX: 45 });
    gsap.set(subtitleRef.current, { y: 60, scale: 0.9 });
    gsap.set(badgesRef.current, { y: 40, scale: 0.95 });

    // Animate hero elements
    heroTl
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
      })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
        },
        '-=0.6'
      )
      .to(
        badgesRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
        },
        '-=0.4'
      );

    // Enhanced portfolio cards animation - Row-based approach (Desktop only)
    if (typeof window !== 'undefined' && portfolioCardRefs.current.length) {
      // Group cards into rows of 2
      const rows = [];
      for (let i = 0; i < portfolioCardRefs.current.length; i += 2) {
        rows.push(portfolioCardRefs.current.slice(i, i + 2));
      }

      rows.forEach((rowCards, rowIndex) => {
        rowCards.forEach((card, cardIndex) => {
          if (!card) return;

          // Row-based starting positions
          const isLeftCard = cardIndex === 0;
          const rowOffset = rowIndex * 50; // Slight offset between rows

          let fromX, fromY, fromRotate, fromScale;

          if (isLeftCard) {
            // Left card comes from left
            fromX = -window.innerWidth * 0.4;
            fromY = -100 + rowOffset;
            fromRotate = -10;
            fromScale = 0.8;
          } else {
            // Right card comes from right
            fromX = window.innerWidth * 0.4;
            fromY = -100 + rowOffset;
            fromRotate = 10;
            fromScale = 0.8;
          }

          // Set initial state
          gsap.set(card, {
            x: fromX,
            y: fromY,
            opacity: 0,
            scale: fromScale,
            rotate: fromRotate,
            skewX: fromRotate * 0.2,
            filter: 'blur(6px) brightness(0.4)',
            transformOrigin: 'center center',
          });

          // Create ScrollTrigger for the entire row using the first card as trigger
          if (cardIndex === 0) {
            ScrollTrigger.create({
              trigger: card,
              start: 'top 80%',
              end: 'bottom 20%',
              onEnter: () => {
                // Animate both cards in the row simultaneously
                rowCards.forEach((rowCard, idx) => {
                  if (!rowCard) return;

                  gsap.to(rowCard, {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    skewX: 0,
                    filter: 'blur(0px) brightness(1)',
                    duration: 1.8,
                    delay: idx * 0.1, // Slight stagger within row
                    ease: 'expo.out',
                    overwrite: true,
                    onComplete: () => {
                      // Subtle bounce for visual polish
                      gsap.to(rowCard, {
                        scale: 1.01,
                        duration: 0.2,
                        ease: 'back.out(1.7)',
                        yoyo: true,
                        repeat: 1,
                      });
                    },
                  });
                });
              },
              onEnterBack: () => {
                // Re-enter animation
                rowCards.forEach((rowCard, idx) => {
                  if (!rowCard) return;

                  gsap.to(rowCard, {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    skewX: 0,
                    filter: 'blur(0px) brightness(1)',
                    duration: 1.2,
                    delay: idx * 0.08,
                    ease: 'expo.out',
                    overwrite: true,
                  });
                });
              },
              onLeaveBack: () => {
                // Exit back animation
                rowCards.forEach((rowCard, idx) => {
                  if (!rowCard) return;

                  const isLeft = idx === 0;
                  const exitX = isLeft
                    ? -window.innerWidth * 0.4
                    : window.innerWidth * 0.4;
                  const exitRotate = isLeft ? -10 : 10;

                  gsap.to(rowCard, {
                    x: exitX,
                    y: -100 + rowIndex * 50,
                    opacity: 0,
                    scale: 0.8,
                    rotate: exitRotate,
                    skewX: exitRotate * 0.2,
                    filter: 'blur(6px) brightness(0.4)',
                    duration: 0.8,
                    delay: (1 - idx) * 0.05, // Reverse order for exit
                    ease: 'expo.in',
                    overwrite: true,
                  });
                });
              },
            });
          }

          // Individual hover animations (Desktop only)
          const cardElement = card;
          if (cardElement) {
            cardElement.addEventListener('mouseenter', () => {
              gsap.to(cardElement, {
                scale: 1.03,
                rotate: 0,
                filter: 'blur(0px) brightness(1.1)',
                duration: 0.3,
                ease: 'power2.out',
              });
            });

            cardElement.addEventListener('mouseleave', () => {
              gsap.to(cardElement, {
                scale: 1,
                rotate: 0,
                filter: 'blur(0px) brightness(1)',
                duration: 0.3,
                ease: 'power2.out',
              });
            });
          }
        });
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className='min-h-screen bg-black'>
      {/* Enhanced Hero Section */}
      <section
        ref={heroSectionRef}
        className='relative py-12 md:py-20 px-4 overflow-hidden'
      >
        <div className='max-w-6xl mx-auto text-center'>
          <Badge className='bg-[#131315] text-white font-medium px-6 md:px-9 py-2 md:py-3 rounded-[100px] border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-8 md:mb-10 text-sm md:text-base'>
            <div className='w-4 h-4 md:w-5 md:h-5 mr-2 bg-[url(/portfolio.png)] bg-contain' />
            Portfolio
          </Badge>

          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight md:leading-[76.8px] [font-family:'Inter',Helvetica] mb-4 md:mb-6 px-2"
            style={{ transformStyle: 'preserve-3d' }}
          >
            Our Work Speaks
            <br />
            For Itself
          </h1>

          <p
            ref={subtitleRef}
            className="text-base md:text-lg font-medium text-[#cccccc] leading-[24px] md:leading-[27px] [font-family:'Instrument_Sans',Helvetica] max-w-3xl mx-auto mb-8 md:mb-12 px-4"
          >
            From startups to enterprises, we've helped businesses across
            industries bring their digital visions to life. Explore our
            portfolio of successful projects and see how we can transform your
            ideas into reality.
          </p>

          <div
            ref={badgesRef}
            className='flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16 px-4'
          >
            {services.map((service, index) => (
              <Badge
                key={index}
                variant='outline'
                className='bg-[#1a1a1a] text-[#cccccc] border-[#333] px-3 md:px-4 py-1.5 md:py-2 hover:bg-[#2a2a2a] hover:border-[#555] transition-all duration-300 text-xs md:text-sm'
                style={{
                  animationDelay: `${index * 0.1}s`,
                  willChange: 'transform',
                }}
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Grid */}
      <section ref={portfolioSectionRef} className='py-12 md:py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12'>
            {processedPortfolioProjects.map((project, index) => (
              <div
                key={index}
                ref={(el) => {
                  portfolioCardRefs.current[index] = el;
                }}
                style={{
                  willChange: 'transform, opacity, filter',
                  transformStyle: 'preserve-3d',
                }}
              >
                <Link href={`/portfolio/${project.slug}`}>
                  <Card className='bg-[#111111] h-full border border-[#333] rounded-xl overflow-hidden group md:hover:border-[#555] transition-all duration-500 md:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] cursor-pointer'>
                    <div className='relative h-48 sm:h-64 md:h-80 overflow-hidden'>
                      <img
                        src={project.image}
                        alt={project.title}
                        className='w-full h-full object-contain bg-white md:group-hover:scale-110 transition-transform duration-700 ease-out'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:group-hover:from-black/40 transition-all duration-500' />
                      <Badge className='absolute top-3 md:top-4 left-3 md:left-4 bg-white text-black md:group-hover:bg-[#f0f0f0] transition-colors duration-300 text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5'>
                        {project.category}
                      </Badge>
                    </div>

                    <CardContent className='p-4 md:p-6'>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 [font-family:'Inter',Helvetica] md:group-hover:text-[#f8f8f8] transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>

                      <p className='text-sm md:text-base text-[#cccccc] leading-relaxed mb-3 md:mb-4 md:group-hover:text-[#e0e0e0] transition-colors duration-300'>
                        {project.description}
                      </p>

                      <div className='flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6'>
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant='outline'
                            className='bg-[#1a1a1a] text-[#888] border-[#333] text-xs px-2 py-0.5 md:px-2.5 md:py-1 md:group-hover:bg-[#2a2a2a] md:group-hover:border-[#444] md:group-hover:text-[#aaa] transition-all duration-300'
                            style={{
                              animationDelay: `${tagIndex * 0.05}s`,
                            }}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Enhanced interaction indicator */}
                      <div className='opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 text-xs md:text-sm text-[#888] italic'>
                        View project details →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
