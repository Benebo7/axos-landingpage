'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useLenis } from 'lenis/react'

interface HeaderSectionProps {
  className?: string
}

const navItems = [
  { label: 'Product', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Templates', href: '#' },
  { label: 'Gallery', href: '#' },
  { label: 'Solutions', href: '#' },
  { label: 'Resources', href: '#' },
]

export function HeaderSection({ className }: HeaderSectionProps) {
  const lenis: any = useLenis()
  const lightRef = React.useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = React.useState(false)

  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!lightRef.current) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    
    // Atualiza diretamente no DOM, sem state
    lightRef.current.style.left = `${x}px`
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(href, prefersReduced ? { duration: 0 } : { duration: 1.1, easing: (t: number) => 1 - Math.pow(1 - t, 3) })
      } else {
        const el = document.querySelector(href)
        if (el) {
          ;(el as HTMLElement).scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' })
        }
      }
    }
  }

  return (
    <>
      {/* Extended hover area below header */}
      <div
        className="fixed top-0 left-0 right-0 h-[120px] z-40 pointer-events-auto"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 backdrop-blur-[25px] backdrop-filter bg-[rgba(0,0,0,0.56)]',
          className
        )}
      >
      <div className="h-[80px] flex items-center justify-between px-6 relative z-10">
        {/* Left Navigation - Hidden on mobile, visible on desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-white/40 hover:text-white/70 transition-colors leading-[22.4px] tracking-[-0.32px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="relative w-12 h-12 rounded-[4px] overflow-visible">
            {/* Background Blur Effect */}
            <div className="absolute left-0 top-0 w-[110px] h-[110px] bg-[rgba(75,44,203,0.35)] blur-[40px] filter -translate-x-[31px] -translate-y-[31px] pointer-events-none" />
            <div className="relative w-12 h-12 rounded-[4px] overflow-hidden">
              <Image
                src="/images/image.webp"
                alt="Axos"
                width={48}
                height={48}
                className="w-full h-full object-cover relative z-10"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Side - Buttons - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/dashboard"
            className="px-6 py-2 rounded-lg text-sm font-medium text-white hover:text-white/70 transition-colors leading-[22.4px] tracking-[-0.32px]"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="px-6 py-3 bg-[#f3f3f3] rounded-lg text-sm font-medium text-[#050505] hover:bg-[#e8e8e8] transition-colors leading-[22.4px] tracking-[-0.32px]"
          >
            Try for free
          </Link>
        </div>
      </div>

      {/* Horizontal Divider with mouse-following light effect */}
      <div className="h-px w-full relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#2f2f2f]" />
        {/* Spotlight effect that follows mouse on the line */}
        <div
          ref={lightRef}
          className="absolute h-full pointer-events-none -translate-x-1/2"
          style={{
            opacity: isHovering ? 1 : 0,
            width: '300px',
            transition: 'opacity 0.2s ease-out',
          }}
        >
          <div 
            className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent" 
            style={{
              boxShadow: '0 0 40px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.8)',
            }}
          />
        </div>
      </div>
    </header>
    </>
  )
}
