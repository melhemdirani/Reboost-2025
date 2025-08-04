import React from 'react';
import { FaLinkedinIn, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';

export const FooterSection = () => {
  // Navigation links data
  const footerLinks = {
    company: [
      { text: 'About Us', href: '/about' },
      { text: 'Our Story', href: '/about#our-story' },
      { text: 'Team', href: '/about#team' },
      { text: 'Services', href: '/services' },
    ],
    services: [
      { text: 'Web Development', href: '/services/web-development' },
      {
        text: 'Mobile App Development',
        href: '/services/mobile-development',
      },
      { text: 'UI/UX Design', href: '/services/ui-ux-design' },
      { text: 'AI & ML Solutions', href: '/services/ai-ml-integration' },
      { text: 'DevOps & Cloud', href: '/services/devops-infrastructure  ' },
      { text: 'SaaS Platforms', href: '/services/saas-development' },
    ],
    resources: [
      { text: 'Portfolio', href: '/portfolio' },
      { text: 'Case Studies', href: '/case-studies' },
      // { text: 'Blog', href: '/blog' },
      { text: 'FAQ', href: '/home#faq' },
      { text: 'Contact Us', href: '/contact' },
    ],
    legal: [
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'Terms of Service', href: '/terms' },
      { text: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className='relative w-full bg-transparent'>
      {/* CTA Section */}
      <section className='py-12 md:py-20 px-4'>
        <div className='w-full max-w-[95vw] md:max-w-[90vw] mx-auto'>
          <div className='relative bg-[#111111] rounded-2xl md:rounded-3xl p-6 md:p-12 border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden'>
            {/* Background decorative elements */}
            <div className='absolute top-4 right-4 w-32 h-32 bg-white/5 rounded-full blur-xl' />
            <div className='absolute bottom-4 left-4 w-24 h-24 bg-white/3 rounded-full blur-xl' />

            <div className='relative z-10 text-center max-w-4xl mx-auto mb-8 md:mb-16'>
              <h2 className="font-bold text-2xl sm:text-3xl md:text-[48px] leading-tight md:leading-[58px] text-white font-['Inter',Helvetica] mb-4 md:mb-6">
                Ready to Build Something Amazing?
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-[#cccccc] font-['Instrument_Sans',Helvetica] mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Let's discuss your project and see how we can help you build
                scalable, intelligent software that drives real results.
              </p>

              <div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center'>
                <a href='/contact' className='group w-full sm:w-auto'>
                  <button className='w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-gray-100 text-sm md:text-base'>
                    <span>Start Your Project</span>
                    <svg
                      className='ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </button>
                </a>

                <a href='/portfolio' className='group w-full sm:w-auto'>
                  <button className='w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-transparent border border-[rgba(255,255,255,.4)] hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5 text-sm md:text-base'>
                    <span>View Our Work</span>
                    <svg
                      className='ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                      />
                    </svg>
                  </button>
                </a>
              </div>

              <div className='mt-6 md:mt-8 pt-4 md:pt-6 border-t border-[rgba(255,255,255,.4)]'>
                <p className="text-xs md:text-sm text-[#888] font-['Inter',Helvetica]">
                  🚀 Most projects start within 1 week • 💯 100% client
                  satisfaction rate
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className='w-full h-px mb-8 md:mb-12 [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.1)_100%)]' />

            {/* Enhanced Footer Content */}
            <div className='relative z-10 w-full'>
              {/* Main Footer Grid - Mobile Optimized */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8'>
                {/* Company Info & Logo */}
                <div className='lg:col-span-2'>
                  <div className='mb-4 md:mb-6'>
                    <img
                      className='w-[120px] md:w-[150px] h-[36px] md:h-[46px] mb-3 md:mb-4'
                      alt='ReBoost Logo'
                      src='/reboost.png'
                    />
                    <p className="text-[#cccccc] text-sm md:text-base leading-relaxed mb-3 md:mb-4 font-['Instrument_Sans',Helvetica]">
                      Built for Visionaries. Trusted by Doers.
                    </p>
                    <p className="text-[#888] text-xs md:text-sm leading-relaxed font-['Instrument_Sans',Helvetica] hidden md:block">
                      We partner with forward-thinking businesses to design and
                      develop scalable software solutions.
                    </p>
                  </div>
                </div>

                {/* Company Links */}
                <div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4 font-['Inter',Helvetica]">
                    Company
                  </h4>
                  <ul className='space-y-2 md:space-y-3'>
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-[#cccccc] hover:text-white transition-colors duration-200 font-['Instrument_Sans',Helvetica] text-sm md:text-base"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources Links */}
                <div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4 font-['Inter',Helvetica]">
                    Resources
                  </h4>
                  <ul className='space-y-2 md:space-y-3'>
                    {footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-[#cccccc] hover:text-white transition-colors duration-200 font-['Instrument_Sans',Helvetica] text-sm md:text-base"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Services Links */}
                <div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-4 font-['Inter',Helvetica]">
                    Services
                  </h4>
                  <ul className='space-y-2 md:space-y-3'>
                    {footerLinks.services.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-[#cccccc] hover:text-white transition-colors duration-200 font-['Instrument_Sans',Helvetica] text-sm md:text-base"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Info - Mobile Optimized */}
              <div className='flex flex-col sm:flex-row gap-4 md:gap-6 mb-6 md:mb-8'>
                <a
                  href='mailto:info@reboost.live'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center bg-[#18181a] rounded-xl border border-solid border-[#28282c] h-[50px] md:h-[58px] px-3 md:px-5 hover:border-[rgba(255,255,255,.4)] transition-all duration-200'
                >
                  <div className='w-5 h-5 md:w-6 md:h-6 overflow-hidden'>
                    <img
                      className='w-[22px] md:w-[25px] h-5 md:h-6'
                      alt='Email icon'
                      src='/dzy2fu5uutg4qc1eqfhdcdybu4-svg.svg'
                    />
                  </div>
                  <div className="ml-2 md:ml-[10px] font-medium text-white text-sm md:text-base lg:text-[17px] font-['Instrument_Sans',Helvetica]">
                    info@reboost.live
                  </div>
                </a>

                <a
                  href='tel:+96178852926'
                  className='flex items-center bg-[#18181a] rounded-xl border border-solid border-[#28282c] h-[50px] md:h-[58px] px-3 md:px-5 hover:border-[rgba(255,255,255,.4)] transition-all duration-200'
                >
                  <FaPhone className='w-3 h-3 md:w-4 md:h-4 text-white mr-2 md:mr-3' />
                  <div className="font-medium text-white text-sm md:text-base lg:text-[17px] font-['Instrument_Sans',Helvetica]">
                    +961 78 852 926
                  </div>
                </a>
              </div>

              {/* Bottom Footer - Mobile Optimized */}
              <div className='pt-4 md:pt-8 border-t border-[rgba(255,255,255,.4)]'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6'>
                  {/* Copyright & Legal Links */}
                  <div className='flex flex-col sm:flex-row items-center gap-3 md:gap-4'>
                    <a
                      className='flex items-center group'
                      href='https://reboost.live'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className="font-medium group-hover:text-white text-[#62646c] text-sm md:text-base font-['Instrument_Sans',Helvetica]">
                        © ReBoost {new Date().getFullYear()}
                      </span>
                    </a>

                    <div className='hidden sm:block w-1 h-1 bg-[#666] rounded-full' />

                    <div className='flex items-center flex-wrap justify-center gap-3 md:gap-4'>
                      {footerLinks.legal.map((link, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && (
                            <div className='w-1 h-1 bg-[#666] rounded-full hidden sm:block' />
                          )}
                          <a
                            href={link.href}
                            className="text-[#888] hover:text-white transition-colors duration-200 text-xs md:text-sm font-['Instrument_Sans',Helvetica]"
                          >
                            {link.text}
                          </a>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className='flex items-center space-x-3 md:space-x-4'>
                    <a
                      href='https://api.whatsapp.com/send/?phone=%2B96171523153&text&type=phone_number&app_absent=0'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 md:w-11 md:h-11 bg-[#18181a] rounded-xl flex items-center justify-center hover:bg-[rgba(255,255,255,.2)] transition-colors duration-200'
                    >
                      <FaWhatsapp className='w-4 h-4 md:w-5 md:h-5 text-white' />
                    </a>

                    <a
                      href='mailto:info@reboost.live'
                      className='w-10 h-10 md:w-11 md:h-11 bg-[#18181a] rounded-xl flex items-center justify-center hover:bg-[rgba(255,255,255,.2)] transition-colors duration-200'
                    >
                      <FaMailBulk className='w-3 h-3 md:w-4 md:h-4 text-white' />
                    </a>

                    <a
                      href='https://www.linkedin.com/company/82971515/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 md:w-11 md:h-11 bg-[#18181a] rounded-xl flex items-center justify-center hover:bg-[rgba(255,255,255,.2)] transition-colors duration-200'
                    >
                      <FaLinkedinIn className='w-4 h-4 md:w-5 md:h-5 text-white' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
