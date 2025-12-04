'use client'
"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ShinyButton } from '@/components/ui/shiny-button'
import { HeaderSection } from '@/components/ui/header-section'
// import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { useLenis } from 'lenis/react'


// framer variants removidos; usamos CSS .reveal

export function HeroSection() {
    const lenis: any = useLenis()

    const handleJoinClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const target = '#join'
        const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
        // Prefer Lenis smooth scroll when available
        if (lenis && typeof lenis.scrollTo === 'function') {
            lenis.scrollTo(target, prefersReduced 
                ? { duration: 0 }
                : {
                    duration: 1.1,
                    easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
                }
            )
        } else {
            // Fallback: native smooth scroll
            const el = document.querySelector(target)
            if (el) {
                ;(el as HTMLElement).scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' })
            }
        }
        // Keep URL hash in sync without jumping
        if (typeof history !== 'undefined' && history.replaceState) {
            history.replaceState(null, '', target)
        }
    }
    return (
        <>
            <HeaderSection className="sticky top-0 z-50" />
            {/* Header removido: logo será exibida dentro do hero */}
            <main className="overflow-visible relative">


                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.18)_0,hsla(0,0%,55%,.06)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.14)_0,hsla(0,0%,45%,.05)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.11)_0,hsla(0,0%,45%,.04)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-6 sm:pt-8 md:pt-12 lg:pt-16">
                        <div className="absolute inset-0 -z-20" />
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-4 sm:px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <div className="reveal">
                                    <h1
                                        className="mt-4 sm:mt-6 md:mt-8 max-w-6xl mx-auto text-balance text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl lg:mt-16 xl:text-[5.25rem] leading-tight px-2"
                                        style={{
                                            fontFamily: "'GT Alpina', serif",
                                            fontWeight: 300
                                        }}>
                                        Maximize your crypto revenue with <span className="relative inline-block">
                                            <span className="relative z-10">advanced AI</span>
                                            <span
                                                className="absolute inset-0 transform -skew-y-1 rounded-sm"
                                                style={{ background: 'linear-gradient(to right, hsl(var(--axos-purple) / 0.3), hsl(var(--axos-purple-2) / 0.3))' }}
                                            />
                                        </span>
                                    </h1>
                                    <p
                                        className="mx-auto mt-3 sm:mt-4 md:mt-8 max-w-4xl text-balance text-sm sm:text-base md:text-lg lg:text-xl px-4 md:px-0 leading-relaxed font-akkurat">
                                        Receive personalized smart investment recommendations tailored to your profile. Our AI monitors the market 24 hours a day so you never miss an opportunity.
                                    </p>
                                </div>

                                <div className="mt-6 sm:mt-8 md:mt-12 flex flex-col items-center justify-center gap-2 md:flex-row reveal px-4">
                                    <div
                                        key={1}
                                        className="w-auto max-w-xs">
                                        <ShinyButton
                                            onClick={handleJoinClick}
                                            className="h-[44px] sm:h-[46px] md:h-[48px] text-base sm:text-lg md:text-lg px-8 sm:px-10 md:px-12">
                                            Join the waitlist
                                        </ShinyButton>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="reveal">
                            <div className="relative mt-6 sm:mt-8 md:mt-12 lg:mt-20 overflow-hidden px-2 sm:px-4 md:px-6" style={{ marginBottom: "-20px" }}>
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-t from-black/60 via-black/30 to-transparent absolute inset-0 z-10"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-lg md:rounded-2xl border p-1.5 sm:p-2 md:p-4 shadow-2xl shadow-zinc-950/25 ring-1" style={{ transform: 'translateY(8px)' }}>
                        <div className="relative bg-black rounded-lg md:rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                                        <Image
                                            src="/images/image copy 4.webp"
                                            alt="Dashboard preview"
                                            fill
                                            priority
                                            className="object-cover object-top"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                            placeholder="blur"
                                            blurDataURL="data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoQAAoAPm0wlEckIyIhIAgAsBIJYwAAuAQG3gAA/v9UAAA="
                                        />
                                        {/* Sombra gradiente de baixo para cima */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

const menuItems = [
    { name: 'Features', href: '#link' },
    { name: 'Solution', href: '#link' },
    { name: 'Pricing', href: '#link' },
    { name: 'About', href: '#link' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className="w-full transition-all duration-500">
            <nav className="w-full px-2">
                <div className={cn(
                    'mx-auto mt-3 max-w-6xl px-6 transition-all duration-500 ease-out',
                    ''
                )}>
                    <div className="relative flex items-center justify-center py-3">
                        <div
                            aria-label="home"
                            className="flex items-center space-x-2">
                            <Logo />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    const [imageError, setImageError] = React.useState(false)

    return (
        <div className={cn("flex items-center gap-2 md:gap-3 logo-container", className)}>
            <div className="relative h-14 sm:h-16 md:h-20 lg:h-24 w-14 sm:w-16 md:w-20 lg:w-24 logo-image-wrapper">
                {!imageError ? (
                    <Image
                        src="/images/image.webp"
                        alt="Axos Logo"
                        width={96}
                        height={96}
                        priority
                        onError={() => setImageError(true)}
                        className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto"
                        placeholder="blur"
                        blurDataURL="data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoQAAoAPm0wlEckIyIhIAgAsBIJYwAAuAQG3gAA/v9UAAA="
                    />
                ) : (
                    <div className="h-14 sm:h-16 md:h-20 lg:h-24 w-14 sm:w-16 md:w-20 lg:w-24 bg-[hsl(var(--axos-purple))] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-base sm:text-lg md:text-xl">A</span>
                    </div>
                )}
            </div>
        </div>
    )
}