import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const LicensingSection = ()  => {
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

  const features = [
    {
      title: "White Label Solution",
      description: "Rebrand our AI Call Center under your company's identity",
      icon: "🎨",
    },
    {
      title: "Custom Integration",
      description: "Seamlessly integrate with your existing systems",
      icon: "🔄",
    },
    {
      title: "Full Control",
      description: "Manage all aspects of the platform independently",
      icon: "🎮",
    },
    {
      title: "24/7 Support",
      description: "Dedicated technical support and maintenance",
      icon: "🛠️",
    },
  ];

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
            License Our Technology
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Power your business with our enterprise-grade AI Call Center
            solution. Customize and scale under your own brand.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#111111]  border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:opacity-[.6] transition-all duration-300"
            >
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
        >
          <Button className="w-full sm:w-auto bg-[white]  text-black px-6 sm:px-8 py-4 sm:py-6 sm:text-lg rounded-full transition-all duration-300">
            Request Demo
          </Button>
          <Button className="w-full sm:w-auto bg-transparent border border-[rgba(255,255,255,.4)] shadow-[0_0_20px_rgba(255,255,255,0.2)]  text-white hover:opacity-[.6]px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300">
            Licensing Guide
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
