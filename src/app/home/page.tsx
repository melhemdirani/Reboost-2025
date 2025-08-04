'use client';

import * as React from 'react';
import '@/lib/env';

import { FeaturesSection } from '@/sections/FeaturesSection';
import { MainContentSection } from '@/sections/MainContentSection';

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-col w-full min-h-screen bg-black">
        <MainContentSection />
        <FeaturesSection />
      </div>
    </main>
  );
}
