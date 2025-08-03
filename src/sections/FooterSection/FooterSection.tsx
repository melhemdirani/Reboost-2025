import React from "react";
import { FaLinkedinIn, FaWhatsapp, FaPhone, FaMailBulk } from "react-icons/fa";

export const FooterSection = () => {
  // Navigation links data
  const footerLinks = {
    company: [
      { text: "About Us", href: "/about" },
      { text: "Our Story", href: "/about#our-story" },
      { text: "Team", href: "/about#team" },
      { text: "Services", href: "/services" },


    ],
   
    resources: [
      { text: "Portfolio", href: "/portfolio" },
      { text: "Case Studies", href: "/case-studies" },
      // { text: "Blog", href: "#blog" },
      { text: "FAQ", href: "/home#faq" },
      { text: "Contact Us", href: "/contact" },
    ],
    legal: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
      { text: "Cookie Policy", href: "/cookies" },
    ],
  };

  return (
    <footer className="relative w-full bg-transparent">
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="w-full max-w-[90vw] mx-auto">
          <div className="relative bg-[#111111] rounded-3xl p-8 md:p-12 border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-white/5 rounded-full blur-xl" />
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/3 rounded-full blur-xl" />
            
            <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
              <h2 className="font-bold text-3xl md:text-[48px] leading-tight md:leading-[58px] text-white font-['Inter',Helvetica] mb-6">
                Ready to Build Something Amazing?
              </h2>
              
              <p className="text-lg md:text-xl text-[#cccccc] font-['Instrument_Sans',Helvetica] mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project and see how we can help you build scalable, intelligent software that drives real results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="/contact" className="group">
                  <button className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-gray-100">
                    <span>Start Your Project</span>
                    <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </a>
                
                <a href="/portfolio" className="group">
                  <button className="inline-flex items-center px-8 py-4 bg-transparent border border-[rgba(255,255,255,.4)] hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5">
                    <span>View Our Work</span>
                    <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,.4)]">
                <p className="text-sm text-[#888] font-['Inter',Helvetica]">
                  🚀 Most projects start within 1 week • 💯 100% client satisfaction rate
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px mb-12 [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.1)_100%)]" />

            {/* Enhanced Footer Content */}
            <div className="relative z-10 w-full">
              {/* Main Footer Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                {/* Company Info & Logo */}
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <img
                      className="w-[150px] h-[46px] mb-4"
                      alt="ReBoost Logo"
                      src="/reboost.png"
                    />
                    <p className="text-[#cccccc] text-base leading-relaxed mb-6 font-['Instrument_Sans',Helvetica]">
                      Built for Visionaries. Trusted by Doers.
                    </p>
                    <p className="text-[#888] text-sm leading-relaxed font-['Instrument_Sans',Helvetica]">
                      We partner with forward-thinking businesses to design and develop scalable software solutions that drive real results.
                    </p>
                  </div>
                  
                  {/* Newsletter Signup */}
                  {/* <div className="bg-[#0a0a0a] rounded-xl p-6 border border-[rgba(255,255,255,.2)]">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white font-['Inter',Helvetica]">Stay Updated</h3>
                    </div>
                    
                    <p className="text-[#cccccc] text-sm mb-4 font-['Instrument_Sans',Helvetica]">
                      Get insights on software development and startup growth.
                    </p>
                    
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-[#18181a] border border-[#28282c] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[rgba(255,255,255,.4)] transition-all duration-200 font-['Instrument_Sans',Helvetica]"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full px-4 py-3 bg-white text-black font-medium rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02] font-['Inter',Helvetica]"
                      >
                        Subscribe
                      </button>
                    </form>
                    
                    <p className="text-xs text-[#888] mt-3 font-['Instrument_Sans',Helvetica]">
                      No spam. Unsubscribe anytime.
                    </p>
                  </div> */}
                </div>

                {/* Company Links */}
                <div>
                  <h4 className="text-white font-semibold text-lg mb-4 font-['Inter',Helvetica]">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-[#cccccc] hover:text-white transition-colors duration-200 font-['Instrument_Sans',Helvetica]"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

               

                {/* Resources Links */}
                <div>
                  <h4 className="text-white font-semibold text-lg mb-4 font-['Inter',Helvetica]">Resources</h4>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-[#cccccc] hover:text-white transition-colors duration-200 font-['Instrument_Sans',Helvetica]"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <a
                  href="mailto:info@reboost.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#18181a] rounded-xl border border-solid border-[#28282c] h-[58px] px-4 md:px-5 hover:border-[rgba(255,255,255,.4)] transition-all duration-200"
                >
                  <div className="w-6 h-6 overflow-hidden">
                    <img
                      className="w-[25px] h-6"
                      alt="Email icon"
                      src="/dzy2fu5uutg4qc1eqfhdcdybu4-svg.svg"
                    />
                  </div>
                  <div className="ml-[10px] font-medium text-white text-base md:text-[17px] font-['Instrument_Sans',Helvetica]">
                    info@reboost.live
                  </div>
                </a>

                <a
                  href="tel:+96178852926"
                  className="flex items-center bg-[#18181a] rounded-xl border border-solid border-[#28282c] h-[58px] px-4 md:px-5 hover:border-[rgba(255,255,255,.4)] transition-all duration-200"
                >
                  <FaPhone className="w-4 h-4 text-white mr-3" />
                  <div className="font-medium text-white text-base md:text-[17px] font-['Instrument_Sans',Helvetica]">
                    +961 78 852 926
                  </div>
                </a>
              </div>

              {/* Bottom Footer */}
              <div className="pt-8 border-t border-[rgba(255,255,255,.4)]">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                  {/* Copyright & Legal Links */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a
                      className="flex items-center group"
                      href="https://reboost.live"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="font-medium group-hover:text-white text-[#62646c] text-base font-['Instrument_Sans',Helvetica]">
                        © ReBoost {new Date().getFullYear()}
                      </span>
                    </a>
                    
                    <div className="hidden sm:block w-1 h-1 bg-[#666] rounded-full" />
                    
                    <div className="flex items-center gap-4">
                      {footerLinks.legal.map((link, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <div className="w-1 h-1 bg-[#666] rounded-full" />}
                          <a
                            href={link.href}
                            className="text-[#888] hover:text-white transition-colors duration-200 text-sm font-['Instrument_Sans',Helvetica]"
                          >
                            {link.text}
                          </a>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B96171523153&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-[#18181a] rounded-xl flex items-center justify-center hover:bg-[rgba(255,255,255,.2)] transition-colors duration-200"
                    >
                      <FaWhatsapp className="w-5 h-5 text-white" />
                    </a>
                    
                    <a
                      href="mailto:info@reboost.live"
                      className="w-11 h-11 bg-[#18181a] rounded-xl flex items-center justify-center hover:bg-[rgba(255,255,255,.2)] transition-colors duration-200"
                    >
                      <FaMailBulk className="w-4 h-4 text-white" />
                    </a>
                    
                    <a
                      href="https://www.linkedin.com/company/82971515/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-[#18181a] rounded-xl flex items-center justify-center hover:bg-[rgba(255,255,255,.2)] transition-colors duration-200"
                    >
                      <FaLinkedinIn className="w-5 h-5 text-white" />
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
