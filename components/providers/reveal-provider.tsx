'use client'
import { useEffect } from 'react'

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Habilita transições somente após hidratação para evitar "piscada"
    requestAnimationFrame(() => {
      document.documentElement.classList.add('reveal-ready')
    })

    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('reveal-in-view'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            // Pequeno escalonamento sem depender de runtime pesado
            target.style.transitionDelay = `${(index % 8) * 60}ms`
            target.classList.add('reveal-in-view')
            obs.unobserve(target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return children as any
}


