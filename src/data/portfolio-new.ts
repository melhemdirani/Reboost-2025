// // Portfolio data for new website version
// import aiRestaurantImage from '@/assets/portfolio/ai-restaurant.png';
// import educifyImage from '@/assets/portfolio/educify.png';
// import mawahibImage from '@/assets/portfolio/mawahib.png';
// import nfc360Image from '@/assets/portfolio/nfc360.png';
// import purecuresImage from '@/assets/portfolio/purecures.png';
// import pawsmobImage from '@/assets/portfolio/pawsmob.png';

// // Testimonial images
// import basil from '@/assets/testimonials/basil.jpeg';
// import lisa from '@/assets/testimonials/lisa.jpg';
// import maroun from '@/assets/testimonials/maroun.jpeg';
// import mustafa from '@/assets/testimonials/mustafa.jpeg';
// import nour from '@/assets/testimonials/nour.png';
// import sam from '@/assets/testimonials/sam.jpeg';

// export type PortfolioProject = {
//   id: string;
//   slug: string;
//   image: string;
//   title: string;
//   category: string;
//   description: string;
//   detailedDescription?: string;
//   tags: string[];
//   liveUrl?: string;
//   githubUrl?: string;
//   testimonial: {
//     author: string;
//     role: string;
//     quote: string;
//     image?: string;
//   };
//   features?: string[];
//   challenges?: string[];
//   results?: string[];
// };

// export const portfolioProjects: PortfolioProject[] = [
//   {
//     id: 'ai-restaurant-call-center',
//     slug: 'ai-restaurant-call-center',
//     image: aiRestaurantImage.src,
//     title: 'AI Restaurant Call Center',
//     category: 'AI Platform',
//     description:
//       'AI-powered call center for restaurants, automating customer interactions and order processing. Built with React, Node.js, and AI technologies.',
//     detailedDescription:
//       'A revolutionary AI-powered call center solution specifically designed for restaurants. This platform automates customer interactions, order processing, and reservation management using advanced AI technologies. The system handles multiple languages, understands complex orders, and integrates seamlessly with existing restaurant management systems.',
//     tags: [
//       'React',
//       'Node.js',
//       'AI',
//       'ChatGPT',
//       'ChatBot',
//       'PostgreSQL',
//       'Prisma',
//       'Figma',
//       'Sass',
//     ],
//     features: [
//       'Multi-language AI voice recognition',
//       'Automated order processing and confirmation',
//       'Real-time integration with POS systems',
//       'Customer preference learning and recommendations',
//       'Advanced analytics and reporting dashboard',
//     ],
//     challenges: [
//       'Handling complex food orders with customizations',
//       'Ensuring accurate voice recognition in noisy environments',
//       'Integrating with legacy restaurant systems',
//     ],
//     results: [
//       '85% reduction in call handling time',
//       '40% increase in order accuracy',
//       '60% improvement in customer satisfaction scores',
//     ],
//     testimonial: {
//       author: 'Restaurant Owner',
//       role: 'Founder',
//       quote:
//         'ReBoost delivered a game-changing solution for our restaurant operations.',
//       image: basil.src,
//     },
//   },
//   {
//     id: 'nfc-digital-business-cards',
//     slug: 'nfc-digital-business-cards',
//     image: nfc360Image.src,
//     title: 'NFC Digital Business Card Project',
//     description:
//       'A cutting-edge NFC platform for digital business cards, enabling seamless, contactless interactions and rich user profiles. Built with React, Node.js, PostgreSQL, TypeScript, and NFC tech.',
//     detailedDescription:
//       'A comprehensive NFC-based digital business card platform that revolutionizes networking. Users can create rich digital profiles, share contact information instantly through NFC technology, and track networking analytics. The platform includes custom card design tools, QR code generation, and advanced contact management features.',
//     tags: [
//       'React',
//       'Node.js',
//       'TypeScript',
//       'PostgreSQL',
//       'Prisma',
//       'Figma',
//       'Sass',
//       'MVP',
//     ],
//     category: 'SaaS Platform',
//     features: [
//       'NFC-enabled instant contact sharing',
//       'Custom digital business card designer',
//       'Real-time networking analytics',
//       'QR code fallback for non-NFC devices',
//       'Advanced contact management system',
//     ],
//     challenges: [
//       'Ensuring cross-device NFC compatibility',
//       'Creating intuitive card design interface',
//       'Optimizing for various smartphone NFC capabilities',
//     ],
//     results: [
//       '95% faster contact sharing compared to traditional cards',
//       '3x increase in networking follow-up rates',
//       '100% reduction in lost contact information',
//     ],
//     testimonial: {
//       author: 'Tech Entrepreneur',
//       role: 'Founder',
//       quote:
//         'Efficient, secure, and eco-friendly. ReBoost delivered a modern networking solution.',
//       image: lisa.src,
//     },
//   },
//   {
//     id: 'purecures-ecommerce',
//     slug: 'purecures-ecommerce',
//     image: purecuresImage.src,
//     title: 'PureCures E-commerce Website',
//     category: 'Ecommerce Website',
//     description:
//       'Premium eCommerce platform for mushrooms, focused on user-friendly design, robust backend, and scalable architecture. Built with React and Node.js.',
//     detailedDescription:
//       'A specialized e-commerce platform for premium mushroom products, featuring advanced product categorization, educational content, and subscription services. The platform includes detailed product information, growing guides, and a robust inventory management system.',
//     tags: [
//       'React',
//       'Node.js',
//       'TypeScript',
//       'PostgreSQL',
//       'Prisma',
//       'Figma',
//       'Sass',
//     ],
//     features: [
//       'Advanced product categorization and filtering',
//       'Educational mushroom growing guides',
//       'Subscription-based delivery service',
//       'Inventory management with real-time stock updates',
//       'Mobile-optimized shopping experience',
//     ],
//     challenges: [
//       'Managing complex product variations and pricing',
//       'Creating educational content management system',
//       'Implementing subscription billing and delivery schedules',
//     ],
//     results: [
//       '150% increase in online sales within 6 months',
//       '45% improvement in customer retention',
//       '30% reduction in customer support queries',
//     ],
//     testimonial: {
//       author: 'Business Owner',
//       role: 'Founder',
//       quote:
//         'Fast, secure, and scalable. The shopping experience is both enjoyable and informative.',
//       image: maroun.src,
//     },
//   },
//   {
//     id: 'educify-platform',
//     slug: 'educify-platform',
//     image: educifyImage.src,
//     title: 'Educify',
//     category: 'EdTech Platform',
//     description:
//       'Comprehensive online education platform connecting students and tutors, with live classes, booking, and messaging. Built with React, Node.js, and PostgreSQL.',
//     detailedDescription:
//       'A comprehensive online education platform that connects students with qualified tutors across various subjects. Features include live video classes, interactive whiteboards, progress tracking, and automated scheduling. The platform supports multiple learning formats and provides detailed analytics for both students and educators.',
//     tags: [
//       'React',
//       'Node.js',
//       'TypeScript',
//       'PostgreSQL',
//       'Prisma',
//       'Figma',
//       'Sass',
//       'MVP',
//     ],
//     features: [
//       'Live video classes with interactive whiteboard',
//       'Automated tutor-student matching system',
//       'Progress tracking and performance analytics',
//       'Integrated payment and booking system',
//       'Mobile app for on-the-go learning',
//     ],
//     challenges: [
//       'Ensuring stable video quality across different devices',
//       'Creating fair tutor rating and matching algorithms',
//       'Handling real-time collaborative tools',
//     ],
//     results: [
//       '500+ active tutors onboarded in first 3 months',
//       '2000+ successful tutoring sessions completed',
//       '92% student satisfaction rate',
//     ],
//     testimonial: {
//       author: 'Sam',
//       role: 'Founder at Educify',
//       quote:
//         "They didn't just build Educify — they challenged our thinking and made the platform stronger.",
//       image: sam.src,
//     },
//   },
//   {
//     id: 'mawahib-talent-platform',
//     slug: 'mawahib-talent-platform',
//     image: mawahibImage.src,
//     title: 'Mawahib',
//     category: 'Talent Platform',
//     description:
//       'Talent platform connecting professionals and agencies in the MENA region. Mobile app built with React Native and Node.js.',
//     detailedDescription:
//       'A comprehensive talent platform designed to connect creative professionals with agencies across the MENA region. The mobile-first platform facilitates project collaboration, portfolio showcasing, and talent discovery with advanced matching algorithms.',
//     tags: ['React Native', 'Node.js', 'PostgreSQL', 'Prisma', 'Figma', 'Expo'],
//     features: [
//       'Advanced talent matching algorithms',
//       'Portfolio showcase and management',
//       'Real-time project collaboration tools',
//       'Integrated payment and contract management',
//       'Multi-language support for MENA region',
//     ],
//     challenges: [
//       'Creating fair talent matching algorithms',
//       'Handling diverse skill categorization',
//       'Multi-language and cultural considerations',
//     ],
//     results: [
//       '1000+ creatives onboarded in first quarter',
//       '300+ successful project matches',
//       '85% user retention rate after 3 months',
//     ],
//     testimonial: {
//       author: 'Mustafa',
//       role: 'Founder at Mawahib',
//       quote:
//         'Built exactly what I had in mind. Clear communication and attention to detail throughout.',
//       image: mustafa.src,
//     },
//   },
//   {
//     id: 'pawsmob-social-platform',
//     slug: 'pawsmob-social-platform',
//     image: pawsmobImage.src,
//     title: 'PawsMob',
//     category: 'Social Media Platform',
//     description:
//       'Social media platform for pet enthusiasts, with pet profiles, stores, adoption, and real-time chat. Built with React, Node.js, and PostgreSQL.',
//     detailedDescription:
//       'A comprehensive social media platform designed specifically for pet enthusiasts. Users can create detailed pet profiles, connect with other pet owners, discover pet-friendly stores and services, facilitate pet adoptions, and communicate through real-time messaging.',
//     tags: [
//       'React',
//       'Node.js',
//       'TypeScript',
//       'PostgreSQL',
//       'Prisma',
//       'Figma',
//       'Sass',
//     ],
//     features: [
//       'Detailed pet profiles and galleries',
//       'Location-based pet services discovery',
//       'Pet adoption marketplace',
//       'Real-time messaging and community features',
//       'Event planning for pet meetups',
//     ],
//     challenges: [
//       'Creating engaging social features for pet community',
//       'Implementing safe adoption verification processes',
//       'Building location-based service recommendations',
//     ],
//     results: [
//       '5000+ active pet profiles created',
//       '200+ successful pet adoptions facilitated',
//       '78% monthly active user retention',
//     ],
//     testimonial: {
//       author: 'Nour',
//       role: 'Founder at PawsMob',
//       quote:
//         'Professional and straightforward. They handled every challenge with care.',
//       image: nour.src,
//     },
//   },
// ];

// // Helper function to generate slug from title
// function generateSlug(title: string): string {
//   return title
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/(^-|-$)/g, '');
// }

// // Ensure all projects have id and slug fields (fallback for incomplete data)
// export const processedPortfolioProjects = portfolioProjects.map(
//   (project, index) => ({
//     ...project,
//     id: project.id || `project-${index + 1}`,
//     slug: project.slug || generateSlug(project.title),
//     testimonial: {
//       ...project.testimonial,
//       image: project.testimonial.image || basil.src,
//     },
//   })
// );

// // Utility functions for portfolio navigation
// export function getProjectBySlug(slug: string): PortfolioProject | undefined {
//   return processedPortfolioProjects.find((project) => project.slug === slug);
// }

// export function getRelatedProjects(
//   currentSlug: string,
//   limit: number = 3
// ): PortfolioProject[] {
//   return processedPortfolioProjects
//     .filter((project) => project.slug !== currentSlug)
//     .slice(0, limit);
// }

// export function getAllProjectSlugs(): string[] {
//   return processedPortfolioProjects.map((project) => project.slug);
// }
