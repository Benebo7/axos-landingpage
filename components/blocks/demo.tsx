import React, { memo } from "react"
import dynamic from "next/dynamic"
import { Footer } from "@/components/ui/footer-section"
import { HeroSection } from "@/components/ui/hero-section-1"

// Loading skeleton component
const SectionSkeleton = memo(() => (
  <div className="bg-background py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="animate-pulse space-y-8">
        <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mx-auto"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded"></div>
        </div>
      </div>
    </div>
  </div>
));

SectionSkeleton.displayName = 'SectionSkeleton';

// Client sections via dynamic with loading fallback (Next.js 15)
const RobotDemoSection = dynamic(() => import("@/components/ui/robot-demo-section").then(m => ({ default: m.RobotDemoSection })), { ssr: true, loading: () => <SectionSkeleton /> })
const KpiSection = dynamic(() => import("@/components/ui/kpi-section").then(m => ({ default: m.KpiSection })), { ssr: true, loading: () => <SectionSkeleton /> })
const PainPointsSection = dynamic(() => import("@/components/ui/pain-points-section").then(m => ({ default: m.PainPointsSection })), { ssr: true, loading: () => <SectionSkeleton /> })
const FeaturesBentoSection = dynamic(() => import("@/components/ui/features-bento-section").then(m => ({ default: m.FeaturesBentoSection })), { ssr: true, loading: () => <SectionSkeleton /> })

// Reveal via CSS; framer variants removidos

export const Demo = memo(() => {
    return (
        <>
            <HeroSection />

            <div className="reveal">
                <KpiSection />
            </div>

            <PainPointsSection />

            <FeaturesBentoSection />

            <div className="reveal">
                <RobotDemoSection />
            </div>

            <div className="reveal">
                <Footer />
            </div>
        </>
    )
});

Demo.displayName = 'Demo';