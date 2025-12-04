'use client';

import React, { useState } from 'react';
import { Safari } from '@/components/ui/safari';

const imgMaskLines = "/figma-assets/kpi/mask-lines.svg";
const imgBgImage = "/figma-assets/kpi/bg-image.png";

type TabType = 'business' | 'customers' | 'product' | 'website';

export function KpiSection() {
  const [activeTab, setActiveTab] = useState<TabType>('business');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'business', label: 'Business KPIs' },
    { id: 'customers', label: 'Customers' },
    { id: 'product', label: 'Product' },
    { id: 'website', label: 'Website' },
  ];

  return (
    <div className="bg-black box-border content-stretch flex flex-col gap-[49px] isolate items-center justify-center pb-[100px] pt-[160px] px-0 relative w-full">
      <div className="box-border content-stretch flex flex-col gap-[20px] items-center justify-center overflow-clip px-[20px] sm:px-[48px] py-0 relative shrink-0 w-full z-[2]">
        <div className="content-stretch flex flex-col items-center sm:items-start relative shrink-0">
          <h2 className="font-medium leading-[1.1] relative shrink-0 text-[32px] sm:text-[44px] text-white tracking-[0.44px] text-center sm:text-left">
            Generate Beautiful Dashboards
          </h2>
        </div>
        <div className="content-stretch flex flex-col items-center sm:items-start max-w-[566px] relative shrink-0">
          <div className="font-medium leading-[1.55] relative shrink-0 text-[16px] sm:text-[18px] text-[rgba(255,255,255,0.8)] text-center w-full">
            In minutes you can generate product, sales, customer success, and marketing dashboards. Choose from 550+ sources. No SQL required.
          </div>
        </div>
      </div>
      
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full z-[1]">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full px-4 sm:px-0">
          {/* Mobile: Grid 2x2 | Desktop: Horizontal row */}
          <div className="grid grid-cols-2 gap-0 sm:flex sm:items-center sm:justify-between max-w-full sm:max-w-[714px] relative shrink-0 w-full">
            {tabs.map((tab, index) => {
              const isBottomRow = index >= 2; // Product and Website are in bottom row on mobile
              return (
                <div key={tab.id} className="content-stretch flex flex-col items-center sm:items-start relative">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className="box-border content-stretch flex items-center justify-center pb-[28px] pt-[20px] px-[20px] sm:px-[28px] relative shrink-0 transition-opacity duration-300 cursor-pointer w-full sm:w-auto"
                    style={{ opacity: activeTab === tab.id ? 1 : 0.5 }}
                  >
                    <div className="content-stretch flex flex-col items-center sm:items-start relative shrink-0">
                      <div className="flex flex-col font-medium justify-center leading-[1.2] relative shrink-0 text-[16px] sm:text-[18px] text-white whitespace-nowrap">
                        {tab.label}
                      </div>
                    </div>
                    {activeTab === tab.id && (
                      <>
                        {/* Desktop: always top | Mobile: top for first row, bottom for second row */}
                        <div className={`absolute left-0 w-full h-[2px] bg-[linear-gradient(90deg,#a855f7_0%,#d8b4fe_50%,#a855f7_100%)] animate-shimmer-slide shadow-[0px_0px_12px_4px_rgba(168,85,247,0.8),0px_-2px_24px_4px_rgba(168,85,247,0.6),0px_-1px_36px_8px_rgba(168,85,247,0.4),0px_-2px_48px_12px_rgba(168,85,247,0.35),0px_0px_60px_45px_rgba(168,85,247,0.25)] ${isBottomRow ? 'bottom-0 sm:bottom-auto sm:top-0' : 'top-0'}`} />
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute border-[rgba(255,255,255,0.12)] border-b-0 border-l-0 border-r-0 border-solid border-t top-[72px] left-0 right-0 hidden sm:block" />
        
        <div className="content-stretch flex flex-col isolate items-center justify-center relative shrink-0 w-full mt-12">
          <div className="box-border content-stretch flex flex-col items-center justify-center px-[20px] py-0 relative shrink-0 w-full z-[4]">
             {/* Safari Component Container */}
             <div className="w-full max-w-[1200px]">
                {/* 
                  Wrapper with key triggers the animation when activeTab changes.
                  We use our new custom animation class defined in globals.css.
                */}
                <div key={activeTab} className="animate-fade-in-blur">
                  <Safari 
                    url={`axos.ai/${activeTab}`}
                    mode="default"
                    className="w-full shadow-2xl"
                  />
                </div>
             </div>
          </div>

          {/* Background Lines */}
          <div className="absolute top-[50px] left-[-40px] w-[2000px] h-[646px] z-[2] pointer-events-none opacity-50"
               style={{ maskImage: `url(${imgMaskLines})`, WebkitMaskImage: `url(${imgMaskLines})`, maskSize: 'cover' }}>
             <div className="absolute inset-0 border-t border-[rgba(255,255,255,0.12)]"></div>
             <div className="w-full h-full relative">
               <img src={imgBgImage} alt="" className="w-full h-full object-cover opacity-50" />
             </div>
          </div>
          
          {/* Vertical Dashed Line */}
          <div className="absolute top-[-200px] left-1/2 translate-x-[-50%] w-[714px] h-[1200px] z-[1] pointer-events-none border-x border-dashed border-[rgba(255,255,255,0.12)] hidden sm:block" />
        </div>
      </div>
    </div>
  );
}
