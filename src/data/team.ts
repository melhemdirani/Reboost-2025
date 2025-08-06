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
    bio: 'Full-stack engineer with 7+ years creating scalable solutions. Leads Reboost in delivering cutting-edge MVPs.',
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
    name: 'Adnan Sayed',
    slug: 'adnan-sayed',
    role: 'Lead Developer',
    bio: 'Experienced in building high-performance web applications. Passionate about clean code and best practices.',
    image: '/adnan.jpeg',
  },
  {
    name: 'Ruslan Kain',
    slug: 'ruslan-kain',
    role: 'AI/ML Specialist',
    bio: 'AI/ML specialist with a PhD, focused on developing intelligent solutions in natural language processing and computer vision.',
    image: '/ruslan.jpeg',
  },
];
