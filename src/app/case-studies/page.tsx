
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import React from "react";
import { Authors, caseStudies } from "@/data/portfolio";

export default function CaseStudiesPage() {

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="bg-[#131315] text-white font-medium px-9 py-3 rounded-[100px] border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-10">
            <div className="w-5 h-5 mr-2 bg-[url(/case-study.png)] bg-cover" />
            Case Studies
          </Badge>
          
          <h1 className="text-5xl md:text-[64px] font-bold text-white leading-tight md:leading-[76.8px] [font-family:'Inter',Helvetica] mb-6">
            Real Results,
            <br />
            Real Impact
          </h1>
          
          <p className="text-lg font-medium text-[#cccccc] leading-[27px] [font-family:'Instrument_Sans',Helvetica] max-w-3xl mx-auto mb-16">
            Dive deep into our most successful projects. See how we've helped businesses overcome technical challenges, 
            accelerate growth, and achieve measurable results through strategic development and innovative solutions.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <section key={index} className={`py-20 px-4 ${index % 2 === 1 ? 'bg-[#0a0a0a]' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <Badge className="bg-white text-black mb-6">
                  {study.category}
                </Badge>
                
                <h2 className="text-4xl md:text-[48px] font-bold text-white leading-tight mb-4 [font-family:'Inter',Helvetica]">
                  {study.title}
                </h2>
                
                <p className="text-xl text-[#888] mb-8 [font-family:'Inter',Helvetica]">
                  {study.subtitle}
                </p>

                {/* Project Details */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div>
                    <p className="text-sm text-[#666] uppercase tracking-wide">Duration</p>
                    <p className="text-white font-semibold">{study.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#666] uppercase tracking-wide">Team Size</p>
                    <p className="text-white font-semibold">{study.team}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#666] uppercase tracking-wide">Client</p>
                    <p className="text-white font-semibold">{study.client}</p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 [font-family:'Inter',Helvetica]">
                    The Challenge
                  </h3>
                  <p className="text-[#cccccc] leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 [font-family:'Inter',Helvetica]">
                    Our Solution
                  </h3>
                  <p className="text-[#cccccc] leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-4 [font-family:'Inter',Helvetica]">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-[#1a1a1a] text-[#888] border-[#333] text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image and Results */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <Card className="bg-[#111111] border border-[#333] rounded-xl overflow-hidden mb-8">
                  <CardContent className="p-0">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-80 object-contain bg-white"
                    />
                  </CardContent>
                </Card>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {study.results.map((result, resultIndex) => (
                    <Card key={resultIndex} className="bg-[#111111] border border-[#333] rounded-xl">
                      <CardContent className="p-6 text-center">
                        <h4 className="text-3xl font-bold text-white mb-2 [font-family:'Inter',Helvetica]">
                          {result.value}
                        </h4>
                        <p className="text-sm text-[#666] uppercase tracking-wide mb-1">
                          {result.metric}
                        </p>
                        <p className="text-xs text-[#888]">
                          {result.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Testimonial */}
                {study.testimonial &&
                
                <Card className="bg-[#111111] border border-[#333] rounded-xl">
                  <CardContent className="p-6">
                    <p className="text-[#cccccc] italic mb-4 leading-relaxed">
                      "{study.testimonial.message}"
                    </p>
                    <div className="flex items-center gap-3">
                      {study.testimonial.image && <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img 
                          src={study.testimonial.image.src} 
                          alt={study.testimonial.role}
                          className="w-full h-full object-cover"
                        />
                      </div>}
                      <div>
                        <p className="text-white font-semibold">
                          {study.testimonial.name}
                        </p>
                        <p className="text-[#666] text-sm">
                          {study.testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                }
              </div>
            </div>
          </div>
        </section>
      ))}

    </div>
  );
}
