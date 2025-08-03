
'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  WebDevelopmentVisual, 
  MobileAppVisual, 
  SaasPlatformVisual, 
  AIMLVisual, 
  DevOpsVisual, 
  UIUXVisual 
} from "@/components/ServiceVisuals";
import { useEffect, useRef, useState } from "react";

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
              setVisibleSteps(prev => {
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
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const services = [
    {
      id: "ai",
      title: "Custom Web Development",
      description: "Modern, scalable web applications built with cutting-edge technologies. From simple websites to complex enterprise platforms.",
      icon: "🌐",
      visual: WebDevelopmentVisual,
      features: [
        "Responsive design across all devices",
        "Modern frameworks (React, Next.js, Vue)",
        "SEO optimization and performance tuning",
        "Custom CMS integration",
        "Progressive Web App capabilities",
        "API development and integration"
      ],
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "TypeScript", "Tailwind CSS"],
      deliverables: ["Source code", "Documentation", "Deployment", "Training"],
      timeline: "4-12 weeks",
      idealFor: "Businesses needing modern web presence, e-commerce platforms, or internal tools"
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      icon: "📱",
      visual: MobileAppVisual,
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions (React Native)",
        "App Store optimization and submission",
        "Push notifications and analytics",
        "Offline functionality",
        "Backend API integration"
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase", "AWS"],
      deliverables: ["Mobile apps", "Backend APIs", "App Store listings", "Analytics setup"],
      timeline: "8-16 weeks",
      idealFor: "Startups and enterprises looking to reach mobile audiences"
    },
    {
      title: "SaaS Platform Development",
      id: "saas",
      description: "End-to-end SaaS platforms with multi-tenancy, subscription management, and scalable architecture.",
      icon: "☁️",
      visual: SaasPlatformVisual,
      features: [
        "Multi-tenant architecture",
        "Subscription and billing integration",
        "User management and authentication",
        "Admin dashboards and analytics",
        "API-first development",
        "Scalable cloud infrastructure"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe"],
      deliverables: ["Full platform", "Admin panel", "Payment integration", "User onboarding"],
      timeline: "12-24 weeks",
      idealFor: "Entrepreneurs building scalable software-as-a-service businesses"
    },
    {
      id: null,
      title: "AI & Machine Learning Integration",
      description: "Intelligent automation and AI-powered features integrated seamlessly into your existing or new applications.",
      icon: "🤖",
      visual: AIMLVisual,
      features: [
        "Custom ML model development",
        "Natural language processing",
        "Computer vision integration",
        "Predictive analytics",
        "Chatbots and virtual assistants",
        "AI-powered recommendations"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "AWS ML"],
      deliverables: ["ML models", "API endpoints", "Training data", "Performance metrics"],
      timeline: "6-16 weeks",
      idealFor: "Companies looking to leverage AI for competitive advantage"
    },
    {
      id: null,
      title: "DevOps & Cloud Infrastructure",
      description: "Robust, scalable cloud infrastructure with automated deployment pipelines and monitoring systems.",
      icon: "⚙️",
      visual: DevOpsVisual,
      features: [
        "CI/CD pipeline setup",
        "Cloud infrastructure (AWS, GCP, Azure)",
        "Container orchestration (Docker, Kubernetes)",
        "Monitoring and logging",
        "Database optimization",
        "Security implementation"
      ],
      technologies: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "Prometheus"],
      deliverables: ["Infrastructure", "CI/CD pipelines", "Monitoring setup", "Documentation"],
      timeline: "4-8 weeks",
      idealFor: "Teams needing reliable, scalable infrastructure and deployment processes"
    },
    {
      id: null,
      title: "UI/UX Design & Development",
      description: "User-centered design that converts visitors into customers, backed by data-driven insights and modern design principles.",
      icon: "🎨",
      visual: UIUXVisual,
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Design system creation",
        "Conversion optimization"
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Framer", "React", "CSS", "JavaScript"],
      deliverables: ["Design mockups", "Prototypes", "Design system", "Frontend code"],
      timeline: "6-12 weeks",
      idealFor: "Businesses wanting to improve user experience and conversion rates"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We dive deep into your business goals, technical requirements, and user needs to create a comprehensive project roadmap."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team designs the user experience and technical architecture, ensuring scalability and optimal performance."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies, with continuous testing and regular client feedback loops."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We handle deployment, provide training, and offer ongoing support to ensure your project's continued success."
    }
  ];

  const pricingTiers = [
    {
      name: "Startup",
      price: "Custom Quote",
      description: "Perfect for early-stage companies",
      features: [
        "MVP development",
        "2-week sprints",
        "Weekly check-ins",
        "Basic support",
        "3 months warranty"
      ],
      highlight: false
    },
    {
      name: "Growth",
      price: "Custom Quote",
      description: "For scaling businesses",
      features: [
        "Full-featured applications",
        "1-week sprints",
        "Daily standups",
        "Priority support",
        "6 months warranty",
        "Performance optimization"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      description: "For large organizations",
      features: [
        "Complex enterprise solutions",
        "Dedicated team",
        "24/7 support",
        "Custom SLAs",
        "12 months warranty",
        "Advanced security",
        "Compliance support"
      ],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-[64px] font-bold text-white leading-tight md:leading-[76.8px] [font-family:'Inter',Helvetica] mb-6">
            Transform Your Ideas
            <br />
            Into Digital Success
          </h1>
          
          <p className="text-lg font-medium text-[#cccccc] leading-[27px] [font-family:'Instrument_Sans',Helvetica] max-w-3xl mx-auto mb-16">
            From web applications to AI integration, we provide comprehensive development services 
            that help businesses innovate, scale, and stay ahead of the competition.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                id={service.id ?? `Service-${index}`}
                className="sticky top-20 bg-[#111111] w-[80vw] mx-auto rounded-3xl border border-[#333] overflow-hidden group hover:border-[#555] transition-all duration-500"
                style={{ 
                  zIndex: services.length + index,
                  transform: `translateY(${index * 20}px)`,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                  {/* Content Side */}
                  <div className="p-12 flex flex-col justify-center">
                    <div className="text-sm text-[#666] uppercase tracking-wide mb-4">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 [font-family:'Inter',Helvetica] leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-[#cccccc] leading-relaxed mb-8 max-w-md">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-8">
                      <ul className="space-y-3">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-[#888] flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 5).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="bg-[#1a1a1a] text-[#666] border-[#333] text-xs px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-fit bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 rounded-full"
                    >
                      Learn more →
                    </Button>
                  </div>

                  {/* Visual Side */}
                  <div className="relative bg-black flex items-center justify-center p-12">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <service.visual />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[48px] font-bold text-white leading-tight mb-6 [font-family:'Inter',Helvetica]">
              Our Development Process
            </h2>
            <p className="text-lg font-medium text-[#cccccc] leading-[27px] [font-family:'Instrument_Sans',Helvetica] max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                ref={(el) => { stepRefs.current[index] = el; }}
                className={`text-center transform transition-all duration-700 ${
                  visibleSteps.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: visibleSteps.includes(index) ? `${index * 200}ms` : '0ms'
                }}
              >
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto [font-family:'Inter',Helvetica]">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 [font-family:'Inter',Helvetica]">
                  {step.title}
                </h3>
                <p className="text-[#cccccc] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[48px] font-bold text-white leading-tight mb-6 [font-family:'Inter',Helvetica]">
              Flexible Engagement Models
            </h2>
            <p className="text-lg font-medium text-[#cccccc] leading-[27px] [font-family:'Instrument_Sans',Helvetica] max-w-2xl mx-auto">
              Choose the engagement model that best fits your project needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index}   className={`bg-[#111111] rounded-xl ${tier.highlight ? 'border-white border-2' : 'border border-[#333]'} relative`}>
                {tier.highlight && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-black">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 [font-family:'Inter',Helvetica]">
                    {tier.name}
                  </h3>
                  <p className="text-[#888] mb-6">
                    {tier.description}
                  </p>
                  <div className="text-3xl font-bold text-white mb-8 [font-family:'Inter',Helvetica]">
                    {tier.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-[#cccccc] flex items-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="i">
                    <Button className={`w-full ${tier.highlight ? 'bg-white text-black hover:bg-white/90' : 'bg-[#333] text-white hover:bg-[#444]'}`}>
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
