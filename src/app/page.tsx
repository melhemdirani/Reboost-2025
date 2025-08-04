'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';
import '@/lib/env';

export default function RootPage() {
  const router = useRouter();

  React.useEffect(() => {
    // Redirect to home page
    router.push('/home');
  }, [router]);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white text-xl">
        Redirecting to Home...
      </div>
    </main>
  );
}
