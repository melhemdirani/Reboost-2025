import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const AffiliateSection = ()  => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const benefits = [
    {
      title: "High Commission Rates",
      description:
        "Earn up to 30% commission on each successful referral — one of the most competitive rates in the industry.",
      icon: "💰",
    },
    {
      title: "Recurring Revenue",
      description:
        "Enjoy monthly payouts for the full duration of your referred client’s engagement.",
      icon: "📈",
    },
    {
      title: "Sales & Marketing Support",
      description:
        "Access personalized assets, pitch templates, and consultation to help you close deals faster.",
      icon: "🎯",
    },
  ];

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-black to-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
            Partner with ReBoost
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Join our affiliate program and get rewarded for helping businesses
            discover modern, high-impact digital solutions — from SaaS platforms
            to top-tier developer teams.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16"
        >
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-[#111111]border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:opacity-[.6] transition-all duration-300"
            >
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div id="license" />
        <motion.div variants={itemVariants} className="text-center px-4">
          <Button className="bg-white text-black rounded-[96px] h-[54px] px-8 md:px-12 shadow-[0px_10px_20px_#0000001a] w-full md:w-auto">
            <span className="font-normal text-lg leading-9 font-['Inter',Helvetica]">
              Apply as a Partner
            </span>
            <img className="w-[15px] h-3 ml-2" alt="Arrow" src="/group-1.png" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
