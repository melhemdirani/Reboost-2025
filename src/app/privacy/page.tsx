"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="font-bold text-4xl md:text-6xl leading-tight text-white font-['Inter',Helvetica] mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-[#cccccc] font-['Instrument_Sans',Helvetica] max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="mt-6 text-sm text-[#888] font-['Instrument_Sans',Helvetica]">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-12">
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Information We Collect</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact us through our website or email</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request information about our services</li>
                  <li>Engage with our customer support</li>
                </ul>
                <p>This information may include your name, email address, phone number, company information, and any messages you send to us.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">How We Use Your Information</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Communicate with you about our services, offers, and events</li>
                  <li>Process transactions and send related information</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Information Sharing</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With trusted service providers who assist us in operating our website</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Data Security</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Cookies and Tracking</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Your Rights</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request information about how we process your data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Contact Us</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
