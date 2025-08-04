'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

import { services } from '@/data/services';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

function getRelatedServices(currentSlug: string, limit = 3) {
  return services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, limit);
}

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string;

  const service = getServiceBySlug(slug);
  const relatedServices = getRelatedServices(slug, 3);

  if (!service) {
    return (
      <main className='min-h-screen bg-black text-white flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Service Not Found</h1>
          <p className='text-[#cccccc] mb-8'>
            The service you're looking for doesn't exist.
          </p>
          <Link
            href='/services'
            className='bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-[#f0f0f0] transition-colors'
          >
            Back to Services
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
          href='/services'
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
          Back to Services
        </Link>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Content Side */}
          <div>
            <Badge className='bg-[#131315] text-white font-medium px-4 py-2 rounded-full border border-[rgba(255,255,255,.4)] mb-6'>
              {service.icon} {service.title}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 [font-family:'Inter',Helvetica]">
              {service.title}
            </h1>

            <p className="text-xl text-[#cccccc] leading-relaxed mb-8 [font-family:'Instrument_Sans',Helvetica]">
              {service.description}
            </p>

            <div className='flex flex-col sm:flex-row gap-4 mb-8'>
              <Link href='/contact'>
                <Button className='bg-white text-black hover:bg-[#f0f0f0] px-8 py-3 rounded-full font-medium'>
                  Get Started - {service.startingPrice}+
                </Button>
              </Link>
              <Button
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full'
              >
                View Portfolio
              </Button>
            </div>

            <div className='grid grid-cols-2 gap-6 text-center'>
              <div>
                <div className='text-2xl font-bold text-white mb-2'>
                  {service.timeline}
                </div>
                <div className='text-[#888] text-sm'>Timeline</div>
              </div>
              <div>
                <div className='text-2xl font-bold text-white mb-2'>
                  {service.startingPrice}+
                </div>
                <div className='text-[#888] text-sm'>Starting Price</div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className='relative bg-[#0a0a0a] rounded-2xl p-12 flex items-center justify-center min-h-[400px]'>
            <service.visual />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='w-full max-w-[1320px] mx-auto px-4 py-16'>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center [font-family:'Inter',Helvetica]">
          What's Included
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {service.features.map((feature, index) => (
            <Card
              key={index}
              className='bg-[#111111] border border-[#333] hover:border-[#555] transition-colors'
            >
              <CardContent className='p-6'>
                <div className='flex items-start'>
                  <div className='w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0 mt-2'></div>
                  <p className='text-[#cccccc] leading-relaxed'>{feature}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className='w-full max-w-[1320px] mx-auto px-4 py-16 border-t border-[#333]'>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center [font-family:'Inter',Helvetica]">
          Technologies We Use
        </h2>

        <div className='flex flex-wrap justify-center gap-3'>
          {service.technologies.map((tech, index) => (
            <Badge
              key={index}
              className='bg-[#131315] text-white border border-[#333] hover:bg-[#1a1a1a] transition-colors px-4 py-2'
            >
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className='w-full max-w-[1320px] mx-auto px-4 py-16 border-t border-[#333]'>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center [font-family:'Inter',Helvetica]">
          Our Process
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {service.processSteps.map((step, index) => (
            <div key={index} className='text-center'>
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-lg font-bold mb-4 mx-auto [font-family:'Inter',Helvetica]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 [font-family:'Inter',Helvetica]">
                {step.title}
              </h3>
              <p className='text-[#cccccc] leading-relaxed'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables Section */}
      <section className='w-full max-w-[1320px] mx-auto px-4 py-16 border-t border-[#333]'>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center [font-family:'Inter',Helvetica]">
          What You'll Receive
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {service.deliverables.map((deliverable, index) => (
            <div key={index} className='flex items-start'>
              <svg
                className='w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='text-[#cccccc]'>{deliverable}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className='w-full max-w-[1320px] mx-auto px-4 py-16 border-t border-[#333]'>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center [font-family:'Inter',Helvetica]">
          Frequently Asked Questions
        </h2>

        <div className='max-w-3xl mx-auto space-y-6'>
          {service.faqs.map((faq, index) => (
            <Card key={index} className='bg-[#111111] border border-[#333]'>
              <CardContent className='p-6'>
                <h3 className="text-lg font-bold text-white mb-3 [font-family:'Inter',Helvetica]">
                  {faq.question}
                </h3>
                <p className='text-[#cccccc] leading-relaxed'>{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full max-w-[1320px] mx-auto px-4 py-16 border-t border-[#333]'>
        <div className='text-center'>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [font-family:'Inter',Helvetica]">
            Ready to Get Started?
          </h2>
          <p className='text-xl text-[#cccccc] mb-8 max-w-2xl mx-auto'>
            Let's discuss your project and see how we can help bring your vision
            to life.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact'>
              <Button className='bg-white text-black hover:bg-[#f0f0f0] px-8 py-3 rounded-full font-medium'>
                Start Your Project
              </Button>
            </Link>
            <Link href='/contact'>
              <Button
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full'
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className='w-full max-w-[1320px] mx-auto px-4 py-16 border-t border-[#333]'>
        <h2 className="text-2xl font-bold text-white mb-8 [font-family:'Inter',Helvetica]">
          Other Services
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {relatedServices.map((relatedService) => (
            <Link
              key={relatedService.id}
              href={`/services/${relatedService.slug}`}
            >
              <Card className='bg-[#111111] border border-[#333] rounded-xl overflow-hidden group hover:border-[#555] transition-all duration-300 h-full cursor-pointer hover:scale-[1.02]'>
                <div className='relative h-40 w-full overflow-hidden bg-black flex items-center justify-center p-6'>
                  <div className='relative w-full h-full flex items-center justify-center scale-75'>
                    <relatedService.visual />
                  </div>
                </div>

                <CardContent className='p-6'>
                  <div className='flex items-center gap-2 text-sm text-[#888] mb-3'>
                    <span>{relatedService.icon}</span>
                    <span>{relatedService.timeline}</span>
                    <span>•</span>
                    <span>{relatedService.startingPrice}+</span>
                  </div>

                  <h3 className='text-xl font-bold text-white mb-3 group-hover:text-[#ddd] transition-colors'>
                    {relatedService.title}
                  </h3>

                  <p className='text-[#cccccc] text-sm leading-relaxed'>
                    {relatedService.shortDescription}
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
