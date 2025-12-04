'use client';

import React, { memo } from 'react';
import { StickyScrollCards } from './sticky-scroll-cards';

export const FlipCardsSection = memo(() => {
  return (
    <section className="relative pt-0 pb-0 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-3 sm:mb-4 md:mb-6 text-center">
          <h2 className="mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white px-2">
            Powerful Features for Crypto Investors
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-white/70 px-4">
            Maximize your returns with AI-driven insights, automated monitoring, and enterprise-grade security
          </p>
        </div>
      </div>
      {/* Cards Grid */}
      <StickyScrollCards />
    </section>
  );
});

FlipCardsSection.displayName = 'FlipCardsSection';

