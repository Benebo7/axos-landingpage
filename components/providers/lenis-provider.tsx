'use client'
import { ReactLenis } from 'lenis/react'
import { ReactNode, useRef, memo, useState, useEffect } from 'react'

interface LenisProviderProps {
  children: ReactNode;
}

const LenisProvider = memo(({ children }: LenisProviderProps) => {
  const lenisRef = useRef(null)
  const [shouldUseLenis, setShouldUseLenis] = useState(true)

  useEffect(() => {
    // Completely disable Lenis on mobile/touch devices for better performance
    const isTouch = 'ontouchstart' in window || window.matchMedia('(pointer: coarse)').matches
    const isSmall = window.innerWidth < 768

    // Disable Lenis on mobile devices completely
    if (isTouch || isSmall) {
      setShouldUseLenis(false)
    }
  }, [])

  // If we shouldn't use Lenis, just return children without wrapper
  if (!shouldUseLenis) {
    return <>{children}</>
  }

  const options = {
    lerp: 0.1,
    duration: 0.8,
    smoothWheel: true,
    syncTouch: false, // Don't sync with touch for better perf
    wheelMultiplier: 1.0,
    touchMultiplier: 1.0,
    infinite: false,
  }

  return (
    <ReactLenis
      ref={lenisRef}
      options={options}
    >
      {children}
    </ReactLenis>
  )
});

LenisProvider.displayName = 'LenisProvider';

export default LenisProvider; 