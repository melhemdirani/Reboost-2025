import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center px-4'>
      <div className='text-center max-w-md mx-auto'>
        <h1 className="text-6xl font-bold text-white mb-4 [font-family:'Inter',Helvetica]">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 [font-family:'Inter',Helvetica]">
          Portfolio Project Not Found
        </h2>

        <p className="text-lg text-[#cccccc] leading-relaxed [font-family:'Instrument_Sans',Helvetica] mb-8">
          The portfolio project you're looking for doesn't exist or has been
          moved.
        </p>

        <Button
          asChild
          className='bg-white text-black hover:bg-gray-200 transition-colors'
        >
          <Link href='/portfolio' className='inline-flex items-center gap-2'>
            <ArrowLeft className='w-4 h-4' />
            Back to Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
}
