// Portfolio data for new website version
import aiRestaurantImage from '@/assets/portfolio/ai-restaurant.png';
import educifyImage from '@/assets/portfolio/educify.png';
import mawahibImage from '@/assets/portfolio/mawahib.png';
import nfc360Image from '@/assets/portfolio/nfc360.png';
import purecuresImage from '@/assets/portfolio/purecures.png';
import pawsmobImage from '@/assets/portfolio/pawsmob.png';

// Additional portfolio images
import taptechImage from '@/assets/portfolio/taptech.png';
import compassImage from '@/assets/portfolio/compass.png';
import dealdonowImage from '@/assets/portfolio/dealdonow.png';
import emecImage from '@/assets/portfolio/emec.png';
import bluvowsImage from '@/assets/portfolio/bluvows.png';
import baitbaitkImage from '@/assets/portfolio/baitbaitk.png';
import stepsweeImage from '@/assets/portfolio/stepswee.png';
import bizritravelImage from '@/assets/portfolio/bizritravel.png';
import figsandfindsImage from '@/assets/portfolio/figsandfinds.png';
import rayandatesImage from '@/assets/portfolio/rayandates.png';
import danashImage from '@/assets/portfolio/danash.png';
import hotelImage from '@/assets/portfolio/hotel.png';
import ecommerceImage from '@/assets/portfolio/ecommerce.png';
import nftImage from '@/assets/portfolio/nft.png';
import barberImage from '@/assets/portfolio/barber.png';
import foodblogImage from '@/assets/portfolio/foodblog.png';
import karmaImage from '@/assets/portfolio/karma.png';

// Testimonial images
import basil from '@/assets/testimonials/basil.jpeg';
import lisa from '@/assets/testimonials/lisa.jpg';
import maroun from '@/assets/testimonials/maroun.jpeg';
import mustafa from '@/assets/testimonials/mustafa.jpeg';
import nour from '@/assets/testimonials/nour.png';
import sam from '@/assets/testimonials/sam.jpeg';

export type PortfolioProject = {
  id: string;
  slug: string;
  image: string;
  title: string;
  category: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  testimonial?: {
    name: string;
    role: string;
    message: string;
    image?: string;
  };
  features?: string[];
  challenges?: string[];
  results?: string[];
};

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Utility functions for portfolio navigation
export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return processedPortfolioProjects.find((project) => project.slug === slug);
}

export function getRelatedProjects(
  currentSlug: string,
  limit = 3
): PortfolioProject[] {
  return processedPortfolioProjects
    .filter((project) => project.slug !== currentSlug)
    .slice(0, limit);
}

export function getAllProjectSlugs(): string[] {
  return processedPortfolioProjects.map((project) => project.slug);
}

const marounTestimonial = {
  name: 'Maroun',
  role: 'Co-founder at TapTech',
  image: maroun.src,
  message:
    'We had a clear idea for TapTech, and ReBoost helped shape it into something real. They understood what we needed, added thoughtful suggestions, and delivered a solid, user-friendly platform. Felt like a true collaboration.',
};

const basilTestimonial = {
  name: 'Basil',
  role: 'Founder at Incis.io',
  image: basil.src,
  message:
    'ReBoost built my platform exactly as I envisioned — fast, responsive, and scalable. Their use of AI tools made the process efficient without cutting corners, and they handled revisions smoothly. Professional, modern, and easy to work with. Highly recommended.',
};
const lisaTestimonial = {
  name: 'Lisa',
  role: 'Managing Director at Compass',
  image: lisa.src,
  message:
    'ReBoost delivered a clean, responsive site that felt true to our brand. They turned our ideas into something that really works, and the process was smooth and professional.',
};
const mustafaTestimonial = {
  name: 'Mustafa',
  role: 'Founder at Mawahib',
  image: mustafa.src,
  message:
    'ReBoost built exactly what I had in mind for Mawahib. The communication was clear, the team paid attention to the small things, and the end result really matched our vision.',
};

const nourTestimonial = {
  name: 'Nour',
  role: 'Founder at PawsMob',
  image: nour.src,
  message:
    'Working with ReBoost was straightforward and professional. They handled every challenge with care and always kept the project moving forward. Great experience overall.',
};

const samTestimonial = {
  name: 'Sam',
  role: 'Founder at Educify',
  image: sam.src,
  message:
    'ReBoost didn’t just build Educify — they challenged our thinking and made the platform stronger. Their input went beyond development. They truly cared about the product and our long-term goals.',
};

// Exporting testimonials for use in other components
export const testimonials = [
  marounTestimonial,
  basilTestimonial,
  lisaTestimonial,
  mustafaTestimonial,
  samTestimonial,
  nourTestimonial,
];

const restoTestimonial = {
  message:
    "This is the most powerful tool we've built. It handles voice, understands context, and executes tasks in real time. We are blown away by how natural and fast the experience feels.",
  role: 'Founder',
  name: 'Un named',
  image: '',
  // image: "/melhem.png"
};

export const Authors = {
  maroun: marounTestimonial,
  basil: basilTestimonial,
  lisa: lisaTestimonial,
  mustafa: mustafaTestimonial,
  sam: samTestimonial,
  nour: nourTestimonial,
  // resto: restoTestimonial,
};

export const caseStudies = [
  {
    title: 'AI Call Center Assistant for Restaurants',
    subtitle: 'Reimagining customer support with real-time AI',
    category: 'AI-Powered Platform',
    client: 'Confidential (Internal Product)',
    duration: '8 weeks',
    team: '2 developers',
    image: aiRestaurantImage.src,
    challenge:
      'Restaurants were overwhelmed with calls for orders, cancellations, and support—often missing opportunities due to limited staff. We set out to build a real-time AI assistant that could handle voice and text interactions, understand customer intent, and perform actions like placing or canceling orders, all while staying highly responsive.',
    solution:
      'We developed a full-stack AI-powered call center using ChatGPT APIs, Whisper for speech-to-text, and WebRTC with Socket.IO for real-time audio streaming. The system uses dynamic prompt engineering, handles WhatsApp and phone calls, and responds instantly to users through voice or messaging. A custom rules engine lets restaurants define actions, intents, and integrations with their menus and CRM tools.',
    results: [
      {
        metric: 'Languages Supported',
        value: '3+',
        description: 'Arabic, English, and French from day one',
      },
      {
        metric: 'Latency',
        value: '700ms',
        description: 'Average AI response time during voice calls',
      },
      {
        metric: 'Automation Rate',
        value: '85%',
        description: 'Customer requests handled without human intervention',
      },
      {
        metric: 'Channels Integrated',
        value: '3',
        description: 'Phone, WhatsApp, and Website Chat',
      },
    ],
    technologies: [
      'Node.js',
      'Socket.IO',
      'WebRTC',
      'OpenAI GPT-4o',
      'Whisper',
      'PostgreSQL',
      'Prisma',
      'DeepSeek',
    ],
  },
  {
    title: 'Educify: Next-Gen Learning Platform',
    subtitle: 'Redefining how students and tutors connect online',
    category: 'EdTech Platform',
    client: 'Educify',
    duration: '3 years',
    team: '6 developers',
    image: educifyImage.src,
    challenge:
      'Educify set out to build a full-scale educational platform connecting students with tutors for live sessions, courses, and group lessons. The challenge was to develop a deeply featured system from scratch—capable of handling payments, scheduling, messaging, video streaming, and user management—while maintaining clarity and performance across the codebase.',
    solution:
      'Over three years, we developed a robust and modular platform using React, Node.js, PostgreSQL, and Prisma. The system included profile customization, tutor booking, live video classes, course management, messaging, payments, reviews, and an intuitive admin panel. With thousands of teachers onboarded during early traction, Educify’s codebase evolved into one of our most comprehensive projects.',
    results: [
      {
        metric: 'Teachers Onboarded',
        value: '3K+',
        description: 'Verified tutors across various subjects',
      },
      {
        metric: 'Codebase Size',
        value: '300K+',
        description: 'Lines of production-grade code',
      },
      {
        metric: 'Features Shipped',
        value: '25+',
        description: 'Major user-facing modules',
      },
      {
        metric: 'Development Span',
        value: '3 years',
        description: 'Continuous product evolution',
      },
    ],
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Socket.io',
      'Stripe',
      'FFmpeg',
      'PayPal',
      'Wise API',
      'Figma',
    ],
    testimonial: Authors.sam,
  },
  {
    title: 'NFC360: Smart Digital Business Card SaaS',
    subtitle: 'Connecting brands with people, instantly',
    category: 'SaaS Platform',
    client: 'NFC360',
    duration: '4 months',
    team: '4 developers',
    image: nfc360Image.src,
    challenge:
      'NFC360 set out to disrupt the traditional business card industry by enabling professionals to share interactive profiles with a single tap. The challenge was to deliver a customizable, mobile-optimized platform that supported analytics, lead capture, and white-labeling capabilities—all within a tight deadline.',
    solution:
      'We built a full-stack SaaS platform using React, Node.js, and PostgreSQL with Stripe integration for subscriptions. The system includes profile customization, QR/NFC activation, team roles, testimonial modules, and analytics—all accessible via a sleek dashboard.',
    results: [
      {
        metric: 'Profiles Created',
        value: '12K+',
        description: 'Users onboarded post-launch',
      },
      {
        metric: 'Engagement Rate',
        value: '64%',
        description: 'Tap-through to lead form',
      },
      {
        metric: 'Custom Themes',
        value: '30+',
        description: 'Design templates supported',
      },
      {
        metric: 'Client ROI',
        value: '3x',
        description: 'Average return on software license',
      },
    ],
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Shopify',
      'Figma',
    ],
    testimonial: Authors.maroun,
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'ai-restaurant-call-center',
    slug: 'ai-restaurant-call-center',
    image: aiRestaurantImage.src,
    title: 'AI Restaurant Call Center',
    category: 'AI Platform',
    description:
      'AI-powered call center for restaurants, automating customer interactions and order processing. Built with React, Node.js, and AI technologies.',
    detailedDescription:
      'A revolutionary AI-powered call center solution specifically designed for restaurants. This platform automates customer interactions, order processing, and reservation management using advanced AI technologies. The system handles multiple languages, understands complex orders, and integrates seamlessly with existing restaurant management systems.',
    tags: [
      'React',
      'Node.js',
      'AI',
      'ChatGPT',
      'ChatBot',
      'PostgreSQL',
      'Prisma',
      'Figma',
      'Sass',
    ],
    features: [
      'Multi-language AI voice recognition',
      'Automated order processing and confirmation',
      'Real-time integration with POS systems',
      'Customer preference learning and recommendations',
      'Advanced analytics and reporting dashboard',
    ],
    challenges: [
      'Handling complex food orders with customizations',
      'Ensuring accurate voice recognition in noisy environments',
      'Integrating with legacy restaurant systems',
    ],
    results: [
      '85% reduction in call handling time',
      '40% increase in order accuracy',
      '60% improvement in customer satisfaction scores',
    ],
    // testimonial: restoTestimonial,
  },
  {
    id: 'nfc-digital-business-cards',
    slug: 'nfc-digital-business-cards',
    image: nfc360Image.src,
    title: 'NFC Digital Business Card Project',
    description:
      'A cutting-edge NFC platform for digital business cards, enabling seamless, contactless interactions and rich user profiles. Built with React, Node.js, PostgreSQL, TypeScript, and NFC tech.',
    detailedDescription:
      'A comprehensive NFC-based digital business card platform that revolutionizes networking. Users can create rich digital profiles, share contact information instantly through NFC technology, and track networking analytics. The platform includes custom card design tools, QR code generation, and advanced contact management features.',
    tags: [
      'React',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Figma',
      'Sass',
      'MVP',
    ],
    category: 'SaaS Platform',
    features: [
      'NFC-enabled instant contact sharing',
      'Custom digital business card designer',
      'Real-time networking analytics',
      'QR code fallback for non-NFC devices',
      'Advanced contact management system',
    ],
    challenges: [
      'Ensuring cross-device NFC compatibility',
      'Creating intuitive card design interface',
      'Optimizing for various smartphone NFC capabilities',
    ],
    results: [
      '95% faster contact sharing compared to traditional cards',
      '3x increase in networking follow-up rates',
      '100% reduction in lost contact information',
    ],
    testimonial: marounTestimonial,
  },
  {
    id: 'purecures-ecommerce',
    slug: 'purecures-ecommerce',
    image: purecuresImage.src,
    title: 'PureCures E-commerce Website',
    category: 'Ecommerce Website',
    description:
      'Premium eCommerce platform for mushrooms, focused on user-friendly design, robust backend, and scalable architecture. Built with React and Node.js.',
    detailedDescription:
      'A specialized e-commerce platform for premium mushroom products, featuring advanced product categorization, educational content, and subscription services. The platform includes detailed product information, growing guides, and a robust inventory management system.',
    tags: [
      'React',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Figma',
      'Sass',
    ],
    features: [
      'Advanced product categorization and filtering',
      'Educational mushroom growing guides',
      'Subscription-based delivery service',
      'Inventory management with real-time stock updates',
      'Mobile-optimized shopping experience',
    ],
    challenges: [
      'Managing complex product variations and pricing',
      'Creating educational content management system',
      'Implementing subscription billing and delivery schedules',
    ],
    results: [
      '150% increase in online sales within 6 months',
      '45% improvement in customer retention',
      '30% reduction in customer support queries',
    ],
    testimonial: marounTestimonial,
  },
  {
    id: 'educify-platform',
    slug: 'educify-platform',
    image: educifyImage.src,
    title: 'Educify',
    category: 'EdTech Platform',
    description:
      'Comprehensive online education platform connecting students and tutors, with live classes, booking, and messaging. Built with React, Node.js, and PostgreSQL.',
    detailedDescription:
      'A comprehensive online education platform that connects students with qualified tutors across various subjects. Features include live video classes, interactive whiteboards, progress tracking, and automated scheduling. The platform supports multiple learning formats and provides detailed analytics for both students and educators.',
    tags: [
      'React',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Figma',
      'Sass',
      'MVP',
    ],
    features: [
      'Live video classes with interactive whiteboard',
      'Automated tutor-student matching system',
      'Progress tracking and performance analytics',
      'Integrated payment and booking system',
    ],
    challenges: [
      'Ensuring stable video quality across different devices',
      'Creating fair tutor rating and matching algorithms',
      'Handling real-time collaborative tools',
    ],
    results: [
      '500+ active tutors onboarded in first 3 months',
      '2000+ successful tutoring sessions completed',
      '92% student satisfaction rate',
    ],
    testimonial: samTestimonial,
  },
  {
    id: 'mawahib-talent-platform',
    slug: 'mawahib-talent-platform',
    image: mawahibImage.src,
    title: 'Mawahib',
    category: 'Talent Platform',
    description:
      'Talent platform connecting professionals and agencies in the MENA region. Mobile app built with React Native and Node.js.',
    detailedDescription:
      'A comprehensive talent platform designed to connect creative professionals with agencies across the MENA region. The mobile-first platform facilitates project collaboration, portfolio showcasing, and talent discovery with advanced matching algorithms.',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Prisma', 'Figma', 'Expo'],
    features: [
      'Advanced talent matching algorithms',
      'Portfolio showcase and management',
      'Real-time project collaboration tools',
      'Integrated payment and contract management',
      'Multi-language support for MENA region',
    ],
    challenges: [
      'Creating fair talent matching algorithms',
      'Handling diverse skill categorization',
      'Multi-language and cultural considerations',
    ],
    results: [
      '1000+ creatives onboarded in first quarter',
      '300+ successful project matches',
      '85% user retention rate after 3 months',
    ],
    testimonial: mustafaTestimonial,
  },
  {
    id: 'pawsmob-social-platform',
    slug: 'pawsmob-social-platform',
    image: pawsmobImage.src,
    title: 'PawsMob',
    category: 'Social Media Platform',
    description:
      'Social media platform for pet enthusiasts, with pet profiles, stores, adoption, and real-time chat. Built with React, Node.js, and PostgreSQL.',
    detailedDescription:
      'A comprehensive social media platform designed specifically for pet enthusiasts. Users can create detailed pet profiles, connect with other pet owners, discover pet-friendly stores and services, facilitate pet adoptions, and communicate through real-time messaging.',
    tags: [
      'React',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Figma',
      'Sass',
    ],
    features: [
      'Detailed pet profiles and galleries',
      'Location-based pet services discovery',
      'Pet adoption marketplace',
      'Real-time messaging and community features',
      'Event planning for pet meetups',
    ],
    challenges: [
      'Creating engaging social features for pet community',
      'Implementing safe adoption verification processes',
      'Building location-based service recommendations',
    ],
    results: [
      '5000+ active pet profiles created',
      '200+ successful pet adoptions facilitated',
      '78% monthly active user retention',
    ],
    testimonial: nourTestimonial,
  },
  {
    id: 'taptech-saas',
    slug: 'taptech-saas',
    image: taptechImage.src,
    title: 'TapTech',
    category: 'SaaS Platform',
    description:
      'SaaS platform for digital business cards, combining Node.js, PostgreSQL, and React for a customizable, scalable solution.',
    detailedDescription:
      'A comprehensive SaaS platform that revolutionizes digital business cards. TapTech enables users to create customizable digital profiles, share contact information seamlessly, and track networking analytics. The platform features advanced customization options, team management tools, and integration capabilities for businesses of all sizes.',
    tags: [
      'React',
      'Node.js',
      'Google Analytics',
      'MVP',
      'PostgreSQL',
      'Prisma',
      'Sass',
    ],
    features: [
      'Customizable digital business card templates',
      'Team management and role-based access',
      'Advanced analytics and contact tracking',
      'QR code and NFC technology integration',
      'White-label solutions for enterprises',
    ],
    challenges: [
      'Creating flexible template system for diverse industries',
      'Implementing scalable team management features',
      'Ensuring cross-platform compatibility',
    ],
    results: [
      '1000+ active business users within 6 months',
      '50% increase in networking efficiency for users',
      '95% customer retention rate',
    ],
  },
  {
    id: 'compass-website',
    slug: 'compass-website',
    image: compassImage.src,
    title: 'Compass Website Development',
    category: 'Corporate Website',
    description:
      'Corporate website for Compass-KA, built with WordPress and Elementor, focused on brand identity and user experience.',
    detailedDescription:
      'A professional corporate website for Compass-KA that showcases their brand identity and services. The website features modern design, responsive layouts, and optimized user experience. Built with WordPress and Elementor for easy content management and future scalability.',
    tags: ['WordPress', 'Elementor', 'Google Analytics'],
    features: [
      'Custom WordPress theme development',
      'Responsive design for all devices',
      'SEO optimization and Google Analytics integration',
      'Content management system for easy updates',
      'Contact forms and business inquiries',
    ],
    challenges: [
      'Creating a unique brand identity through web design',
      'Optimizing site performance with WordPress',
      'Ensuring mobile responsiveness across all pages',
    ],
    results: [
      '200% increase in website traffic',
      '75% improvement in user engagement',
      '40% increase in business inquiries',
    ],
  },
  {
    id: 'deal-do-now',
    slug: 'deal-do-now',
    image: dealdonowImage.src,
    title: 'Deal Do Now',
    category: 'SaaS Platform',
    description:
      'Online shopping platform with draws for gifts, built with WordPress, Elementor, and WooCommerce.',
    detailedDescription:
      'An innovative online shopping platform that combines e-commerce with gamification through gift draws and rewards. Built with WordPress and WooCommerce, the platform offers a unique shopping experience where customers can participate in draws while making purchases.',
    tags: [
      'WordPress',
      'Elementor',
      'WooCommerce',
      'Google Analytics',
      'Figma',
    ],
    features: [
      'Gamified shopping experience with draws',
      'WooCommerce integration for seamless transactions',
      'Reward system and gift management',
      'User dashboard for tracking draws and purchases',
      'Payment gateway integration',
    ],
    challenges: [
      'Implementing fair and transparent draw system',
      'Integrating gamification with e-commerce functionality',
      'Managing inventory and rewards simultaneously',
    ],
    results: [
      '300% increase in user engagement',
      '150% boost in average order value',
      '85% customer return rate',
    ],
  },
  {
    id: 'emec-corporate',
    slug: 'emec-corporate',
    image: emecImage.src,
    title: 'Emec',
    category: 'Corporate Website',
    description:
      'Corporate website for EMEC, showcasing portfolio and achievements, built with WordPress and Elementor.',
    detailedDescription:
      'A comprehensive corporate website for EMEC that showcases their extensive portfolio and company achievements. The website features project galleries, company history, team profiles, and service offerings, all designed to establish credibility and attract new business opportunities.',
    tags: [
      'WordPress',
      'Elementor',
      'WooCommerce',
      'Google Analytics',
      'Figma',
    ],
    features: [
      'Portfolio showcase with project galleries',
      'Company timeline and achievements section',
      'Team member profiles and expertise',
      'Service offerings and capabilities',
      'Client testimonials and case studies',
    ],
    challenges: [
      'Organizing large amounts of portfolio content',
      'Creating engaging visual presentations',
      'Ensuring fast loading times with media-rich content',
    ],
    results: [
      '180% increase in project inquiries',
      '60% improvement in client conversion rate',
      '45% reduction in bounce rate',
    ],
  },
  {
    id: 'bluvows-events',
    slug: 'bluvows-events',
    image: bluvowsImage.src,
    title: 'Bluvows',
    category: 'Corporate Website',
    description:
      'Event agency website with landing pages for Cyprus and Greece, built with WordPress and Elementor.',
    detailedDescription:
      'A sophisticated event agency website for Bluvows with dedicated landing pages for Cyprus and Greece markets. The website showcases event planning services, portfolio of past events, and provides separate experiences for different geographical markets with localized content and pricing.',
    tags: ['WordPress', 'Elementor', 'Google Analytics', 'Figma'],
    features: [
      'Multi-location landing pages (Cyprus & Greece)',
      'Event portfolio with photo galleries',
      'Service packages and pricing',
      'Contact forms for event inquiries',
      'Multilingual support for different markets',
    ],
    challenges: [
      'Creating location-specific content and pricing',
      'Managing multiple landing pages efficiently',
      'Ensuring consistent branding across markets',
    ],
    results: [
      '250% increase in event bookings',
      '90% improvement in lead quality',
      '70% expansion in target market reach',
    ],
  },
  {
    id: 'baitbaitk-ecommerce',
    slug: 'baitbaitk-ecommerce',
    image: baitbaitkImage.src,
    title: 'Baitbaitk',
    category: 'Ecommerce Website',
    description:
      'Ecommerce website for houseware items, built with WordPress and WooCommerce.',
    detailedDescription:
      'A comprehensive e-commerce platform for Baitbaitk specializing in houseware and home decoration items. The website features an extensive product catalog, secure payment processing, and user-friendly shopping experience designed to showcase home products effectively.',
    tags: ['WordPress', 'WooCommerce', 'Elementor', 'Figma'],
    features: [
      'Extensive product catalog with categories',
      'Secure payment gateway integration',
      'Product search and filtering system',
      'Customer reviews and ratings',
      'Inventory management and order tracking',
    ],
    challenges: [
      'Managing large product inventory efficiently',
      'Creating appealing product presentations',
      'Optimizing site performance with numerous products',
    ],
    results: [
      '320% increase in online sales',
      '80% improvement in customer satisfaction',
      '65% growth in repeat customers',
    ],
  },
  {
    id: 'stepswee-entertainment',
    slug: 'stepswee-entertainment',
    image: stepsweeImage.src,
    title: 'StepsWee',
    category: 'Corporate Website',
    description:
      'Entertainment planning website with black-themed design, built with WordPress and Elementor.',
    detailedDescription:
      'A sleek entertainment planning website for StepsWee featuring a sophisticated black-themed design. The website specializes in event entertainment services, DJ bookings, and party planning with a modern, elegant aesthetic that appeals to upscale clientele.',
    tags: ['WordPress', 'Elementor', 'Google Analytics', 'Figma'],
    features: [
      'Elegant black-themed design interface',
      'Entertainment service showcase',
      'DJ and performer booking system',
      'Event gallery and portfolio',
      'Client testimonials and reviews',
    ],
    challenges: [
      'Creating visually striking dark theme design',
      'Balancing aesthetics with user experience',
      'Ensuring readability with dark color scheme',
    ],
    results: [
      '400% increase in entertainment bookings',
      '85% improvement in brand perception',
      '120% growth in premium service requests',
    ],
  },
  {
    id: 'bizri-travel',
    slug: 'bizri-travel',
    image: bizritravelImage.src,
    title: 'Bizri travel & tourism',
    category: 'Corporate Website',
    description:
      'Landing page for travel agency, built with WordPress. Features customer testimonials and ratings.',
    detailedDescription:
      'A comprehensive travel agency website for Bizri Travel & Tourism featuring destination showcases, travel packages, and booking capabilities. The website includes customer testimonials, ratings, and detailed travel information to help customers plan their perfect vacation.',
    tags: ['WordPress', 'Elementor', 'Google Analytics', 'Figma'],
    features: [
      'Travel package showcase and pricing',
      'Destination guides and information',
      'Customer testimonials and ratings system',
      'Online booking and inquiry forms',
      'Travel blog and tips section',
    ],
    challenges: [
      'Organizing complex travel package information',
      'Creating engaging destination presentations',
      'Implementing trustworthy booking system',
    ],
    results: [
      '280% increase in travel bookings',
      '95% customer satisfaction rate',
      '150% growth in repeat customers',
    ],
  },
  {
    id: 'figs-and-finds',
    slug: 'figs-and-finds',
    image: figsandfindsImage.src,
    title: 'Figs and finds',
    category: 'Ecommerce Website',
    description:
      'Shopify ecommerce platform for curated collections, focused on elegance and user experience.',
    detailedDescription:
      'An elegant Shopify e-commerce platform for Figs and Finds, specializing in curated lifestyle collections. The website emphasizes sophisticated design, premium product presentation, and seamless user experience to showcase carefully selected items for discerning customers.',
    tags: ['Shopify', 'Figma', 'Google Analytics'],
    features: [
      'Curated product collections and categories',
      'Elegant product photography and presentation',
      'Advanced filtering and search capabilities',
      'Personalized shopping recommendations',
      'Seamless checkout and payment processing',
    ],
    challenges: [
      'Creating sophisticated visual design on Shopify',
      'Implementing advanced curation features',
      'Balancing elegance with functionality',
    ],
    results: [
      '220% increase in conversion rates',
      '75% improvement in average order value',
      '90% customer retention rate',
    ],
  },
  {
    id: 'rayan-dates',
    slug: 'rayan-dates',
    image: rayandatesImage.src,
    title: 'Rayan dates',
    category: 'Ecommerce Website',
    description:
      'Shopify website for premium dates, with luxurious packaging and brand strategy.',
    detailedDescription:
      'A premium Shopify e-commerce website for Rayan Dates, specializing in high-quality date products with luxurious packaging. The website emphasizes brand prestige, product quality, and sophisticated presentation to appeal to premium market segments.',
    tags: ['Shopify', 'Figma', 'Google Analytics'],
    features: [
      'Premium product showcase with luxury branding',
      'Gift packaging and customization options',
      'Subscription service for regular deliveries',
      'Corporate gifting solutions',
      'Quality guarantee and authenticity certificates',
    ],
    challenges: [
      'Conveying premium quality through digital presentation',
      'Creating luxury brand experience online',
      'Managing seasonal product availability',
    ],
    results: [
      '350% increase in premium product sales',
      '85% growth in corporate client base',
      '95% customer satisfaction with packaging',
    ],
  },
  {
    id: 'danash-construction',
    slug: 'danash-construction',
    image: danashImage.src,
    title: 'Danash',
    category: 'Corporate Website',
    description:
      'Website for family-owned construction company, with admin dashboard and project showcase. Built with React and Node.js.',
    detailedDescription:
      'A comprehensive website for Danash, a family-owned construction company, featuring project portfolios, company history, and an admin dashboard for project management. Built with React and Node.js to provide modern functionality and easy content management.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Figma'],
    features: [
      'Project portfolio with detailed case studies',
      'Admin dashboard for project management',
      'Company history and family legacy section',
      'Service offerings and capabilities',
      'Client testimonials and project galleries',
    ],
    challenges: [
      'Creating engaging construction project presentations',
      'Building admin dashboard for non-technical users',
      'Organizing complex project information',
    ],
    results: [
      '200% increase in project inquiries',
      '80% improvement in client conversion',
      '60% reduction in admin overhead',
    ],
  },
  {
    id: 'hotel-template',
    slug: 'hotel-template',
    image: hotelImage.src,
    title: 'Hotel Template',
    category: 'Corporate Website Template',
    description:
      'Dynamic website template for hotels, built with React. Visually appealing, engaging, and optimized for all devices.',
    detailedDescription:
      'A comprehensive hotel website template built with React, designed to showcase hotel amenities, rooms, and services. The template features booking functionality, image galleries, and responsive design optimized for the hospitality industry.',
    tags: ['React', 'Node.js', 'Sass'],
    features: [
      'Room showcase with detailed descriptions',
      'Booking system integration capabilities',
      'Image galleries and virtual tours',
      'Amenities and services presentation',
      'Customer reviews and ratings display',
    ],
    challenges: [
      'Creating flexible template for different hotel types',
      'Implementing responsive design for various devices',
      'Optimizing performance with media-rich content',
    ],
    results: [
      'Template adopted by 50+ hotels',
      '180% increase in direct bookings for users',
      '90% improvement in mobile user experience',
    ],
  },
  {
    id: 'ecommerce-template',
    slug: 'ecommerce-template',
    image: ecommerceImage.src,
    title: 'E-Commerce template',
    category: 'Ecommerce Template',
    description:
      'Ecommerce website template powered by React, Node.js, MongoDB, Sass, and Redux. High-speed, dynamic, and scalable.',
    detailedDescription:
      'A robust e-commerce website template built with modern technologies including React, Node.js, MongoDB, and Redux. The template provides a complete online shopping solution with cart functionality, payment processing, and admin dashboard for inventory management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Sass', 'Redux'],
    features: [
      'Complete shopping cart and checkout system',
      'Product catalog with search and filtering',
      'Admin dashboard for inventory management',
      'Payment gateway integration',
      'Order tracking and customer accounts',
    ],
    challenges: [
      'Creating scalable template architecture',
      'Implementing efficient state management with Redux',
      'Ensuring secure payment processing',
    ],
    results: [
      'Template used by 100+ e-commerce sites',
      '250% faster development time for clients',
      '95% client satisfaction rate',
    ],
  },
  {
    id: 'nft-lab',
    slug: 'nft-lab',
    image: nftImage.src,
    title: 'Nft Lab',
    category: 'NFT Platform',
    description:
      'Landing page for NFT startup, with funky and playful design. Built with React and Node.js.',
    detailedDescription:
      'A vibrant and engaging landing page for NFT Lab, an innovative NFT startup. The website features a funky, playful design that captures the creative spirit of the NFT space while providing information about the platform, team, and upcoming NFT collections.',
    tags: ['React', 'Node.js', 'Sass'],
    features: [
      'Animated and interactive design elements',
      'NFT collection previews and showcases',
      'Team member profiles and backgrounds',
      'Roadmap and project timeline',
      'Community links and social media integration',
    ],
    challenges: [
      'Creating engaging animations without affecting performance',
      'Balancing playful design with professional credibility',
      'Implementing responsive design for creative layouts',
    ],
    results: [
      '500% increase in community engagement',
      '300% growth in social media followers',
      '150% improvement in investor interest',
    ],
  },
  {
    id: 'barber-template',
    slug: 'barber-template',
    image: barberImage.src,
    title: 'Barber website template',
    category: 'Corporate Website Template',
    description:
      'Landing page template for barber shop, built with React. Modern design, booking system, and optimized for all devices.',
    detailedDescription:
      'A modern and stylish website template designed specifically for barber shops and hair salons. The template features appointment booking functionality, service showcases, and gallery sections to highlight the craftsmanship and atmosphere of the business.',
    tags: ['React', 'Node.js', 'Sass'],
    features: [
      'Online appointment booking system',
      'Service menu with pricing',
      'Barber profiles and specializations',
      'Before/after photo galleries',
      'Customer testimonials and reviews',
    ],
    challenges: [
      'Creating masculine and appealing design aesthetic',
      'Implementing reliable booking system',
      'Showcasing services effectively through web design',
    ],
    results: [
      'Template adopted by 75+ barbershops',
      '200% increase in online bookings for users',
      '85% reduction in phone booking inquiries',
    ],
  },
  {
    id: 'food-blog-template',
    slug: 'food-blog-template',
    image: foodblogImage.src,
    title: 'Food blog template',
    category: 'Blog Template',
    description:
      'Ecommerce website template for food blogs, built with React, Node.js, MongoDB, Sass, and Redux.',
    detailedDescription:
      'A comprehensive food blog template that combines blogging functionality with e-commerce capabilities. Perfect for food bloggers who want to monetize their content through recipe books, cooking classes, or kitchen products while maintaining an engaging blog experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Sass', 'Redux'],
    features: [
      'Recipe management and categorization',
      'Blog post editor with rich media support',
      'E-commerce integration for products',
      'User comments and ratings system',
      'Newsletter subscription and email marketing',
    ],
    challenges: [
      'Balancing blog content with e-commerce functionality',
      'Creating appetizing visual design',
      'Implementing effective content management system',
    ],
    results: [
      'Template used by 60+ food bloggers',
      '180% increase in blog monetization for users',
      '250% improvement in content engagement',
    ],
  },
  {
    id: 'karma-template',
    slug: 'karma-template',
    image: karmaImage.src,
    title: 'Karma template',
    category: 'E-Commerce Template',
    description:
      'Ecommerce website template for Karma, built with React, Node.js, MongoDB, Sass, and Redux.',
    detailedDescription:
      'A sophisticated e-commerce template designed for Karma, featuring modern design principles and comprehensive shopping functionality. The template includes advanced product management, customer accounts, and analytics capabilities for a complete online retail solution.',
    tags: ['React', 'Node.js', 'MongoDB', 'Sass', 'Redux'],
    features: [
      'Advanced product catalog with variants',
      'Customer account management',
      'Shopping cart and wishlist functionality',
      'Order management and tracking',
      'Analytics dashboard for business insights',
    ],
    challenges: [
      'Creating sophisticated e-commerce architecture',
      'Implementing advanced product variants system',
      'Ensuring scalable performance with large catalogs',
    ],
    results: [
      'Template powering 80+ online stores',
      '220% increase in sales conversion for users',
      '95% client satisfaction with functionality',
    ],
  },
];

// Ensure all projects have id and slug fields (fallback for incomplete data)
export const processedPortfolioProjects = portfolioProjects.map(
  (project, index) => ({
    ...project,
    id: project.id || `project-${index + 1}`,
    slug: project.slug || generateSlug(project.title),
    testimonial: project.testimonial
      ? {
          name: project.testimonial.name ?? '',
          role: project.testimonial.role ?? '',
          message: project.testimonial.message ?? '',
          image: project.testimonial.image || basil.src,
        }
      : undefined,
  })
);
