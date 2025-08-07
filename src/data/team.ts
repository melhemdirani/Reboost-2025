export type TeamMember = {
  name: string;
  slug: string;
  role: string;
  bio: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Melhem El Dirani',
    slug: 'melhem-el-dirani',
    role: 'Founder & CEO',
    bio: 'Founder & full-stack engineer with 7+ years building scalable, high-performance software. Rated Top 10% on Upwork.',
    image: '/melhem.jpeg',
  },
  {
    name: 'Alissar Almousawi',
    slug: 'alissar-almousawi',
    role: 'Head of Marketing',
    bio: 'Marketing strategist with a passion for driving growth through innovative campaigns. Experienced in both B2B and B2C marketing.',
    image: '/alissar.jpeg',
  },
  {
    name: 'Adnan Sayed',
    slug: 'adnan-sayed',
    role: 'Lead Developer',
    bio: 'Experienced in building high-performance web and mobile applications. Passionate about clean code and best practices.',
    image: '/adnan.jpeg',
  },
  {
    name: 'Sandra El Abboud',
    slug: 'sandra-el-abboud',
    role: 'Head of Design',
    bio: 'Creative designer with a focus on user experience and visual storytelling. Transforms complex ideas into intuitive designs.',
    image: '/sandra.jpeg',
  },
  {
    name: 'Ziad Baydoun',
    slug: 'ziad-baydoun',
    role: 'Head of Engineering',
    bio: 'Expert in cloud architecture and DevOps. Specializes in building systems that scale from zero to millions of users.',
    image: '/Ziad Baydoun.jpeg',
  },

  {
    name: 'Ruslan Kain',
    slug: 'ruslan-kain',
    role: 'AI/ML Specialist',
    bio: 'AI/ML specialist with a PhD, focused on developing intelligent solutions in natural language processing and computer vision.',
    image: '/ruslan.jpeg',
  },
  {
    name: 'Manuella Azzi',
    slug: 'manuella-azzi',
    role: 'Social Media Manager',
    bio: 'Social media strategist with a knack for creating engaging content and building online communities. Experienced in brand management.',
    image: '/manuella.jpeg',
  },
  {
    name: 'Ibrahim Bawab',
    slug: 'ibrahim-bawab',
    role: 'Project Manager',
    bio: 'Project manager with a track record of delivering complex projects on time and within budget. Skilled in Agile methodologies.',
    image: '/bob.png',
  },
  {
    name: 'Huzaifa Iqbal',
    slug: 'huzaifa-iqbal',
    role: 'Software Engineer',
    bio: 'Software engineer with expertise in frontend development and a passion for creating seamless user experiences.',
    image: '/huzaifa.png',
  },
];
