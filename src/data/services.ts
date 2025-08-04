import {
  AIMLVisual,
  DevOpsVisual,
  MobileAppVisual,
  SaasPlatformVisual,
  UIUXVisual,
  WebDevelopmentVisual,
} from '@/components/ServiceVisuals';

export const services = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Custom Web Development',
    shortDescription:
      'Modern, scalable web applications built with cutting-edge technologies.',
    description:
      'We create modern, scalable web applications using the latest technologies and best practices. From simple websites to complex enterprise platforms, our solutions are designed to grow with your business and deliver exceptional user experiences.',
    icon: '🌐',
    visual: WebDevelopmentVisual,
    features: [
      'Responsive design across all devices',
      'Modern frameworks (React, Next.js, Vue)',
      'SEO optimization and performance tuning',
      'Custom CMS integration',
      'Progressive Web App capabilities',
      'API development and integration',
    ],
    technologies: [
      'React',
      'Next.js',
      'Vue.js',
      'Node.js',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Vercel',
    ],
    deliverables: [
      'Complete source code',
      'Technical documentation',
      'Deployment and hosting setup',
      'Training and handover',
      'Performance optimization',
      'SEO implementation',
    ],
    timeline: '4-12 weeks',
    startingPrice: '$5,000',
    idealFor:
      'Businesses needing modern web presence, e-commerce platforms, or internal tools',
    processSteps: [
      {
        title: 'Requirements Analysis',
        description:
          'Deep dive into your business needs and technical requirements',
      },
      {
        title: 'Design & Prototyping',
        description: 'Create wireframes, mockups, and interactive prototypes',
      },
      {
        title: 'Development',
        description: 'Build your application using agile development practices',
      },
      {
        title: 'Testing & Launch',
        description:
          'Comprehensive testing and smooth deployment to production',
      },
    ],
    faqs: [
      {
        question: 'What technologies do you use for web development?',
        answer:
          'We primarily use React, Next.js, Node.js, and TypeScript for modern web applications, but we adapt our tech stack based on your specific needs.',
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer:
          'Yes, we offer maintenance packages that include updates, security patches, performance monitoring, and feature enhancements.',
      },
      {
        question: 'Can you integrate with existing systems?',
        answer:
          'Absolutely! We have extensive experience integrating with CRMs, ERPs, payment systems, and third-party APIs.',
      },
    ],
  },
  {
    id: 'mobile-development',
    slug: 'mobile-development',
    title: 'Mobile App Development',
    shortDescription:
      'Native and cross-platform mobile applications for iOS and Android.',
    description:
      'We develop high-performance mobile applications that deliver exceptional user experiences on both iOS and Android platforms. Whether you need a native app or cross-platform solution, we ensure your app stands out in the app stores.',
    icon: '📱',
    visual: MobileAppVisual,
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions (React Native)',
      'App Store optimization and submission',
      'Push notifications and analytics',
      'Offline functionality',
      'Backend API integration',
    ],
    technologies: [
      'React Native',
      'Swift',
      'Kotlin',
      'Flutter',
      'Firebase',
      'AWS',
      'Node.js',
      'MongoDB',
      'Redux',
      'GraphQL',
    ],
    deliverables: [
      'Native mobile applications',
      'Backend APIs and infrastructure',
      'App Store and Play Store listings',
      'Analytics and crash reporting setup',
      'Push notification system',
      'User documentation',
    ],
    timeline: '8-16 weeks',
    startingPrice: '$8,000',
    idealFor:
      'Startups and enterprises looking to reach mobile audiences effectively',
    processSteps: [
      {
        title: 'Platform Strategy',
        description:
          'Determine the best approach: native, cross-platform, or web-based',
      },
      {
        title: 'UI/UX Design',
        description:
          'Create platform-specific designs that follow iOS and Android guidelines',
      },
      {
        title: 'Development & Testing',
        description:
          'Build and test across multiple devices and operating system versions',
      },
      {
        title: 'Store Submission',
        description:
          'Handle app store submission process and approval requirements',
      },
    ],
    faqs: [
      {
        question: 'Should I choose native or cross-platform development?',
        answer:
          'It depends on your requirements. Native offers best performance and platform-specific features, while cross-platform reduces costs and development time.',
      },
      {
        question: 'Do you handle app store submissions?',
        answer:
          'Yes, we manage the entire app store submission process, including preparing assets, descriptions, and ensuring compliance with store guidelines.',
      },
      {
        question: 'How do you ensure app performance?',
        answer:
          'We follow platform best practices, conduct thorough testing on real devices, and implement performance monitoring and optimization techniques.',
      },
    ],
  },
  {
    id: 'saas-development',
    slug: 'saas-development',
    title: 'SaaS Platform Development',
    shortDescription:
      'End-to-end SaaS platforms with multi-tenancy and subscription management.',
    description:
      'We build comprehensive SaaS platforms from the ground up, including multi-tenant architecture, subscription management, user authentication, and scalable infrastructure. Perfect for entrepreneurs and businesses looking to launch software-as-a-service products.',
    icon: '☁️',
    visual: SaasPlatformVisual,
    features: [
      'Multi-tenant architecture',
      'Subscription and billing integration',
      'User management and authentication',
      'Admin dashboards and analytics',
      'API-first development',
      'Scalable cloud infrastructure',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Stripe',
      'Auth0',
      'Docker',
      'Kubernetes',
    ],
    deliverables: [
      'Complete SaaS platform',
      'Admin dashboard and analytics',
      'Payment and subscription system',
      'User onboarding flow',
      'API documentation',
      'Deployment infrastructure',
    ],
    timeline: '12-24 weeks',
    startingPrice: '$15,000',
    idealFor:
      'Entrepreneurs and businesses building scalable software-as-a-service platforms',
    processSteps: [
      {
        title: 'Business Model Design',
        description:
          'Define pricing tiers, features, and go-to-market strategy',
      },
      {
        title: 'Architecture Planning',
        description:
          'Design scalable, multi-tenant architecture and infrastructure',
      },
      {
        title: 'MVP Development',
        description: 'Build core features and user management system',
      },
      {
        title: 'Scale & Optimize',
        description:
          'Add advanced features, analytics, and performance optimization',
      },
    ],
    faqs: [
      {
        question: 'What is multi-tenant architecture?',
        answer:
          'Multi-tenant architecture allows multiple customers to use the same application instance while keeping their data completely separate and secure.',
      },
      {
        question: 'How do you handle billing and subscriptions?',
        answer:
          'We integrate with payment providers like Stripe to handle recurring billing, trial periods, plan changes, and dunning management automatically.',
      },
      {
        question: 'Can the platform scale as my business grows?',
        answer:
          'Yes, we design SaaS platforms with scalability in mind, using cloud infrastructure that can automatically scale based on demand.',
      },
    ],
  },
  {
    id: 'ai-ml-integration',
    slug: 'ai-ml-integration',
    title: 'AI & Machine Learning Integration',
    shortDescription:
      'Intelligent automation and AI-powered features for your applications.',
    description:
      'We integrate cutting-edge AI and machine learning capabilities into your applications, from natural language processing and computer vision to predictive analytics and intelligent automation. Transform your business with the power of artificial intelligence.',
    icon: '🤖',
    visual: AIMLVisual,
    features: [
      'Custom ML model development',
      'Natural language processing',
      'Computer vision integration',
      'Predictive analytics',
      'Chatbots and virtual assistants',
      'AI-powered recommendations',
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'OpenAI API',
      'Hugging Face',
      'AWS ML',
      'Google AI',
      'Scikit-learn',
      'FastAPI',
      'Docker',
    ],
    deliverables: [
      'Trained ML models',
      'API endpoints and integration',
      'Training data preparation',
      'Performance metrics and monitoring',
      'Model deployment infrastructure',
      'Documentation and training',
    ],
    timeline: '6-16 weeks',
    startingPrice: '$10,000',
    idealFor:
      'Companies looking to leverage AI for competitive advantage and automation',
    processSteps: [
      {
        title: 'Data Assessment',
        description: 'Evaluate data quality and identify AI opportunities',
      },
      {
        title: 'Model Development',
        description: 'Train and validate custom ML models for your use case',
      },
      {
        title: 'Integration',
        description:
          'Seamlessly integrate AI capabilities into your existing systems',
      },
      {
        title: 'Optimization',
        description:
          'Monitor performance and continuously improve model accuracy',
      },
    ],
    faqs: [
      {
        question: 'Do I need a lot of data to implement AI?',
        answer:
          'Not necessarily. We can work with limited datasets using techniques like transfer learning, or help you collect and prepare data for better results.',
      },
      {
        question: 'How accurate will the AI models be?',
        answer:
          'Accuracy depends on data quality and use case complexity. We provide detailed performance metrics and work to achieve the best possible results for your needs.',
      },
      {
        question: 'Can you integrate with existing systems?',
        answer:
          'Yes, we specialize in integrating AI capabilities into existing applications through APIs, ensuring minimal disruption to your current workflows.',
      },
    ],
  },
  {
    id: 'devops-infrastructure',
    slug: 'devops-infrastructure',
    title: 'DevOps & Cloud Infrastructure',
    shortDescription:
      'Robust, scalable cloud infrastructure with automated deployment pipelines.',
    description:
      'We set up robust, scalable cloud infrastructure with automated CI/CD pipelines, monitoring systems, and security best practices. Ensure your applications are reliable, secure, and can scale with your business growth.',
    icon: '⚙️',
    visual: DevOpsVisual,
    features: [
      'CI/CD pipeline setup',
      'Cloud infrastructure (AWS, GCP, Azure)',
      'Container orchestration (Docker, Kubernetes)',
      'Monitoring and logging',
      'Database optimization',
      'Security implementation',
    ],
    technologies: [
      'Docker',
      'Kubernetes',
      'AWS',
      'Terraform',
      'Jenkins',
      'Prometheus',
      'Grafana',
      'GitLab CI',
      'Ansible',
      'CloudFormation',
    ],
    deliverables: [
      'Cloud infrastructure setup',
      'CI/CD pipeline configuration',
      'Monitoring and alerting system',
      'Security and compliance setup',
      'Documentation and runbooks',
      'Team training and knowledge transfer',
    ],
    timeline: '4-8 weeks',
    startingPrice: '$7,000',
    idealFor:
      'Teams needing reliable, scalable infrastructure and automated deployment processes',
    processSteps: [
      {
        title: 'Infrastructure Assessment',
        description:
          'Evaluate current setup and identify improvement opportunities',
      },
      {
        title: 'Architecture Design',
        description:
          'Design scalable, secure cloud infrastructure architecture',
      },
      {
        title: 'Implementation',
        description: 'Set up infrastructure, pipelines, and automation tools',
      },
      {
        title: 'Monitoring & Optimization',
        description:
          'Implement monitoring, alerting, and performance optimization',
      },
    ],
    faqs: [
      {
        question: 'Which cloud provider should I choose?',
        answer:
          'We help you choose based on your specific needs, budget, and existing tools. AWS, GCP, and Azure all have their strengths for different use cases.',
      },
      {
        question: 'How do you ensure security?',
        answer:
          'We implement security best practices including encryption, access controls, network security, regular updates, and compliance with industry standards.',
      },
      {
        question: 'Can you migrate from our current setup?',
        answer:
          'Yes, we specialize in cloud migrations and can help you transition from on-premises or other cloud providers with minimal downtime.',
      },
    ],
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design & Development',
    shortDescription:
      'User-centered design that converts visitors into customers.',
    description:
      'We create user-centered designs that not only look great but also convert visitors into customers. Our design process is backed by data-driven insights, user research, and modern design principles to ensure optimal user experience.',
    icon: '🎨',
    visual: UIUXVisual,
    features: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Usability testing',
      'Design system creation',
      'Conversion optimization',
    ],
    technologies: [
      'Figma',
      'Adobe Creative Suite',
      'Framer',
      'React',
      'CSS',
      'JavaScript',
      'Storybook',
      'Principle',
      'Sketch',
      'InVision',
    ],
    deliverables: [
      'Design mockups and prototypes',
      'Interactive prototypes',
      'Design system and style guide',
      'Frontend implementation',
      'Usability testing reports',
      'Brand guidelines',
    ],
    timeline: '6-12 weeks',
    startingPrice: '$6,000',
    idealFor:
      'Businesses wanting to improve user experience and conversion rates',
    processSteps: [
      {
        title: 'Research & Discovery',
        description: 'Understand users, competitors, and business goals',
      },
      {
        title: 'Design & Prototype',
        description: 'Create wireframes, mockups, and interactive prototypes',
      },
      {
        title: 'Testing & Iteration',
        description: 'Conduct usability testing and refine designs',
      },
      {
        title: 'Implementation',
        description: 'Develop responsive, accessible frontend code',
      },
    ],
    faqs: [
      {
        question: 'Do you conduct user research?',
        answer:
          'Yes, we conduct user interviews, surveys, and usability testing to understand your users and inform design decisions.',
      },
      {
        question: 'Can you work with our existing brand?',
        answer:
          'Absolutely! We can work within your existing brand guidelines or help evolve your brand as part of the design process.',
      },
      {
        question: 'Do you provide the actual code?',
        answer:
          'Yes, we provide production-ready HTML, CSS, and JavaScript code that developers can easily integrate into your application.',
      },
    ],
  },
];
