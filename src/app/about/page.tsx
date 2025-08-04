'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import AboutVisual from '@/app/about/AboutVisual';

import Earth from './earth.png';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  // Refs for team card animations
  const teamCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const teamSectionRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      title: 'Speed & Reliability',
      description:
        'We move fast without compromising quality. Most MVPs are delivered in weeks, not months.',
      icon: (
        <svg
          width='38'
          height='38'
          viewBox='0 0 38 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19 3L6 22H18L15 35L32 14H20L23 3H19Z'
            fill='#FACC15'
            stroke='#FDE047'
            strokeWidth='2'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      title: 'True Partnership',
      description:
        "We don't just code—we collaborate, challenge ideas, and care about your long-term success.",
      icon: (
        <svg
          width='38'
          height='38'
          viewBox='0 0 38 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11 19C11 15.134 14.134 12 18 12C21.866 12 25 15.134 25 19C25 22.866 21.866 26 18 26C14.134 26 11 22.866 11 19Z'
            fill='#38BDF8'
            stroke='#0EA5E9'
            strokeWidth='2'
          />
          <path
            d='M6 32C8.5 28 13.5 28 18 28C22.5 28 27.5 28 30 32'
            stroke='#0EA5E9'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      ),
    },
    {
      title: 'Technical Excellence',
      description:
        'From code reviews to CI/CD pipelines, we ensure every release is production-ready.',
      icon: (
        <svg
          width='38'
          height='38'
          viewBox='0 0 38 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='19'
            cy='19'
            r='10'
            fill='#818CF8'
            stroke='#6366F1'
            strokeWidth='2'
          />
          <path
            d='M19 9V5M19 33V29M29 19H33M5 19H9M27.071 27.071L30 30M8 8L10.929 10.929'
            stroke='#6366F1'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      ),
    },
    {
      title: 'Innovation First',
      description:
        'We integrate cutting-edge AI, automation, and modern tech stacks to keep you ahead.',
      icon: (
        <svg
          width='38'
          height='38'
          viewBox='0 0 38 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='19'
            cy='19'
            r='16'
            fill='#34D399'
            stroke='#10B981'
            strokeWidth='2'
          />
          <path
            d='M19 10V19L25 22'
            stroke='#10B981'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '3x', label: 'Faster Development' },
    { number: '24/7', label: 'Support Available' },
  ];

  const teamMembers = [
    {
      name: 'Melhem El Dirani',
      role: 'Founder & CEO',
      bio: 'Full-stack engineer with 7+ years creating scalable solutions. Leads Reboost in delivering cutting-edge MVPs.',
      image: '/melhem.jpeg',
    },
    {
      name: 'Alissar Almousawi',
      role: 'Head of Marketing',
      bio: 'Marketing strategist with a passion for driving growth through innovative campaigns. Experienced in both B2B and B2C marketing.',
      image: '/alissar.jpeg',
    },
    {
      name: 'Sandra El Abboud',
      role: 'Head of Design',
      bio: 'Creative designer with a focus on user experience and visual storytelling. Transforms complex ideas into intuitive designs.',
      image: '/sandra.jpeg',
    },
    {
      name: 'Ziad Baydoun',
      role: 'Head of Engineering',
      bio: 'Expert in cloud architecture and DevOps. Specializes in building systems that scale from zero to millions of users.',
      image: '/Ziad Baydoun.jpeg',
    },
    {
      name: 'Adnan Sayed',
      role: 'Lead Developer',
      bio: 'Experienced in building high-performance web applications. Passionate about clean code and best practices.',
      image: '/adnan.jpeg',
    },

    {
      name: 'Ruslan Kain',
      role: 'AI/ML Specialist',
      bio: 'AI/ML specialist with a PhD, focused on developing intelligent solutions in natural language processing and computer vision.',
      image: '/ruslan.jpeg',
    },
  ];

  // GSAP animation for team cards from different corners (disabled on mobile)
  useEffect(() => {
    // Check if device is mobile
    const isMobile = window.innerWidth < 768;

    if (isMobile || !teamCardRefs.current.length || !teamSectionRef.current) {
      // On mobile, just set cards to visible without animation
      if (isMobile && teamCardRefs.current.length) {
        teamCardRefs.current.forEach((card) => {
          if (card) {
            gsap.set(card, { x: 0, y: 0, opacity: 1, scale: 1 });
          }
        });
      }
      return;
    }

    teamCardRefs.current.forEach((card, i) => {
      if (!card) return;

      // Start positions from different corners/sides
      let fromX, fromY;
      switch (i % 6) {
        case 0: // Top-left
          fromX = -window.innerWidth * 0.3;
          fromY = -window.innerHeight * 0.2;
          break;
        case 1: // Top-right
          fromX = window.innerWidth * 0.3;
          fromY = -window.innerHeight * 0.2;
          break;
        case 2: // Left
          fromX = -window.innerWidth * 0.4;
          fromY = 0;
          break;
        case 3: // Right
          fromX = window.innerWidth * 0.4;
          fromY = 0;
          break;
        case 4: // Bottom-left
          fromX = -window.innerWidth * 0.3;
          fromY = window.innerHeight * 0.2;
          break;
        case 5: // Bottom-right
          fromX = window.innerWidth * 0.3;
          fromY = window.innerHeight * 0.2;
          break;
        default:
          fromX = 0;
          fromY = window.innerHeight * 0.3;
      }

      gsap.set(card, { x: fromX, y: fromY, opacity: 0, scale: 0.8 });
    });

    gsap.to(teamCardRefs.current, {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 2,
      stagger: 0.15,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: teamSectionRef.current,
        start: 'top 70%',
        end: 'top 0%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div className='min-h-screen bg-black'>
      {/* Hero Section */}
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${Earth.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8) ',
          zIndex: 0,
        }}
        className=' w-full absolute mx-auto py-0 h-[120vh] md:h-[150vh] z-0 '
      />
      <section className='relative py-12 md:py-20 px-4 z-1'>
        <div className='max-w-6xl mx-auto text-center'>
          <Badge className='bg-[#131315] text-white font-medium px-6 md:px-9 py-2 md:py-3 rounded-[100px] border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-6 md:mb-10'>
            <div className='w-4 h-4 md:w-5 md:h-5 mr-2 bg-[url(/about-icon.png)] bg-contain' />
            About Us
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight md:leading-[76.8px] [font-family:'Inter',Helvetica] mb-4 md:mb-6 px-2">
            We Turn Ideas Into
            <br />
            Digital Reality
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        className='py-12 md:py-20 px-4 mt-10 md:mt-20 z-1'
        style={{ zIndex: 999 }}
      >
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center bg-black/30 backdrop-blur-[1px] shadow-[0_20px_40px_rgba(99,102,241,0.1)] rounded-lg p-4 md:p-6 '>
            <div className=''>
              <h2
                id='our-story'
                className=" text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white leading-tight mb-4 md:mb-6 [font-family:'Inter',Helvetica]"
              >
                Our Story
              </h2>

              <div className='space-y-4 md:space-y-6 text-[#cccccc] leading-relaxed text-sm md:text-base'>
                <p>
                  ReBoost started when we noticed a gap in the market—too many
                  businesses had great ideas but struggled to find technical
                  partners who truly understood their vision and could execute
                  quickly without cutting corners.
                </p>

                <p>
                  We built ReBoost to be different. We combine the speed of a
                  startup with the reliability of an enterprise team. Our
                  approach integrates modern AI tools and automation to
                  accelerate development while maintaining the highest code
                  quality standards.
                </p>

                <p>
                  Today, we're proud to be the long-term technical partner for
                  businesses ranging from early-stage startups to established
                  enterprises. Our clients don't just hire us once—they stay
                  with us because we deliver real results and genuinely care
                  about their success.
                </p>
              </div>
            </div>

            <div className='relative group hidden sm:block'>
              <Card className='border-none rounded-xl overflow-hidden transition-all duration-500'>
                <CardContent className='p-6 md:p-8 flex items-center justify-center'>
                  <div className='relative w-full h-60 md:h-80 flex items-center justify-center'>
                    {/* Enhanced SVG representing growth, collaboration & innovation */}
                    <AboutVisual />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-12 md:py-20 px-4' style={{ zIndex: 999 }}>
        <div className='max-w-6xl mx-auto' style={{ zIndex: 999 }}>
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'
            style={{ zIndex: 999 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className='text-center' style={{ zIndex: 999 }}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-1 md:mb-2 [font-family:'Inter',Helvetica]">
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

      {/* Values Section */}
      <section className='py-12 md:py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-8 md:mb-16'>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white leading-tight mb-4 md:mb-6 [font-family:'Inter',Helvetica]">
              What Drives Us
            </h2>
            <p className="text-base md:text-lg font-medium text-[#cccccc] leading-[27px] [font-family:'Instrument_Sans',Helvetica] max-w-2xl mx-auto px-4">
              These core values shape every project we take on and every
              relationship we build.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
            {values.map((value, index) => (
              <Card
                key={index}
                className='bg-[#111111] border border-[#333] rounded-xl group hover:border-[#555] transition-all duration-300'
              >
                <CardContent className='p-4 md:p-8'>
                  <div className='mb-3 md:mb-4 '>{value.icon}</div>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4 [font-family:'Inter',Helvetica]">
                    {value.title}
                  </h3>
                  <p className='text-[#cccccc] leading-relaxed text-sm md:text-base'>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamSectionRef} className='py-12 md:py-20 px-4' id='team'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-8 md:mb-16'>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white leading-tight mb-4 md:mb-6 [font-family:'Inter',Helvetica]">
              Meet The Team
            </h2>
            <p className="text-base md:text-lg font-medium text-[#cccccc] leading-[27px] [font-family:'Instrument_Sans',Helvetica] max-w-2xl mx-auto px-4">
              The experienced professionals behind every successful project.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                ref={(el) => {
                  teamCardRefs.current[index] = el;
                }}
                style={{ willChange: 'transform, opacity' }}
              >
                <Card className='bg-[#111111] border border-[#333] rounded-xl group hover:border-[#555] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]'>
                  <CardContent className='p-4 md:p-6 text-center'>
                    {/* Profile image */}
                    <div className='relative w-24 h-24 md:w-34 md:h-34 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden border-2 border-white/20'>
                      <img
                        src={member.image}
                        alt={member.name}
                        className='w-full h-full object-cover group-hover:scale-125 transition-transform duration-300'
                      />
                    </div>

                    {/* Name */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 [font-family:'Inter',Helvetica]">
                      {member.name}
                    </h3>

                    {/* Role */}
                    <p className='text-[#888] font-medium mb-2 md:mb-3 text-xs md:text-sm'>
                      {member.role}
                    </p>

                    {/* Bio */}
                    <p className='text-xs md:text-sm text-[#cccccc] leading-relaxed'>
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
