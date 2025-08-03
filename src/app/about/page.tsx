"use client";
import { NavigationSection } from "@/sections/NavigationSection/NavigationSection";
import { FooterSection } from "@/sections/FooterSection/FooterSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Earth from "./earth.png"

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  // Refs for team card animations
  const teamCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const teamSectionRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      title: "Speed & Reliability",
      description: "We move fast without compromising quality. Most MVPs are delivered in weeks, not months.",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3L6 22H18L15 35L32 14H20L23 3H19Z" fill="#FACC15" stroke="#FDE047" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "True Partnership",
      description: "We don't just code—we collaborate, challenge ideas, and care about your long-term success.",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C11 15.134 14.134 12 18 12C21.866 12 25 15.134 25 19C25 22.866 21.866 26 18 26C14.134 26 11 22.866 11 19Z" fill="#38BDF8" stroke="#0EA5E9" strokeWidth="2"/>
          <path d="M6 32C8.5 28 13.5 28 18 28C22.5 28 27.5 28 30 32" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Technical Excellence",
      description: "From code reviews to CI/CD pipelines, we ensure every release is production-ready.",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="19" r="10" fill="#818CF8" stroke="#6366F1" strokeWidth="2"/>
          <path d="M19 9V5M19 33V29M29 19H33M5 19H9M27.071 27.071L30 30M8 8L10.929 10.929" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Innovation First",
      description: "We integrate cutting-edge AI, automation, and modern tech stacks to keep you ahead.",
      icon: (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="19" r="16" fill="#34D399" stroke="#10B981" strokeWidth="2"/>
          <path d="M19 10V19L25 22" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "3x", label: "Faster Development" },
    { number: "24/7", label: "Support Available" }
  ];

  const teamMembers = [
    {
      name: "Melhem El Dirani",
      role: "Founder & CEO",
      bio: "Full-stack engineer with 7+ years creating scalable solutions. Leads Reboost in delivering cutting-edge MVPs.",
      image: "/melhem.jpeg"
    },
     {
      name: "Alissar Almousawi",
      role: "Head of Marketing",
      bio: "Marketing strategist with a passion for driving growth through innovative campaigns. Experienced in both B2B and B2C marketing.",
      image: "/alissar.jpeg"
    },
    {
      name: "Sandra El Abboud",
      role: "Head of Design",
      bio: "Creative designer with a focus on user experience and visual storytelling. Transforms complex ideas into intuitive designs.",
      image: "/sandra.jpeg"
    },
    {
      name: "Ziad Baydoun",
      role: "Head of Engineering",
      bio: "Expert in cloud architecture and DevOps. Specializes in building systems that scale from zero to millions of users.",
      image: "/Ziad Baydoun.jpeg"
    },
    {
      name: "Adnan Sayed",
      role: "Lead Developer",
      bio: "Experienced in building high-performance web applications. Passionate about clean code and best practices.",
      image: "/adnan.jpeg"
    },
   
    {
      name: "Ruslan Kain",
      role: "AI/ML Specialist",
      bio:"AI/ML specialist with a PhD, focused on developing intelligent solutions in natural language processing and computer vision.",
      image: "/ruslan.jpeg"
    }
  ];

  // GSAP animation for team cards from different corners
  useEffect(() => {
    if (teamCardRefs.current.length && teamSectionRef.current) {
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
        ease: "expo.out",
        scrollTrigger: {
          trigger: teamSectionRef.current,
          start: "top 70%",
          end: "top 0%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
       {/* Stats Section */}
             <div
        style={{ 
          backgroundImage: `url(${Earth.src})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'brightness(0.8) ',
          zIndex: 0 
        }}
        className=" w-full absolute mx-auto py-0 h-[150vh] z-0 "
      />
      <section className="relative py-20 px-4 z-1">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="bg-[#131315] text-white font-medium px-9 py-3 rounded-[100px] border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-10">
            <div className="w-5 h-5 mr-2 bg-[url(/about-icon.png)] bg-contain" />
            About Us
          </Badge>
          
          <h1 className="text-5xl md:text-[64px] font-bold text-white leading-tight md:leading-[76.8px] [font-family:'Inter',Helvetica] mb-6">
            We Turn Ideas Into
            <br />
            Digital Reality
          </h1>
          
          {/* <p className="text-lg font-medium text-[#cccccc] leading-[27px] [font-family:'Instrument_Sans',Helvetica] max-w-3xl mx-auto mb-16">
            ReBoost was founded with a simple mission: help businesses bring their digital visions to life, 
            fast and reliably. We're not just developers—we're your technical co-founders, challenging ideas 
            and building products that truly matter.
          </p> */}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 mt-20 z-1" style={{zIndex:999}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-black/30 backdrop-blur-[1px] shadow-[0_20px_40px_rgba(99,102,241,0.1)] rounded-lg p-6 ">
            <div className="">

              <h2 id="our-story" className=" text-4xl md:text-[48px] font-bold text-white leading-tight mb-6 [font-family:'Inter',Helvetica]">
                Our Story
              </h2>
              
              <div className="space-y-6 text-[#cccccc] leading-relaxed">
                <p>
                  ReBoost started when we noticed a gap in the market—too many businesses had great ideas 
                  but struggled to find technical partners who truly understood their vision and could 
                  execute quickly without cutting corners.
                </p>
                
                <p>
                  We built ReBoost to be different. We combine the speed of a startup with the reliability 
                  of an enterprise team. Our approach integrates modern AI tools and automation to accelerate 
                  development while maintaining the highest code quality standards.
                </p>
                
                <p>
                  Today, we're proud to be the long-term technical partner for businesses ranging from 
                  early-stage startups to established enterprises. Our clients don't just hire us once—they 
                  stay with us because we deliver real results and genuinely care about their success.
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <Card className="border-none rounded-xl overflow-hidden transition-all duration-500">
                <CardContent className="p-8 flex items-center justify-center">
                  <div className="relative w-full h-80 flex items-center justify-center">
                    {/* Enhanced SVG representing growth, collaboration & innovation */}
                    <svg 
                      width="340" 
                      height="300" 
                      viewBox="0 0 340 300" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:scale-105 transition-transform duration-700 ease-out"
                    >
                      <defs>
                        {/* Enhanced gradient definitions with more depth */}
                        <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor:"#6366F1", stopOpacity:0.9}} />
                          <stop offset="50%" style={{stopColor:"#8B5CF6", stopOpacity:0.8}} />
                          <stop offset="100%" style={{stopColor:"#A855F7", stopOpacity:0.7}} />
                        </linearGradient>
                        <linearGradient id="secondaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor:"#38BDF8", stopOpacity:0.8}} />
                          <stop offset="50%" style={{stopColor:"#0EA5E9", stopOpacity:0.7}} />
                          <stop offset="100%" style={{stopColor:"#0284C7", stopOpacity:0.6}} />
                        </linearGradient>
                        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor:"#34D399", stopOpacity:0.8}} />
                          <stop offset="50%" style={{stopColor:"#10B981", stopOpacity:0.7}} />
                          <stop offset="100%" style={{stopColor:"#059669", stopOpacity:0.6}} />
                        </linearGradient>
                        <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor:"#FACC15", stopOpacity:0.9}} />
                          <stop offset="50%" style={{stopColor:"#F59E0B", stopOpacity:0.8}} />
                          <stop offset="100%" style={{stopColor:"#D97706", stopOpacity:0.7}} />
                        </linearGradient>
                        
                        {/* Radial gradient for central hub */}
                        <radialGradient id="centralGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" style={{stopColor:"#FFFFFF", stopOpacity:0.9}} />
                          <stop offset="40%" style={{stopColor:"#6366F1", stopOpacity:0.8}} />
                          <stop offset="100%" style={{stopColor:"#1E1B4B", stopOpacity:0.6}} />
                        </radialGradient>
                        
                        {/* Glow filter for enhanced visual appeal */}
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Animated background grid pattern */}
                      <g opacity="0.1" stroke="url(#primaryGrad)" strokeWidth="0.5">
                        <defs>
                          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)">
                          <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" repeatCount="indefinite" />
                        </rect>
                      </g>

                      {/* Enhanced connecting lines with pulse animation */}
                      <g opacity="0.4">
                        <line x1="90" y1="210" x2="170" y2="150" stroke="url(#primaryGrad)" strokeWidth="3" strokeDasharray="8,4">
                          <animate attributeName="stroke-dashoffset" values="0;12;0" dur="3s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1="250" y1="210" x2="170" y2="150" stroke="url(#secondaryGrad)" strokeWidth="3" strokeDasharray="8,4">
                          <animate attributeName="stroke-dashoffset" values="0;-12;0" dur="3.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.2s" repeatCount="indefinite" />
                        </line>
                        <line x1="90" y1="90" x2="170" y2="150" stroke="url(#accentGrad)" strokeWidth="3" strokeDasharray="8,4">
                          <animate attributeName="stroke-dashoffset" values="0;12;0" dur="2.8s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite" />
                        </line>
                        <line x1="250" y1="90" x2="170" y2="150" stroke="url(#highlightGrad)" strokeWidth="3" strokeDasharray="8,4">
                          <animate attributeName="stroke-dashoffset" values="0;-12;0" dur="3.2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.8s" repeatCount="indefinite" />
                        </line>
                      </g>

                      {/* Multi-layered central innovation hub with rotation */}
                      <g filter="url(#glow)">
                        <circle cx="170" cy="150" r="55" fill="url(#primaryGrad)" opacity="0.7">
                          <animate attributeName="r" values="55;58;55" dur="4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="170" cy="150" r="35" fill="url(#centralGrad)" opacity="0.8">
                          <animate attributeName="r" values="35;38;35" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="170" cy="150" r="18" fill="white" opacity="0.95">
                          <animate attributeName="r" values="18;20;18" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="170" cy="150" r="8" fill="url(#primaryGrad)" opacity="0.9">
                          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                      </g>
                      
                      {/* Enhanced orbiting elements with hover interactions */}
                      {/* Speed & Reliability - top left with rocket icon */}
                      <g transform="translate(90, 90)" filter="url(#glow)">
                        <circle r="25" fill="url(#highlightGrad)" opacity="0.8">
                          <animate attributeName="r" values="25;28;25" dur="2.5s" repeatCount="indefinite" />
                        </circle>
                        <g transform="scale(0.8)">
                          <path d="M-10 -5L12 0L-10 5V2L-6 0L-10 -2V-5Z" fill="white" opacity="0.95">
                            <animateTransform attributeName="transform" type="translate" values="0,0;2,0;0,0" dur="1s" repeatCount="indefinite" />
                          </path>
                          <circle cx="8" cy="0" r="2" fill="url(#highlightGrad)" opacity="0.7">
                            <animate attributeName="r" values="2;3;2" dur="0.8s" repeatCount="indefinite" />
                          </circle>
                        </g>
                      </g>
                      
                      {/* Technical Excellence - top right with gear icon */}
                      <g transform="translate(250, 90)" filter="url(#glow)">
                        <circle r="25" fill="url(#accentGrad)" opacity="0.8">
                          <animate attributeName="r" values="25;28;25" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <g>
                          <circle r="8" fill="white" opacity="0.9" />
                          <circle r="4" fill="url(#accentGrad)" opacity="0.8" />
                          {/* Gear teeth */}
                          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                            <rect key={i} x="-1" y="-12" width="2" height="4" fill="white" opacity="0.8"
                                  transform={`rotate(${angle})`}>
                              <animateTransform attributeName="transform" type="rotate" 
                                              values={`${angle};${angle + 360}`} dur="8s" repeatCount="indefinite" />
                            </rect>
                          ))}
                        </g>
                      </g>
                      
                      {/* Partnership - bottom left with connection icon */}
                      <g transform="translate(90, 210)" filter="url(#glow)">
                        <circle r="25" fill="url(#secondaryGrad)" opacity="0.8">
                          <animate attributeName="r" values="25;28;25" dur="2.8s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="-6" cy="0" r="5" fill="white" opacity="0.9">
                          <animate attributeName="r" values="5;6;5" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="6" cy="0" r="5" fill="white" opacity="0.9">
                          <animate attributeName="r" values="5;6;5" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
                        </circle>
                        <path d="M-6 0L6 0" stroke="white" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
                      </g>
                      
                      {/* Growth & Results - bottom right with chart icon */}
                      <g transform="translate(250, 210)" filter="url(#glow)">
                        <circle r="25" fill="url(#primaryGrad)" opacity="0.8">
                          <animate attributeName="r" values="25;28;25" dur="3.5s" repeatCount="indefinite" />
                        </circle>
                        <g fill="white" opacity="0.9">
                          <rect x="-10" y="5" width="3" height="8" />
                          <rect x="-5" y="2" width="3" height="11" />
                          <rect x="0" y="-1" width="3" height="14" />
                          <rect x="5" y="-5" width="3" height="18">
                            <animate attributeName="height" values="18;22;18" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="y" values="-5;-7;-5" dur="2s" repeatCount="indefinite" />
                          </rect>
                        </g>
                        <path d="M-8 8L-2 5L3 2L8 -2" stroke="url(#highlightGrad)" strokeWidth="2" 
                              fill="none" strokeLinecap="round" opacity="0.8" />
                      </g>

                      {/* Multiple expanding rings for depth */}
                      <circle cx="170" cy="150" r="110" fill="none" stroke="url(#primaryGrad)" strokeWidth="1" opacity="0.15" strokeDasharray="15,10">
                        <animate attributeName="stroke-dashoffset" values="0;25;0" dur="6s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="170" cy="150" r="130" fill="none" stroke="url(#secondaryGrad)" strokeWidth="1" opacity="0.1" strokeDasharray="20,15">
                        <animate attributeName="stroke-dashoffset" values="0;-35;0" dur="8s" repeatCount="indefinite" />
                      </circle>
                      
                      {/* Enhanced floating particles with varied animations */}
                      <g opacity="0.7">
                        <circle cx="130" cy="110" r="2.5" fill="url(#highlightGrad)">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                          <animateTransform attributeName="transform" type="translate" values="0,0;5,-3;0,0" dur="4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="210" cy="190" r="2" fill="url(#accentGrad)">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
                          <animateTransform attributeName="transform" type="translate" values="0,0;-3,4;0,0" dur="3.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="200" cy="120" r="1.5" fill="url(#secondaryGrad)">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
                          <animateTransform attributeName="transform" type="translate" values="0,0;2,-2;0,0" dur="5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="140" cy="200" r="2" fill="url(#primaryGrad)">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="280" cy="140" r="1.5" fill="url(#highlightGrad)">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="60" cy="160" r="2" fill="url(#accentGrad)">
                          <animate attributeName="opacity" values="0.4;1;0.4" dur="2.8s" repeatCount="indefinite" />
                        </circle>
                      </g>
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4" style={{zIndex:999}}>
        <div className="max-w-6xl mx-auto"  style={{zIndex:999}}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"  style={{zIndex:999}}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center" style={{zIndex:999}}>
                <h3 className="text-4xl md:text-[48px] font-bold text-white mb-2 [font-family:'Inter',Helvetica]">
                  {stat.number}
                </h3>
                <p className="text-[#cccccc] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[48px] font-bold text-white leading-tight mb-6 [font-family:'Inter',Helvetica]">
              What Drives Us
            </h2>
            <p className="text-lg font-medium text-[#cccccc] leading-[27px] [font-family:'Instrument_Sans',Helvetica] max-w-2xl mx-auto">
              These core values shape every project we take on and every relationship we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-[#111111] border border-[#333] rounded-xl group hover:border-[#555] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-4 ">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 [font-family:'Inter',Helvetica]">
                    {value.title}
                  </h3>
                  <p className="text-[#cccccc] leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
            {/* Team Section */}
      <section ref={teamSectionRef} className="py-20 px-4" id="team">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[48px] font-bold text-white leading-tight mb-6 [font-family:'Inter',Helvetica]">
              Meet The Team
            </h2>
            <p className="text-lg font-medium text-[#cccccc] leading-[27px] [font-family:'Instrument_Sans',Helvetica] max-w-2xl mx-auto">
              The experienced professionals behind every successful project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                ref={el => {
                  teamCardRefs.current[index] = el;
                }}
                style={{ willChange: 'transform, opacity' }}
              >
                <Card className="bg-[#111111] border border-[#333] rounded-xl group hover:border-[#555] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                  <CardContent className="p-6 text-center">
                    {/* Profile image */}
                    <div className="relative w-34 h-34 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/20">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-xl font-bold text-white mb-1 [font-family:'Inter',Helvetica]">
                      {member.name}
                    </h3>
                    
                    {/* Role */}
                    <p className="text-[#888] font-medium mb-3 text-sm">
                      {member.role}
                    </p>
                    
                    {/* Bio */}
                    <p className="text-sm text-[#cccccc] leading-relaxed">
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
