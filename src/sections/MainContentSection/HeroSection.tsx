import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

const HeroSection = () => {
  const rocketRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (rocketRef.current && pathRef.current) {
      gsap.set(rocketRef.current, { opacity: 1 });
      gsap.to(rocketRef.current, {
        duration: 6,
        repeat: -1,
        ease: "power1.inOut",
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        }
      });
    }
  }, []);

  return (
    <div className="relative w-full py-0 flex flex-col-reverse md:flex-row justify-center items-center h-[70vh] md:h-[90vh] overflow-hidden">
      {/* SVG Rocket Animation */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none z-10"
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        fill="none"
        style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
      >
        {/* Orbit Path (invisible) */}
        <path
          ref={pathRef}
          d="M 60 600 Q 200 180 400 350 Q 700 700 1100 200"
          stroke="none"
          fill="none"
        />
      </svg>
      {/* Rocket SVG (small, white, styled like the provided image) */}
      <svg
        ref={rocketRef}
        className="absolute z-20"
        width="32"
        height="44"
        viewBox="0 0 48 68"
        fill="none"
        style={{ opacity: 0 }}
      >
        {/* Body */}
        <ellipse cx="24" cy="32" rx="14" ry="22" fill="#fff" />
        {/* Fins */}
        <polygon points="12,54 24,44 36,54 24,62" fill="#fff" />
        {/* Window */}
        <ellipse cx="24" cy="32" rx="5" ry="7" fill="#e0e0e0" />
      </svg>

      {/* Main Hero Content */}
      <div className="flex flex-col items-start justify-center w-full md:w-auto h-auto md:h-full z-[49] px-4 md:px-0 mt-8 md:mt-0">
        <div className="text-left mb-6 md:mb-10 max-w-full md:max-w-[700px]">
          <h1 className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-[60.9px] z-[999] leading-tight md:leading-[76.8px] text-white font-['Inter',Helvetica] mb-4 md:mb-10">
            Custom Software. Built to Scale.
          </h1>
          <div className="font-medium text-base sm:text-lg md:text-xl text-[#94969d] font-['Instrument_Sans',Helvetica]">
            We partner with forward-thinking businesses to design and develop scalable SaaS platforms and intelligent systems — combining speed with long-term reliability.
          </div>
        </div>
        <a href="/contact">
          <button className="bg-blue-500 text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition text-sm md:text-base">Let’s Build Together</button>
        </a>
      </div>
      <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:w-[450px] h-[260px] sm:h-[350px] md:h-[506px] bg-[url(/hero.png)] bg-contain bg-center bg-no-repeat mx-auto md:mx-0">
        <div className="relative h-[180px] sm:h-[250px] md:h-[400px] top-[90px] sm:top-[120px] md:top-[197px] [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]">
          <div className="relative w-full h-[80px] sm:h-[120px] md:w-[450px] md:h-[184px] top-[90px] sm:top-[120px] md:top-[196px] left-[4px] md:left-[9px] [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.94)_43%,rgba(0,0,0,1)_81%)]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
