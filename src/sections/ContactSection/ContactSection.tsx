"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLinkedinIn, FaMapMarkerAlt,FaPhone, FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Your message has been sent successfully!'
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      content: "info@reboost.live",
      href: "mailto:info@reboost.live",
      color: "hover:bg-[rgba(255,255,255,.2)]"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      content: "+961 71 523 153",
      href: "https://api.whatsapp.com/send/?phone=%2B96171523153&text&type=phone_number&app_absent=0",
      color: "hover:bg-[rgba(255,255,255,.2)]"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      content: "+961 71 523 153",
      href: "tel:+96171523153",
      color: "hover:bg-[rgba(255,255,255,.2)]"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone 2",
      content: "+961 78 852 926",
      href: "tel:+96178852926",
      color: "hover:bg-[rgba(255,255,255,.2)]"
    },
    {
      icon: <FaLinkedinIn className="w-6 h-6" />,
      title: "LinkedIn",
      content: "ReBoost Company",
      href: "https://www.linkedin.com/company/82971515/",
      color: "hover:bg-[rgba(255,255,255,.2)]"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Location",
      content: "Beirut, Lebanon",
      href: "#",
      color: "hover:bg-[rgba(255,255,255,.2)]"
    }
  ];

  return (
    <section className="w-full max-w-[1320px] mx-auto py-16 md:py-24 px-4">
      {/* Header */}
      <div className="text-center mb-16" id="contact-form">
        <h1 className="font-bold text-4xl md:text-[60.9px] leading-tight md:leading-[76.8px] text-white font-['Inter',Helvetica] mb-6">
          Get In Touch
        </h1>
        <p className="font-medium text-lg md:text-xl text-[#94969d] font-['Instrument_Sans',Helvetica] max-w-2xl mx-auto">
          Ready to bring your vision to life? Let's discuss your project and discover how we can build something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" >
        {/* Contact Form */}
        <Card className="bg-[#111111] border border-[rgba(255,255,255,.4)] rounded-3xl">
          <CardContent className="p-8">
            <h2 className="font-bold text-2xl md:text-3xl text-white font-['Inter',Helvetica] mb-6">
              Send us a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6" >
              {/* Status Message */}
              {submitStatus.type && (
                <div className={`p-4 rounded-lg text-white border ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-900/20 border-green-500/50 text-green-300' 
                    : 'bg-red-900/20 border-red-500/50 text-red-300 '
                }`}>
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-[#18181a] border border-[#333] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-[#18181a] border border-[#333] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-[#18181a] border border-[#333] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-[#18181a] border border-[#333] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-white transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black rounded-xl h-[54px] text-lg font-normal hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div>
          <h2 className="font-bold text-2xl md:text-3xl text-white font-['Inter',Helvetica] mb-8">
            Let's Connect
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group p-6 bg-[#111111] border border-[rgba(255,255,255,.4)] rounded-xl transition-all duration-200 hover:scale-105 ${method.color}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-white group-hover:text-white transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-white text-lg">
                      {method.title}
                    </h3>
                    <p className="text-[#94969d] group-hover:text-white text-sm">
                      {method.content}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <Card className="bg-[#111111] border border-[rgba(255,255,255,.4)] rounded-xl">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl text-white mb-4">
                Why Choose ReBoost?
              </h3>
              <ul className="space-y-3 text-[#94969d]">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  End-to-end software development expertise
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Proven track record with 95% client retention
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Agile development with transparent communication
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Scalable solutions built for long-term success
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
