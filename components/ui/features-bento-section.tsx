'use client';

import React, { useEffect, useRef } from 'react';

// Shiny CTA Button Component
function ShinyButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`shiny-cta group ${className}`}>
      <span>{children}</span>
    </button>
  );
}

export function FeaturesBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Reveal animation observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-32 relative bg-black">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7A3BFF]/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] mix-blend-screen opacity-30" />
      </div>

      <div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative z-10">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6" style={{ fontFamily: "'GT Alpina', Georgia, serif" }}>
            Everything you need to
            <br />
            create masterpiece.
          </h2>
          <p className="text-lg text-neutral-400">
            Powerful features wrapped in a beautiful interface, designed to keep
            you in the flow state.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(320px,auto)]">
          {/* Card 1: Content Generator (Top Left) */}
          <div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col border border-white/10 bg-[#0A0A0A] reveal">
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-normal text-white mb-2 tracking-tight" style={{ fontFamily: "'GT Alpina', Georgia, serif" }}>
                Content Generator
              </h3>
              <p className="text-sm text-neutral-400 mb-8 font-light">
                Create blogs, emails, or articles in seconds.
              </p>

              {/* Visual UI */}
              <div className="mt-auto relative rounded-xl border border-white/10 bg-neutral-900/50 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between text-[10px] text-neutral-500 uppercase tracking-widest font-medium" style={{ fontFamily: "'Fragment Mono', monospace" }}>
                    <span>Content Ideas</span>
                    <span>Type</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-neutral-400 py-2 border-b border-white/5">
                    <span>15 Best AI Writing tools...</span>
                    <span className="px-2 py-0.5 rounded bg-white/5" style={{ fontFamily: "'Fragment Mono', monospace" }}>Blog</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-white py-2 bg-white/5 -mx-4 px-4 border-l-2 border-[#7A3BFF]">
                    <span>20 Best AI Writing tools...</span>
                    <span className="px-2 py-0.5 rounded bg-white/10" style={{ fontFamily: "'Fragment Mono', monospace" }}>
                      Blog post
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-neutral-400 py-2 border-b border-white/5 opacity-50">
                    <span>How to scale content...</span>
                    <span className="px-2 py-0.5 rounded bg-white/5" style={{ fontFamily: "'Fragment Mono', monospace" }}>Email</span>
                  </div>
                </div>

                {/* Floating Action Button */}
                <div className="absolute bottom-6 right-6 z-20">
                  <ShinyButton className="shiny-cta-sm">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    </svg>
                    Generate
                  </ShinyButton>
                </div>
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#7A3BFF]/10 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Card 2: Ad Copy Creator (Top Middle) */}
          <div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col border border-white/10 bg-[#0A0A0A] reveal delay-100">
            <h3 className="text-2xl font-normal text-white mb-2 tracking-tight" style={{ fontFamily: "'GT Alpina', Georgia, serif" }}>
              Ad Copy Creator
            </h3>
            <p className="text-sm text-neutral-400 mb-8 font-light">
              Write headlines that sell like crazy.
            </p>

            {/* Stacked Cards Visual */}
            <div className="relative mt-auto h-48 w-full" style={{ perspective: '300px' }}>
              {/* Background Card */}
              <div className="absolute bottom-0 left-4 right-4 h-32 bg-neutral-800 rounded-xl border border-white/5 opacity-40 transform translate-y-4 scale-95 transition-transform duration-500 group-hover:translate-y-6" />
              {/* Middle Card */}
              <div className="absolute bottom-0 left-2 right-2 h-32 bg-neutral-800 rounded-xl border border-white/5 opacity-70 transform translate-y-2 scale-[0.98] transition-transform duration-500 group-hover:translate-y-3" />
              {/* Foreground Card */}
              <div className="absolute bottom-0 inset-x-0 h-auto min-h-[140px] bg-[#111] rounded-xl border border-white/10 p-5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 z-10 flex flex-col gap-3">
                <div className="text-[10px] text-[#7A3BFF] font-medium uppercase tracking-widest" style={{ fontFamily: "'Fragment Mono', monospace" }}>
                  Option 1
                </div>
                <h4 className="text-lg font-medium text-white leading-tight">
                  From Idea to Publish in Minutes
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Lexora helps you create SEO-ready content faster than ever before.
                </p>
                <div className="mt-2 h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-[#7A3BFF] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Tone Control (Top Right) */}
          <div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col border border-white/10 bg-[#0A0A0A] reveal delay-200">
            <h3 className="text-2xl font-normal text-white mb-2 tracking-tight" style={{ fontFamily: "'GT Alpina', Georgia, serif" }}>
              Tone Control
            </h3>
            <p className="text-sm text-neutral-400 mb-8 font-light">
              Adjust your writing style with one click.
            </p>

            <div className="relative flex-1 bg-neutral-900/50 rounded-2xl border border-white/5 p-6 flex items-center justify-center overflow-hidden">
              {/* Selection UI */}
              <div className="w-full max-w-[200px] space-y-1 relative">
                {/* Active Indicator Background */}
                <div className="absolute left-0 top-0 w-full h-[36px] bg-white/5 rounded-lg border border-white/10 transition-all duration-300 ease-out transform translate-y-0 group-hover:translate-y-[36px]" />

                {/* Options */}
                <div className="relative z-10 flex items-center justify-between px-3 h-[36px] cursor-pointer group/item">
                  <span className="text-sm font-medium text-white">Casual</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7A3BFF] shadow-[0_0_8px_rgba(122,59,255,0.8)] opacity-100 group-hover:opacity-0 transition-opacity" />
                </div>
                <div className="relative z-10 flex items-center justify-between px-3 h-[36px] cursor-pointer group/item opacity-50 hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium text-white">
                    Professional
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7A3BFF] shadow-[0_0_8px_rgba(122,59,255,0.8)] opacity-0 group-hover:opacity-100 transition-opacity delay-75" />
                </div>
                <div className="relative z-10 flex items-center justify-between px-3 h-[36px] cursor-pointer text-sm font-medium text-white opacity-50 hover:opacity-100 transition-opacity">
                  Playful
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-24 h-48 bg-gradient-to-l from-black via-transparent to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>
          </div>

          {/* Card 4: Team Collaboration (Bottom Left, 3 cols) */}
          <div className="md:col-span-3 glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between border border-white/10 bg-[#0A0A0A] min-h-[360px] reveal">
            <div className="relative z-10">
              <h3 className="text-2xl font-normal text-white mb-2 tracking-tight" style={{ fontFamily: "'GT Alpina', Georgia, serif" }}>
                Team Collaboration
              </h3>
              <p className="text-sm text-neutral-400 font-light">
                Work with your team, share drafts, and speed up approvals.
              </p>
            </div>

            {/* Editor View Background */}
            <div className="absolute inset-0 top-28 px-8 opacity-40 select-none pointer-events-none overflow-hidden">
              <p className="text-2xl font-light text-neutral-700 leading-relaxed" style={{ fontFamily: "'GT Alpina', Georgia, serif" }}>
                Why Writing Feels So Hard...
                <span className="bg-[#7A3BFF]/20 text-[#d8b4fe]">
                  {' '}Content is
                </span>
              </p>
            </div>

            {/* Comment Overlay */}
            <div className="relative z-20 mt-auto ml-auto w-full max-w-sm bg-[#151515] border border-white/10 rounded-xl p-4 shadow-2xl transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
              <div className="flex gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-neutral-700 flex-shrink-0 border border-white/10 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=bondan" alt="User" className="w-full h-full object-cover opacity-80" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white mb-0.5">
                    Bondan
                  </div>
                  <div className="text-xs text-neutral-400 leading-snug">
                    I think we can go with this direction. It feels more
                    authentic to the brand voice.
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pl-11">
                <button className="px-3 py-1.5 text-[10px] font-medium text-neutral-400 hover:text-white border border-white/10 hover:border-white/20 rounded-md transition-colors bg-white/5" style={{ fontFamily: "'Fragment Mono', monospace" }}>
                  Reply
                </button>
                <button className="px-3 py-1.5 text-[10px] font-medium text-white bg-[#7A3BFF] hover:bg-[#6931dc] rounded-md transition-colors flex items-center gap-1.5 shadow-lg shadow-purple-900/20" style={{ fontFamily: "'Fragment Mono', monospace" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Approve
                </button>
              </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#7A3BFF]/10 to-transparent pointer-events-none" />
          </div>

          {/* Card 5: Smart Editing (Bottom Right, 3 cols) */}
          <div className="md:col-span-3 glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col border border-white/10 bg-[#0A0A0A] min-h-[360px] reveal delay-100">
            <div className="relative z-10">
              <h3 className="text-2xl font-normal text-white mb-2 tracking-tight" style={{ fontFamily: "'GT Alpina', Georgia, serif" }}>
                Contextual Intelligence
              </h3>
              <p className="text-sm text-neutral-400 font-light">
                Generate headlines and descriptions that convert.
              </p>
            </div>

            <div className="relative flex-1 flex items-center justify-center mt-8">
              {/* Text Content */}
              <div className="w-full max-w-md relative">
                <p className="text-3xl md:text-4xl font-light text-neutral-700 leading-tight" style={{ fontFamily: "'GT Alpina', Georgia, serif" }}>
                  Start from scratch, or let AI handle the heavy lifting.{' '}
                  <span className="relative inline-block text-white">
                    That's where Lexora comes in.
                    {/* Highlight Background */}
                    <span className="absolute inset-0 bg-[#7A3BFF]/20 -skew-y-1 -z-10 rounded" />
                    {/* Cursor */}
                    <span className="absolute -right-0.5 top-0 bottom-0 w-0.5 bg-[#7A3BFF] animate-pulse" />
                  </span>
                </p>
                
                {/* Tooltip Popover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-bottom">
                  <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-3 shadow-xl flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-[#7A3BFF]/20 text-[#a77eff] flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-neutral-300">
                      This is exactly what Lexora was built for.
                    </span>
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5 border-4 border-transparent border-t-[#1a1a1a]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

