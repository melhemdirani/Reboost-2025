// Portfolio data for new website version
// Only: image, title, description, tech stack, testimonials
import aiRestaurantImage from "@/assets/portfolio/ai-restaurant.png";
import baitbaitkImage from "@/assets/portfolio/baitbaitk.png";
import barberImage from "@/assets/portfolio/barber.png";
import bizritravelImage from "@/assets/portfolio/bizritravel.png";
import bluvowsImage from "@/assets/portfolio/bluvows.png";
import compassImage from "@/assets/portfolio/compass.png";
import danashImage from "@/assets/portfolio/danash.png";
import dealdonowImage from "@/assets/portfolio/dealdonow.png";
import ecommerceImage from "@/assets/portfolio/ecommerce.png";
import educifyImage from "@/assets/portfolio/educify.png";
import emecImage from "@/assets/portfolio/emec.png";
import figsandfindsImage from "@/assets/portfolio/figsandfinds.png";
import foodblogImage from "@/assets/portfolio/foodblog.png";
import hotelImage from "@/assets/portfolio/hotel.png";
import karmaImage from "@/assets/portfolio/karma.png";
import mawahibImage from "@/assets/portfolio/mawahib.png";
import nfc360Image from "@/assets/portfolio/nfc360.png";
import nftImage from "@/assets/portfolio/nft.png";
import pawsmobImage from "@/assets/portfolio/pawsmob.png";
import purecuresImage from "@/assets/portfolio/purecures.png";
import rayandatesImage from "@/assets/portfolio/rayandates.png";
import stepsweeImage from "@/assets/portfolio/stepswee.png";
import taptechImage from "@/assets/portfolio/taptech.png";
import basil from "@/assets/testimonials/basil.jpeg";
import lisa from "@/assets/testimonials/lisa.jpg";
// Testimonials
import maroun from "@/assets/testimonials/maroun.jpeg";
import mustafa from "@/assets/testimonials/mustafa.jpeg";
import nour from "@/assets/testimonials/nour.png";
import sam from "@/assets/testimonials/sam.jpeg";


export type PortfolioProject = {
  image: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  testimonial: {
    author: string;
    role: string;
    quote: string;
  };
};

export const portfolioProjects: PortfolioProject[] = [
    {
    image: aiRestaurantImage.src,
    title: 'AI Restaurant Call Center',
      category: "AI Platform",
    description:
      'AI-powered call center for restaurants, automating customer interactions and order processing. Built with React, Node.js, and AI technologies.',
    tags: ['React', 'Node.js', 'AI', 'ChatGPT', 'ChatBot', 'PostgreSQL', 'Prisma', 'Figma', 'Sass'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'ReBoost delivered a game-changing solution for our restaurant operations.'
    }
  },
  {
    image: nfc360Image.src,
    title: 'NFC Digital Business Card Project',
    description:
      'A cutting-edge NFC platform for digital business cards, enabling seamless, contactless interactions and rich user profiles. Built with React, Node.js, PostgreSQL, TypeScript, and NFC tech.',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Figma', 'Sass', "MVP"],
      category: "SaaS Platform",
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Efficient, secure, and eco-friendly. ReBoost delivered a modern networking solution.'
    }
  },
  {
    image: purecuresImage.src,
    title: 'PureCures E-commerce Website',
      category: "Ecommerce Website",

    description:
      'Premium eCommerce platform for mushrooms, focused on user-friendly design, robust backend, and scalable architecture. Built with React and Node.js.',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Figma', 'Sass',],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Fast, secure, and scalable. The shopping experience is both enjoyable and informative.'
    }
  },
  {
    image:educifyImage.src,
    title: 'Educify',
      category: "EdTech Platform",

    description:
      'Comprehensive online education platform connecting students and tutors, with live classes, booking, and messaging. Built with React, Node.js, and PostgreSQL.',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Figma', 'Sass', "MVP"],
    testimonial: {
      author: 'Sam',
      role: 'Founder at Educify',
      quote: 'They didn’t just build Educify — they challenged our thinking and made the platform stronger.'
    }
  },

  {
    image: mawahibImage.src,
    title: 'Mawahib',
      category: "Talent Platform",

    description:
      'Talent platform connecting professionals and agencies in the MENA region. Mobile app built with React Native and Node.js.',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Prisma', 'Figma', 'Expo'],
    testimonial: {
      author: 'Mustafa',
      role: 'Founder at Mawahib',
      quote: 'Built exactly what I had in mind. Clear communication and attention to detail throughout.'
    }
  },
  {
    image: pawsmobImage.src,
    title: 'PawsMob',
    category: "Social Media Platform",
    description:
      'Social media platform for pet enthusiasts, with pet profiles, stores, adoption, and real-time chat. Built with React, Node.js, and PostgreSQL.',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Figma', 'Sass'],
    testimonial: {
      author: 'Nour',
      role: 'Founder at PawsMob',
      quote: 'Professional and straightforward. They handled every challenge with care.'
    }
  },
  {
    image:  taptechImage.src,
    title: 'TapTech',
      category: "SaaS Platform",

    description:

      'SaaS platform for digital business cards, combining Node.js, PostgreSQL, and React for a customizable, scalable solution.',
    tags: ['React', 'Node.js', 'Google Analytics', 'MVP', 'PostgreSQL', 'Prisma', 'Sass'],
    testimonial: {
      author: 'Maroun',
      role: 'Co-founder at TapTech',
      quote: 'ReBoost helped shape our idea into something real. True collaboration at its finest.'
    }
  },
  {
    image: compassImage.src,
    title: 'Compass Website Development',
      category: "Corporate Website",

    description:
      'Corporate website for Compass-KA, built with WordPress and Elementor, focused on brand identity and user experience.',
    tags: ['WordPress', 'Elementor', 'Google Analytics'],
    testimonial: {
      author: 'Lisa',
      role: 'Managing Director at Compass',
      quote: 'Clean, responsive site that felt true to our brand. They turned our ideas into something that really works.'
    }
  },
  {
    image: dealdonowImage.src,
    title: 'Deal Do Now',
      category: "SaaS Platform",
    description:
      'Online shopping platform with draws for gifts, built with WordPress, Elementor, and WooCommerce.',
    tags: ['WordPress', 'Elementor', 'WooCommerce', 'Google Analytics', 'Figma'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Visually captivating and immersive. ReBoost redefined our online shopping experience.'
    }
  },
  {
    image: emecImage.src,
    title: 'Emec',
      category: "Corporate Website",

    description:
      'Corporate website for EMEC, showcasing portfolio and achievements, built with WordPress and Elementor.',
    tags: ['WordPress', 'Elementor', 'WooCommerce', 'Google Analytics', 'Figma'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Modern design and functionality elevated our digital identity.'
    }
  },
  {
    image: bluvowsImage.src,
    title: 'Bluvows',
      category: "Corporate Website",

    description:
      'Event agency website with landing pages for Cyprus and Greece, built with WordPress and Elementor.',
    tags: ['WordPress', 'Elementor', 'Google Analytics', 'Figma'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Organized and visually appealing. The website met all our requirements.'
    }
  },
  {
    image: baitbaitkImage.src,
    title: 'Baitbaitk',
    category: "Ecommerce Website",
    description:
      'Ecommerce website for houseware items, built with WordPress and WooCommerce.',
    tags: ['WordPress', 'WooCommerce', 'Elementor', 'Figma'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Delightful shopping experience. Secure and visually stunning.'
    }
  },
  {
    image: stepsweeImage.src,
    title: 'StepsWee',
      category: "Corporate Website",

    description:
      'Entertainment planning website with black-themed design, built with WordPress and Elementor.',
    tags: ['WordPress', 'Elementor', 'Google Analytics', 'Figma'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Visually captivating and user-friendly. Exceptional user experience.'
    }
  },
  {
    image: bizritravelImage.src,
    title: 'Bizri travel & tourism',
    category: "Corporate Website",
    description:
      'Landing page for travel agency, built with WordPress. Features customer testimonials and ratings.',
    tags: ['WordPress', 'Elementor', 'Google Analytics', 'Figma'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'User-friendly and easy to navigate. Effectively showcases our services.'
    }
  },
  {
    image: figsandfindsImage.src,
    title: 'Figs and finds',
    category: "Ecommerce Website",
    description:
      'Shopify ecommerce platform for curated collections, focused on elegance and user experience.',
    tags: ['Shopify', 'Figma', 'Google Analytics'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Harmonious digital space that reflects our brand’s timeless appeal.'
    }
  },
  {
    image: rayandatesImage.src,
    title: 'Rayan dates',
    category: "Ecommerce Website",
    description:
      'Shopify website for premium dates, with luxurious packaging and brand strategy.',
    tags: ['Shopify', 'Figma', 'Google Analytics'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Fresh identity and diversity. Platform to manage campaigns and escalate growth.'
    }
  },
  {
    image: danashImage.src,
    title: 'Danash',
      category: "Corporate Website",
    
    description:
      'Website for family-owned construction company, with admin dashboard and project showcase. Built with React and Node.js.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Figma'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Engaging user experience and clear call to action.'
    }
  },
  {
    image: hotelImage.src,
    title: 'Hotel Template',
    category: "Corporate Website Template",
    description:
      'Dynamic website template for hotels, built with React. Visually appealing, engaging, and optimized for all devices.',
    tags: ['React', 'Node.js', 'Sass'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Showcases services and location interactively. Increased online presence.'
    }
  },
  {
    image: ecommerceImage.src,
    title: 'E-Commerce template',
    category: "Ecommerce Template",
    description:
      'Ecommerce website template powered by React, Node.js, MongoDB, Sass, and Redux. High-speed, dynamic, and scalable.',
    tags: ['React', 'Node.js', 'MongoDB', 'Sass', 'Redux'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Seamless user experience and optimal performance.'
    }
  },
  {
    image: nftImage.src,
    title: 'Nft Lab',
    category: "NFT Platform",
    description:
      'Landing page for NFT startup, with funky and playful design. Built with React and Node.js.',
    tags: ['React', 'Node.js', 'Sass'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Showcases offerings and mission effectively.'
    }
  },
  {
    image: barberImage.src,
    title: 'Barber website template',
    category: "Corporate Website Template",
    description:
      'Landing page template for barber shop, built with React. Modern design, booking system, and optimized for all devices.',
    tags: ['React', 'Node.js', 'Sass'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Visually appealing and engaging. Increased online presence.'
    }
  },
  {
    image: foodblogImage.src,
    title: 'Food blog template',
      category: "Blog Template",

    description:
      'Ecommerce website template for food blogs, built with React, Node.js, MongoDB, Sass, and Redux.',
    tags: ['React', 'Node.js', 'MongoDB', 'Sass', 'Redux'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Seamless user experience and optimal performance.'
    }
  },
  {
    image: karmaImage.src,
    title: 'Karma template',
      category: "E-Commerce Template",
    description:
      'Ecommerce website template for Karma, built with React, Node.js, MongoDB, Sass, and Redux.',
    tags: ['React', 'Node.js', 'MongoDB', 'Sass', 'Redux'],
    testimonial: {
      author: 'Client',
      role: 'Founder',
      quote: 'Seamless user experience and optimal performance.'
    }
  }
];

const marounTestimonial ={
  name: "Maroun",
  role: "Co-founder at TapTech",
  image: maroun,
  message:
    "We had a clear idea for TapTech, and ReBoost helped shape it into something real. They understood what we needed, added thoughtful suggestions, and delivered a solid, user-friendly platform. Felt like a true collaboration.",
}

const basilTestimonial = {
  name: "Basil",
  role: "Founder at Incis.io",
  image: basil,
  message:
    "ReBoost built my platform exactly as I envisioned — fast, responsive, and scalable. Their use of AI tools made the process efficient without cutting corners, and they handled revisions smoothly. Professional, modern, and easy to work with. Highly recommended.",
}
const lisaTestimonial = {
  name: "Lisa",
  role: "Managing Director at Compass",
  image: lisa,
  message:
    "ReBoost delivered a clean, responsive site that felt true to our brand. They turned our ideas into something that really works, and the process was smooth and professional.",
}
const mustafaTestimonial = {
  name: "Mustafa",
  role: "Founder at Mawahib",
  image: mustafa,
  message:
    "ReBoost built exactly what I had in mind for Mawahib. The communication was clear, the team paid attention to the small things, and the end result really matched our vision.",
}

const nourTestimonial   ={
      name: "Nour",
      role: "Founder at PawsMob",
      image: nour,
      message:
        "Working with ReBoost was straightforward and professional. They handled every challenge with care and always kept the project moving forward. Great experience overall.",
    }

    const samTestimonial = {
  name: "Sam",
  role: "Founder at Educify",
  image: sam,
  message:
    "ReBoost didn’t just build Educify — they challenged our thinking and made the platform stronger. Their input went beyond development. They truly cared about the product and our long-term goals.",
}

// Exporting testimonials for use in other components
 export const testimonials = [
    marounTestimonial,
  basilTestimonial,
   lisaTestimonial,
  mustafaTestimonial,
 samTestimonial,
nourTestimonial,
  
  ];

  const restoTestimonial =  {
    message:
      "This is the most powerful tool we've built. It handles voice, understands context, and executes tasks in real time. We are blown away by how natural and fast the experience feels.",
    role: "Founder",
    name: "Un named",
    image: ""
    // image: "/melhem.png"
  }

 

  export const Authors = {
     maroun: marounTestimonial,
  basil: basilTestimonial,
   lisa: lisaTestimonial,
  mustafa: mustafaTestimonial,
 sam: samTestimonial,
nour: nourTestimonial,
resto: restoTestimonial
  }

export  const caseStudies = [
   {
  title: "AI Call Center Assistant for Restaurants",
  subtitle: "Reimagining customer support with real-time AI",
  category: "AI-Powered Platform",
  client: "Confidential (Internal Product)",
  duration: "8 weeks",
  team: "2 developers",
  image: aiRestaurantImage.src,
  challenge:
    "Restaurants were overwhelmed with calls for orders, cancellations, and support—often missing opportunities due to limited staff. We set out to build a real-time AI assistant that could handle voice and text interactions, understand customer intent, and perform actions like placing or canceling orders, all while staying highly responsive.",
  solution:
    "We developed a full-stack AI-powered call center using ChatGPT APIs, Whisper for speech-to-text, and WebRTC with Socket.IO for real-time audio streaming. The system uses dynamic prompt engineering, handles WhatsApp and phone calls, and responds instantly to users through voice or messaging. A custom rules engine lets restaurants define actions, intents, and integrations with their menus and CRM tools.",
  results: [
    { metric: "Languages Supported", value: "3+", description: "Arabic, English, and French from day one" },
    { metric: "Latency", value: "700ms", description: "Average AI response time during voice calls" },
    { metric: "Automation Rate", value: "85%", description: "Customer requests handled without human intervention" },
    { metric: "Channels Integrated", value: "3", description: "Phone, WhatsApp, and Website Chat" }
  ],
  technologies: [
    "Node.js", "Socket.IO", "WebRTC", "OpenAI GPT-4o", "Whisper", "PostgreSQL", "Prisma", "DeepSeek"
  ],

},
 {
  title: "Educify: Next-Gen Learning Platform",
  subtitle: "Redefining how students and tutors connect online",
  category: "EdTech Platform",
  client: "Educify",
  duration: "3 years",
  team: "6 developers",
  image: educifyImage.src,
  challenge:
    "Educify set out to build a full-scale educational platform connecting students with tutors for live sessions, courses, and group lessons. The challenge was to develop a deeply featured system from scratch—capable of handling payments, scheduling, messaging, video streaming, and user management—while maintaining clarity and performance across the codebase.",
  solution:
    "Over three years, we developed a robust and modular platform using React, Node.js, PostgreSQL, and Prisma. The system included profile customization, tutor booking, live video classes, course management, messaging, payments, reviews, and an intuitive admin panel. With thousands of teachers onboarded during early traction, Educify’s codebase evolved into one of our most comprehensive projects.",
  results: [
    { metric: "Teachers Onboarded", value: "3K+", description: "Verified tutors across various subjects" },
    { metric: "Codebase Size", value: "300K+", description: "Lines of production-grade code" },
    { metric: "Features Shipped", value: "25+", description: "Major user-facing modules" },
    { metric: "Development Span", value: "3 years", description: "Continuous product evolution" }
  ],
  technologies: ["React", "Node.js", "PostgreSQL", "Prisma", "Socket.io", "Stripe", "FFmpeg", "PayPal", "Wise API", "Figma",],
  testimonial: Authors.sam
}
,
  {
    title: "NFC360: Smart Digital Business Card SaaS",
    subtitle: "Connecting brands with people, instantly",
    category: "SaaS Platform",
    client: "NFC360",
    duration: "4 months",
    team: "4 developers",
    image: nfc360Image.src,
    challenge:
      "NFC360 set out to disrupt the traditional business card industry by enabling professionals to share interactive profiles with a single tap. The challenge was to deliver a customizable, mobile-optimized platform that supported analytics, lead capture, and white-labeling capabilities—all within a tight deadline.",
    solution:
      "We built a full-stack SaaS platform using React, Node.js, and PostgreSQL with Stripe integration for subscriptions. The system includes profile customization, QR/NFC activation, team roles, testimonial modules, and analytics—all accessible via a sleek dashboard.",
    results: [
      { metric: "Profiles Created", value: "12K+", description: "Users onboarded post-launch" },
      { metric: "Engagement Rate", value: "64%", description: "Tap-through to lead form" },
      { metric: "Custom Themes", value: "30+", description: "Design templates supported" },
      { metric: "Client ROI", value: "3x", description: "Average return on software license" }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Prisma", "Shopify", "Figma"],
    testimonial: Authors.maroun
  },


];
