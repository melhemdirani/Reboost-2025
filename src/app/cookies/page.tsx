"use client";

import React from "react";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="font-bold text-4xl md:text-6xl leading-tight text-white font-['Inter',Helvetica] mb-6">
            Cookie Policy
          </h1>
          <p className="text-lg text-[#cccccc] font-['Instrument_Sans',Helvetica] max-w-2xl mx-auto">
            Learn about how we use cookies and similar technologies on our website.
          </p>
          <div className="mt-6 text-sm text-[#888] font-['Instrument_Sans',Helvetica]">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-12">
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">What Are Cookies?</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. They help us 
                  provide you with a better browsing experience by remembering your preferences and improving website 
                  functionality.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Types of Cookies We Use</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-6">
                
                <div className="bg-[#111111] rounded-xl p-6 border border-[rgba(255,255,255,.2)]">
                  <h3 className="text-lg font-medium text-white mb-3 font-['Inter',Helvetica]">Essential Cookies</h3>
                  <p className="text-[#cccccc] mb-3">
                    These cookies are necessary for the website to function properly. They enable core functionality 
                    such as security, network management, and accessibility.
                  </p>
                  <div className="text-sm text-[#888]">
                    <strong>Purpose:</strong> Website functionality, security
                    <br />
                    <strong>Duration:</strong> Session cookies (deleted when you close your browser)
                  </div>
                </div>

                <div className="bg-[#111111] rounded-xl p-6 border border-[rgba(255,255,255,.2)]">
                  <h3 className="text-lg font-medium text-white mb-3 font-['Inter',Helvetica]">Analytics Cookies</h3>
                  <p className="text-[#cccccc] mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously.
                  </p>
                  <div className="text-sm text-[#888]">
                    <strong>Purpose:</strong> Website analytics, performance monitoring
                    <br />
                    <strong>Duration:</strong> Up to 2 years
                    <br />
                    <strong>Third parties:</strong> Google Analytics (optional)
                  </div>
                </div>

                <div className="bg-[#111111] rounded-xl p-6 border border-[rgba(255,255,255,.2)]">
                  <h3 className="text-lg font-medium text-white mb-3 font-['Inter',Helvetica]">Functional Cookies</h3>
                  <p className="text-[#cccccc] mb-3">
                    These cookies enable enhanced functionality and personalization, such as remembering your 
                    preferences and settings.
                  </p>
                  <div className="text-sm text-[#888]">
                    <strong>Purpose:</strong> User preferences, personalization
                    <br />
                    <strong>Duration:</strong> Up to 1 year
                  </div>
                </div>

              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">How We Use Cookies</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To ensure our website functions properly and securely</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze website traffic and user behavior</li>
                  <li>To improve our website's performance and user experience</li>
                  <li>To provide personalized content and recommendations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Third-Party Cookies</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>
                  We may use third-party services that place cookies on your device. These services help us 
                  analyze website performance and provide better user experience:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Vercel Analytics:</strong> For website performance and deployment analytics</li>
                </ul>
                <p>
                  These third parties have their own privacy policies and cookie policies, which we encourage 
                  you to review.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Managing Your Cookie Preferences</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>You have several options for managing cookies:</p>
                
                <div className="bg-[#111111] rounded-xl p-6 border border-[rgba(255,255,255,.2)]">
                  <h3 className="text-lg font-medium text-white mb-3 font-['Inter',Helvetica]">Browser Settings</h3>
                  <p className="text-[#cccccc] mb-3">
                    Most browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-[#cccccc]">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Delete existing cookies</li>
                    <li>Set cookies to expire when you close your browser</li>
                  </ul>
                </div>

                <div className="bg-[#111111] rounded-xl p-6 border border-[rgba(255,255,255,.2)]">
                  <h3 className="text-lg font-medium text-white mb-3 font-['Inter',Helvetica]">Opt-Out Links</h3>
                  <p className="text-[#cccccc] mb-3">
                    You can opt out of specific third-party cookies:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-[#cccccc]">
                    <li>
                      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" 
                         className="text-blue-400 hover:text-blue-300 transition-colors">
                        Google Analytics Opt-out
                      </a>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-[#888] italic">
                  Note: Disabling certain cookies may affect website functionality and your user experience.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Updates to This Policy</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for 
                  legal, operational, or regulatory reasons. We will notify you of any material changes by posting 
                  the updated policy on our website.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Contact Us</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>If you have any questions about our use of cookies, please contact us:</p>
                <div className="bg-[#111111] rounded-xl p-6 border border-[rgba(255,255,255,.2)] mt-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="font-medium text-white mr-3">Email:</span>
                      <a href="mailto:info@reboost.live" className="text-[#cccccc] hover:text-white transition-colors">
                        info@reboost.live
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-white mr-3">Phone:</span>
                      <a href="tel:+96178852926" className="text-[#cccccc] hover:text-white transition-colors">
                        +961 78 852 926
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-white mr-3">Website:</span>
                      <a href="https://reboost.live" className="text-[#cccccc] hover:text-white transition-colors">
                        reboost.live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="pb-20"></div>
    </div>
  );
}
