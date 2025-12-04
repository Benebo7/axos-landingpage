'use client';

import { Suspense, lazy, memo, useState, useEffect, useRef } from 'react';

// Lazy load Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

// Skeleton component for better loading experience
const SplineSkeleton = memo(({ className }: { className?: string }) => (
  <div className={`w-full h-full flex items-center justify-center bg-gray-900 text-white relative ${className}`}>
    {/* Background animation */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
    
    {/* Loading spinner */}
    <div className="relative z-10 flex flex-col items-center space-y-4">
      <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
      </svg>
      <p className="text-sm text-gray-300">Loading 3D experience...</p>
    </div>
  </div>
));

SplineSkeleton.displayName = 'SplineSkeleton';

export const InteractiveRobotSpline = memo(({ scene, className }: InteractiveRobotSplineProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use Intersection Observer to load Spline only when visible
  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoad) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before element enters viewport
        threshold: 0.1
      }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, [shouldLoad]);

  if (!shouldLoad) {
    return <div ref={containerRef}><SplineSkeleton className={className} /></div>;
  }

  return (
    <div ref={containerRef}>
      <Suspense fallback={<SplineSkeleton className={className} />}>
        <Spline
          scene={scene}
          className={className}
          // Performance optimizations for Spline
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            contain: 'layout style paint'
          }}
        />
      </Suspense>
    </div>
  );
});

InteractiveRobotSpline.displayName = 'InteractiveRobotSpline'; 