'use client';

import React from 'react';
import Image from 'next/image';

export function FeaturesCardsSection() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20 md:mb-24">
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
          Powerful AI Features
        </h2>
        <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
          Everything you need to make smarter crypto investments with AI-powered insights and automation.
        </p>
      </div>

      {/* First Row - 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Card 1: Smart Market Analysis */}
        <div className="bg-[#141414] rounded-[20px] border-2 border-[#1e1e1e] p-6 h-[500px] flex flex-col justify-between relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-40 -left-28 w-[246px] h-[253px] bg-gradient-to-b from-transparent to-[#7A3BFF]/30 rounded-[24px] blur-[42px] opacity-80" />
          
          <div className="relative z-10 flex-1 flex flex-col justify-between pb-10">
            {/* Logo Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative w-12 h-12">
                <Image 
                  src="/images/image.webp" 
                  alt="Axos" 
                  width={48} 
                  height={48}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Integration Cards */}
            <div className="space-y-3">
              {/* Bitcoin Analysis Card */}
              <div className="bg-gradient-to-b from-[#424242] via-[#303030] to-[#1e1e1e] rounded-[12px] border border-[#424242] p-2 flex items-center gap-2">
                <div className="bg-[#1e1e1e] rounded-lg p-1.5 w-8 h-8 flex items-center justify-center">
                  <div className="w-5 h-5 bg-orange-500 rounded-full" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-xs leading-[14.4px]">Bitcoin</p>
                  <p className="text-[#a5a5a5] text-xs leading-[14.4px]">Analyzing trends</p>
                </div>
                <span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-transparent">
                  Running Now…
                </span>
              </div>

              {/* Ethereum Analysis Card */}
              <div className="bg-gradient-to-b from-[#424242] via-[#303030] to-[#1e1e1e] rounded-[12px] border border-[#424242] p-2 flex items-center gap-2">
                <div className="bg-[#1e1e1e] rounded-lg p-1.5 w-8 h-8 flex items-center justify-center">
                  <div className="w-4.5 h-4.5 bg-purple-500 rounded-full" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-xs  leading-[14.4px]">Ethereum</p>
                  <p className="text-[#a5a5a5] text-xs  leading-[14.4px]">Market sentiment</p>
                </div>
              </div>

              {/* Altcoins Analysis Card */}
              <div className="bg-gradient-to-b from-[#424242] via-[#303030] to-[#1e1e1e] rounded-[12px] border border-[#424242] p-2 flex items-center gap-2">
                <div className="bg-[#1e1e1e] rounded-lg p-1.5 w-8 h-8 flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-xs  leading-[14.4px]">Altcoins</p>
                  <p className="text-[#a5a5a5] text-xs  leading-[14.4px]">Opportunity scan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="relative z-10 space-y-2">
            <h3 className="text-white text-2xl  leading-[31.2px] tracking-[-0.48px]">
              Smart Market<br />Analysis
            </h3>
            <p className="text-[#a5a5a5] text-base  leading-[24px]">
              AI-powered real-time analysis of<br />crypto markets to identify the best<br />opportunities for you.
            </p>
          </div>
        </div>

        {/* Card 2: Portfolio Performance */}
        <div className="bg-[#141414] rounded-[20px] border-2 border-[#1e1e1e] p-6 h-[500px] flex flex-col justify-between relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -bottom-24 -right-24 w-[246px] h-[253px] bg-gradient-to-b from-transparent to-[#7A3BFF]/30 rounded-[24px] blur-[42px] opacity-80 z-10" />
          
          <div className="relative z-[3] flex-1 flex items-end pb-10">
            {/* Before Axos label */}
            <div className="absolute top-0 left-0 flex items-center gap-2">
              <div className="w-4 h-4 bg-[#5e5e5e] rounded-lg" />
              <span className="text-[#a5a5a5] text-base ">Before Axos</span>
            </div>

            {/* Data bars - Performance visualization */}
            <div className="flex items-end justify-between w-full gap-2 h-[200px]">
              <div className="h-[20px] w-6 bg-transparent opacity-0" />
              <div className="h-[75px] w-6 bg-gradient-to-b from-[#262626] to-[#424242] rounded-lg border-l border-t border-[#424242]" />
              <div className="h-[20px] w-6 bg-transparent opacity-0" />
              <div className="h-[56px] w-6 bg-gradient-to-b from-[#262626] to-[#424242] rounded-lg border-l border-t border-[#424242]" />
              <div className="h-[20px] w-6 bg-transparent opacity-0" />
              <div className="h-[64px] w-6 bg-gradient-to-b from-[#262626] to-[#424242] rounded-lg border-l border-t border-[#424242]" />
              <div className="h-[20px] w-6 bg-transparent opacity-0" />
              <div className="h-[40px] w-6 bg-gradient-to-b from-[#262626] to-[#424242] rounded-lg border-l border-t border-[#424242]" />
              <div className="h-[20px] w-6 bg-transparent opacity-0" />
              <div className="h-[48px] w-6 bg-gradient-to-b from-[#262626] to-[#424242] rounded-lg border-l border-t border-[#424242]" />
            </div>
          </div>

          {/* Title and Description */}
          <div className="relative z-[1] space-y-2">
            <h3 className="text-white text-2xl  leading-[31.2px] tracking-[-0.48px]">
              Portfolio<br />Performance
            </h3>
            <p className="text-[#a5a5a5] text-base  leading-[24px]">
              Track your investments with real-time<br />insights and AI-powered performance<br />analytics.
            </p>
          </div>
        </div>

        {/* Card 3: 24/7 AI Assistant */}
        <div className="bg-[#141414] rounded-[20px] border-2 border-[#1e1e1e] p-6 h-[500px] flex flex-col justify-between relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-40 -right-28 w-[246px] h-[253px] bg-gradient-to-b from-transparent to-[#7A3BFF]/30 rounded-[24px] blur-[42px] opacity-80" />
          
          <div className="relative z-10 flex-1 flex flex-col justify-center space-y-3">
            {/* User Query label */}
            <div className="mb-3">
              <p className="text-[#a5a5a5] text-sm  italic">Your Question</p>
            </div>

            {/* Chat Message */}
            <div className="bg-gradient-to-r from-[#141414] via-[#2b1847] to-[#7A3BFF]/40 border border-[#7A3BFF]/30 rounded-xl p-3 relative">
              <p className="text-white text-sm  tracking-[-0.28px]">
                Should I buy Ethereum now?
              </p>
            </div>

            {/* Profile Pic */}
            <div className="flex justify-start">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border border-neutral-800" />
            </div>
          </div>

          {/* Title and Description */}
          <div className="relative z-10 space-y-2">
            <h3 className="text-white text-2xl  leading-[31.2px] tracking-[-0.48px]">
              24/7 AI Assistant
            </h3>
            <p className="text-[#a5a5a5] text-base  leading-[24px]">
              Get instant answers to your crypto<br />questions and personalized advice<br />anytime, anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row - 2 cards */}
      <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-6">
        {/* Card 4: Smart Notifications */}
        <div className="bg-[#141414] rounded-[20px] border-2 border-[#1e1e1e] p-6 h-[500px] flex flex-col justify-between relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-44 -left-40 w-[246px] h-[253px] bg-gradient-to-b from-transparent to-[#7A3BFF]/30 rounded-[24px] blur-[42px] opacity-80" />
          
          <div className="relative z-10 flex-1 flex items-center justify-center">
            {/* Workflow visualization */}
            <div className="relative w-full max-w-[680px] h-[280px]">
              {/* Central Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 z-20">
                <Image 
                  src="/images/image.webp" 
                  alt="Axos" 
                  width={56} 
                  height={56}
                  className="rounded-lg"
                />
              </div>
              
              {/* Active Message Card */}
              <div className="absolute top-4 left-4 bg-gradient-to-br from-[#141414] via-[#2b1847] to-[#7A3BFF]/40 border border-[#7A3BFF] rounded-[14px] p-3 max-w-[351px]">
                <div className="flex items-start gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center text-white font-bold">₿</div>
                  <div className="flex-1 space-y-2">
                    <p className="text-white text-[13px] font-medium">Bitcoin Alert</p>
                    <p className="text-[#a5a5a5] text-xs leading-[15.6px]">
                      Price reached your target of $65,000.<br />Time to review your position.
                    </p>
                    <p className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-transparent">
                      Analyzing now…
                    </p>
                  </div>
                  <span className="text-[#ebebeb] text-[11px]">Now</span>
                </div>
              </div>

              {/* Remaining Message Cards */}
              <div className="absolute bottom-4 left-4 space-y-0.5 max-w-[353px]">
                {/* Card 1 */}
                <div className="bg-gradient-to-b from-[#424242] via-[#303030] to-[#1e1e1e] rounded-xl border border-[#424242] p-2 h-[62.7px] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold">Ξ</div>
                  <div className="flex-1">
                    <p className="text-white text-[13px]">Ethereum Alert</p>
                    <p className="text-[#969696] text-[11px] leading-[13.2px]">
                      Strong buy signal detected.<br />Review recommendation.
                    </p>
                  </div>
                  <span className="text-[#ebebeb] text-[11px]">12:45 AM</span>
                </div>

                {/* Connecting line */}
                <div className="w-0.5 h-[13px] bg-gradient-to-b from-[#7A3BFF] to-[#5000CA] mx-auto" />

                {/* Card 2 */}
                <div className="bg-gradient-to-b from-[#424242] via-[#303030] to-[#1e1e1e] rounded-xl border border-[#424242] p-2 h-[62.7px] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold">📊</div>
                  <div className="flex-1">
                    <p className="text-white text-[13px]">Market Update</p>
                    <p className="text-[#969696] text-[11px] leading-[13.2px]">
                      Your portfolio up 12% this week.<br />View detailed analysis.
                    </p>
                  </div>
                  <span className="text-[#ebebeb] text-[11px]">02:45 AM</span>
                </div>
              </div>

              {/* Connection lines (simplified) */}
              <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 680 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 350 140 L 180 40" stroke="url(#grad1)" strokeWidth="2" opacity="0.3" />
                <path d="M 350 140 L 180 240" stroke="url(#grad2)" strokeWidth="2" opacity="0.3" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#32cd87" />
                    <stop offset="100%" stopColor="#245f37" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#32cd87" />
                    <stop offset="100%" stopColor="#245f37" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Title and Description */}
          <div className="relative z-10 space-y-2">
            <h3 className="text-white text-2xl  leading-[31.2px] tracking-[-0.48px]">
              Smart Notifications
            </h3>
            <p className="text-[#a5a5a5] text-base  leading-[24px]">
              Receive intelligent alerts about market movements, price targets, and<br />opportunities tailored to your strategy.
            </p>
          </div>
        </div>

        {/* Card 5: Risk Management */}
        <div className="bg-[#141414] rounded-[20px] border-2 border-[#1e1e1e] p-6 h-[500px] flex flex-col justify-between relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-36 -left-20 w-[246px] h-[253px] bg-gradient-to-b from-transparent to-[#7A3BFF]/30 rounded-[24px] blur-[42px] opacity-80" />
          
          <div className="relative z-10 flex-1 flex items-center justify-center">
            {/* Container principal - rotacionado */}
            <div className="relative" style={{ 
              width: '66px', 
              height: '332px',
              transform: 'rotate(196.08deg)'
            }}>
              {/* Central Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-20" style={{ transform: 'translate(-50%, -50%) rotate(-196.08deg)' }}>
                <Image 
                  src="/images/image.webp" 
                  alt="Axos" 
                  width={48} 
                  height={48}
                  className="rounded-lg"
                />
              </div>

              {/* Arm 1 */}
              <div className="absolute -bottom-[0.12px] -right-[0.59px] -top-[0.12px] w-[65.999px]">
                <div className="absolute flex items-center justify-center -left-[8.79px] -top-[7.66px]" style={{
                  width: 'calc(66px * 0.2803988754749298 + 66px * 0.9598835706710815)',
                  height: 'calc(66px * 0.9598835706710815 + 66px * 0.2803988754749298)'
                }}>
                  <div style={{ transform: 'rotate(163.716deg)' }}>
                    <div className="overflow-clip relative rounded-full size-[66px]">
                      <Image 
                        src="/features-images/icon1-updated.png" 
                        alt="Icon 1" 
                        width={66} 
                        height={66}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Arm 2 */}
              <div className="absolute flex items-center justify-center -bottom-[54.2px] -right-[127.45px] -top-[54.64px] w-[320.527px]">
                <div style={{ transform: 'rotate(60deg)', width: '66.002px', height: '332.007px' }}>
                  <div className="relative size-full">
                    <div className="absolute flex items-center justify-center -left-[7.61px] -top-[6.81px]" style={{
                      width: 'calc(66px * 0.9710343480110168 + 66px * 0.23894008994102478)',
                      height: 'calc(66px * 0.23894008994102478 + 66px * 0.9710343480110168)'
                    }}>
                      <div style={{ transform: 'rotate(103.824deg)' }}>
                        <div className="overflow-clip relative rounded-full size-[66px]">
                          <Image 
                            src="/features-images/icon2.png" 
                            alt="Icon 2" 
                            width={66} 
                            height={66}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arm 3 */}
              <div className="absolute flex items-center justify-center -bottom-[47.65px] -right-[124.08px] -top-[48.18px] w-[314.383px]">
                <div style={{ transform: 'rotate(123deg)', width: '65.999px', height: '331.998px' }}>
                  <div className="relative size-full">
                    <div className="absolute flex items-center justify-center -left-[14.3px] -top-[13.61px]" style={{
                      width: 'calc(66px * 0.6924453377723694 + 66px * 0.7214703559875488)',
                      height: 'calc(66px * 0.7214703559875488 + 66px * 0.6924453377723694)'
                    }}>
                      <div style={{ transform: 'rotate(43.824deg)' }}>
                        <div className="h-[66px] overflow-clip relative rounded-full w-[66.001px]">
                          <Image 
                            src="/features-images/icon3.png" 
                            alt="Icon 3" 
                            width={66} 
                            height={66}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arm 4 */}
              <div className="absolute flex items-center justify-center bottom-[-0.06px] right-[0.28px] top-[0.05px] w-[66.004px]">
                <div style={{ transform: 'rotate(180deg)', width: '66.004px', height: '332.003px' }}>
                  <div className="relative size-full">
                    <div className="absolute flex items-center justify-center -left-[8.57px] -top-[7.9px]" style={{
                      width: 'calc(66px * 0.278589129447937 + 66px * 0.9604104161262512)',
                      height: 'calc(66px * 0.9604104161262512 + 66px * 0.278589129447937)'
                    }}>
                      <div style={{ transform: 'rotate(343.824deg)' }}>
                        <div className="overflow-clip relative rounded-full size-[66px]">
                          <Image 
                            src="/features-images/icon4.png" 
                            alt="Icon 4" 
                            width={66} 
                            height={66}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arm 5 */}
              <div className="absolute flex items-center justify-center -bottom-[54.42px] -right-[127.27px] -top-[54.42px] w-[320.52px]">
                <div style={{ transform: 'rotate(240deg)', width: '65.999px', height: '332px' }}>
                  <div className="relative size-full">
                    <div className="absolute flex items-center justify-center -left-[7.64px] -top-[6.97px]" style={{
                      width: 'calc(66px * 0.9706326127052307 + 66px * 0.2405669093132019)',
                      height: 'calc(66px * 0.2405669093132019 + 66px * 0.9706326127052307)'
                    }}>
                      <div style={{ transform: 'rotate(283.92deg)' }}>
                        <div className="overflow-clip relative rounded-full size-[66px]">
                          <Image 
                            src="/features-images/icon5.png" 
                            alt="Icon 5" 
                            width={66} 
                            height={66}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arm 6 */}
              <div className="absolute flex items-center justify-center -bottom-[50.04px] -right-[125.26px] -top-[50.05px] w-[316.528px]">
                <div style={{ transform: 'rotate(302deg)', width: '66.005px', height: '331.999px' }}>
                  <div className="relative size-full">
                    <div className="absolute flex items-center justify-center -left-[13px] -top-[13.66px]" style={{
                      width: 'calc(66px * 0.6936531662940979 + 66px * 0.7203091382980347)',
                      height: 'calc(66px * 0.7203091382980347 + 66px * 0.6936531662940979)'
                    }}>
                      <div style={{ transform: 'rotate(223.92deg)' }}>
                        <div className="overflow-clip relative rounded-full size-[66px]">
                          <Image 
                            src="/features-images/icon6.png" 
                            alt="Icon 6" 
                            width={66} 
                            height={66}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="relative z-10 space-y-2">
            <h3 className="text-white text-2xl  leading-[31.2px] tracking-[-0.48px]">
              Risk Management
            </h3>
            <p className="text-[#a5a5a5] text-base  leading-[24px]">
              Protect your investments with AI-powered<br />risk analysis and portfolio optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

