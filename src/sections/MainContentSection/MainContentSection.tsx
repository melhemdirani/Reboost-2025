import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

import { portfolioProjects } from '@/data/portfolio';
gsap.registerPlugin(ScrollTrigger);
import ArrowButton from '@/components/ui/arrowButton';
import { Card, CardContent } from '@/components/ui/card';

// import video from "@/assets/videos/call_center.mov";

export const MainContentSection = () => {
  // Hero section features
  const heroFeatures = [
    'AI-powered',
    '24/7',
    'No Human Errors',
    'Proven to Boost Revenue',
  ];
  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '3x', label: 'Faster Development' },
    { number: '24/7', label: 'Support Available' },
  ];
  // What We Deliver features
  const guestFeatures = [
    {
      icon: '/0zuownoojo6acuzyodxxddhta-svg.svg',
      title: 'Intelligent Product Platforms',
      description:
        'Launch scalable SaaS products with built-in analytics, automation, and AI.',
    },
    {
      icon: '/vkuzshzsceadkcpwl3cjwsa2etk-svg.svg',
      title: 'Seamless User Experiences',
      description:
        'UI/UX design that delights users and drives engagement across web and mobile.',
    },
    {
      icon: '/cwltqb9f2r4v1vwfjwhxl7pkw-svg.svg',
      title: 'End-to-End Engineering',
      description:
        'From backend APIs to frontend apps, we architect, build, and ship production-grade systems.',
    },
    {
      icon: '/tgzpyi3dkurzht1so7c0gzkgode-svg.svg',
      title: 'Agile Collaboration',
      description:
        'Transparent process, rapid iterations, and a team that feels like your own.',
    },
  ];

  // Refs for guestFeatures cards
  const guestCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const whatWeDeliverSectionRef = useRef<HTMLDivElement>(null);

  // Our Capabilities
  const adminFeatures = [
    {
      icon: '/x9vc1dq5dvjs11lr19ms1dbnzs-svg.svg',
      title: 'Modular Architecture',
      width: 246,
    },
    {
      icon: '/6hl73g12bphpbse40pgqmarkw-svg.svg',
      title: 'Custom CMS & Dashboards',
      width: 226,
    },
    {
      icon: '/l8yny4qzagajpmblbw4y3iqqzw-svg.svg',
      title: 'Robust Backend Systems',
      width: 239,
    },
    {
      icon: '/f0nynykb7pn8s3akzfs9uwiw6r0-svg.svg',
      title: 'Mobile & Web Apps',
      width: 296,
    },
  ];

  // Stats cards
  const statsCards = [
    {
      value: 'Flexible Engagements',
      description: 'No lock-ins. Scale your team and scope as you grow.',
    },
    {
      value: '+20% Faster Launch',
      description:
        'Accelerated delivery with proven processes and senior talent.',
    },
    {
      value: 'Full-Stack Expertise',
      description:
        'Backend, frontend, DevOps, AI, and UI/UX—all under one roof.',
    },
    {
      value: '95% Client Retention',
      description:
        'Trusted by startups and enterprises for long-term partnerships.',
    },
  ];

  // Wild GSAP animation for the entire hero section
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  // Refs for animated portfolio cards
  const portfolioCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const portfolioSectionRef = useRef<HTMLDivElement>(null);
  // Animate portfolio cards in cool way on scroll (disabled on mobile for performance)
  useEffect(() => {
    // Only animate on desktop (width >= 768px) to improve mobile performance
    if (
      typeof window !== 'undefined' &&
      window.innerWidth >= 768 &&
      portfolioCardRefs.current.length
    ) {
      portfolioCardRefs.current.forEach((card, i) => {
        if (!card) return;
        const fromX = i % 2 === 0 ? -120 : 120;
        const fromY = 80 + i * 10;
        gsap.set(card, {
          x: fromX,
          y: fromY,
          opacity: 0,
          scale: 0.92,
          rotate: i % 2 === 0 ? -6 : 6,
        });
        ScrollTrigger.create({
          trigger: card,
          start: 'top 80%',
          end: 'top 20%',
          onEnter: () => {
            gsap.to(card, {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 2,
              ease: 'expo.out',
              overwrite: true,
            });
          },
          onLeave: () => {
            gsap.to(card, {
              x: fromX,
              y: fromY,
              opacity: 0,
              scale: 0.92,
              rotate: i % 2 === 0 ? -6 : 6,
              duration: 0.8,
              ease: 'expo.in',
              overwrite: true,
            });
          },
          onEnterBack: () => {
            gsap.to(card, {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 1.1,
              ease: 'expo.out',
              overwrite: true,
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              x: fromX,
              y: fromY,
              opacity: 0,
              scale: 0.92,
              rotate: i % 2 === 0 ? -6 : 6,
              duration: 0.8,
              ease: 'expo.in',
              overwrite: true,
            });
          },
        });
      });
    } else if (portfolioCardRefs.current.length) {
      // Remove transforms for mobile/tablet
      portfolioCardRefs.current.forEach((card) => {
        if (card) {
          gsap.set(card, { clearProps: 'all' });
        }
      });
    }
  }, []);
  useEffect(() => {
    // Animate guestFeatures cards from corners on scroll
    if (guestCardRefs.current.length && whatWeDeliverSectionRef.current) {
      guestCardRefs.current.forEach((card, i) => {
        if (!card) return;
        // Start offscreen: even index from bottom-left, odd from bottom-right
        const fromX =
          i % 2 === 0 ? -window.innerWidth * 0.4 : window.innerWidth * 0.4;
        const fromY = window.innerHeight * 0.4;
        gsap.set(card, { x: fromX, y: fromY, opacity: 0, scale: 0.85 });
      });
      gsap.to(guestCardRefs.current, {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.1,
        stagger: 0.13,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: whatWeDeliverSectionRef.current,
          start: 'top 70%',
          end: 'top 0%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    const tl = gsap.timeline({ defaults: { ease: 'expo.inOut' } });
    // Initial states
    gsap.set(
      [
        headlineRef.current,
        subheadlineRef.current,
        buttonRef.current,
        heroImgRef.current,
      ],
      { opacity: 0 }
    );
    gsap.set(headlineRef.current, {
      y: 120,
      skewX: 30,
      scale: 0.7,
      filter: 'blur(12px) hue-rotate(120deg)',
    });
    gsap.set(subheadlineRef.current, {
      y: 80,
      scale: 0.8,
      filter: 'blur(8px) grayscale(1)',
    });
    gsap.set(buttonRef.current, {
      y: 60,
      scale: 0.6,
      rotate: -30,
      filter: 'blur(6px)',
    });
    gsap.set(heroImgRef.current, {
      x: 200,
      y: -100,
      scale: 1.3,
      rotate: 25,
      filter: 'blur(16px) grayscale(1)',
    });

    tl.to(heroImgRef.current, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      filter: 'blur(0px) grayscale(0)',
      duration: 0.7,
      ease: 'power2.out',
    })
      .to(
        headlineRef.current,
        {
          opacity: 1,
          y: 0,
          skewX: 0,
          scale: 1,
          filter: 'blur(0px) hue-rotate(0deg)',
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.4'
      )
      .to(
        subheadlineRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px) grayscale(0)',
          duration: 0.5,
        },
        '-=0.4'
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          filter: 'blur(0px)',
          duration: 1.2,
        },
        '-=0.6'
      );

    // Scroll-triggered zoom out to 4 corners
    if (heroSectionRef.current) {
      gsap.set(heroSectionRef.current, { transformOrigin: '50% 50%' });
      ScrollTrigger.create({
        trigger: heroSectionRef.current,
        start: 'top top',
        end: '+=400',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          // 4 corners: top-left, top-right, bottom-left, bottom-right
          // We'll use scale and translate for a split effect
          const scale = 1 - 0.5 * progress;
          const x = 0,
            y = 0;
          // Move to corners as progress increases
          // if (progress > 0.25) {
          //   // Top-left
          //   x = -window.innerWidth * 0.25 * progress;
          //   y = -window.innerHeight * 0.25 * progress;
          // }
          // if (progress > 0.5) {
          //   // Top-right
          //   x = window.innerWidth * 0.25 * (progress - 0.5);
          //   y = -window.innerHeight * 0.25 * (progress - 0.5);
          // }
          // if (progress > 0.75) {
          //   // Bottom-right
          //   x = window.innerWidth * 0.25 * (progress - 0.75);
          //   y = window.innerHeight * 0.25 * (progress - 0.75);
          // }
          // Animate
          gsap.to(heroSectionRef.current, {
            scale,
            x,
            y,
            filter: `blur(${10 * progress}px)`,
            duration: 0.1,
            overwrite: true,
          });
        },
        // onLeave: () => {
        //   gsap.to(heroSectionRef.current, {
        //     scale: 0.5,
        //     x: window.innerWidth * 0.25,
        //     y: window.innerHeight * 0.25,
        //     filter: "blur(10px)",
        //     duration: 0.4,
        //     overwrite: true,
        //   });
        // },
        onEnterBack: () => {
          gsap.to(heroSectionRef.current, {
            scale: 1,
            x: 0,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.4,
            overwrite: true,
          });
        },
      });
    }
  }, []);

  return (
    <section className='w-full max-w-[1320px] mx-auto '>
      {/* Hero Section */}
      <div
        ref={heroSectionRef}
        className='relative w-full max-w-[95vw] mx-auto py-4 md:py-0 flex flex-col-reverse md:flex-row justify-center items-center h-auto min-h-[60vh] md:h-[90vh] overflow-hidden'
      >
        <div className='flex flex-col items-start justify-center w-full md:w-auto h-auto md:h-full z-[49] px-4 md:px-0 mt-4 md:mt-8'>
          <div className='text-left mb-4 md:mb-10 max-w-full md:max-w-[700px]'>
            <h1
              ref={headlineRef}
              className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-[60.9px] z-[999] leading-tight md:leading-[76.8px] text-white font-['Inter',Helvetica] mb-3 md:mb-10"
            >
              Custom Software. Built to Scale.
            </h1>

            <div
              ref={subheadlineRef}
              className="font-medium text-sm sm:text-base md:text-xl text-[#94969d] font-['Instrument_Sans',Helvetica] leading-relaxed mb-6 md:mb-0"
            >
              We partner with forward-thinking businesses to design and develop
              scalable SaaS platforms and intelligent systems — combining speed
              with long-term reliability.
            </div>
          </div>
          <a ref={buttonRef} href='/contact'>
            <ArrowButton text='Let’s Build Together' />
          </a>
        </div>

        <div
          ref={heroImgRef}
          className='relative w-full max-w-[280px] sm:max-w-[350px] md:w-[450px] h-[200px] sm:h-[260px] md:h-[506px] bg-[url(/hero.png)] bg-contain bg-center bg-no-repeat mx-auto md:mx-0 mb-4 md:mb-0'
        >
          <div className='relative h-[120px] sm:h-[180px] md:h-[400px] top-[70px] sm:top-[90px] md:top-[197px] [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]'>
            <div className='relative w-full h-[60px] sm:h-[80px] md:w-[450px] md:h-[184px] top-[50px] sm:top-[90px] md:top-[196px] left-[4px] md:left-[9px] [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.94)_43%,rgba(0,0,0,1)_81%)]' />
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <section className='pb-12 md:pb-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <h3 className="text-2xl sm:text-3xl md:text-[48px] font-bold text-white mb-1 md:mb-2 [font-family:'Inter',Helvetica]">
                  {stat.number}
                </h3>
                <p className='text-[#cccccc] font-medium text-xs sm:text-sm md:text-base'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <div
        ref={whatWeDeliverSectionRef}
        className='w-full flex flex-col md:flex-row md:items-center mb-12 md:mb-32 gap-6 md:gap-8 max-w-[90vw] md:max-w-[100vw] mx-auto'
      >
        <div className='flex-1 pl-0'>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-[46.1px] leading-tight md:leading-[57.6px] text-white font-['Inter',Helvetica] mb-6 md:mb-12 px-4 md:px-0">
            What We Deliver
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
            {guestFeatures.map((feature, index) => (
              <div
                key={index}
                ref={(el) => {
                  guestCardRefs.current[index] = el;
                }}
                style={{ willChange: 'transform, opacity' }}
              >
                <Card className='rounded-[20px] border border-solid border-[rgba(255,255,255,.4)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-transparent transition-transform duration-300 ease-linear hover:scale-102'>
                  <CardContent className='p-4 md:p-6'>
                    <div className='flex items-center'>
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className='w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-4'
                      />
                      <div className='font-normal text-base md:text-[18.6px] leading-[24px] md:leading-[30px] text-white whitespace-normal'>
                        {feature.title}
                      </div>
                    </div>
                    <p className="mt-3 md:mt-5 font-medium text-sm md:text-lg leading-[22px] md:leading-[27px] text-[#94969d] font-['Instrument_Sans',Helvetica]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id='admin' />

      {/* Our Capabilities Section */}
      <div className='w-full max-w-[90vw] mx-auto flex items-center justify-center flex-col md:flex-row mt-12 md:mt-32 mb-12 md:mb-32 gap-6 md:gap-8'>
        <div className='w-full md:w-[599px] px-4 md:px-0'>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-[58px] leading-tight md:leading-[69.6px] text-white font-['Bricolage_Grotesque',Helvetica] mb-6 md:mb-8">
            End-to-End Software. Built Your Way.
          </h2>

          <div className='flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10'>
            {adminFeatures.map((feature, index) => (
              <Card
                key={index}
                className='rounded-[14px] border border-solid border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] px-[8px] md:px-[10px] bg-transparent w-full sm:w-auto'
              >
                <CardContent className='p-0 flex items-center h-[50px] md:h-[60px]'>
                  <img
                    alt='Feature Icon'
                    src={feature.icon}
                    className='w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3'
                  />
                  <div className="font-medium text-sm md:text-lg text-white text-center leading-[20px] md:leading-[27px] whitespace-nowrap font-['Inter',Helvetica] ml-1">
                    {feature.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <a href='/services'>
            <ArrowButton text='Our Services' />
          </a>
        </div>

        <img
          className='w-full max-w-[400px] md:w-[490px] h-[300px] sm:h-[400px] md:h-[459px] object-cover rounded-[20px] shadow-lg mx-auto'
          alt='Admin dashboard'
          src='/clip-path-group-1.png'
        />
      </div>

      {/* Portfolio Preview Section */}
      <div
        ref={portfolioSectionRef}
        className='w-full flex flex-col items-center mb-16 md:mb-24 max-w-[90vw] mx-auto'
      >
        <h2 className="font-bold text-2xl sm:text-3xl md:text-[48px] leading-tight md:leading-[58px] text-white text-center font-['Inter',Helvetica] mb-8 md:mb-10 px-4">
          Featured Work
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl w-full mb-6 md:mb-8'>
          {portfolioProjects.slice(0, 4).map((project, i) => (
            <div
              key={project.title}
              ref={(el) => {
                portfolioCardRefs.current[i] = el;
              }}
              style={{
                willChange: 'transform, opacity',
                maxWidth: '90vw',
                margin: '0 auto',
              }}
            >
              <Card className='bg-[#18181b] border border-[#333] rounded-xl overflow-hidden group hover:border-[#555] transition-all duration-300 h-[380px] md:h-[420px] flex flex-col'>
                <div className='relative h-[150px] md:h-[180px] w-full overflow-hidden flex-shrink-0'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                  <span className='absolute top-2 md:top-3 left-2 md:left-3 bg-[#232326] text-[#fff] text-xs font-semibold px-2 md:px-3 py-1 rounded-full border border-[#444] shadow'>
                    {project.category}
                  </span>
                </div>
                <CardContent className='p-4 md:p-6 flex flex-col flex-1'>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2 [font-family:'Inter',Helvetica]">
                    {project.title}
                  </h3>
                  <p className='text-[#cccccc] leading-relaxed mb-3 text-xs md:text-sm line-clamp-3'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4'>
                    {project.tags.map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className='bg-[#232326] text-[#cccccc] border border-[#333] rounded px-1.5 md:px-2 py-0.5 md:py-1 text-xs'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className='mt-auto' />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <a href='/portfolio'>
          <ArrowButton text='See Our Work' />
        </a>
      </div>

      {/* Why ReBoost Section */}
      <div className='w-full max-w-[90vw] mx-auto flex flex-col items-center mt-12 md:mt-32'>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-[52px] leading-tight md:leading-[62.4px] text-white text-center font-['Bricolage_Grotesque',Helvetica] mb-6 md:mb-12 px-4">
          Why ReBoost
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full justify-center px-4'>
          {statsCards.map((stat, index) => (
            <Card
              key={index}
              className='w-full h-[160px] md:h-[190px] rounded-2xl border border-solid border-[#dde5ed] bg-transparent'
            >
              <CardContent className='flex flex-col items-center justify-center pt-4 md:pt-6 h-[160px] md:h-[190px] px-3 md:px-4'>
                <div className="font-semibold text-lg sm:text-xl md:text-[30px] w-full leading-tight text-white text-center font-['Bricolage_Grotesque',Helvetica] mb-3 md:mb-4">
                  {stat.value}
                </div>
                <div className="font-medium text-[rgba(255,255,255,0.7)] text-xs md:text-[14px] text-[#666666] text-center leading-[18px] md:leading-[27px] font-['Inter',Helvetica] whitespace-pre-line">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
