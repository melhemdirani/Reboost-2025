import { notFound } from 'next/navigation';
import Image from 'next/image';
import { teamMembers } from '@/data/team';

export default function TeamMemberPage({
  params,
}: {
  params: { slug: string };
}) {
  const member = teamMembers.find((m) => m.slug === params.slug);
  if (!member) return notFound();

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black px-4 py-16'>
      <div className='bg-[#111] border border-[#333] rounded-xl shadow-lg p-8 max-w-md w-full text-center'>
        <div className='w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/20'>
          <Image
            src={member.image}
            alt={member.name}
            width={128}
            height={128}
            className='w-full h-full object-cover'
          />
        </div>
        <h1 className='text-2xl font-bold text-white mb-2'>{member.name}</h1>
        <h2 className='text-lg text-[#888] font-medium mb-4'>{member.role}</h2>
        <p className='text-[#cccccc] text-base leading-relaxed'>{member.bio}</p>
      </div>
    </div>
  );
}
