'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useLenis } from 'lenis/react';

export function PainPointsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const updateCards = useCallback(() => {
    const section = sectionRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;

    if (!section || !card1 || !card2 || !card3) return;

    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate how much we've scrolled into the section (0 to 1)
    let progress = Math.min(1, Math.max(0, -rect.top / (rect.height - viewportHeight)));

    // Card 1 Logic:
    if (progress < 0.4) {
      const scale = 1 - (progress * 0.15);
      card1.style.transform = `scale(${scale})`;
    } else {
      card1.style.transform = `scale(0.94)`;
    }

    // Card 2 Logic:
    if (progress > 0.1) {
      const p2 = Math.min(1, Math.max(0, (progress - 0.1) / 0.4));
      const translateY = (1 - p2) * 120;
      const scale = 0.9 + (p2 * 0.1);

      if (p2 < 1) {
        card2.style.transform = `translateY(${translateY}%) scale(${scale})`;
        card2.style.opacity = String(p2);
      } else {
        if (progress > 0.5) {
          const p2Exit = Math.min(1, (progress - 0.5) / 0.4);
          const exitScale = 1 - (p2Exit * 0.05);
          card2.style.transform = `translateY(0%) scale(${exitScale})`;
          card2.style.opacity = '1';
        }
      }
    } else {
      card2.style.transform = `translateY(120%)`;
      card2.style.opacity = '0';
    }

    // Card 3 Logic:
    if (progress > 0.5) {
      const p3 = Math.min(1, Math.max(0, (progress - 0.5) / 0.4));
      const translateY = (1 - p3) * 120;
      const scale = 0.9 + (p3 * 0.1);

      card3.style.transform = `translateY(${translateY}%) scale(${scale})`;
      card3.style.opacity = String(p3);
    } else {
      card3.style.transform = `translateY(120%)`;
      card3.style.opacity = '0';
    }
  }, []);

  // Use Lenis scroll callback
  useLenis(updateCards);

  // Also listen to native scroll for when Lenis is disabled (mobile)
  useEffect(() => {
    const card1 = card1Ref.current;
    if (card1) {
      card1.style.transform = 'scale(1)';
    }

    // Fallback for native scroll (mobile/touch devices)
    const handleNativeScroll = () => {
      updateCards();
    };

    window.addEventListener('scroll', handleNativeScroll, { passive: true });
    
    // Initial update
    updateCards();

    return () => {
      window.removeEventListener('scroll', handleNativeScroll);
    };
  }, [updateCards]);

  return (
    <section ref={sectionRef} id="pain-points" className="relative z-20 bg-black">
      <div className="sticky flex flex-col overflow-hidden w-full h-screen pt-12 md:pt-16 px-4 md:px-8 lg:px-12 pb-12 md:pb-16 top-0 items-center justify-center min-h-[600px]">
        {/* Header Text */}
        <div className="text-center mb-4 sm:mb-6 md:mb-10 relative z-10 transition-opacity duration-300">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-white mb-2 sm:mb-4 leading-tight tracking-tight" style={{ fontFamily: "'GT Alpina', Georgia, serif" }}>
            We understand
            <br />
            <span className="text-neutral-400">your pain</span>
          </h2>
        </div>

        {/* Card Stack Container - Larger */}
        <div className="card-stack-wrapper w-full max-w-5xl h-[380px] sm:h-[420px] md:h-[520px] lg:h-[560px] relative">
          {/* Card 1 - Text Left, Image Right */}
          <div
            ref={card1Ref}
            id="card-1"
            className="stack-card absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl"
            style={{ transform: 'scale(1)' }}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Text Side */}
              <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                <div className="relative">
                  <svg width="28" height="28" className="text-neutral-600 mb-4 md:mb-8 opacity-50 w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.017C7.91243 16 7.017 16.8954 7.017 18V21H0V18C0 11.3726 5.37258 6 12 6V0H11C4.37258 0 0 5.37258 0 12V21H14.017ZM24.017 21L24.017 18C24.017 16.8954 23.1216 16 22.017 16H19.017C17.9124 16 17.017 16.8954 17.017 18V21H10V18C10 11.3726 15.3726 6 22 6V0H23C29.6274 0 34 5.37258 34 12V21H24.017Z" />
                  </svg>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight" style={{ fontFamily: "'GT Alpina', Georgia, serif" }}>
                    "I don't have time to write."
                  </p>
                  <p className="mt-3 sm:mt-5 md:mt-8 text-neutral-500 text-base sm:text-lg md:text-xl leading-relaxed">
                    Hours get lost to drafting instead of moving the business ahead.
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-xs font-bold tracking-widest text-white uppercase mb-1" style={{ fontFamily: "'Fragment Mono', monospace" }}>
                    Bambang
                  </div>
                  <div className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase" style={{ fontFamily: "'Fragment Mono', monospace" }}>
                    Social Media Manager
                  </div>
                </div>
              </div>
              
              {/* Divider Line - Hidden on mobile */}
              <div className="hidden md:block w-px bg-white/10 self-stretch my-8" />
              
              {/* Image Side - Hidden on mobile */}
              <div className="hidden md:block flex-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7A3BFF]/5 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Card 2 - Image Left, Text Right */}
          <div
            ref={card2Ref}
            id="card-2"
            className="stack-card absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl"
            style={{ transform: 'translateY(120%)', opacity: 0 }}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Image Side - Hidden on mobile */}
              <div className="hidden md:block flex-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-[#7A3BFF]/5 via-transparent to-transparent" />
              </div>
              
              {/* Divider Line - Hidden on mobile */}
              <div className="hidden md:block w-px bg-white/10 self-stretch my-8" />
              
              {/* Text Side */}
              <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                <div className="relative">
                  <svg width="28" height="28" className="text-neutral-600 mb-4 md:mb-8 opacity-50 w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.017C7.91243 16 7.017 16.8954 7.017 18V21H0V18C0 11.3726 5.37258 6 12 6V0H11C4.37258 0 0 5.37258 0 12V21H14.017ZM24.017 21L24.017 18C24.017 16.8954 23.1216 16 22.017 16H19.017C17.9124 16 17.017 16.8954 17.017 18V21H10V18C10 11.3726 15.3726 6 22 6V0H23C29.6274 0 34 5.37258 34 12V21H24.017Z" />
                  </svg>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight" style={{ fontFamily: "'GT Alpina', Georgia, serif" }}>
                    "I spend more time fixing than writing."
                  </p>
                  <p className="mt-3 sm:mt-5 md:mt-8 text-neutral-500 text-base sm:text-lg md:text-xl leading-relaxed">
                    Editing messy drafts kills the creative flow entirely.
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-xs font-bold tracking-widest text-white uppercase mb-1" style={{ fontFamily: "'Fragment Mono', monospace" }}>
                    Sarah
                  </div>
                  <div className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase" style={{ fontFamily: "'Fragment Mono', monospace" }}>
                    Content Lead
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Text Left, Image Right */}
          <div
            ref={card3Ref}
            id="card-3"
            className="stack-card absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl"
            style={{ transform: 'translateY(120%)', opacity: 0 }}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Text Side */}
              <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                <div className="relative">
                  <svg width="28" height="28" className="text-neutral-600 mb-4 md:mb-8 opacity-50 w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.017C7.91243 16 7.017 16.8954 7.017 18V21H0V18C0 11.3726 5.37258 6 12 6V0H11C4.37258 0 0 5.37258 0 12V21H14.017ZM24.017 21L24.017 18C24.017 16.8954 23.1216 16 22.017 16H19.017C17.9124 16 17.017 16.8954 17.017 18V21H10V18C10 11.3726 15.3726 6 22 6V0H23C29.6274 0 34 5.37258 34 12V21H24.017Z" />
                  </svg>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight" style={{ fontFamily: "'GT Alpina', Georgia, serif" }}>
                    "My content sounds robotic."
                  </p>
                  <p className="mt-3 sm:mt-5 md:mt-8 text-neutral-500 text-base sm:text-lg md:text-xl leading-relaxed">
                    Generic AI output damages our brand voice and trust.
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-xs font-bold tracking-widest text-white uppercase mb-1" style={{ fontFamily: "'Fragment Mono', monospace" }}>
                    Marcus
                  </div>
                  <div className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase" style={{ fontFamily: "'Fragment Mono', monospace" }}>
                    Founder
                  </div>
                </div>
              </div>
              
              {/* Divider Line - Hidden on mobile */}
              <div className="hidden md:block w-px bg-white/10 self-stretch my-8" />
              
              {/* Image Side - Hidden on mobile */}
              <div className="hidden md:block flex-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7A3BFF]/5 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Spacer for scroll distance */}
      <div className="h-[250vh]" />
    </section>
  );
}
