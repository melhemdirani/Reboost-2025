import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/slick-custom.css';

import { testimonials } from '@/data/portfolio';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import testimonialIcon from '@/assets/testimonials.png';

export const FeaturesSection = () => {
  const sliderRef = useRef<Slider>(null);
  // Only one FAQ open at a time
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  // FAQ data for mapping
  const faqItems = [
    {
      question: 'What services does ReBoost offer?',
      answer:
        'We provide end-to-end software development: custom web and mobile apps, scalable SaaS platforms, backend, frontend, DevOps, AI integration, UI/UX, and talent acquisition.',
    },
    {
      question: 'What types of companies do you work with?',
      answer:
        'We partner with startups, scale-ups, and enterprises looking to digitize, launch new products, or scale their technology.',
    },
    {
      question: 'How fast can you deliver a project?',
      answer:
        'We move quickly. Most MVPs are delivered in weeks, not months. Timelines depend on scope, but we prioritize speed and reliability.',
    },
    {
      question: 'Can you help us scale our SaaS platform?',
      answer:
        'Absolutely. We specialize in building and scaling SaaS products, including multi-tenant architectures, robust APIs, and cloud-native infrastructure.',
    },
    {
      question: 'Do you offer AI and automation solutions?',
      answer:
        'Yes. We integrate AI, automation, and analytics into new and existing products to unlock efficiency and intelligence.',
    },
    {
      question: 'Can you augment our in-house team?',
      answer:
        'Yes. We offer flexible engagement models, including team augmentation and dedicated squads.',
    },
    {
      question: 'What is your pricing model?',
      answer:
        'We offer flexible pricing based on your needs—fixed price, time & materials, or monthly retainers. Get in touch for a custom quote.',
    },
    {
      question: 'How do you ensure code quality and reliability?',
      answer:
        'We use code reviews, automated testing, CI/CD pipelines, and best practices to ensure every release is production-ready.',
    },
    {
      question: 'What makes ReBoost different?',
      answer:
        'We combine speed, technical depth, and a true partnership mindset. Our clients stay with us for the long term because we deliver real results.',
    },
  ];

  return (
    <section className='w-full relative py-6 md:py-20 flex flex-col items-center px-4 md:px-0'>
      {/* Testimonials Section */}
      <div className='w-full relative [background:radial-gradient(50%_50%_at_50%_0%,rgba(19,19,21,1)_0%,rgba(0,0,0,1)_100%)] opacity-90 py-6 md:py-20 border-t border-black'>
        <div className='w-full h-px [background:radial-gradient(50%_50%_at_50%_50%,rgba(40,40,44,1)_0%,rgba(0,0,0,1)_100%)]' />
        <div id='testimonials' />
        <div className='flex flex-col items-center ]'>
          <Badge className='bg-[#131315] text-white font-medium px-3 sm:px-6 md:px-9 py-2 md:py-3 rounded-[100px] border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-4 md:mb-10'>
            <img
              alt='Testimonial icon'
              src={testimonialIcon.src}
              className='w-[22px] mr-2'
            />
            Testimonials
          </Badge>

          <div className='text-center mb-8 md:mb-14 w-full '>
            <h2 className="text-3xl md:text-[54.4px] font-bold text-white leading-tight md:leading-[69.6px] [font-family:'Inter',Helvetica] mb-4 md:mb-5">
              Our Testimonials
            </h2>
            <p className="text-base md:text-lg font-medium text-[#ffffff] leading-[27px] [font-family:'Instrument_Sans',Helvetica]">
              See how ReBoost has helped businesses bring their ideas to life —
              <br className='hidden md:block' />
              directly from the people we’ve built with.
            </p>
          </div>
          <div className='relative bg-black py-12 px-0 overflow-hidden w-full'>
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className='absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#333] rounded-full p-3 transition-colors duration-200'
              aria-label='Previous testimonial'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 18L9 12L15 6'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#333] rounded-full p-3 transition-colors duration-200'
              aria-label='Next testimonial'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 18L15 12L9 6'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>

            {/* Left Fade */}
            <div className='absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none' />

            {/* Right Fade */}
            <div className='absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none' />

            <div className='max-w-7xl mx-auto px-4'>
              <Slider
                ref={sliderRef}
                {...sliderSettings}
                className='testimonials-slider'
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className='bg-[#111111] p-6 px-3 flex flex-col justify-between rounded-xl shadow-lg h-full slide-item'
                  >
                    <p className='text-[15px] leading-relaxed text-[#cccccc]'>
                      {testimonial.message}
                    </p>
                    <div className='flex items-center gap-3 mt-6 border-t pt-4 border-[#333]'>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className='w-10 h-10 rounded-full object-cover'
                      />
                      <div>
                        <div className='flex items-center gap-3'>
                          <p className='font-semibold text-white'>
                            {testimonial.name}
                          </p>
                          <div className='flex gap-1 '>
                            {[...Array(5)].map((_, starIndex) => (
                              <svg
                                key={starIndex}
                                width='12'
                                height='12'
                                viewBox='0 0 24 24'
                                fill='#FFD700'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z' />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className='text-sm text-[#888]'>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Free Trial Section */}
      <Card className='w-full max-w-[90vw] md:w-[993px] sm:min-h-[340px] mt-10 md:mt-20 rounded-3xl overflow-hidden bg-[url(/background.png)] bg-cover bg-[50%_50%] border-none'>
        <CardContent className='p-0 flex flex-col md:flex-row'>
          <div className='p-6 md:p-[60px] flex-1'>
            <h3 className="text-2xl md:text-[28px] font-semibold text-white leading-tight md:leading-[30.8px] [font-family:'Bricolage_Grotesque',Helvetica] mb-2">
              Let’s Build Something Together
            </h3>
            <p className="text-base md:text-lg font-medium text-[#999999] leading-[27px] [font-family:'Inter',Helvetica] mb-6 md:mb-8">
              Tell us about your project and discover how our team can bring
              your vision to life with smart, scalable software.
            </p>
            <a href='/contact#contact-form'>
              <Button className="h-[58px]  w-full md:w-[200px] bg-white text-neutral-800 rounded-xl text-[17px] font-normal [font-family:'Inter',Helvetica]">
                Book a Consulation
              </Button>
            </a>
          </div>

          <div className='relative flex-1 min-h-[300px] md:min-h-0 hidden sm:block'>
            <div className='absolute w-[90%] md:w-[593px] h-[323px] top-[30px] md:top-[60px] left-[5%] md:left-[50px] rounded-xl bg-[url(/ui-image.png)] bg-cover bg-[50%_50%] border-4 border-solid border-[#ffffff33]' />
            <div className='absolute w-[80%] md:w-[476px] h-[259px] top-[84px] md:top-[114px] left-[10%] md:left-0 bg-[#ffffff01] rounded-xl shadow-[0px_-5px_28.6px_#00000026]'>
              <div className='h-[259px] rounded-xl bg-[url(/ui-image-1.png)] bg-cover bg-[50%_50%] border-4 border-solid border-[#ffffff33]' />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Price Request Section */}
      {/* <div className="w-full max-w-[1200px] py-8 md:py-12 mt-10 md:mt-20 bg-black">
        <div className="flex flex-col items-center px-4 md:px-0">
          <Badge className="bg-[#131315] text-white font-medium px-6 md:px-9 py-3 rounded-[100px] border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-6">
            <div className="w-5 h-5 mr-2 rounded-[10px] overflow-hidden">
              <img
                className="w-[21px] h-5"
                alt="Price icon"
                src="/o8k4hpbgzsqpjsgli7w0kjljuw4-svg.svg"
              />
            </div>
            Price
          </Badge>

          <div className="text-center">
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight md:leading-[86.4px] [font-family:'Inter',Helvetica] mb-4">
              PRICE REQUEST
            </h2>
            <h3 className="text-2xl md:text-[32px] font-normal text-[#cccccc] leading-tight md:leading-[38.4px] [font-family:'Inter',Helvetica] mb-4 md:mb-6">
              Get a Customized Quote
            </h3>
            <p className="text-base md:text-lg font-normal text-[#cccccc] leading-[25.2px] [font-family:'Inter',Helvetica] max-w-[806px] mx-auto mb-6 md:mb-8">
              Share a few details about your hospitality business, and we’ll
              craft a custom quote just for you.
              <br className="hidden md:block" />
              Our team is here to help you grow, stand out, and reach your goals
              with confidence.
            </p>

            <Button className="h-[54px] w-full md:w-[197px] bg-white text-black rounded-[96px] text-lg font-normal [font-family:'Inter',Helvetica] shadow-[0px_10px_20px_#0000001a]">
              Get a Quote
              <img
                className="w-[15px] h-3 ml-2"
                alt="Arrow"
                src="/group-2.png"
              />
            </Button>
          </div>
        </div>
        <div id="faqs" />
      </div> */}

      {/* FAQ Section */}
      <div
        id='faq'
        className='w-full max-w-[795px] mt-10 md:mt-20 mb-10 md:mb-20 px-4 md:px-0'
      >
        <div className='flex flex-col items-center'>
          <Badge className='bg-[#131315] text-white font-medium px-6 md:px-9 py-3 rounded-[100px] border  border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)]  mb-6'>
            <div className='w-5 h-5 mr-2 bg-[url(/faq.png)] bg-contain' />
            FAQ's
          </Badge>

          <h2 className="text-3xl md:text-[54.4px] font-bold text-white leading-tight md:leading-[69.6px] [font-family:'Inter',Helvetica] mb-8 md:mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg font-medium text-[#ffffff] leading-[27px] [font-family:'Instrument_Sans',Helvetica] mb-8 md:mb-12 text-center max-w-2xl">
            Everything you need to know about working with ReBoost. If you have
            a question that’s not answered here, reach out and we’ll be happy to
            help.
          </p>

          <Accordion
            type='single'
            collapsible
            className='w-full group max-w-[90vw]'
          >
            {faqItems.map((item, index) => {
              const open = openIndex === index;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className='mb-4 md:mb-6 bg-[#09090a] rounded-[14px] border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 ease-linear group-hover:opacity-50 hover:!opacity-100 hover:scale-105'
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <AccordionTrigger className="cursor-pointer px-4 md:px-[30px] py-4 md:py-5 text-lg md:text-xl font-normal text-white [font-family:'Inter',Helvetica] hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key='faq-content'
                        initial={{ maxHeight: 0, opacity: 1 }}
                        animate={{ maxHeight: 500, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: 'linear' }}
                        style={{ overflow: 'hidden' }}
                        className='px-4 md:px-[30px] pb-4 md:pb-5 text-[#cccccc]'
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
