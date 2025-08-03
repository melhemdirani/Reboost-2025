"use client";

import React from "react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="w-full max-w-4xl mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="font-bold text-4xl md:text-6xl leading-tight text-white font-['Inter',Helvetica] mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-[#cccccc] font-['Instrument_Sans',Helvetica] max-w-2xl mx-auto">
            These terms govern your use of our services. Please read them carefully.
          </p>
          <div className="mt-6 text-sm text-[#888] font-['Instrument_Sans',Helvetica]">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-12">
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Acceptance of Terms</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>
                  By accessing and using ReBoost's services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Services Description</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>ReBoost provides software development and consulting services, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Web application development</li>
                  <li>Mobile application development</li>
                  <li>AI and machine learning solutions</li>
                  <li>Technology consulting</li>
                  <li>Software architecture and design</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Client Responsibilities</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>As a client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information necessary for project completion</li>
                  <li>Respond to requests for feedback and approvals in a timely manner</li>
                  <li>Make payments according to the agreed schedule</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain confidentiality of sensitive information shared during the project</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Payment Terms</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>Payment terms will be specified in individual project agreements. Generally:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Services may be suspended for overdue accounts</li>
                  <li>All prices are exclusive of applicable taxes</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Intellectual Property</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>
                  Upon full payment, clients will own the custom code and content created specifically for their project. 
                  ReBoost retains rights to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pre-existing tools, frameworks, and methodologies</li>
                  <li>General knowledge and experience gained</li>
                  <li>Use project as a case study (with client approval)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Confidentiality</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>
                  ReBoost agrees to maintain the confidentiality of all proprietary information shared by clients during 
                  the course of our engagement. This includes business plans, technical specifications, user data, and any 
                  other sensitive information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Limitation of Liability</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>
                  ReBoost's liability is limited to the amount paid for services. We are not liable for indirect, 
                  consequential, or punitive damages. We provide services "as is" without warranties beyond those 
                  explicitly stated in project agreements.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Project Changes and Scope</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>
                  Changes to project scope may result in additional time and cost. All significant changes will be 
                  documented and approved in writing before implementation. We strive to accommodate reasonable 
                  requests while maintaining project timelines.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Termination</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>
                  Either party may terminate the agreement with written notice. In case of termination, payment 
                  is due for all work completed up to the termination date. Deliverables completed and paid for 
                  will be provided to the client.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Governing Law</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>
                  These terms are governed by the laws of Lebanon. Any disputes will be resolved through 
                  binding arbitration or the courts of Lebanon.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 font-['Inter',Helvetica]">Contact Information</h2>
              <div className="text-[#cccccc] leading-relaxed font-['Instrument_Sans',Helvetica] space-y-4">
                <p>For questions about these Terms of Service, please contact us:</p>
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
