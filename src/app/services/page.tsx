'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import {
  AIMLVisual,
  DevOpsVisual,
  MobileAppVisual,
  SaasPlatformVisual,
  UIUXVisual,
  WebDevelopmentVisual,
} from '@/components/ServiceVisuals';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ServicesPage() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          });
        },
        { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const services = [
    {
      id: 'web-development',
      slug: 'web-development',
      title: 'Custom Web Development',
      description:
        'Modern, scalable web applications built with cutting-edge technologies. From simple websites to complex enterprise platforms.',
      icon: '🌐',
      visual: WebDevelopmentVisual,
      features: [
        'Responsive design across all devices',
        'Modern frameworks (React, Next.js, Vue)',
        'SEO optimization and performance tuning',
        'Custom CMS integration',
        'Progressive Web App capabilities',
        'API development and integration',
      ],
      technologies: [
        'React',
        'Next.js',
        'Vue.js',
        'Node.js',
        'TypeScript',
        'Tailwind CSS',
      ],
      deliverables: ['Source code', 'Documentation', 'Deployment', 'Training'],
      timeline: '4-12 weeks',
      startingPrice: '$5,000',
      idealFor:
        'Businesses needing modern web presence, e-commerce platforms, or internal tools',
    },
    {
      id: 'mobile-development',
      slug: 'mobile-development',
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
      icon: '📱',
      visual: MobileAppVisual,
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native)',
        'App Store optimization and submission',
        'Push notifications and analytics',
        'Offline functionality',
        'Backend API integration',
      ],
      technologies: [
        'React Native',
        'Swift',
        'Kotlin',
        'Flutter',
        'Firebase',
        'AWS',
      ],
      deliverables: [
        'Mobile apps',
        'Backend APIs',
        'App Store listings',
        'Analytics setup',
      ],
      timeline: '8-16 weeks',
      startingPrice: '$8,000',
      idealFor: 'Startups and enterprises looking to reach mobile audiences',
    },
    {
      title: 'SaaS Platform Development',
      id: 'saas-development',
      slug: 'saas-development',
      description:
        'End-to-end SaaS platforms with multi-tenancy, subscription management, and scalable architecture.',
      icon: '☁️',
      visual: SaasPlatformVisual,
      features: [
        'Multi-tenant architecture',
        'Subscription and billing integration',
        'User management and authentication',
        'Admin dashboards and analytics',
        'API-first development',
        'Scalable cloud infrastructure',
      ],
      technologies: [
        'React',
        'Node.js',
        'PostgreSQL',
        'Redis',
        'AWS',
        'Stripe',
      ],
      deliverables: [
        'Full platform',
        'Admin panel',
        'Payment integration',
        'User onboarding',
      ],
      timeline: '12-24 weeks',
      startingPrice: '$15,000',
      idealFor:
        'Entrepreneurs building scalable software-as-a-service businesses',
    },
    {
      id: 'ai-ml-integration',
      slug: 'ai-ml-integration',
      title: 'AI & Machine Learning Integration',
      description:
        'Intelligent automation and AI-powered features integrated seamlessly into your existing or new applications.',
      icon: '🤖',
      visual: AIMLVisual,
      features: [
        'Custom ML model development',
        'Natural language processing',
        'Computer vision integration',
        'Predictive analytics',
        'Chatbots and virtual assistants',
        'AI-powered recommendations',
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'PyTorch',
        'OpenAI API',
        'Hugging Face',
        'AWS ML',
      ],
      deliverables: [
        'ML models',
        'API endpoints',
        'Training data',
        'Performance metrics',
      ],
      timeline: '6-16 weeks',
      startingPrice: '$10,000',
      idealFor: 'Companies looking to leverage AI for competitive advantage',
    },
    {
      id: 'devops-infrastructure',
      slug: 'devops-infrastructure',
      title: 'DevOps & Cloud Infrastructure',
      description:
        'Robust, scalable cloud infrastructure with automated deployment pipelines and monitoring systems.',
      icon: '⚙️',
      visual: DevOpsVisual,
      features: [
        'CI/CD pipeline setup',
        'Cloud infrastructure (AWS, GCP, Azure)',
        'Container orchestration (Docker, Kubernetes)',
        'Monitoring and logging',
        'Database optimization',
        'Security implementation',
      ],
      technologies: [
        'Docker',
        'Kubernetes',
        'AWS',
        'Terraform',
        'Jenkins',
        'Prometheus',
      ],
      deliverables: [
        'Infrastructure',
        'CI/CD pipelines',
        'Monitoring setup',
        'Documentation',
      ],
      timeline: '4-8 weeks',
      startingPrice: '$7,000',
      idealFor:
        'Teams needing reliable, scalable infrastructure and deployment processes',
    },
    {
      id: 'ui-ux-design',
      slug: 'ui-ux-design',
      title: 'UI/UX Design & Development',
      description:
        'User-centered design that converts visitors into customers, backed by data-driven insights and modern design principles.',
      icon: '🎨',
      visual: UIUXVisual,
      features: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing',
        'Design system creation',
        'Conversion optimization',
      ],
      technologies: [
        'Figma',
        'Adobe Creative Suite',
        'Framer',
        'React',
        'CSS',
        'JavaScript',
      ],
      deliverables: [
        'Design mockups',
        'Prototypes',
        'Design system',
        'Frontend code',
      ],
      timeline: '6-12 weeks',
      startingPrice: '$6,000',
      idealFor:
        'Businesses wanting to improve user experience and conversion rates',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description:
        'We dive deep into your business goals, technical requirements, and user needs to create a comprehensive project roadmap.',
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description:
        'Our team designs the user experience and technical architecture, ensuring scalability and optimal performance.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description:
        'We build your solution using agile methodologies, with continuous testing and regular client feedback loops.',
    },
    {
      step: '04',
      title: 'Launch & Support',
      description:
        "We handle deployment, provide training, and offer ongoing support to ensure your project's continued success.",
    },
  ];

  const pricingTiers = [
    {
      name: 'Startup',
      price: 'Custom Quote',
      description: 'Perfect for early-stage companies',
      features: [
        'MVP development',
        '2-week sprints',
        'Weekly check-ins',
        'Basic support',
        '3 months warranty',
      ],
      highlight: false,
    },
    {
      name: 'Growth',
      price: 'Custom Quote',
      description: 'For scaling businesses',
      features: [
        'Full-featured applications',
        '1-week sprints',
        'Daily standups',
        'Priority support',
        '6 months warranty',
        'Performance optimization',
      ],
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom Quote',
      description: 'For large organizations',
      features: [
        'Complex enterprise solutions',
        'Dedicated team',
        '24/7 support',
        'Custom SLAs',
        '12 months warranty',
        'Advanced security',
        'Compliance support',
      ],
      highlight: false,
    },
  ];

  return (
    <div className='min-h-screen bg-black'>
      {/* Hero Section */}
      <section className='relative py-8  px-4 flex flex-col items-center'>
        <Badge className='bg-[#131315] text-white font-medium px-6 md:px-9 py-2 md:py-3 rounded-[100px] border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-8 md:mb-10 text-sm md:text-base'>
          <div className='mx-auto w-4 h-4 md:w-5 md:h-5 mr-2 bg-[url(/services.png)] bg-contain' />
          Services
        </Badge>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight md:leading-[76.8px] [font-family:'Inter',Helvetica] mb-4 md:mb-6">
            Transform Your Ideas
            <br />
            Into Digital Success
          </h1>

          <p className="text-base md:text-lg font-medium text-[#cccccc] leading-[24px] md:leading-[27px] [font-family:'Instrument_Sans',Helvetica] max-w-3xl mx-auto mb-12 md:mb-16 px-2">
            From web applications to AI integration, we provide comprehensive
            development services that help businesses innovate, scale, and stay
            ahead of the competition.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-12  px-2 md:px-4 relative'>
        <div className='max-w-7xl mx-auto'>
          <div className='space-y-4 md:space-y-8'>
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id ?? `Service-${index}`}
                className='md:sticky md:top-20 bg-[#111111] w-[95vw] md:w-[80vw] mx-auto rounded-2xl md:rounded-3xl border border-[#333] overflow-hidden group hover:border-[#555] transition-all duration-500'
                style={{
                  zIndex: services.length + index,
                  transform: `translateY(${index * 10}px)`,
                }}
              >
                <div className='flex flex-col'>
                  {/* Visual Side - Now on top for mobile */}
                  <div className='relative bg-black flex items-center justify-center p-4 md:p-8 h-[220px] md:h-[240px] lg:hidden'>
                    <div className='relative w-full h-full flex items-center justify-center scale-75 md:scale-90'>
                      <service.visual />
                    </div>
                  </div>

                  {/* Desktop Layout - Side by side */}
                  <div className='hidden lg:grid lg:grid-cols-2 min-h-[500px]'>
                    {/* Content Side */}
                    <div className='p-12 flex flex-col justify-center'>
                      <div className='text-sm text-[#666] uppercase tracking-wide mb-4'>
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 [font-family:'Inter',Helvetica] leading-tight">
                        {service.title}
                      </h3>

                      <p className='text-lg text-[#cccccc] leading-relaxed mb-8 max-w-md'>
                        {service.description}
                      </p>

                      {/* Key Features */}
                      <div className='mb-8'>
                        <ul className='space-y-3'>
                          {service.features
                            .slice(0, 3)
                            .map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className='text-base text-[#888] flex items-start'
                              >
                                <span className='w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0 mt-1'></span>
                                <span className='flex-1'>{feature}</span>
                              </li>
                            ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className='mb-8'>
                        <div className='flex flex-wrap gap-2'>
                          {service.technologies
                            .slice(0, 5)
                            .map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant='outline'
                                className='bg-[#1a1a1a] text-[#666] border-[#333] text-xs px-3 py-1'
                              >
                                {tech}
                              </Badge>
                            ))}
                        </div>
                      </div>

                      <Button
                        variant='outline'
                        className='w-fit bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 rounded-full'
                        asChild
                      >
                        <Link href={`/services/${service.slug}`}>
                          Learn more →
                        </Link>
                      </Button>
                    </div>

                    {/* Visual Side - Desktop */}
                    <div className='relative bg-black flex items-center justify-center p-12'>
                      <div className='relative w-full h-full flex items-center justify-center'>
                        <service.visual />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Content - Below visual */}
                  <div className='lg:hidden p-6 md:p-8'>
                    <div className='text-xs md:text-sm text-[#666] uppercase tracking-wide mb-3 md:mb-4'>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 [font-family:'Inter',Helvetica] leading-tight">
                      {service.title}
                    </h3>

                    <p className='text-base md:text-lg text-[#cccccc] leading-relaxed mb-6 md:mb-8'>
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className='mb-6 md:mb-8'>
                      <ul className='space-y-2 md:space-y-3'>
                        {service.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className='text-sm md:text-base text-[#888] flex items-start'
                            >
                              <span className='w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2 md:mt-1'></span>
                              <span className='flex-1'>{feature}</span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className='mb-6 md:mb-8'>
                      <div className='flex flex-wrap gap-1.5 md:gap-2'>
                        {service.technologies
                          .slice(0, 5)
                          .map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant='outline'
                              className='bg-[#1a1a1a] text-[#666] border-[#333] text-xs px-2 md:px-3 py-1'
                            >
                              {tech}
                            </Badge>
                          ))}
                      </div>
                    </div>

                    <Button
                      variant='outline'
                      className='w-full bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-2.5 rounded-full text-sm md:text-base'
                      asChild
                    >
                      <Link href={`/services/${service.slug}`}>
                        Learn more →
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-12 md:py-20 px-4 bg-[#0a0a0a]'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-white leading-tight mb-4 md:mb-6 [font-family:'Inter',Helvetica] px-2">
              Our Development Process
            </h2>
            <p className="text-base md:text-lg font-medium text-[#cccccc] leading-[24px] md:leading-[27px] [font-family:'Instrument_Sans',Helvetica] max-w-2xl mx-auto px-4">
              A proven methodology that ensures successful project delivery and
              client satisfaction.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
            {processSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={`text-center transform transition-all duration-700 px-4 ${
                  visibleSteps.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: visibleSteps.includes(index)
                    ? `${index * 200}ms`
                    : '0ms',
                }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-black rounded-full flex items-center justify-center text-lg md:text-xl font-bold mb-4 md:mb-6 mx-auto [font-family:'Inter',Helvetica]">
                  {step.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 [font-family:'Inter',Helvetica]">
                  {step.title}
                </h3>
                <p className='text-sm md:text-base text-[#cccccc] leading-relaxed'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-12 md:py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-white leading-tight mb-4 md:mb-6 [font-family:'Inter',Helvetica] px-2">
              Flexible Engagement Models
            </h2>
            <p className="text-base md:text-lg font-medium text-[#cccccc] leading-[24px] md:leading-[27px] [font-family:'Instrument_Sans',Helvetica] max-w-2xl mx-auto px-4">
              Choose the engagement model that best fits your project needs and
              budget.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`bg-[#111111] rounded-xl ${
                  tier.highlight
                    ? 'border-white border-2'
                    : 'border border-[#333]'
                } relative`}
              >
                {tier.highlight && (
                  <Badge className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs'>
                    Most Popular
                  </Badge>
                )}
                <CardContent className='p-6 md:p-8 text-center'>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 [font-family:'Inter',Helvetica]">
                    {tier.name}
                  </h3>
                  <p className='text-sm md:text-base text-[#888] mb-4 md:mb-6'>
                    {tier.description}
                  </p>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 [font-family:'Inter',Helvetica]">
                    {tier.price}
                  </div>
                  <ul className='space-y-2 md:space-y-3 mb-6 md:mb-8'>
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className='text-sm md:text-base text-[#cccccc] flex items-start'
                      >
                        <span className='w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0 mt-2'></span>
                        <span className='flex-1 text-left'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href='/contact' className='block'>
                    <Button
                      className={`w-full text-sm md:text-base py-2.5 md:py-3 ${
                        tier.highlight
                          ? 'bg-white text-black hover:bg-white/90'
                          : 'bg-[#333] text-white hover:bg-[#444]'
                      }`}
                    >
                      Get Quote
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
